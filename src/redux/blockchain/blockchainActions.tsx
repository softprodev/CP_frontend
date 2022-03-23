// constants
import Web3EthContract from "web3-eth-contract";
import Web3 from "web3";
// import { AbiItem } from 'web3-utils'
// log
import fetchData from "../data/dataActions";


const connectRequest = () => {
    return {
        type: "CONNECTION_REQUEST",
    };
};

const connectSuccess = (payload) => {
    return {
        type: "CONNECTION_SUCCESS",
        payload,
    };
};

const connectFailed = (payload) => {
    return {
        type: "CONNECTION_FAILED",
        payload,
    };
};

const updateAccountRequest = (payload) => {
    return {
        type: "UPDATE_ACCOUNT",
        payload,
    };
};

export const connect = () => {
    return async (dispatch) => {
        dispatch(connectRequest());
        const abiResponse = await fetch("/config/abi.json", {
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
            },
        });
        const abi = await abiResponse.json();
        const configResponse = await fetch("/config/config.json", {
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
            },
        });
        const CONFIG = await configResponse.json();

        const { ethereum } = window;
        const metamaskIsInstalled = ethereum && ethereum.isMetaMask;

        if (metamaskIsInstalled) {
            const web3 = new Web3(ethereum);

            web3.setProvider(ethereum);

            try {
                const accounts = await ethereum.request({
                    method: "eth_requestAccounts",
                });

                console.log("connect start accounts", accounts);

                const networkId = await ethereum.request({
                    method: "net_version",
                });

                if (networkId.toString() === CONFIG.NETWORK.ID.toString()) {
                    console.log("Network ID matched");

                    const SmartContractObj = new web3.eth.Contract(
                        abi,
                        CONFIG.CONTRACT_ADDRESS
                    );

                    dispatch(
                        connectSuccess({
                            account: accounts[0],
                            smartContract: SmartContractObj,
                            web3,
                        })
                    );

                    // Add listeners start
                    ethereum.on("accountsChanged", (accountsChanged) => {
                        dispatch(updateAccount(accountsChanged[0]));
                    });
                    ethereum.on("chainChanged", () => {
                        window.location.reload();
                    });
                    // Add listeners end
                } else {
                    dispatch(connectFailed(`Change network to ${CONFIG.NETWORK.NAME}.`));
                }
            } catch (err) {
                dispatch(connectFailed("Something went wrong."));
            }
        } else {
            dispatch(connectFailed("Install Metamask."));
        }
    };
};

export const updateAccount = (account) => {
    return async (dispatch) => {
        dispatch(updateAccountRequest({ account }));
        dispatch(fetchData());
    };
};

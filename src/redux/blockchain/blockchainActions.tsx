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
        console.log("connect start");

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

        console.log("connect start", configResponse);

        const CONFIG = await configResponse.json();
        const { ethereum } = window;
        const metamaskIsInstalled = ethereum && ethereum.isMetaMask;

        console.log("connect start metamask", metamaskIsInstalled);

        if (metamaskIsInstalled) {
            const web3 = new Web3(ethereum);

            console.log("connect start web3", web3);

            web3.setProvider(ethereum);

            try {
                const accounts = await ethereum.request({
                    method: "eth_requestAccounts",
                });

                console.log("connect start accounts", accounts);

                const networkId = await ethereum.request({
                    method: "net_version",
                });


                console.log("Network ID", networkId);
                console.log("Network ID config", CONFIG.NETWORK.ID);

                if (networkId.toString() === CONFIG.NETWORK.ID.toString()) {
                    console.log("Network ID matched");

                    const SmartContractObj = new web3.eth.Contract(
                        abi,
                        CONFIG.CONTRACT_ADDRESS
                    );

                    console.log("connect start SmartContractObj", SmartContractObj);

                    dispatch(
                        connectSuccess({
                            account: accounts[0],
                            smartContract: SmartContractObj,
                            web3,
                        })
                    );

                    console.log("connect start account, ", accounts[0]);


                    // Add listeners start
                    ethereum.on("accountsChanged", (accountsChanged) => {
                        console.log("connect start updatedaccounts, ", accountsChanged);
                        console.log("connect start updatedaccounts, ", accountsChanged[0]);

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
        console.log("Update account");
        dispatch(updateAccountRequest({ account }));
        dispatch(fetchData());
    };
};

// log
import store from "../store";

const fetchDataRequest = () => {
    return {
        type: "CHECK_DATA_REQUEST",
    };
};

const fetchDataSuccess = (payload) => {
    return {
        type: "CHECK_DATA_SUCCESS",
        payload,
    };
};

const fetchDataFailed = (payload) => {
    return {
        type: "CHECK_DATA_FAILED",
        payload,
    };
};

function fetchData() {
    console.log("fetchData1");

    return async (dispatch) => {
        dispatch(fetchDataRequest());
        try {
            console.log("fetchData2", store
                .getState()
                .blockchain.smartContract.methods);

            const totalSupply = await store
                .getState()
                .blockchain.smartContract.methods.totalSupply()
                .call();

            // const cost = await store
            //     .getState()
            //     .blockchain.smartContract.methods.cost()
            //     .call();
            // console.log("fetchData3", cost);

            dispatch(
                fetchDataSuccess({
                    totalSupply,
                    // cost,
                })
            );
        } catch (err) {
            console.log(err);
            dispatch(fetchDataFailed("Could not load data from contract."));
        }
    };
}



export default fetchData;
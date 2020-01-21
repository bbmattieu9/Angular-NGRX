export function reducer(state, action) {
    switch (action.type) {

        case 'MASK_USER_NAME' :
            // console.log('existing state: ' + JSON.stringify(state));
            // console.log('payload: ' + action.payload);
            return {
            ...state,
            showUserName: action.payload
        };



        default:
            return state;
    }
}
const contactReducer = (state = [], action) => {
    switch(action.type) {
        case 'ADD_CONTACT':return state.concat([action.data]);
        default: return state;
    }
}

export default contactReducer;
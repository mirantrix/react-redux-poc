const initialState = {
    number:20
};

const reducer = (state=initialState, action) => {
    const newState = {...state};

    switch(action.type){
        case 'NUMBER_UP': 
            newState.number += action.value;
            break;
               
        case 'NUMBER_DOWN': 
            newState.number -= action.value;
            break;
    }
    return newState;
};

export default reducer;
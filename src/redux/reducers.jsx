import {
    RECEIVE_HOME,
    RECEIVE_KNOWLEDGE,
    RECEIVE_CATEGORY
} from './action-types';

const initState = {
    home : {},
    knowledge : {},
    category : []
};
export default function getData(state=initState,action) {
    let {home,knowledge,category} = state;
    switch (action.type){
        case RECEIVE_HOME :
            return {
                home : {...action.data},
                knowledge ,
                category
            }
        case RECEIVE_KNOWLEDGE :
            return {
                home ,
                knowledge : {...action.data},
                category
            }
        case RECEIVE_CATEGORY :
            return {
                home ,
                knowledge,
                category:[...action.data]
            }
        default :
            return state

    }
}

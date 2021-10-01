import { IItemsList } from './../components/tsInterfaces';

const ADD_ITEM = "ADD_ITEM" as const;
const DELETE_ITEM = "DELETE_ITEM" as const;

const initialState: stateType = {
    itemsList: []
}

type stateType = {
    itemsList: IItemsList[]
}

const appReducer = (state = initialState, action: ActionType): stateType => {
    switch (action.type) {
        case ADD_ITEM:
            return (
                {...state, 
                itemsList: state.itemsList.concat(action.taskItem)
                } 
            );
        case DELETE_ITEM:
            return (
                {...state, 
                itemsList: state.itemsList.filter(item => item.id !== action.taskId)
                }
            );

        default: return state;
    };
};

type ActionType =
    | ReturnType<typeof addItemAC>
    | ReturnType<typeof deleteItemAC>

//Action creators
export const addItemAC = (item: IItemsList) => ({ type: ADD_ITEM, taskItem: item });
export const deleteItemAC = (itemId: string) => ({ type: DELETE_ITEM, taskId: itemId });

export default appReducer;
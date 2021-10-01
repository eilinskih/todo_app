import { IItemsList } from './../components/tsInterfaces';

const ADD_ITEM = "ADD_ITEM" as const;
const DELETE_ITEM = "DELETE_ITEM" as const;

const initialState: Array<IItemsList> = []
type stateType = typeof initialState

const appReducer: (state: stateType, action: ActionType) => stateType = (state = initialState, action) => {
    switch (action.type) {
        case ADD_ITEM:
            return (
                state.concat(action.taskItem)
            );
        case DELETE_ITEM:
            return (
                state.filter(item => item.id !== action.taskId)
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
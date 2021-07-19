import {combineReducers} from "redux";
import {ADD, UPDATE, DELETE, SELECTED, SELECTED_ALL, DONE, DELETE_SELECTED, DONE_SELECTED } from "./bollerplate";

// function initialState() {
//     return {todos: []}
// }
const initState = {
    bindsList: [
        {
            id: 1,
            date: '01.08.2019',
            product: 'Курс по верстке',
            name: 'Юрий',
            email: 'info@rightblog.ru',
            phone: '+7 (909) 77-55-777',
            status: 'Новые'
        },
        {
            id: 2,
            date: '01.08.2019',
            product: 'Курс по верстке',
            name: 'Юрий',
            email: 'info@rightblog.ru',
            phone: '+7 (909) 77-55-777',
            status: 'В работе'
        },
    ] //{id: 1, todo: "dasdas", selected: false, done: false, filtersVisible: true}
};

export const rootReducer = combineReducers({
    binds: bindsReducer,
})

function bindsReducer (state = initState, action ) {
    switch (action.type) {
        // case ADD:
        //     return ({
        //         ...state,
        //         bindsList: [...state.bindsList, action.payload]
        //     })
        // case UPDATE:
        //     return ({
        //         ...state,
        //         bindsList: state.bindsList.map(todo=> {
        //             if (todo.id === action.payload.id) {
        //                 return {
        //                     ...todo,
        //                     text: action.payload.text
        //                 }
        //             } else {
        //                 return todo
        //             }
        //         })
        //     })
        // case SELECTED:
        //     return {
        //         ...state,
        //         bindsList: state.bindsList.map(todo => todo.id !== action.payload.id ? todo : {
        //             ...todo,
        //             selected: !todo.selected
        //         })
        //     }
        // case SELECTED_ALL: {
        //     if (!action.payload) {
        //         return {
        //             ...state,
        //             bindsList: state.bindsList.map(todo => todo.selected ? todo : {...todo, selected: true})
        //         }
        //     } else {
        //         return {
        //             ...state,
        //             bindsList: state.bindsList.map(todo => !todo.selected ? todo : {...todo, selected: false})
        //         }
        //     }
        // }

        // case DELETE:
        //     return {
        //         ...state,
        //         bindsList: state.bindsList.filter(todo => todo.id !== action.payload.id)
        //     }
        // case DONE:
        //     return {
        //         ...state,
        //         bindsList: state.bindsList.map(todo => todo.id === action.payload.id ? {
        //             ...todo,
        //             done: true
        //         } : todo)
        //     }
        // case DELETE_SELECTED:
        //     return {
        //         ...state,
        //         bindsList: state.bindsList.filter(todo => !todo.selected)
        //     }
        // case DONE_SELECTED:
        //     return {
        //         ...state,
        //         bindsList: state.bindsList.map(todo => !todo.selected ? todo : {...todo, done: true})
        //     }
        default:
            return state
    }
}
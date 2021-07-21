import {combineReducers} from "redux";
import {ADD, UPDATE, DELETE, SELECTED, SELECTED_ALL, DONE, DELETE_SELECTED, DONE_SELECTED, SET_FILTER } from "./bollerplate";

const initState = {
    bindsList: [
        {
            id: 1,
            date: new Date(),
            product: 'Курс по верстке',
            name: 'Юрий',
            email: 'info@rightblog.ru',
            phone: '+7 (909) 77-55-777',
            status: 'Новые'
        },
        {
            id: 2,
            date:  new Date(),
            product: 'Курс по верстке',
            name: 'Юрий',
            email: 'info@rightblog.ru',
            phone: '+7 (909) 77-55-777',
            status: 'В работе'
        },
        {
            id: 3,
            date:  new Date(),
            product: 'Курс по VUE JS',
            name: 'Юрий',
            email: 'info@rightblog.ru',
            phone: '+7 (909) 77-55-777',
            status: 'В работе'
        },
    ]
}

const initFlag = {flagFilter: 'Все'}

export const rootReducer = combineReducers({
    binds: bindsReducer,
    filter: bindsFlagReducer
})

function bindsFlagReducer (state = initFlag, action) {
    switch (action.type) {
        case SET_FILTER:
            return ({...state, flagFilter: action.payload})
        default: 
            return state
    }
}

function bindsReducer (state = initState, action ) {
    switch (action.type) {
        case ADD:{
            return ({
                ...state,
                bindsList: [...state.bindsList, action.payload]
            })
        }    
        case UPDATE:
            return ({
                ...state,
                bindsList: state.bindsList.map(todo=> {
                    if (todo.id === action.payload.id) {
                        return {
                            ...todo,
                            text: action.payload.text
                        }
                    } else {
                        return todo
                    }
                })
            })
        case SELECTED:
            return {
                ...state,
                bindsList: state.bindsList.map(todo => todo.id !== action.payload.id ? todo : {
                    ...todo,
                    selected: !todo.selected
                })
            }
        case SELECTED_ALL: {
            if (!action.payload) {
                return {
                    ...state,
                    bindsList: state.bindsList.map(todo => todo.selected ? todo : {...todo, selected: true})
                }
            } else {
                return {
                    ...state,
                    bindsList: state.bindsList.map(todo => !todo.selected ? todo : {...todo, selected: false})
                }
            }
        }

        case DELETE:
            return {
                ...state,
                bindsList: state.bindsList.filter(todo => todo.id !== action.payload.id)
            }
        case DONE:
            return {
                ...state,
                bindsList: state.bindsList.map(todo => todo.id === action.payload.id ? {
                    ...todo,
                    done: true
                } : todo)
            }
        case DELETE_SELECTED:
            return {
                ...state,
                bindsList: state.bindsList.filter(todo => !todo.selected)
            }
        case DONE_SELECTED:
            return {
                ...state,
                bindsList: state.bindsList.map(todo => !todo.selected ? todo : {...todo, done: true})
            }
        default:
            return state
    }
}
import {combineReducers} from "redux";
import {ADD, UPDATE, DELETE, SELECTED, SELECTED_ALL, DONE, DELETE_SELECTED, DONE_SELECTED, SET_FILTER, SET_FILTER_PRODUCT } from "./bollerplate";

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

type BindsType = typeof initState

const initFlag = {flagFilter: 'Все', product: []}

export const rootReducer = combineReducers({
    binds: bindsReducer,
    filter: bindsFlagReducer
})

function bindsFlagReducer (state = initFlag, action: any) {
    switch (action.type) {
        case SET_FILTER:
            return ({...state, flagFilter: action.payload})
        case SET_FILTER_PRODUCT:
            return ({...state, product: action.payload})
        default: 
            return state
    }
}

function bindsReducer (state:BindsType = initState, action: any ) {
    switch (action.type) {
        case ADD:{
            return ({
                ...state,
                bindsList: [...state.bindsList, action.payload]
            })
        }    
        
        default:
            return state
    }
}
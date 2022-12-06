import {createSlice} from "@reduxjs/toolkit"

const uiSlice = createSlice({
    name:"ui",
    initialState: {cartisVisible:false, notifications:null},
    reducers:{
        toggle(state){
            state.cartisVisible=!state.cartisVisible;
        },
        setNotifications(state, action){
            state.notifications = {
                status:action.payload.status,
                title:action.payload.title,
                message:action.payload.message
            }
        }
    }
})

export const uiActions = uiSlice.actions;

export default uiSlice;
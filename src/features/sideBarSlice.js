import { createSlice } from "@reduxjs/toolkit";
export const sideBarSlice = createSlice({
    name:"sideBar",
    initialState:{
        isSideBarNeeded:false
    },
    reducers:{
        sideBarToggel:(state,action)=>{
            state.isSideBarNeeded = action.payload

        }
    }
})


export const {sideBarToggel} = sideBarSlice.actions
export default sideBarSlice.reducer


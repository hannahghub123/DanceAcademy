import {createSlice} from "@reduxjs/toolkit"

const INITITALSTATE={
    username:"",
    name:"",
    email:"",
    phone:"",
    // score:"",
    password:"",
    repassword:""
}


const stdSignupSlice = createSlice(
    {
        name:"stdSignup",
        initialState:{
            value:INITITALSTATE
        },
        reducers:{
            changeUsername:(state,action)=>{
                state.value.username=action.payload
            },
            changeName:(state,action)=>{
                state.value.name=action.payload
            },
            changeEmail:(state,action)=>{
                state.value.email=action.payload
            },
            changePhone:(state,action)=>{
                state.value.phone=action.payload
            },
            // changeScore:(state,action)=>{
            //     state.value.score=action.payload
            // },
            changePassword:(state,action)=>{
                state.value.password=action.payload
            },
            changeRepassword:(state,action)=>{
                state.value.repassword=action.payload
            },

        }

    }

)

export const {changeUsername,changeName,changeScore,changeEmail,changePhone,changePassword,changeRepassword} = stdSignupSlice.actions

export default stdSignupSlice.reducer
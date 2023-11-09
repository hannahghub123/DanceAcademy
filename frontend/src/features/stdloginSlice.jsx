import {createSlice} from "@reduxjs/toolkit"

const INITITALSTATE={

    username:"",
    password:"",

}


const stdLoginSlice = createSlice(
    {
        name:"stdLogin",
        initialState:{
            value:INITITALSTATE
        },
        reducers:{
            
            changeUsername:(state,action)=>{
                if (!/^[a-zA-Z][a-zA-Z ]*$/.test(action.payload)){
                    state.value.error.username="Name can only have alphabets!"
                    state.value.error.submiterror=null
                    state.value.errorcheck=true
                }
                else{
                    state.value.error.username=null
                    state.value.name=action.payload
                    state.value.errorcheck=false
                }
            },
 
            changePassword:(state,action)=>{
                state.value.password=action.payload
            },


        }

    }

)

export const {changeUsername,changePassword} = stdLoginSlice.actions

export default stdLoginSlice.reducer
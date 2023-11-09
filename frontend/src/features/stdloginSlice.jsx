import {createSlice} from "@reduxjs/toolkit"

const INITITALSTATE={

    username:"",
    password:"",
    error:{
        username:null,
        password:null,
        submiterror:null,   
    },
    errorcheck:false,

}


const stdLoginSlice = createSlice(
    {
        name:"stdLogin",
        initialState:{
            value:INITITALSTATE
        },
        reducers:{
            
            changeUsername:(state,action)=>{
                // if (!/^[a-zA-Z0-9]+$/.test(action.payload)){
                //     state.value.error.username="Enter valid username"
                //     state.value.error.submiterror=null
                //     state.value.errorcheck=true
                // }
                // else{
                //     state.value.error.username=null
                //     state.value.name=action.payload
                //     state.value.errorcheck=false
                // }
                state.value.username=action.payload
            },
 
            changePassword:(state,action)=>{
                if (!/^[a-zA-Z0-9]+$/
                .test(action.payload)) {
                    state.value.error.password = "Enter valid password";
                    state.value.error.submiterror = null;
                    state.value.errorcheck = true;
                } else {
                    state.value.password = action.payload;
                    state.value.error.password = null;
                    state.value.errorcheck = false;
                }
            },
            submitForm:(state,action)=>{
                if (state.value.username===""|| state.value.password===""){
                    state.value.error.submiterror="Please Fill All The Fields!"
                    
                }
                else{
                    state.value.error.submiterror=null
                    

                }
                
                
            },


        }

    }

)

export const {changeUsername,changePassword} = stdLoginSlice.actions

export default stdLoginSlice.reducer
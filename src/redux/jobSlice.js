import { createSlice } from "@reduxjs/toolkit"


const initialState ={
    jobs:[],
    initialed:false,
    error:false,
}

const jobSlice=createSlice({
    name:"job",
    initialState,
    reducers:{
        setJobs:(state,action)=>{
            state.jobs=action.payload;
            state.initialed=true;
            state.error=false;
        },
        setError:(state)=>{
            state.error=true;
            state.initialed=true;
        },
        addJob:(state,action)=>{
            state.jobs.push(action.payload);
        }
    }
});


export const {setJobs,setError, addJob} =jobSlice.actions;

export default jobSlice.reducer;
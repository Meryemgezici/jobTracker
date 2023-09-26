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
        }
    }
});


export const {setJobs,setError} =jobSlice.actions;

export default jobSlice.reducer;
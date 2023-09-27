import { createSlice } from "@reduxjs/toolkit"


const initialState ={
    jobs:[],
    mainJobs:[],
    initialed:false,
    error:false,
}

const jobSlice=createSlice({
    name:"job",
    initialState,
    reducers:{
        setJobs:(state,action)=>{
            state.jobs=action.payload;
            state.mainJobs=action.payload;
            state.initialed=true;
            state.error=false;
        },
        setError:(state)=>{
            state.error=true;
            state.initialed=true;
        },
        addJob:(state,action)=>{
            state.jobs.push(action.payload);
        },
        filterBySearch:(state,action)=>{
            const filter= state.mainJobs.filter((job)=>job.company.toLowerCase().includes(action.payload.toLowerCase())
            );

            state.jobs=filter;
          
        },
        filterByStatus:(state,action)=>{
            const filter= state.mainJobs.filter((job)=>job.status===action.payload );

            state.jobs=filter;
          
        },
        filterByType:(state,action)=>{
            const filter= state.mainJobs.filter((job)=>job.type===action.payload );

            state.jobs=filter;
          
        }
    }
});


export const {setJobs,setError, addJob,filterBySearch,filterByStatus,filterByType} =jobSlice.actions;

export default jobSlice.reducer;
import { createSlice } from "@reduxjs/toolkit"


const initialState = {
    jobs: [],
    mainJobs: [],
    initialed: false,
    error: false,
}

const jobSlice = createSlice({
    name: "job",
    initialState,
    reducers: {
        setJobs: (state, action) => {
            state.jobs = action.payload;
            state.mainJobs = action.payload;
            state.initialed = true;
            state.error = false;
        },
        setError: (state) => {
            state.error = true;
            state.initialed = true;
        },
        addJob: (state, action) => {
            state.jobs.push(action.payload);
        },
        filterBySearch: (state, action) => {
            const filter = state.mainJobs.filter((job) => job.company.toLowerCase().includes(action.payload.toLowerCase())
            );

            state.jobs = filter;

        },
        filterByStatus: (state, action) => {
            const filter = state.mainJobs.filter((job) => job.status === action.payload);

            state.jobs = filter;

        },
        filterByType: (state, action) => {
            const filter = state.mainJobs.filter((job) => job.type === action.payload);

            state.jobs = filter;

        },

        sortJobs: (state, action) => {
            switch (action.payload) {
                case "a-z":
                    state.jobs.sort((a, b) => a.company.localeCompare(b.company))
                    break;
                case "z-a":
                    state.jobs.sort((a, b) => b.company.localeCompare(a.company))
                    break;
                case "En Yeni":
                    state.jobs.sort((a, b) => new Date(b.date) - new Date(a.date))
                    break;
                case "En Eski":
                    state.jobs.sort((a, b) => new Date(a.date) - new Date(b.date))
                    break;
                default:
                    return state;
            }
        },

        clearState: (state, action) => {
            state.jobs = state.mainJobs;
        }
    }
});


export const { setJobs, setError, addJob, filterBySearch, filterByStatus, filterByType, sortJobs, clearState } = jobSlice.actions;

export default jobSlice.reducer;
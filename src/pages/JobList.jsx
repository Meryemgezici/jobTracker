import { useEffect } from "react"
import Card from "../components/Card"
import axios from "axios"
import Loading from "../components/Loading";
import { useDispatch, useSelector } from "react-redux";
import { setError, setJobs } from "../redux/jobSlice";
import Filter from "../components/Filter";

const JobList = () => {
    const dispatch=useDispatch();
    const state=useSelector((store)=>store)
 
    useEffect(()=>{
        axios.get(`http://localhost:3040/jobs`)
        .then((response)=>dispatch(setJobs(response.data)) )
        .catch((err)=>dispatch(setError(err)))
    },[]);

  

  return (
    <div >
      <Filter/>

      <h1 className="job-count">Bulun ({state.mainJobs.length}) iş arasından ({state.jobs.length}) tanesini görüntülüyorsunuz.</h1>

      <section className="list-section">
        {!state.initialed ? <Loading/>:(
            state.error ? <p>üzgünüz bir hata oluştu.</p>:state.jobs.map((job)=><Card key={job.id} job={job}/>
            
            )
        )
        }
        

      </section>
    </div>
  )
}

export default JobList

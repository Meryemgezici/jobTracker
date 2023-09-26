import { RiShoppingBagFill, RiRoadMapLine } from "react-icons/ri"
import { SlCalender } from "react-icons/sl"
const Card = ({job}) => {

    
    const colorChance=()=>{
        switch(job.status) {
            case "Reddedildi":
                return "redColor";
            case "Devam Ediyor":
                return "greenColor";
            case "Mülakat":
                return "blueColor";
            default:
                return "yellowColor"
        }
    }
    
  

    return (
        <div className="card">
            <div className="head">
                <div className="letter">{job.company[0]}</div>
                <div className="info">
                    <p>{job.position}</p>
                    <p>{job.company}</p>
                </div>
            </div>
            <div className="body">
                <div className="field">
                    <RiRoadMapLine className="icon" />
                    <p>{job.location}</p>

                </div>
                <div className="field">
                    <SlCalender className="icon"/>
                    <p>{job.date}</p>
                </div>
                <div className="field">
                    <RiShoppingBagFill className="icon"/>
                    <p>{job.type}</p>
                </div>
                <div className={`status ${colorChance()}`}>
                    <span>{job.status}</span>
                </div>
            </div>
        </div>
    )
}

export default Card

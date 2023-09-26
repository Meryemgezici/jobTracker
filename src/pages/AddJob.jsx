import { v4 } from "uuid";
import { statusOpt, typeOpt } from "../utils/contants"
import axios from "axios";
import { useDispatch } from "react-redux";
import { addJob } from "../redux/jobSlice";
import { useNavigate } from 'react-router-dom';
import { toast } from "react-toastify";
const AddJob = () => {

  const dispatch=useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const form= new FormData(e.target);

    const newObj=Object.fromEntries(form);

    if(!newObj.type || !newObj.status){
      toast.info("Lütfen bütün alanları doldurunuz.");
      return;
    }

    newObj.id=v4();
    newObj.date=new Date().toLocaleDateString;

    axios.post(`http://localhost:3040/jobs`,newObj)
    .then((res)=>{
      dispatch(addJob(res.data))

      navigate("/");

      toast.success("İş başarı ile eklendi.");
    })
    .catch(()=>{
      toast.error("Beklenmedik bir hata oluştu.");
    })
    
  }
  return (
    <div className="add-card">
      <h1>Yeni İş Ekle</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Pozisyon</label>
          <input name="position" type="text" />
        </div>
        <div>
          <label>Şirket</label>
          <input name="company" type="text" />
        </div>
        <div>
          <label>Lokasyon</label>
          <input  name="location" type="text" />
        </div>

        <div>
          <label>Durum</label>
          <select name="status" >
            <option selected disabled>Seçiniz</option>
            {statusOpt.map((statu,i)=><option key={i}>{statu}</option>)}
          </select>
        </div>
        <div>
          <label>Tür</label>
          <select name="type">
            <option selected disabled>Seçiniz</option>
            {typeOpt.map((typeOp,i)=><option key={i}>{typeOp}</option>)}
          </select>
        </div>

        <div>
          <button>Ekle</button>
        </div>
      </form>
    </div>
  )
}

export default AddJob

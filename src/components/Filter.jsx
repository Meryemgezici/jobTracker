import { useDispatch } from "react-redux"
import { clearState, filterBySearch, filterByStatus, filterByType, sortJobs } from "../redux/jobSlice"
import { sortOpt, statusOpt, typeOpt } from "../utils/contants"
import { useRef } from "react";

const Filter = () => {
  const dispatch=useDispatch();
  const searchRef=useRef();
  const statusRef=useRef();
  const typeRef=useRef();
  const sortRef=useRef();

  const handleReset=(e)=>{
    e.preventDefault();
     dispatch(clearState());
     searchRef.current.value="";
     statusRef.current.value="Seçiniz";
     typeRef.current.value="Seçiniz";
     sortRef.current.value="Seçiniz";
     console.log(searchRef);
  }
  return (
    <div className="filter-sec">
      <h1>Filtreleme Formu</h1>
      <form >
        <div>
          <label>Arama</label>
          <input ref={searchRef} onChange={(e)=>{dispatch(filterBySearch(e.target.value))}} placeholder="örn:amazon" type="text" />
        </div>
       
       

        <div>
          <label>Durum</label>
          <select ref={statusRef} onChange={(e)=>{dispatch(filterByStatus(e.target.value))}}>
            <option selected disabled>Seçiniz</option>
            {statusOpt.map((statu,i)=><option key={i} >{statu}</option>)}
          </select>
        </div>
        <div>
          <label>Tür</label>
          <select ref={typeRef} onChange={(e)=>{dispatch(filterByType(e.target.value))}}>
            <option selected disabled>Seçiniz</option>
            {typeOpt.map((typeOp,i)=><option key={i}>{typeOp}</option>)}
          </select>
        </div>

        <div>
          <label>Sırala</label>
          <select ref={sortRef} onChange={(e)=>{dispatch(sortJobs(e.target.value))}}>
            <option selected disabled>Seçiniz</option>
            {sortOpt.map((typeOp,i)=><option key={i}>{typeOp}</option>)}
          </select>
        </div>

        <div>
          <button onClick={handleReset}>Filtreleri Temizle</button>
        </div>
      </form>
    </div>
  )
}

export default Filter

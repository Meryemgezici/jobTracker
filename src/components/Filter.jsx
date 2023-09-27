import { useDispatch } from "react-redux"
import { filterBySearch, filterByStatus, filterByType } from "../redux/jobSlice"
import { sortOpt, statusOpt, typeOpt } from "../utils/contants"

const Filter = () => {
  const dispatch=useDispatch();
  return (
    <div className="filter-sec">
      <h1>Filtreleme Formu</h1>
      <form >
        <div>
          <label>Arama</label>
          <input onChange={(e)=>{dispatch(filterBySearch(e.target.value))}} placeholder="örn:amazon" type="text" />
        </div>
       
       

        <div>
          <label>Durum</label>
          <select name="status" onChange={(e)=>{dispatch(filterByStatus(e.target.value))}}>
            <option selected disabled>Seçiniz</option>
            {statusOpt.map((statu,i)=><option key={i} >{statu}</option>)}
          </select>
        </div>
        <div>
          <label>Tür</label>
          <select name="type" onChange={(e)=>{dispatch(filterByType(e.target.value))}}>
            <option selected disabled>Seçiniz</option>
            {typeOpt.map((typeOp,i)=><option key={i}>{typeOp}</option>)}
          </select>
        </div>

        <div>
          <label>Sırala</label>
          <select name="type">
            <option selected disabled>Seçiniz</option>
            {sortOpt.map((typeOp,i)=><option key={i}>{typeOp}</option>)}
          </select>
        </div>

        <div>
          <button>Filtreleri Temizle</button>
        </div>
      </form>
    </div>
  )
}

export default Filter

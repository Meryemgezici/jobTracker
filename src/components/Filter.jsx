import { statusOpt, typeOpt } from "../utils/contants"

const Filter = () => {
  return (
    <div className="filter-sec">
      <h1>Filtreleme Formu</h1>
      <form >
        <div>
          <label>Arama</label>
          <input placeholder="örn:amazon" type="text" />
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

export default Filter

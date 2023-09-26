import { statusOpt, typeOpt } from "../utils/contants"

const AddJob = () => {
  return (
    <div className="add-card">
      <h1>Yeni İş Ekle</h1>
      <form action="">
        <div>
          <label>Pozisyon</label>
          <input required name="position" type="text" />
        </div>
        <div>
          <label>Şirket</label>
          <input required name="company" type="text" />
        </div>
        <div>
          <label>Lokasyon</label>
          <input required name="location" type="text" />
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

import { NavLink } from "react-router-dom"

const Header = () => {

  return (
    <header>
     
        <h1>İş Takip</h1>
        <div>
            <NavLink to="/">İş Listesi</NavLink>
            <NavLink to="/addjob">İş Ekle</NavLink>
            
        </div>
     
    </header>
  )
}

export default Header

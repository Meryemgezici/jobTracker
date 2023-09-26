import { BrowserRouter, Route, Routes } from "react-router-dom"
import AddJob from "./pages/AddJob"
import JobList from "./pages/JobList"
import Header from "./components/Header"


function App() {
 

  return (
    <BrowserRouter>
    <Header/>
      <Routes>
        <Route path="/" element={<JobList/>}></Route>
        <Route path="addjob" element={<AddJob/>}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App

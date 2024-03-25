 
 
import { Outlet } from 'react-router-dom'
import './App.css'
import { Header } from './Components/Share/Header/Header'
import { Footer } from './Components/Share/Footer/Footer'
 

function App() {
 

  return (
    <>
      <Header></Header>
      <Outlet></Outlet>
      <Footer></Footer>
 
    </>
  )
}

export default App

import { BrowserRouter, Navigate, Outlet, Route, Routes } from 'react-router'
import './App.css'
import Login from './Components/Login'
import Register from './Components/Register'
import Home from './Components/Home'
import { getActiveUser } from './LocalStorage'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/login' element={<Login/>}/>
          <Route path='/register' element={<Register/>}/>
          <Route path="/" element={<PrivateRoute />}>
            <Route path='/' element={<Home/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

const PrivateRoute = () => {
  const activeUser = getActiveUser();

  if (activeUser == null)
    return <Navigate to={"/login"} />;

  return <Outlet />;

}

export default App

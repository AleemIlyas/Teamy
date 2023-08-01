import React , { Suspense } from 'react'
import { Route , Routes , Outlet } from 'react-router-dom'
import {  useSelector } from 'react-redux'
import './App.css'
import HomePage from './HomePage/HomePage'
const Layout = React.lazy(()=>import('./Project/Layout/Layout'))
const Tasks = React.lazy(()=>import('./Project/Components/Tasks/Tasks'))
const ShowDetail = React.lazy(()=>('./Project/Container/showDetail/showDetail'))
import Activity from './Project/Activity/Activity.jsx'
import DashBoard from './Project/Dashboard/Dashboard'
import Login from './Project/LogIn/login.jsx'
import SignUP from './Project/SignUp/SignUp'
import Spinner from './Project/Components/UI/Spinner/Spinner'


function App() {
    const isLoggedin = useSelector((state)=>state.user.isLoggedIn)
  return (
    <React.Fragment>
      <Suspense fallback={<Spinner />}>
    <Routes>
      <Route path='/' element={ <HomePage /> } />
      { !isLoggedin ?  
      <>
      <Route path='/login' element= { <Login /> } />
      <Route path='/signup' element= { <SignUP /> } />
      </>
          :
        <Route path='/dashboard/*' element={ <Layout /> }>
        <Route index path=''  element={ <DashBoard /> } />
        <Route path='project/:id/*' element={ <Outlet /> }>
          <Route path='activity' element={<Activity /> } />
          <Route path='' element={ <Tasks /> }  >
            <Route path="todo/:taskId" element={ <ShowDetail /> } />
            <Route path="backlog/:taskId" element={ <ShowDetail /> } />
          </Route>
        </Route>
        <Route path='Team/:id' element={ <h1>Team</h1> } />
        </Route>
      }
      <Route path='*' element={ <h1 className='flex text-center'>Page Not Found!</h1> } />
        </Routes>
        </Suspense>
    </React.Fragment>
  )
}

export default App

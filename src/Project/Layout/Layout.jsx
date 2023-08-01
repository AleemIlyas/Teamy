import React , { useState } from 'react'
import SideNav from '../SideNav/SideNav'
import styles from './Layout.module.css'
import { Outlet } from 'react-router-dom'
import Header from '../SideNav/components/Header/header'
import Backdrop from '../Components/UI/Backdrop/Backdrop'

export default function Layout() {
  const [show , setShow] = useState(false)
  const backdropHandler = ()=>{
    setShow(!show);
  }


  return (
    <React.Fragment>
    <Backdrop show={show} func={backdropHandler} />
    <div className={styles.Layout}>
        <div className={styles.Nav}>
        <SideNav />
        </div>
        <div className={['container flex flex-col',styles.Container].join(' ')}>
          <Header />
          <div className='w-11/12 m-auto'>
           <Outlet />
           </div>
        </div>
    </div>
    </React.Fragment>
  )
}

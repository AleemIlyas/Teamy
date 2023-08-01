import React, { useEffect, useState } from 'react'
import styles from './showDetail.module.css'
import Checked  from '/Projects/checked.svg'
import { useParams , useLocation } from 'react-router-dom'
const Comment = React.lazy(()=>import('./Comment/Comment'))
import Spinner from '../../Components/UI/Spinner/Spinner'
import axios from 'axios'


export default function ShowDetail() {
  const { taskId } = useParams() 
  const url = useLocation()
  const apiPath = url.pathname.match(/\/backlog/i) ? 'getBackLog' : 'getTask'
  const [loading , setLoading] = useState(false)
  const [task,setTask] = useState()
  useEffect(()=>{
    setLoading(true)
    fetchTask()

  },[taskId])

  function formatDateAndTime(date) {
    if (!(date instanceof Date) || isNaN(date)) {
      date = new Date(date); // Convert the input to a Date object if it's a date string or invalid date
    }
  
    if (isNaN(date)) {
      return "Invalid date"; // Return an error message if the date is still invalid
    }
  
    const today = new Date();
    const yesterday = new Date(today);
    yesterday.setDate(today.getDate() - 1);
  
    const datePart = date.toISOString().split('T')[0];
    const timePart = date.toISOString().split('T')[1].slice(0, 5);
  
    if (datePart === today.toISOString().split('T')[0]) {
      return `Today at ${timePart}`;
    } else if (datePart === yesterday.toISOString().split('T')[0]) {
      return `Yesterday at ${timePart}`;
    } else {
      const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
      return `on ${daysOfWeek[date.getDay()]} at ${timePart}`;
    }
  }



  async function fetchTask(){
    const taskPromise = await axios.get(`http://localhost:3300/${apiPath}/${taskId}`,{
      withCredentials : true
    })
    setLoading(false)
    setTask(taskPromise.data[0])
}

  return (
    <div className={["p-4 bg-white rounded-lg" , styles.Container].join(' ')}>
      { loading ? <Spinner />  : 
       !taskId ? null :   
      <React.Fragment>
      <div className='flex flex-row justify-between'>
        <div className='w-2/3'>
        <h1 className='font-extrabold'>{task.title}</h1>
        <span className='text-xs'>Added by <b>{task.addedby}.</b>  {formatDateAndTime(task.createdAt)} </span>
        </div>
        <div className='w-2/12'>
        <img src={Checked} width={30} />
        </div>
      </div>


        <div className='mt-4 flex flex-row justify-between'>
          <div className='flex flex-col  justify-between'>
            <h1 className='font-extrabold text-sm'>ASSIGN To</h1>
            <span className='flex items-end'>
              <img width={35} className='rounded-full' src='https://avatars2.githubusercontent.com/u/61832' />
              <p className='font-mono'>{task.assigned}</p>
            </span>
          </div>
         
         
          <div className='flex flex-col justify-between'>
            <h1 className='font-extrabold text-sm'>DUE ON</h1>
            <span className='font-mono'>{task.due}</span>
          </div>
    
          <div className='flex flex-col justify-between'>
            <h1 className='font-extrabold text-sm'>TAGS</h1>
            <p className='font-mono'> <span>{task.tag}</span> </p>
          </div>

        </div>

          <hr className='mt-6 h-0.5' style={{'background':'#ECECEC'}} />

        <div className={[ 'mt-4' , styles.description].join(' ')}>
          <h1 className=' font-extrabold'>Description</h1>
          <p className='tracking-widest font-medium'>{task.description}</p>
        </div>

        <div className='flex flex-row mt-5 justify-items-start'>
          <div className='flex items-center mr-3'>
            <div className='w-9'>
            <img src={Checked} height={'auto'} alt="" />
            </div>
            <div className='ml-3'>
                <h5 className='font-extrabold text-xs'>Redesign Brief of 2023.pdf</h5>
                <p className='mt-1 font-normal text-xs'>159KB</p>
            </div>
          </div>

          <div className='flex items-center mr-3'>
            <div className='w-9'>
            <img src={Checked} height={'auto'} alt="" />
            </div>
            <div className='ml-3'>
                <h5 className='font-extrabold text-xs'>Redesign Brief of 2023.pdf</h5>
                <p className='mt-1 font-normal text-xs'>159KB</p>
            </div>
          </div>
        </div>


        <hr className='mt-6 h-0.5' style={{'background':'#ECECEC'}} />

        <Comment />
        </React.Fragment>
  }

    </div>
  )
}

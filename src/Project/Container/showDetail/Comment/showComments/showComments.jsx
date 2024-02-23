import { useEffect, useState } from 'react'
import styles from './showComments.module.css'
import { useParams } from 'react-router-dom'
import axios from 'axios'

export default function ShowComments() {
  const { taskId } = useParams()
  const [comment,setComments] = useState([])
  useEffect(()=>{
    axios.get(`http://localhost:3300/getComments/${taskId}`,  {
        withCredentials : true
      })
      .then(res=>{
        setComments(res.data)
      })
  },[])
    console.log(comment)
  return (
    <div className='mt-5'>
        {
        comment.length == 0 ? null :
        comment.map((data,id)=>{
          return <div key={id} className={['mb-3 flex rounded-xl flex-row items-center pt-4 pb-4 ml-6 relative z-0' ,styles.show].join(' ')}>
            <img className='absolute -left-7 rounded-full border-double border-white border-spacing-2' src="https://avatars2.githubusercontent.com/u/6124" width={52} alt="" />
            <div className='ml-9'>
                <h3 className='font-bold'>{data.name}<span className='font-medium'> ,{data.designation} </span></h3>
                <p className='font-medium text-sm'>{data.title}</p>
            </div>
        </div>
        })
    }
    </div>
  )
}

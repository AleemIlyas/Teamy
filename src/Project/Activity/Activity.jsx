import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Spinner from '../Components/UI/Spinner/Spinner';

export default function Activity() {
  const [loading,setLoading] = useState(false)
  const [data,setData] = useState([])
  const { id } = useParams()
  console.log(data)
  useEffect(()=>{
    axios.get(`http://localhost:3300/getActivity/${id}`, {
      withCredentials : true
    })
    .then((response)=>{
      setLoading(false)
      setData(response.data)
    })
  } , [])

  return (
    !loading ?
    <div className='mt-5 w-4/5 m-auto bg-white p-2'>
    <VerticalTimeline layout='1-column-left' className='mt-3' >
    {!data.length == 0 ?
    <>
    {
      data.map((item,key)=>{
       return (<VerticalTimelineElement key={key}
       iconStyle={{ background: 'rgb(0, 0, 0)', color: '#ECECEC' }}
      >
        <div className='flex justify-between'>
        <p> <b>{item.name}</b> {item.text} <b> {item.activityname}</b> </p>
        <p>{item.Date.split('T')[0]}</p>
        </div>
     </VerticalTimelineElement> )
      })
    }
    
  </>
  :
  <VerticalTimelineElement
  iconStyle={{ background: 'rgb(0, 0, 0)', color: '#ECECEC' }}
  >
  <p>Noting to show!</p>
  </VerticalTimelineElement>
    }
</VerticalTimeline>
</div> : <Spinner />
  )
}

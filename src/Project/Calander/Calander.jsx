import { useEffect , useState } from "react"
import { useParams } from "react-router-dom"
import { Calendar , momentLocalizer } from "react-big-calendar"
import moment from 'moment'
import 'react-big-calendar/lib/css/react-big-calendar.css'
import axios from "axios"

const localizer = momentLocalizer(moment)

export default function Calander() {
  const { id } =useParams()
  const [events,setEvents] = useState([])

  useEffect(()=>{
    fetchTask()
  },[id])


  async function fetchTask(){
      const taskPromise = await axios.get(`http://localhost:3300/getTasks/${id}`,{
        withCredentials : true
      })
      const formattedData = taskPromise.data.map((task)=>({
        title : task.title ,
        start : new Date(task.createdAt) ,
        end :  new Date(task.due),
        description : task.description
      }))
      console.log(formattedData)
      setEvents(formattedData)
  }



  return (
    <div>
    <Calendar 
    events={events}
    localizer={localizer}
    startAccessor="start"
    endAccessor="end"
    tooltipAccessor="description"
    style={{height:500}}
    />
    </div>
  )
}

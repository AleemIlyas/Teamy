import React , { useEffect } from 'react'
import styles from './header.module.css'
import Image1 from '/Projects/1.svg'
import { FiMoreHorizontal } from 'react-icons/fi'
import { NavLink  ,useParams } from 'react-router-dom'
import { useLocation  } from 'react-router-dom'
import { useSelector } from 'react-redux'


export default function Header(props) {
    const {id} = useParams()
    const loc = useLocation()
    const project = useSelector(state=>state.project.projects)
    const teams = useSelector(state=>state.teams.Teams)
    const links =  [ '/dashboard' , '/dashboard/myTasks' , '/dashboard/Notification' ]

    const headerTextMap = {
        '/dashboard': 'Dashboard',
        '/dashboard/myTasks': 'MY TASKS',
        '/dashboard/Notification': 'Notifications',
        // Add more page links and header texts as needed
      };

      project.forEach((project) => {
        const projectPath = `/dashboard/project/${project._id}`;
        headerTextMap[projectPath] = project.title;
        [ '/Activity' , '/files' , '/Calander' ].forEach((val)=>{
            headerTextMap[projectPath+val] = project.title
        })
      
      });


      teams.forEach((team) => {
        const projectPath = `/dashboard/Team/${team._id}`;
        headerTextMap[projectPath] = team.title;
        links.push(projectPath)
        })
    


    console.log(links.includes(loc.pathname))
    useEffect(()=>{
        console.log('Component Did Mount')
    } , [props])
    // classes list for active and inactive links
    let Active = ['inline-flex',styles.active].join(' ') 
    let inActive = ['inline-flex']

  return (
    <React.Fragment>
    <div className={['bg-white flex flex-col',styles.Header].join(' ')}>
           <div className='w-11/12 m-auto flex items-center justify-between'>
                <div className='flex'>
                <img className='mr-3' width={30} src={Image1} alt="" />
                <h1 className='text-xl font-bold tracking-wide'>{headerTextMap[loc.pathname]  || 'HEADER'}</h1>
                </div>
                <div>
                <FiMoreHorizontal className='text-3xl' />
                </div>
            <div className='flex space-x-1'>
                <img width={40} className='rounded-full' src="https://avatars2.githubusercontent.com/u/6184" alt="" />
                <img width={40} className='rounded-full' src="https://avatars2.githubusercontent.com/u/6181" alt="" />
                <img width={40} className='rounded-full' src="https://avatars2.githubusercontent.com/u/6176" alt="" />
            </div>
        </div>
        {
            !links.includes(loc.pathname) ? 
            <ul className='w-11/12 mr-auto ml-auto space-x-4'>
                <NavLink className={({isActive,isPending})=>isPending?inActive:isActive?Active:inActive} to={`project/${id}`} end> <span className='mb-2.5'>Tasks</span></NavLink>
                <NavLink className={({isActive,isPending})=>isPending?inActive:isActive?Active:inActive} to={`project/${id}/Activity`}> <span className='mb-2.5'>Activity</span></NavLink>
                <NavLink className={({isActive,isPending})=>isPending?inActive:isActive?Active:inActive} to={`project/${id}/Calander`} > <span className='mb-2.5'>Calander</span></NavLink>
                <NavLink className={({isActive,isPending})=>isPending?inActive:isActive?Active:inActive} to={`project/${id}/files`}> <span className='mb-2.5'>Files</span></NavLink>
            </ul>
            : null
        }
     </div>
     </React.Fragment>
  )
}

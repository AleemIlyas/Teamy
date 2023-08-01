import React , { useEffect , useState }  from 'react'
import StyleSheet from './SideNav.module.css'
import Teamy  from '/homePageImages/TEAMYLogoWandB.png'
const UserInfo = React.lazy(()=>import('./components/UserInfo/userinfo'))
const Menu = React.lazy(()=>import('./components/Menu/Menu'))
const Stats = React.lazy(()=>import('./components/Stats/Stats'))
const Lists = React.lazy(()=>import('./components/Lists/Lists'))
import Modal from '../Components/UI/Modal/Modal'
const AddProject = React.lazy(()=>import('./components/addProject/addProject'))
const AddTeam = React.lazy(()=>import('./components/addTeam/addTeam'))
import first from '/Projects/1.svg'
import second from '/Projects/2.svg'
import third from '/Projects/3.svg'
import fourth from '/Projects/4.svg'
import { useDispatch , useSelector } from 'react-redux'
import { getProjects } from '../../Store/reducers/projectReducer'
import { getTeams } from '../../Store/reducers/teamReducer'

export default function SideNav() {
  const [show,setShow] = useState(false)
  const [teamShow,setteamShow] = useState(false)
  const projects  =  useSelector((state)=>state.project.projects)
  const teams  =  useSelector((state)=>state.teams.Teams)
  const arr = [ first , second , third, fourth ]
  const dispatch = useDispatch()

  const ModalHandler=()=>{
    setShow(!show)
  }

  const TeamModalHandler=()=>{
    setteamShow(!teamShow)
  }


  useEffect(()=>{
     dispatch(getProjects())
     dispatch(getTeams())
  } , [] )

  return (
    <React.Fragment>

            {/* show Modal to create Project */}

        <Modal show={show} handler={ModalHandler} >
          <AddProject />
        </Modal>



        {/* modal for add Team */}
        <Modal show={teamShow} handler={TeamModalHandler} >
          <AddTeam />
        </Modal>


    <nav className={StyleSheet.Nav}>
        <div className='text-center p-3'>
          <img src={Teamy} width={125} alt="Logo of Product" />
        </div>
        <UserInfo />
        <Stats />
        <Menu />



        {/* Code to add Project Lists */}

        <div className="flex justify-end flex-col">
        <div className='w-11/12 p-4 pt-0 pb-1 m-auto mr-0'>
          <h3 className="text-base font-medium" style={{'color':'var(--light-color)'}} >Projects</h3>
        </div>
          <ul className='text-white'>
          {
            projects.length ==0 || projects == null ?
            null :
            projects.map((project,id)=>{
              return <Lists key={id} name={project.title} link={'project/'+project._id} src={arr[Math.floor(Math.random()*arr.length)]} />
            })
          }
          <li onClick={ModalHandler} className='text-sm w-11/12 ml-auto pl-5  hover:cursor-pointer' style={{color:'#FFC200'}} >+ Add a Project</li>
        </ul>
    </div>



    {/* code To add teams */}

    <div className="flex justify-end flex-col mt-4">
        <div className='w-11/12 p-4 pt-0 pb-1 m-auto mr-0'>
          <h3 className="text-base font-medium" style={{'color':'var(--light-color)'}} >Teams</h3>
        </div>
          <ul className='text-white'>
          {
            teams.length ==0 || teams == null ?
            null :
            teams.map((team,id)=>{
              return <Lists key={id} name={team.title} link={'Team/'+team._id} src={null} />
            })
          }
          <li onClick={TeamModalHandler} className='text-sm w-11/12 ml-auto pl-5 hover:cursor-pointer' style={{color:'#FFC200'}} >+ Add a Team</li>
        </ul>
    </div>

    </nav>
    </React.Fragment>
  )
}

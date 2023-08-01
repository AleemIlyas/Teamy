import styles from './userinfo.module.css'
import {FiMoreHorizontal} from 'react-icons/fi'
import { useSelector } from 'react-redux'
export default function Userinfo() {
  const user = useSelector(store=>store.user.user)
  return (
    <div className={[ 'p-4 pr-1 flex justify-end' , styles.user ].join(" ")} >
      <div className=' flex justify-between items-center w-11/12'>
      <img className='rounded-full w-14 h-14 mr-2 object-cover ' src={`http://localhost:3300/uploads/Images/${user.picture}`} />
      <div className={['flex flex-grow flex-col' , styles.Info].join(' ')}> 
        <h3 className='font'>{user.name}</h3>
        <p className='font-semibold text-base'>{user.roles[0]}</p>
      </div>
      <FiMoreHorizontal className={"text-4xl"}  />
      </div>
    </div>
  )
}

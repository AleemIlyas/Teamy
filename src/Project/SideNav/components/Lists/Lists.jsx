import styles from './Lists.module.css'
import PropTypes from 'prop-types'
import {NavLink} from 'react-router-dom'
import {FiMoreHorizontal} from 'react-icons/fi'


export default function Lists(props) {

  // List of classes when link is active or nonActive
  const Active = ['w-full pl-4 flex uppercase border-transparent  border-l-4' , styles.activeclass].join(' ')
  const nonActive = ['w-full flex uppercase  border-transparent border-transparent pl-4 border-l-4']
  // List of classes when link is active or nonActive
 
 
  return (
  <NavLink to={props.link} 
  className={ ({isActive , isPending})=>isPending ? "" : isActive ? Active : nonActive}>
    <div className={[ 'w-11/12 flex justify-between items-center whitespace-nowrap' ,styles.list].join(' ')}>
      <span className='flex text-sm items-center'>
       { props.src ? <img className='mr-4' src={props.src} alt="" /> : null }
         {props.name}
          </span>
      <FiMoreHorizontal className="text-2xl mr-2" />
    </div>
   </NavLink>
  )
}


Lists.propTypes = {
  name : PropTypes.string,
  link : PropTypes.string,
  src :  PropTypes.string
}
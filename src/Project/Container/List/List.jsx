import styles from './List.module.css'
import PropTypes from 'prop-types'
import { NavLink } from 'react-router-dom'
import Checked from '/Projects/checked.svg'


export default function List(props) {
    const active = ['h-auto flex flex-row mt-1 mb-1 p-4 mr-1 rounded-lg' , styles.Item , styles.active].join(' ')
    const notActive = ['h-auto flex flex-row mt-1 mb-1 p-4 mr-1 rounded-lg' , styles.Item].join(' ')
  
    return (
    <NavLink to={props.link} className={({isActive , isPending})=>isPending ? "" : isActive ? active : notActive }>
        <img width={22+'px'} src={Checked} alt='Task is completed ICON' />
        <div className='flex flex-col ml-2'>
        <h1 className='text-black font-extrabold'>{props.title}</h1>
        <span className='max-w-fit p-1 rounded-lg'>{props.tag}</span>
        </div>
    </NavLink>
  )
}

List.propTypes = {
    title : PropTypes.string ,
    tag : PropTypes.string,
    link : PropTypes.string
}

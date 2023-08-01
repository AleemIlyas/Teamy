import styles from './backdrop.module.css'
import PropsType from 'prop-types'

export default function Backdrop(props) {

  return (
    <div onClick={props.func} style={{visibility: props.show ? 'visible' : 'hidden'}} className={['fixed w-screen h-screen' , styles.backdrop].join(' ')}></div>
  )
}


Backdrop.propTypes = {
  show : PropsType.bool,
  func : PropsType.func
}
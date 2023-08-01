import React from "react"
import Backdrop from '../Backdrop/Backdrop'
import styles from './Modal.module.css'
import PropTypes from 'prop-types'

export default function Modal(props) {
  const childrenWithHandler = React.Children.map(props.children, (child) => {
    // Clone the child element and add the props.handler as a new prop
    return React.cloneElement(child, { handler: props.handler });
  });
  return (
    <React.Fragment>
    <Backdrop show={props.show} func={props.handler} />
    <div style={{visibility: props.show? 'visible' : 'hidden' ,opacity : props.show ? '1' : '0' , transform : props.show ? 'translateX(-48%) translateY(-50%)' : 'translateX(-48%) translateY(-100%)' }} className={['w-2/5 h-auto p-4 fixed bg-white z-50 left-2/4 top-2/4 transition-transform' , styles.Modal].join(' ')}>
      { childrenWithHandler }
    </div>
    </React.Fragment>
  )
}

Modal.propTypes = {
  handler : PropTypes.func,
  show : PropTypes.bool,
  children : PropTypes.node
}
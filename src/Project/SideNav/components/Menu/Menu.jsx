import styles from './Menu.module.css'
import { Link } from 'react-router-dom'
export default function Menu() {
  return (
    <nav className="flex justify-end">
      <div className="flex w-11/12 flex-col p-4 mt-2">
        <div>
          <h1 className="text-base font-medium" style={{'color':'var(--light-color)'}} >Menu</h1>
        </div>
        <ul className={["text-white text-sm" , styles.list].join(" ")}>
          <li> <Link to="/dashboard">Home</Link> </li>
          <li><Link to="/dashboard/myTasks">My Tasks</Link></li>
          <li>Notifications</li>
        </ul>
        </div>
    </nav>
  )
}

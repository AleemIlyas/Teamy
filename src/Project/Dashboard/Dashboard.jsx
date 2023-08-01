import styles from './Dashboard.module.css'
import { useSelector } from 'react-redux/es/hooks/useSelector'
import graph from '/Projects/graph.svg'

export default function Dashboard() {
    const projects = useSelector((state)=>state.project.projects)
  return (
    <div className={['flex w-full' , styles.Container].join(' ')}>
        
        <div className='flex w-3/4 flex-col'>
           
           
            <div className={['w-full p-5 bg-white' , styles.shadow].join(' ')}>
                <div className='m-auto flex flex-row justify-around mx-10' >
                    <div className=''>
                    <h1 className='text-xl'> Projects </h1>
                    <h1 className='text-8xl font-bold mt-5'>{ projects.length < 10 ? '0'+projects.length :projects.length }</h1>  
                    </div>
                    <div className='flex items-end'>
                        <img src={graph} width={300} alt="" />
                    </div>
                </div>
            </div>

            <div className='mt-2 pl-0 pr-0 p-4 flex flex-row justify-between'>
                <div className={['p-8 w-3/6 mr-2 bg-white text-center' , styles.shadow].join(' ')}>
                    <h1 className='text-xl font-extrabold'>Working Rate</h1>
                    <div className={[ 'flex justify-center', styles.setsize,styles.chartscontainer].join(' ')}>
                        <div className={[styles.piewrapper, styles.progress60].join(' ')}>
                         <span className={styles.label}>{ projects.length <= 0 ? 0 : 60}<span className={styles.smaller}>%</span></span>
                        <div className={styles.pie}>
                        <div style={{borderColor : projects.length <=0 ? 'white' : '#9b59b6' }} className={[styles.leftside,styles.halfcircle].join(' ')}></div>
                        <div style={{borderColor : projects.length <=0 ? 'white' : '#9b59b6' }} className={[styles.rightside,styles.halfcircle].join(' ')}></div>
                        </div>
                     </div>
                     </div>
                </div>
                <div className={['p-8 w-3/6 bg-white text-center' , styles.shadow].join(' ')}>
                    <h1 className='text-xl font-extrabold'>Performance</h1>
                    <div className={['flex justify-center',styles.setsize,styles.chartscontainer].join(' ')}>
                        <div className={[styles.piewrapper, styles.progress90].join(' ')}>
                         <span className={styles.label}>{ projects.length <= 0 ? 0 : 90}<span className={styles.smaller}>%</span></span>
                        <div className={styles.pie}>
                        <div style={{borderColor : projects.length <=0 ? 'white' : '#e67e22' }} className={[styles.leftside,styles.halfcircle].join(' ')}></div>
                        <div style={{borderColor : projects.length <=0 ? 'white' : '#e67e22' }} className={[styles.rightside,styles.halfcircle].join(' ')}></div>
                        </div>
                     </div>
                     </div>
                </div>
            </div>

        </div>
        </div>


  )
}

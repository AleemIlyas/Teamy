import React, { Component } from 'react'
import styles from './HomePage.module.css'
import Logo from '/homePageImages/Logo.png'
import Hero from '/homePageImages/hero.svg'
import Hi from '/homePageImages/hi.svg'
import Task from '/homePageImages/task.svg'
import Track from '/homePageImages/tracking.svg'
import Collab from '/homePageImages/collab.svg'
import TaskMange from '/homePageImages/task_mange.svg'
import Sharing from '/homePageImages/sharing.svg'
import About from '/homePageImages/sideBar.svg'
import Blog1 from '/homePageImages/Blog1.jpg'
import Blog2 from '/homePageImages/blog2.jpg'
import Blog3 from '/homePageImages/blog3.jpg'
import More from '/homePageImages/more.svg'
import { SiFacebook } from 'react-icons/si'
import {FaGooglePlus} from 'react-icons/Fa'
import { Link } from 'react-router-dom'
import {AiFillTwitterCircle} from 'react-icons/ai'
 
export default class HomePage extends Component {
  render() {
    return (
      <React.Fragment>
        <header className={styles.header}>
          <div className={styles.Logo}>
            <img className='ml-auto' src={Logo} width={200} alt="TEAMY LOGO" />
          </div>
          <nav className={styles.Nav}>
            <ul>
              <li><a href="#">Home</a> </li>
              <li><a href="#">About</a></li>
              <li><a href="#">BLOG</a> </li>
              <li><a href="#">Contact</a> </li>
              <li><Link to="/login">LOG IN</Link></li>
            </ul>
          </nav>
        </header>

        <div className={styles.Hero}>
          <div className={styles.Context}>
            <p> Streamline your <br /> projects with ease</p>
            <span> A Project Mangement platform for developers </span>
            <span> <img src={Hi} alt="hi logo" /> Hello </span>
          </div>
          <div className={styles.Image}>
            <img src={Hero} width={450} alt=" a grpahical art " />
          </div>
        </div>


        {/* service section */}


        <div className={styles.Services}>
          <div className={styles.Section1}>
          <h3> Our Services </h3>
          <h2>We Provide the best Quality Service</h2>
          <p>Innovative project management app, designed to streamline your project planning, execution and tracking process. Our app is user-friendly, highly customizable, and equipped with powerful features to help you stay on top of your projects from start to finish.</p>
          </div>
          <div className={styles.Cards}>
            <div className={[styles.Card , styles.card1].join(' ')}>
              <img src={Task} width={150} alt="ICON of task" />
              <h3>Task Assignment Module</h3>
            </div>
            <div className={[styles.Card , styles.card2].join(' ')}>
            <img src={Track} width={150} alt="ICON of task" />
              <h3>Time Tracking</h3>
            </div>
            <div className={[styles.Card , styles.card3].join(' ')}>
            <img src={Collab} width={150} alt="ICON of task" />
              <h3>Collaboration</h3>
            </div>
            <div className={[styles.Card , styles.card4].join(' ')}>
            <img src={TaskMange} width={150} alt="ICON of task" />
              <h3>Task Mangement</h3>
            </div>
            <div className={[styles.Card , styles.card5].join(' ')}>   
             <img src={Sharing} width={150} alt="ICON of task" />
              <h3>File Sharing</h3></div> 
          </div>
        </div>

        {/* about us */}


        <div className={styles.About}>
          <div>
            <img src={About} width={600} alt="" />
          </div>
        <div>
          <h3>Know About Teamy</h3>
          <p>Our app is user-friendly, highly customizable, and equipped with powerful features to help you stay on top of your projects from start to finish. Whether you are managing a small or large project, our app is the perfect solution to keep your team organized, efficient, and productive.</p>
        </div>

        </div>


        {/* Our success */}

        <div className={styles.Success}>
          <div>
            <h2>Our Blog</h2>
          </div>
          <div className={styles.Cards}>
            <div className={styles.Card}>
              <div>
              <img src={Blog1} alt="" />
              </div>
              <div>
              <h3>The Benefits of Using a Project Management System for Your Team</h3>
              <p>In this post, you could discuss the advantages of implementing a project management system for your team, such as improved collaboration, streamlined communication, and increased productivity.</p>
              <button><img src={More} height={25} alt="" /></button>
              </div>
            </div>

            <div className={styles.Card}>
              <div>
              <img src={Blog2} alt="" />
              </div>
              <div>
              <h3>How to Choose the Right Project Management System for Your Business</h3>
              <p>Here, you could provide tips on selecting the right project management system for your company, including factors to consider such as team size, budget, and specific needs.</p>
              <button><img src={More} height={25} alt="" /></button>
              </div>
            </div>

            <div className={styles.Card}>
              <div>
              <img src={Blog3} alt="" />
              </div>
              <div>
              <h3>How a Project Management System Can Help Your Team Work More Efficiently</h3>
              <p>This article could explore how a project management system can help your team optimize workflows, eliminate bottlenecks, and save time, and work more efficently using teamy. </p>
              <button><img src={More} height={25} alt="" /></button>
              </div>
            </div>
            
            
          </div>
        </div>


        <footer className={styles.Footer}>
          <div className={styles.Container}>
              <div>
                <img src={Logo} height={60} alt="" />
                <p>Manage your projects like a pro.
                Project management made simple</p>
                <ul>
                  <li><SiFacebook /> </li>
                  <li><FaGooglePlus /> </li>
                  <li><AiFillTwitterCircle /> </li>
                </ul>
              </div>
              <div>
                <h3>About Us</h3>
                <ul>
                  <li> We are hiring </li>
                  <li> Our Customers  </li>
                  <li> Blog Posts </li>
                  <li> Help and Support </li>
                </ul>
              </div>
              <div>
                <h3>Community</h3>
                <ul>
                  <li> About Us </li>
                  <li> Our Clients  </li>
                  <li> Legal Notice </li>
                </ul>
              </div>
              <div>
                <h3>Contact</h3>
                <ul>
                  <li> +92-042-312421 </li>
                  <li> info@teamy.com  </li>
                </ul>
              </div>
          </div>
          <div>
          © All right reserved.Developed By Aleem Ilyas
          </div>

        </footer>

      </React.Fragment>
    )
    }
}

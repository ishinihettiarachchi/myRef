import React from 'react'
import Header from '../components/Header'
import '../styles/home.css'
import oop from '../images/computer.png'
import design from '../images/design-patterns.png'
import computing from '../images/gaming.png'
import stats from '../images/stats.png'
import hci from '../images/human-computer-interaction.png'
import online from '../images/online-ref.png'
import management from '../images/management.png'
import programming from '../images/programming.png'
import {Link} from 'react-router-dom';


function Home

() {
  return (
    <div>
        <Header/>
        <div className="container home-container">
            <div className="row row1">
                <div className="col-6 button">
                    <Link to='/new'><button className='add'>Add New</button></Link>
                </div>
                <div className="col-6 button">
                    <button className='remove'>View All</button>
                </div>
            </div>
            <div className="row row2">
                <div className="row row-line1">
                    <div className="col-3 category">
                        <h4>Computing Fundamentals </h4>
                        <div className="image">
                            <img src={computing} alt="" />   
                        </div>
                        
                    </div>
                    <div className="col-3 category">
                        <h4>Statistics</h4>
                        <div className="image">
                            <img src={stats} alt="" />
                        </div>
                        
                    </div>
                    <div className="col-3 category">
                        <h4>Programming Concepts</h4>
                        <div className="image">
                        <img src={programming} alt="" />
                        </div>
                    </div>
                    {/* <div className="col-3 category">
                        <h4>Object Oriented Programming</h4>
                        <div className="image">
                        <img src={oop} alt="" />
                        </div>
                    </div> */}
                </div>
                <div className="row row-line2">
                    <div className="col-3 category">
                        <h4>Design Patterns</h4>
                        <div className="image">
                        <img src={design} alt="" />
                        </div>
                    </div>
                    <div className="col-3 category">
                        <h4>Human Computer Interaction</h4>
                        <div className="image">
                        <img src={hci} alt="" />
                        </div>
                    </div>
                    <div className="col-3 category">
                        <h4>Management</h4>
                        <div className="image">
                        <img src={management} alt="" />
                        </div>
                    </div>
                    {/* <div className="col-3 category">
                    <h4>Online References</h4>
                    <div className="image">
                        <img src={online} alt="" />
                    </div>
                    </div> */}
                </div>
                

            </div>
        </div>
    </div>
  )
}

export default Home

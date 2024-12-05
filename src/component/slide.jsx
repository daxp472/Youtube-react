import { useState } from 'react'
import '../App.css'
import Logo from '../assets/Youtube logo.png'

function Slide() {


    return (
        <>
            <div className="main-container">
                <div className="top">
                    <img src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/hambarger.png?raw=true" alt='3line' />
                    <img src={Logo} alt='Logo' />
                </div>

                <div className="container">
                    <div className="cont">
                        <img src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/home.png?raw=true" alt=' ' />
                        <div className="text">Home</div>
                    </div>
                    <div className="cont">
                        <img src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/explore.png?raw=true" alt=' ' />
                        <div className="text">Explore</div>
                    </div>
                    <div className="cont">
                        <img src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/shorts.png?raw=true" alt=' ' />
                        <div className="text">Shorts</div>
                    </div>
                    <div className="cont">
                        <img src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/subscription.png?raw=true" alt=' ' />
                        <div className="text">Subscriptions</div>
                    </div>
                </div>

                <hr></hr>

                <div className="Box-cont">
                    <div className="box">
                        <img src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/library.png?raw=true" alt=' ' />
                        <div className="text">Home</div>
                    </div>
                    <div className="box">
                        <img src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/history.png?raw=true" alt=' ' />
                        <div className="text">Explore</div>
                    </div>
                    <div className="box">
                        <img src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/your_video.png?raw=true" alt=' ' />
                        <div className="text">Shorts</div>
                    </div>
                    <div className="box">
                        <img src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/watch_later.png?raw=true" alt=' ' />
                        <div className="text">Subscriptions</div>
                    </div>
                    <div className="box">
                        <img src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/liked.png?raw=true" alt=' ' />
                        <div className="text">Shorts</div>
                    </div>
                    <div className="box">
                        <img src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/down_arrow.png?raw=true" alt=' ' />
                        <div className="text">Subscriptions</div>
                    </div>
                </div>


                <hr></hr>

                
                <div className="bottom">
                    <div className="name">Subscriptions</div>

                    <div className="sub">
                        <img src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Ellipse%204%20(5).png?raw=true" alt=' ' />
                        <div className="text">Subscriptions</div>
                    </div>
                    <div className="sub">
                        <img src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Ellipse%204%20(1).png?raw=true" alt=' ' />
                        <div className="text">Subscriptions</div>
                    </div>
                    <div className="sub">
                        <img src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Ellipse%201%20(2).png?raw=true" alt=' ' />
                        <div className="text">Subscriptions</div>
                    </div>
                    <div className="sub">
                        <img src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Ellipse%201%20(3).png?raw=true" alt=' ' />
                        <div className="text">Subscriptions</div>
                    </div>
                    <div className="sub">
                        <img src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Ellipse%204%20(2).png?raw=true" alt=' ' />
                        <div className="text">Subscriptions</div>
                    </div>
                    <div className="sub">
                        <img src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Ellipse%201%20(5).png?raw=true" alt=' ' />
                        <div className="text">Subscriptions</div>
                    </div>
                   </div>
            </div>
        </>

    )


}

export default Slide;
import { useState } from 'react'
import '../App.css'

const videos = [
    {
        thumbnail: "https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Thumbnail-8.png?raw=true",
        playButton: "https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Ellipse%201%20(1).png?raw=true",
        title: "Title of the Video",
        views: "12,000,000 views",
        channel: "Channel Name",
        date: "Date",
    },
    {
        thumbnail: "https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Thumbnail-9.png?raw=true",
        playButton: "https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Ellipse%201%20(4).png?raw=true",
        title: "Title of the Video",
        views: "12,000,000 views",
        channel: "Channel Name",
        date: "Date",
    },
    {
        thumbnail: "https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Thumbnail-10.png?raw=true",
        playButton: "https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Ellipse%204%20(3).png?raw=true",
        title: "Title of the Video",
        views: "12,000,000 views",
        channel: "Channel Name",
        date: "Date",
    },
    {
        thumbnail: "https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Thumbnail-11.png?raw=true",
        playButton: "https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Ellipse%204%20(3).png?raw=true",
        title: "Title of the Video",
        views: "12,000,000 views",
        channel: "Channel Name",
        date: "Date",
        className:"cideo",
    },
];


const videos1 = [
    {
        thumbnail: "https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Thumbnail-4.png?raw=true",
        playButton: "https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Ellipse%204%20(4).png?raw=true",
        title: "Title of the Video",
        views: "12,000,000 views",
        channel: "Channel Name",
        date: "Date",
    },
    {
        thumbnail: "https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Thumbnail-5.png?raw=true",
        playButton: "https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/play.png?raw=true",
        title: "Title of the Video",
        views: "12,000,000 views",
        channel: "Channel Name",
        date: "Date",
    },
    {
        thumbnail: "https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Thumbnail-6.png?raw=true",
        playButton: "https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Ellipse%204%20(5).png?raw=true",
        title: "Title of the Video",
        views: "12,000,000 views",
        channel: "Channel Name",
        date: "Date",
    },
    {
        thumbnail: "https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Thumbnail-7.png?raw=true",
        playButton: "https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Ellipse%204%20(6).png?raw=true",
        title: "Title of the Video",
        views: "12,000,000 views",
        channel: "Channel Name",
        date: "Date",
    },

];


const videos2 = [
    {
        thumbnail: "https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Thumbnail.png?raw=true",
        playButton: "https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Ellipse%204-1.png?raw=true",
        title: "Title of the Video",
        views: "12,000,000 views",
        channel: "Channel Name",
        date: "Date",
    },
    {
        thumbnail: "https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Thumbnail-1.png?raw=true",
        playButton: "https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Ellipse%204-1.png?raw=true",
        title: "Title of the Video",
        views: "12,000,000 views",
        channel: "Channel Name",
        date: "Date",
    },
    {
        thumbnail: "https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Thumbnail-2.png?raw=true",
        playButton: "https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Ellipse%204-1.png?raw=true",
        title: "Title of the Video",
        views: "12,000,000 views",
        channel: "Channel Name",
        date: "Date",
    },
    {
        thumbnail: "https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Thumbnail-3.png?raw=true",
        playButton: "https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Ellipse%204-1.png?raw=true",
        title: "Title of the Video",
        views: "12,000,000 views",
        channel: "Channel Name",
        date: "Date",
    },

];


function Main() {


    return (
        <>
            <div className="all">
            <div className="navbar">
        {/* Search bar */}
        <div className="navbar-search">
          <input type="text" placeholder="Search" className="search-input" />
          <button
            className="search-btn"
            style={{
              height: "60px",
              width: "70px",
              marginRight: "10px",
            }}
          >
            <img
              src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/search.png?raw=true"
              alt="Search"
            />
          </button>
          <button
            className="mic-btn"
            style={{
              height: "60px",
              width: "50px",
              marginLeft: "10px",
              marginRight: "350px",
            }}
          >
            <img
              src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/mic.png?raw=true"
              alt="Mic"
            />
          </button>
        </div>

        {/* Right-side icons */}
        <div className="navbar-icons">
          <img
            src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/create.png?raw=true"
            alt="Upload"
            className="navbar-icon"
          />
          <img
            src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/more.png?raw=true"
            alt="Menu"
            className="navbar-icon"
          />
          <img
            src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/bell.png?raw=true"
            alt="Notifications"
            className="navbar-icon"
          />
          <img
            src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Ellipse%201%20(2).png?raw=true"
            alt="Profile"
            className="navbar-icon profile"
          />
        </div>
      </div>

    <hr style={{
        marginTop:'-90vh'
    }}/>

                

                <div className="trending">
                    <div className="comp">All</div>
                    <div className="comp">Cook Studio</div>
                    <div className="comp">UX</div>
                    <div className="comp">Case Study</div>
                    <div className="comp">Music</div>
                    <div className="comp">Bangla Lofi</div>
                    <div className="comp">Tour</div>
                    <div className="comp">Saintmartian</div>
                    <div className="comp">Tech</div>
                    <div className="comp">iphone 13</div>
                    <div className="comp">User Interface Design</div>
                    <div className="comp">Computer</div>
                    <img src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/leftBottom.png?raw=true" style={{ width: '40px' }} alt='' />
                </div>

                <hr></hr>



                <div className="main-content">

                    <div className="row">
                        {videos.map((video, index) => (
                            <div className="video" key={index}>
                                <img src={video.thumbnail} alt="Video Thumbnail" />
                                <div className="cpy">
                                    <div className="play-btn">
                                        <img src={video.playButton} alt="Play Button" />
                                    </div>
                                    <div className="cpy2">
                                        <div className="title">{video.title}</div>
                                        <div className="channel">{video.channel}</div>
                                        <div className="cpy3">
                                            <div className="views">{video.views}</div>
                                            <div className="date">{video.date}</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    

                    <div className="row">
                        {videos1.map((video, index) => (
                            <div className="video" key={index}>
                                <img src={video.thumbnail} alt="Video Thumbnail" />
                                <div className="cpy">
                                    <div className="play-btn">
                                        <img src={video.playButton} alt="" />
                                    </div>
                                    <div className="cpy2">
                                        <div className="title">{video.title}</div>
                                        <div className="channel">{video.channel}</div>
                                        <div className="cpy3">
                                            <div className="views">{video.views}</div>
                                            <div className="date">{video.date}</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>


                    <div className="row">
                        {videos2.map((video, index) => (
                            <div className="video" key={index}>
                                <img src={video.thumbnail} alt="Video Thumbnail" />
                                <div className="cpy">
                                    <div className="play-btn">
                                        <img src={video.playButton} alt="Play Button" />
                                    </div>
                                    <div className="cpy2">
                                        <div className="title">{video.title}</div>
                                        <div className="channel">{video.channel}</div>
                                        <div className="cpy3">
                                            <div className="views">{video.views}</div>
                                            <div className="date">{video.date}</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                </div>









            </div >
        </>

    )

}

export default Main;
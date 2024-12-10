import { useEffect, useState } from 'react';
import '../App.css';

function Main() {
    const [videos, setVideos] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchVideos = async () => {
            try {
                const response = await fetch('https://api-1-u356.onrender.com/videos');
                if (!response.ok) {
                    throw new Error('Failed to fetch videos');
                }
                const data = await response.json();
                setVideos(data);
                setLoading(false);
            } catch (err) {
                setError(err.message);
                setLoading(false);
            }
        };

        fetchVideos();
    }, []);

    if (loading) {
        return <div>Loading videos...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <>
            <div className="main-container">
                <div className="all">
                    <div className="navbar">
                        <div className="navbar-search">
                            <input type="text" placeholder="Search" className="search-input" />
                            <button className="search-btn">
                                <img
                                    src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/search.png?raw=true"
                                    alt="Search"
                                />
                            </button>
                            <button className="mic-btn">
                                <img
                                    src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/mic.png?raw=true"
                                    alt="Mic"
                                />
                            </button>
                        </div>
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

                    <div className="trending">
                        <div className="comp">All</div>
                        <div className="comp">Music</div>
                        <div className="comp">Tech</div>
                        <div className="comp">Case Study</div>
                        <div className="comp">Gaming</div>
                        <div className="comp">Education</div>
                        <div className="comp">Business</div>
                        <div className="comp">Sports</div>
                        <div className="comp">Science</div>
                        <div className="comp">Movies</div>
                        <div className="comp">News</div>
                        <div className="comp">Travel</div>
                        <div className="comp">Pets</div>
                        <div className="comp">Gadgets</div>
                        <div className="comp">More</div>
                    </div>

                    <div className="main-content">
                        <div className="row">
                            {videos.map((video, index) => (
                                <div className="video" key={index}>
                                    <div className="photo-container">
                                        <img src={video.thumbnail} alt="Video Thumbnail" onError={(e) => e.target.src = 'https://via.placeholder.com/150'} />
                                    </div>
                                    <div className="cpy">
                                    <img src={video.playButton} alt="Video Thumbnail" style={{width:'40px' , height:'40px' , marginTop:'20px'}}/>
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
                </div>
            </div>
        </> 
    );
}

export default Main;





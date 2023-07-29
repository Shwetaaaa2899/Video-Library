import {useParams} from "react-router-dom"
import {videos} from "../../db/videos-db "
import {MdOutlineWatchLater, MdOutlineEditNote} from "react-icons/md"
import {RiMenuAddLine} from "react-icons/ri";

import "./Detail.css"
export const DetailPage = () => {
    const {id} = useParams()

    const video = videos.find((item) => item._id === Number(id))
    // console.log(videos, id)
    const icon = 'https://picsum.photos/300/174'
    return <div className="video-container">
        <div className="video-section">
            <div className="video">

                <iframe src={video
                    ?.src}></iframe>
            </div>
            <div className="video-details">
                <div className="icon">
                    <img src={icon}/>
                </div>
                <div className="title">
                    <h3>
                        {video
                            ?.title}
                    </h3>
                </div>
                <div className="action-icons">
                    <span><MdOutlineWatchLater/></span>
                    <span><RiMenuAddLine/></span>
                    <span><MdOutlineEditNote/></span>
                </div>
            </div>
            <div></div>
            <hr/>
            <div className="myNotes">
                <h4>My Notes</h4>

            </div>
        </div>
        <div className="more-videos-section">
            <h3>More Videos:</h3>

            <div className="card">
                <div className="image">
                    <img src='https://picsum.photos/300/174'/>
                </div>
                <div className="section"></div>
            </div>

            <div className="card">
                <div className="image">
                    <img src='https://picsum.photos/300/174'/>
                </div>
                <div className="section"></div>
            </div>


            <div className="card">
                <div className="image">
                    <img src='https://picsum.photos/300/174'/>
                </div>
                <div className="section">
                    uhiuhiu
                </div>
            </div>
        </div>

    </div>
}
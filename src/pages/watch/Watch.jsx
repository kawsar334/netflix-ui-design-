import "./watch.scss";
import {Link} from "react-router-dom"

const Watch = () => {
  return (
    <div className="watch">
<Link  to="/"className="back">
        {/* <i class="fa-solid fa-left-long"></i> */}
        {"<<"}
</Link >
      <video
        className="video"
        autoPlay
        progress
        controls
        src="https://assets.mixkit.co/videos/preview/mixkit-white-tiger-resting-in-the-woods-6803-large.mp4"      
      />


     
    </div>
  )
}

export default Watch
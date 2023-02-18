import { useState } from "react"
import "./listitem.scss";
import {Link} from "react-router-dom"
const ListItem = ({index}) => {

    const [isHoverd, setIsHovered] = useState(false) ;
    const [like, setLike] =useState(false)
    
  return (
    <Link  to="/video/:id" className="listItem"
    // style={{left :isHoverd && index *225 - 50 }}
     onMouseEnter={()=>setIsHovered(true)}
      onMouseLeave={()=>setIsHovered(false)}>
          <img src="https://images.pexels.com/photos/2726370/pexels-photo-2726370.jpeg?auto=compress&cs=tinysrgb&w=1260&h=75&dpr=1" alt="Loading..." />
          <div className="itemInfo">
            <div className="itemInfoTop">
                <span>1 hour 14 mins </span>
                <span className="limit">+16</span>
                <span>1999</span>
            </div>
            <p className="desc">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eum laboriosam fuga deserunt,
            </p>
            <div className="genre">Action</div>
        <div className="icons">
          <i class="fa-solid fa-play"></i>
          <i class="fa-solid fa-plus"></i>
          {like ? <i class="fa-solid fa-thumbs-up" onClick={() => setLike(!like)}></i> : <i class="fa-regular fa-thumbs-up" onClick={()=>setLike(!like)}></i>
         }
          <i class="fa-regular fa-thumbs-down"></i>
        </div>

          </div>

    </Link>
  )
}

export default ListItem
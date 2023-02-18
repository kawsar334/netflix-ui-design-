import { useState } from "react";
import { useEffect } from "react";
import "./featured.scss" ;


const Featured = ({type}) => {
 


 

  return (

    <div className={"featured"} >

        {type &&  <div className="category">
            <span>{type === "movie" ?"Movies": "Series"}</span>
            <select name="genre" id="genre">
                <option >Genre</option>
                <option value="adventure"> Adventure</option>
                  <option value="comedy"> comedy</option>
                  <option value="Fantasy"> Fantasy</option>
                  <option value="horror"> Horror</option>
                  <option value="romance"> Romance</option>
                  <option value="western"> western</option>
                  <option value="animation"> animation</option>
                  <option value="drama"> drama</option>
                  <option value="documentary"> documentary</option>
            </select>   
                    
            </div>}

          <img src="https://images.pexels.com/photos/5725972/pexels-photo-5725972.jpeg?auto=compress&cs=tinysrgb&w=400" width="100%" />
          <div className="info">
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png" alt="" />
              <span className="desc">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Error necessitatibus ratione expedita facere sapiente vitae quos, accusamus maiores impedit veniam, iusto officiis est minima quibusdam molestiae? Labore laborum molestias facere.
              </span>
              <div className="buttons">
                  <button className="play"><i class="fa-solid fa-play"></i> <span>Play</span> </button>
                  <button className="more"><i class="fa-solid fa-circle-info"></i> <span>Info</span></button>

              </div>
          </div>
    </div>
  )
}

export default Featured
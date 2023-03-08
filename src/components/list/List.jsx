import { useRef, useState } from "react";
import ListItem from "../listItem/ListItem";
import "./list.scss" ;
import Slider from 'infinite-react-carousel';
import { Carousel } from 'react-responsive-carousel';

const List = () => {



  
  return (
    <div className="list">
        <span className="listTitle">Continue to watch</span>
        <div className="wrapper">

          
              <Slider dots slidesToShow={5} className="container" arrowsScroll={2} autoplay={true} autoplaySpeed={6000}>
                
                 <ListItem />
                  <ListItem />
                  <ListItem />
                  <ListItem />
                  <ListItem /> 
                  <ListItem />
                  <ListItem />
                  <ListItem />
                  <ListItem />
                  <ListItem /> 

                </Slider>
              

        </div>

    </div>
  )
}

export default List
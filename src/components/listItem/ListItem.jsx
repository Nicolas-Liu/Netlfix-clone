import React, {useState} from 'react';
import './listItem.scss';
import play from '../icons/play-arrow.svg'
import trailer from '../icons/video.mp4'
import Watch from '../../pages/watch/watch'
import {Link} from 'react-router-dom';


const ListItem = ({index}) => {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <Link to={{pathname: "/watch", trailer: trailer}}>
    <div className="listItem" 
    style={{left: isHovered && index *225 -50 + index *2.5}}
    onMouseEnter={()=>setIsHovered(true)} 
    onMouseLeave={()=>setIsHovered(false)}
    >
      <img src="https://i.ytimg.com/vi/PS4gsWDSn68/maxresdefault.jpg" alt="" />

        {/*<img src="https://img.huffingtonpost.com/asset/5ea1b089300000580f154c3b.jpeg?cache=UHhxbL6HUY&ops=scalefit_720_noupscale" 
        alt="" 
  />*/}
        {isHovered && (
            <>
         <video src={trailer} autoPlay={true} loop/>
        <div className="itemInfo">
          <div className="icons">
          </div>
          <div className="itemInfoTop">
            <span>1 hour 15 mins</span>
            <span className= 'limit'>+16</span>
            <span>2019</span>
            <button className="play">Play</button>
          </div>
          <div className="desc">
            Filmmaker Martin Scorsese chronicles the troubled spirit of America in 1975 along with the joyous music that Bob Dylan performed during the fall of that year.

          </div>
          <div className="genre">Thriller</div>
        </div>
        </>
        )}
    </div>
    </Link>
  )
}

export default ListItem
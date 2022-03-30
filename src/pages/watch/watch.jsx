import React from 'react';
import './watch.scss';
import Video from '../../components/icons/video.mp4';
import BackArrow from '../../components/icons/back.svg'
import {Link} from 'react-router-dom';

const watch = () => {
  return (
    <div className="watch">
      <Link to ="/">
        <div className="back">
            <img src={BackArrow} alt="" className='backArrow'/>
            Home
        </div>
      </Link>
        <video src={Video} className="video" autoPlay progress controls></video>
    </div>
  )
}

export default watch
import { Rotate90DegreesCcw } from '@material-ui/icons';
import React, {useState, useRef} from 'react';
import './list.scss';
import ListItem from '../listItem/ListItem.jsx';


const List = () => {

  const [slideNumber, setSlideNumber] = useState(0);

  const listRef = useRef()

  const handleClick = (direction) => {
    let distance = listRef.current.getBoundingClientRect().x - 50
    if (direction === 'left' && slideNumber > 0){
      setSlideNumber(slideNumber - 1)
      listRef.current.style.transform = `translateX(${230+ distance}px)`

    }
    if (direction === 'right' && slideNumber < 5){
      setSlideNumber(slideNumber + 1)
      listRef.current.style.transform = `translateX(${-230+ distance}px)`

    }
    console.log(distance)
  }

  return (
    <div className="list">
        <span className="listTitle">Continue to watch</span>
        <div className="wrapper">
            <img className="arrow right" style={{transform: "rotate(180deg)"}}src="https://img.icons8.com/ios-glyphs/344/arrow.png" 
            alt="left"  onClick={() => handleClick('left')}/>
                <div className="container" ref={listRef} 
                >
                   <ListItem index={0}/>
                   <ListItem index={1}/>
                   <ListItem index={2}/>
                   <ListItem index={3}/>
                   <ListItem index={4}/>
                   <ListItem index={5}/>
                   <ListItem index={6}/>
                   <ListItem index={7}/>
                   <ListItem index={8}/>
                   <ListItem index={9}/>
                   <ListItem index={10}/>                 
                   <ListItem index={11}/>
                   <ListItem index={12}/>
                   <ListItem index={13}/>                 
                </div>
            <img className="arrow left" style={{}}src="https://img.icons8.com/ios-glyphs/344/arrow.png" 
            alt="right" onClick={() => handleClick('right')}/>
        </div>
    </div>
  )
}

export default List
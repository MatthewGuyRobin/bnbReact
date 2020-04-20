import React from 'react';
import './App.css';
import bed1 from './images/bed-1.jpeg';
import bed2 from './images/bed-2.jpeg';
import bed3 from './images/bed-3.jpeg';
import star from './images/stars.png';
import star1 from './images/stars1.png';
import star2 from './images/stars2.png';

const Image = (props) => {
  return(
    <img className="pic" src={props.src} alt={props.alt}/>
  )
}

const Description = (props) => {
  return(
    <div className="description">
      <p>{props.desc}</p>
    </div>
  )
}

const Rating = (props) => {
  return (
    <div className="rating">
      <img src={props.img} alt={props.alt}/>
    </div>
  )
}

const Show = (props) => {
  return(
    <div className="box">
      <Image src={props.src} alt={props.alt}/>
      <Rating img={props.img} alt={props.alt}/>
      <Description desc={props.desc}/>
    </div>
  )
}

class App extends React.Component{
  render(){
    return (
      <div>
        <h1 className="title">Bnb</h1>
        <div className="container">
        <div className="reviewBox">
          <Show src={bed1} alt="bed1" img={star}  desc="Gary was such a great host during our time in Brighton. He made us feel at home and was helpful with any questions we had about directions or things to do. The room has.."/>
        </div>
        <div className="reviewBox">
          <Show src={bed2} alt="bed2" img={star1} desc="Very accomodating with my booking and welcoming to all of us. Thanks!"/>
        </div>
        <div className="reviewBox">
          <Show src={bed3} alt="bed3" img={star2} desc="Wow... Alyson is truly an amazing person. 1st class accomodations and we got difficult news that a loved one had passed the morning we were schedule to leave..."/>
        </div>
        </div>
      </div>
    )
  }
}

export default App;

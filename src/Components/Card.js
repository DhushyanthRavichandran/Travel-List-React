import React from 'react';

const Card = (props) => {
  return (
    <div>
      <div className='wrapper'>
       <img src={props.img} alt='img' className='card-img'/>
        <div className='innerwrapper'>
        <h2>{props.loc}</h2>
        <h4>{props.country}</h4>
        <h3>{props.date}</h3>
        <p>{props.info}</p>
      </div>
      </div>
    </div>
  );
};

export default Card;

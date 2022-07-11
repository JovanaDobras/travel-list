import React from 'react';
import './TravelList.css';
import { useState } from 'react';

function TravelList({travel, Delete}) {

    const [readMore, setreadMore ] = useState(false);

  return (
    <div className='container'>
        <div className='travel'>
            
            <div className='border'></div>

        {travel.map((travels, index) => {
            return (
            <div className='travel-all' key={index}>
                <img src={travels.image}></img>
                <div className='name-price'>
                    <h2>{travels.name}</h2>
                    <p>{travels.price}$</p>
                </div>

                <div><p className='readp'>{readMore ? travels.info : travels.info.substring(0, 200)+`...`}
                    <button className="read-more" onClick={() => setreadMore(!readMore)}>{ !readMore ? "Read More" : "Read Less"}</button></p></div>

                    <button className='btn-delete' onClick={() => Delete(travels.id)}>Not Interested</button>
            </div>
            );
        })}
        </div>   
    </div>
        
  );
};

export default TravelList;
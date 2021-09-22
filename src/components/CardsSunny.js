import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function CardsSunny() {
    return (
        <div className='cards'>
        <h1>select an option</h1>
        <div className='cards__container'>
          <div className='cards__wrapper'>
            <ul className='cards__items'>
              <CardItem
                src='images/sunny_side_up_runny.png'
                text='runny sunny egg'
                path='/runny-sunny-side-up'
              />
              <CardItem
                src='images/sunny_side_up_main.png'
                text='medium sunny egg'
                path='/medium-sunny-side-up'
              />
            </ul>
          </div>
        </div>
      </div>
    )
}

export default CardsSunny

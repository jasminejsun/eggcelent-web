import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
    return (
      <div className='cards'>
        <h1>select an option</h1>
        <div className='cards__container'>
          <div className='cards__wrapper'>
            <ul className='cards__items'>
              <CardItem
                src='images/boiled_main.png'
                text='boiled egg'
              />
              <CardItem
                src='images/poached_main.png'
                text='poached egg'
                path='/services'
              />
              <CardItem
                src='images/scrambled_main.png'
                text='scrambled egg'
                path='/services'
              />
              <CardItem
                src='images/sunny_side_up_main.png'
                text='sunny-side-up egg'
                path='/products'
              />
            </ul>
          </div>
        </div>
      </div>
    );
  }  

export default Cards;

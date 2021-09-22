import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function CardsBoiled() {
    return (
      <div className='cards'>
        <h1>select an option</h1>
        <div className='cards__container'>
          <div className='cards__wrapper'>
            <ul className='cards__items'>
              <CardItem
                src='images/soft_boiled.png'
                text='soft boiled egg'
                path='/timer'
              />
              <CardItem
                src='images/boiled_jammy.png'
                text='jammy boiled egg'
                path='/jammy-boiled'
              />
              <CardItem
                src='images/boiled_main.png'
                text='medium boiled egg'
                path='/medium-boiled'
              />
              <CardItem
                src='images/hard_boiled.png'
                text='hard boiled egg'
                path='/hard-boiled'
              />
            </ul>
          </div>
        </div>
      </div>
    )
}

export default CardsBoiled

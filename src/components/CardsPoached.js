import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function CardsPoached() {
    return (
        <div className='cards'>
        <h1>select an option</h1>
        <div className='cards__container'>
          <div className='cards__wrapper'>
            <ul className='cards__items'>
              <CardItem
                src='images/poached_runny.png'
                text='runny poached egg'
                path='/runny-poached'
              />
              <CardItem
                src='images/poached_main.png'
                text='jammy poached egg'
                path='/jammy-poached'
              />
              <CardItem
                src='images/poached_medium_firm.png'
                text='medium poached egg'
                path='/medium-poached'
              />
              <CardItem
                src='images/poached_firm.png'
                text='hard poached egg'
                path='/hard-poached'
              />
            </ul>
          </div>
        </div>
      </div>
    )
}

export default CardsPoached

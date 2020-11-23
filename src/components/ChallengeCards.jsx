import React from 'react'
import CardItem from './CardItem';

function ChallengeCards() {
    return (
        <div className='cards'>
            <h1>Kódolási kihívások </h1>
            <div class="container">
              <div class="row">
                <div class="col-sm">
                  <CardItem
                    src='images/img-9.jpg'
                    text='Explore the hidden waterfall deep inside the Amazon Jungle'
                    label='Adventure'
                    path='/services'
                  />
                </div>
              </div>
            </div>
        </div>
    )
}

export default ChallengeCards

import React from 'react'
import CardItem from './CardItem';
import { useTranslation } from "react-i18next";

function ChallengeCards() {
  const { t } = useTranslation();
    return (
        <div className='cards'>
            <h1> {t("Challenges Header")} </h1>
            <div className="container">
              <div className="row">
                <div className="col-sm">
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

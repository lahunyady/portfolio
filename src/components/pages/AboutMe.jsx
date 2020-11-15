import React, { memo } from 'react';
import '../../App.css';
import CardItem from '../CardItem';

export default memo(function AboutMe() {
    return (
        <div className="about-me">
            <div className="container">
                <div className="row">
                    <div className="col-lg-1"/>
                    <div className="col-lg-4">
                    <CardItem
                        src='images/lhy.jpg'
                        text={['A ',<a href="https://sigmatechnology.se/sigma-technology-hungary/" className="higlight">Sigma Technology</a>,' alkalmazottjaként dolgozok ',<a href="https://www.ericsson.com/en" className="higlight"> Ericsson</a>,' projekteken. Fontos számomra a kód tisztításával csökkenteni a szállítási időt, a folyamatos fejlődés és a precizitás.']}
                        label='László Hunyady'
                    />
                    </div>
                    <div className="col-lg-6">
                    One of three columns
                    </div>
                    
                </div>
            </div>
            <div className="introduction">
            </div>
        </div>        
    )
})

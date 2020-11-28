import React, { memo } from 'react';
import { HorizontalBar } from 'react-chartjs-2';
import '../../App.css';
import CardItem from '../CardItem';

const data = {
    labels: ['Java', 'Spring', 'PostgreSQL', 'Elasticsearch', 'Git', 'Maven', 'Docker'],
    datasets: [
      {
        label: 'Skill level',
        backgroundColor: 'rgba(31,152,244,0.6)',
        hoverBackgroundColor: 'rgba(31,152,244,1)',
        data: [85, 70, 60, 50, 50, 40, 30],
      }
    ]
  };

const options = {
    legend: {display: false},
    tooltips: {enabled: false},
    hover: {mode: null},
        scales: {
            xAxes: [{
                gridLines: {
                    color: "rgba(190,190,190,1)",
                    drawBorder: false,
                    drawTicks: false
                },
                ticks: {
                    max:100,
                    min: 0,
                    stepSize: 25,
                    fontFamily: "'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif'",
                    fontColor: "#000",
                    padding: 15,
                    fontSize: 14,
                    callback: function(value, index, values) {
                        switch(value) {
                            case 0: 
                                return "A micsoda?";
                            case 25:
                              return "Össze tudom ollózni";
                            case 50:
                                return "Napi szinten használom";
                            case 75:
                                return "Képes vagyok optimalizálni";
                            case 100:
                                return "Mindent tudok";
                            default:
                                return "";
                          }
                    }
                }
            }],
            yAxes: [
                {
                    gridLines: {
                        color: "rgba(190,190,190,0)",
                        drawBorder: false,
                    },
                    ticks: {
                        fontSize: 14,
                        fontColor: "#000",
                        fontFamily: "'PT Sans'"
                    }
                }
            ]
        }
  }

export default memo(function AboutMe() {
    return (
        <div className="about-me">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-4 col-sm-12">
                        <CardItem
                            src='images/lhy.jpg'
                            text={['A ', <a key="sigma" href="https://sigmatechnology.se/sigma-technology-hungary/" className="higlight">Sigma Technology</a>, ' alkalmazottjaként dolgozok ', <a key="ericsson" href="https://www.ericsson.com/en" className="higlight"> Ericsson</a>, ' projekteken. Fontos számomra a kód tisztításával csökkenteni a szállítási időt, a folyamatos fejlődés és a fókusz tartás.']}
                            label='László Hunyady'
                        />
                    </div>
                    <div className="col-lg-6 col-sm-12 my-auto">
                        <div className="container">
                            <div className="row">
                                <HorizontalBar    
                                data={data}
                                width={100}
                                height={60}
                                options= {options}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>        
    )
})

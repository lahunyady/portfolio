import React, { memo } from 'react';
import { HorizontalBar } from 'react-chartjs-2';
import '../../App.css';
import CardItem from '../CardItem';
import { useTranslation } from "react-i18next";

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

export default memo(function AboutMe() {
    const { t } = useTranslation();

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
                                    return t("Skill level 0")
                                case 25:
                                    return t("Skill level 1")
                                case 50:
                                    return t("Skill level 2")
                                case 75:
                                    return t("Skill level 3")
                                case 100:
                                    return t("Skill level 4")
                                default:
                                    return t("Skill level Default")
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
                            fontFamily: "'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif"
                        }
                    }
                ]
            }
      }

    return (
        <div className="about-me">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-4 col-sm-12">
                        <CardItem
                            src='images/lhy.jpg'
                            text={[t("Pre Sigma"), <a key="sigma" href="https://sigmatechnology.se/sigma-technology-hungary/" className="higlight">Sigma Technology </a>, t("Post Sigma"), <a key="ericsson" href="https://www.ericsson.com/en" className="higlight"> Ericsson </a>, t("Post Ericsson"),t("Motto")]}
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

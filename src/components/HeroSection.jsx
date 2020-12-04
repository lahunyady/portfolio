import React from 'react';
import './HeroSection.css';
import '../App.css';
import { makeStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';
import { useTranslation } from "react-i18next";

const useStyles = makeStyles((theme) => ({
    whiteColor: {
      margin: "40px",
      borderRadius: "100px",
      color: "white",
      fontFamily: "'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif",
      fontSize:"1.2rem",
      minHeight: 0,
      padding: 'px 5px 0px 5px',
      backgroundColor: "#1f98f4",
      '&:hover': {
        background: "#0056b3",
        color: "white"
     },
      minWidth: "13rem"      
    }
  }));

function HeroSection() {
    const { t } = useTranslation();
    const classes = useStyles();

    return (
        <div  className='hero-container'>
            <h1>{t("Name")}</h1>
            <p>{t("Title")}</p>
                <Button variant="contained" href="/about-me" classes={{root: classes.whiteColor}}>
                    {t("About Me")}
                </Button>
        </div>
    )
}

export default HeroSection

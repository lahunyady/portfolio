import React from 'react';
import './HeroSection.css';
import '../App.css';
import { useTranslation } from "react-i18next";
import { Button } from '@material-ui/core';

function HeroSection() {
    const { t } = useTranslation();

    return (
        <div className='hero-container'>
            <h1>{t("Name")}</h1>
            <p>{t("Title")}</p>
                <Button variant="contained"  href="/about-me">
                    {t("About Me")}
                </Button>
        </div>
    )
}

export default HeroSection

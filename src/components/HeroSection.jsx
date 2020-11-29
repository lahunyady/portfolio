import React from 'react';
import './HeroSection.css';
import '../App.css';
import { useTranslation } from "react-i18next";

function HeroSection() {
    const { t } = useTranslation();

    return (
        <div className='hero-container'>
            <h1>{t("Name")}</h1>
            <p>{t("Title")}</p>
        </div>
    )
}

export default HeroSection

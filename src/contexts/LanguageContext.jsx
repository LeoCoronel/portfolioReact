import React, { createContext, useState, useEffect } from 'react';
import Spanish from '../languages/es-MX.json';
import English from '../languages/en-US.json';

export const LanguageContext = createContext();

// DEFAULT
let localLang= localStorage.getItem('lang');
let lang;

if(localLang === null) {
    localLang = "es";
}

if(localLang === 'es') {
    lang = Spanish;
} else if(localLang === 'en'){
    lang = English;
}

let dataLang = {
    locale: localLang,
    lang: lang
}

export const LanguageProvider = ({ children }) => {
    const [data, setData] = useState(dataLang);

    useEffect(() => {
        localStorage.setItem('lang', data.locale);
    }, [data.locale])

    const toggleData = () => {
        if(data.locale === 'es') {
            setData({"locale":"en", "lang":English})
        } else {
            setData({"locale":"es", "lang":Spanish})
        }
    }

    return (
        <LanguageContext.Provider value={{
            data, setData, toggleData
        }}>
            {children}
        </LanguageContext.Provider>
    )
}
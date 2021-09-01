import React, { useState, useContext, useEffect } from 'react'
import './App.css'

import Home from './views/Home';
import About from './views/About';
import Skills from './views/Skills';
import Projects from './views/Projects';
import Contact from './views/Contact';
import Footer from './views/Footer';

import { ThemeProvider } from 'styled-components';
import {lightTheme, darkTheme, GlobalStyles} from './Themes.js';

import { IntlProvider } from 'react-intl';

import { LanguageContext } from './contexts/LanguageContext';

let localTheme = localStorage.getItem('theme');

if(localTheme == null) {
  localTheme = "light";
}

function App() {
  const { data } = useContext(LanguageContext);
  const [theme, setTheme] = useState(localTheme);

  {useEffect(() => {
    localStorage.setItem('theme', theme);
  }, [theme])}

  const themeToggler = () => {
    theme === 'light' ? setTheme('dark') : setTheme('light');
  }

  // Sticky navbar

  useEffect(() => {
    window.onscroll = () => {
      handleScroll();
    }
  }, [])

  const handleScroll = () => {
    let nav = document.querySelector("nav");
    let navTop = nav.getBoundingClientRect();
    nav.classList.toggle('sticky', window.scrollY > navTop.y + 200);
  }

  return (
      <IntlProvider locale={data.locale} messages={data.lang}>
        <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
          <GlobalStyles />
          <div className="app">
            <Home setTheme={setTheme} glTheme={theme} />
            <About />
            <Skills />
            <Projects />
            <Contact />
            <Footer />
          </div>
        </ThemeProvider>
      </IntlProvider>
    )
}

export default App

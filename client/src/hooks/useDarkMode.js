import { useState, useEffect} from 'react';
import useLocalStorage from './useStorage'


const useDarkMode=()=>{
    const [darkMode, setDarkMode]= useLocalStorage();
    useEffect(()=>{
        const body= document.querySelector('body');
        darkMode? body.classList.remove('dark-mode') : body.classList.add('dark-mode');
    }, [darkMode]);
   
    return [darkMode,setDarkMode];
}

export default useDarkMode;



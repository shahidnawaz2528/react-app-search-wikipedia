import React, { useEffect, useState } from 'react'
import axios from "axios";

// AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM

const Convert = ({language, text}) => {
    const KEY = 'AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM'

    const [results, setResults] = useState('');
    const [debouncedTerm, setDebouncedterm] = useState(text);


    useEffect(()=> {
        const timerId = setTimeout(()=> {
            if(text){
                setDebouncedterm(text); 
            }
        }, 700)

        return () => {
            clearTimeout(timerId);
        };
    }, [text])

    useEffect(()=> {
        // console.log("nu lang or tex")
        // console.log(result)
        const search = async ()=> {
            const {data} = await axios.post('https://translation.googleapis.com/language/translate/v2',{}, {
                params: {
                    q: debouncedTerm,
                    target: language.value,
                    // format: 'json',
                    key: KEY
                    },
                }
            );

        setResults(data.data.translations[0].translatedText);
        };
        
        search(); 
    }, [language, debouncedTerm]);

  return (
    <div>
        <h1 className='ui header'>{results}</h1>
    </div>
  )
}

export default Convert
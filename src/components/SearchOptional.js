import React, { useEffect, useState } from 'react'
import axios from "axios";

// this he did for a dependency missing warning on console which i didnt had so even after doing all that almost
//everything stays same for me and i also didnt really understand what kind of stuff he was trying to teach
// in that 20 min long video in module 12

const SearchOptional = () => {

    const [searchTerm, setSearchTerm] = useState('ahmadiyya');
    const [debouncedTerm, setDebouncedterm] = useState(searchTerm);
    const [results, setResults] = useState([]);

    // console.log(results);

    useEffect(()=> {
        const timerId = setTimeout(()=> {
            if(searchTerm){
                setDebouncedterm(searchTerm); 
            }
        }, 700)
        
        // search(); 

        return () => {
            clearTimeout(timerId);
        };
    }, [searchTerm])

    useEffect(()=> {
        const search = async ()=> {
            const {data} = await axios.get('https://en.wikipedia.org/w/api.php', {
                params: {
                    action: 'query',
                    list: 'search',
                    origin: '*',
                    format: 'json',
                    srsearch: debouncedTerm
                    },
                }
            )
        setResults(data.query.search);
        };

        search();

    }, [debouncedTerm]);

    const renderedlist = results.map((result) => {
        return(
            //can also use pageid
            <div key={result.title} className='item'>
                <div className='right floated content'>
                    <a 
                        className='ui button'
                        href={`https://en.wikipedia.org/?curid=${result.pageid}`}
                    >Go</a>
                </div>
                <div className='content'>
                    <div className='header'>
                        {result.title}
                    </div>
                    <span dangerouslySetInnerHTML={{ __html: result.snippet }}></span>
                    {/* {result.snippet} */}
                </div>
            </div>
        );
    })
  return (
    <div>
        <form className='ui form'>
            <div className='field'>
                <label>Search Anything</label>
                <input 
                    className='input'
                    value={searchTerm}
                    onChange={(event) => setSearchTerm(event.target.value)}
                />
            </div>
        </form>
        <div className='ui celled list'>
        {renderedlist}
        </div>
    </div>
  )
}

export default SearchOptional
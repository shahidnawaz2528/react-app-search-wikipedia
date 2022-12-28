import React, { useEffect, useState } from 'react'
import axios from "axios";

const Search = () => {

    const [searchTerm, setSearchTerm] = useState('ahmadiyya');
    const [results, setResults] = useState([]);

    // console.log(results);

    useEffect(()=> {
        const search = async ()=> {
            const {data} = await axios.get('https://en.wikipedia.org/w/api.php', {
                params: {
                    action: 'query',
                    list: 'search',
                    origin: '*',
                    format: 'json',
                    srsearch: searchTerm
                    },
                }
            )
        setResults(data.query.search);
        };

        if(searchTerm && !results.length){
            search();
        } else {
            const timerId = setTimeout(()=> {
                if(searchTerm){
                    search(); 
                }
            }, 700)
            
            // search(); 
    
            return () => {
                clearTimeout(timerId);
            };
        }
        

    }, [searchTerm, results.length]);

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

export default Search
import React, { useState } from 'react'
import Dropdown from './Dropdown';
import Convert from './Convert';

const Translate = () => {
    const options = [
        {
            label: 'Afrikaans',
            value: 'af'
          },
          {
            label: 'Arabic',
            value: 'ar'
          },
          {
            label: 'Hindi',
            value: 'hi'
          }
    ];
    const [language, setLanguage] = useState(options[0]);
    const [text, setText] = useState('');

  return (
    <div>
        <div className='ui form'>
            <div className='field'>
                <label>Type Text</label>
                <input value={text} onChange={(e)=> setText(e.target.value)} />
            </div>
        </div>
        <Dropdown
            label= "Select a Language" 
            options={options} 
            selected={language} 
            onSelectedChange={setLanguage} 
        />
        <hr/>
        <h3 className='ui header'>Converted Results</h3>
        <Convert
            language={language}
            text={text}
         />
    </div>
  )
}

export default Translate
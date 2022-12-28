import React, { useState } from 'react';
import Accordion from './components/Accordion';
import Search from './components/Search';
import SearchOptional from './components/SearchOptional';
import Dropdown from './components/Dropdown';
import Translate from './components/Translate';
import Route from './components/Route';
import Header from './components/Header';

function App() {

  const items = [
    {
      title: '0What is React?',
      content: '0React is a front end JavaScript Library.'
    },
    {
      title: '1What is React?',
      content: '1React is a front end JavaScript Library.'
    },
    {
      title: '2What is React?',
      content: '2React is a front end JavaScript Library.'
    }
  ];

  const options = [
    {
      label: 'The Color Green',
      value: 'green'
    },
    {
      label: 'A shade of Blue',
      value: 'blue'
    },
    {
      label: 'The Color Red',
      value: 'red'
    }
  ];

  const [selected, setSelected] = useState(options[0]);
  const [showDropdown, setShowDropdown] = useState(true);

  // const showAccordian = () => {
  //   if (window.location.pathname === '/') {
  //     return <Accordion items={items} />;
  //   }
  // };

  // const showSearch = () => {
  //   if (window.location.pathname === '/search') {
  //     return  <Search />;
  //   }
  // };

  // const displayDropdown = () => {
  //   if (window.location.pathname === '/menu') {
  //     return (
  //       <Dropdown
  //         label="Please Select a Colour" 
  //         selected={selected}
  //         onSelectedChange={setSelected}
  //         options={options} 
  //       />
  //     ) 
  //   }
  // };

  // const showTranslate = () => {
  //   if (window.location.pathname === '/translate') {
  //     return <Translate />;
  //   }
  // };

  return (
    <div>
        <Header />
        {/* <Accordion items={items} /> */}
        {/* <Search /> */}
        {/* <SearchOptional /> */}
        {/* <button onClick={()=> setShowDropdown(!showDropdown)}>Show DropDown Menu</button>
        {showDropdown ?
          <Dropdown
            label="Please Select a Colour" 
            selected={selected}
            onSelectedChange={setSelected}
            options={options} 
          /> 
          : null
        } */}
        {/* <Translate /> */}

        {/* {showAccordian()}
        {showSearch()}
        {displayDropdown()}
        {showTranslate()} */}

        <Route path='/'>
          <Accordion items={items}/>
        </Route>
        <Route path='/search'>
          <Search />
        </Route>
        <Route path='/menu'>
          <Dropdown
            label="Please Select a Colour" 
            selected={selected}
            onSelectedChange={setSelected}
            options={options} 
          />
        </Route>
        <Route path='/translate'>
          <Translate />
        </Route>
    </div>
  );
}

export default App;

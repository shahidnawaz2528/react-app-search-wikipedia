import React from 'react'
import Link from './Link'

const Header = () => {
  return (
    <div className='ui secondary pointing menu'>
        {/* <a className='item' href='/'>
            Accordion
        </a>
        <a className='item' href='/search'>
            Wikipedia
        </a>
        <a className='item' href='/menu'>
            Menu
        </a>
        <a className='item' href='/translate'>
            Translate
        </a> */}
        <Link className='item' href='/'>
            Accordion
        </Link>
        <Link className='item' href='/search'>
            Wikipedia
        </Link>
        <Link className='item' href='/menu'>
            Menu
        </Link>
        <Link className='item' href='/translate'>
            Translate
        </Link>
    </div>
  )
}

export default Header
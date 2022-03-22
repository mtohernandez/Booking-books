import React from 'react';
import './header.css';
import book_image from '../../components/assets/book.png'

const Header = () => {
  return (
    <div className='booked__header section__padding'>
      <div className='booked__header-content'>
        <h1 className='test-text'>Booking Books Made Easy.</h1>
        <p>From begin to end booking books is now this easy</p>
      </div>
      <div className='booked__header-image zoom-text'>
          <img src={book_image} alt="book_image" width={300}/>
      </div>
    </div>
  )
}

export default Header
import React from 'react'

function Footer() {
  return (
    <div>
      <div className='foot'>
       <h1 className='fh'>Get our freshest content delivered to your inbox</h1>
       <p className='fp'>For the latest stories, news, events, promotions and exclusive offers, sign up today. We know you get a<br/>lot of emails, but we promise... ours is the one you want.</p>
       <input id='ip'  type='email' placeholder='Your email'></input>
       <button className='subs'>SUBSCRIBE</button>
       <div className='wd'>
       <ul className='unlist'>
        <li className='ab'>About</li> 
         <li>Search</li>
        <li>Contact</li>
         <li>Fcebook</li>
         <li>Twitter</li>
       </ul>
       </div>
       <p className='last'>© Industrial Design Magazine</p>
      </div>
    </div>
  )
}

export default Footer;

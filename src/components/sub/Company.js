import React from 'react'

function Company() {
  const logoURL = "./img/기업1.PNG"
  return (
    <>
    <section id='company'>
      <img src={process.env.PUBLIC_URL + logoURL} alt="" />
      <div className='inner'>
        <h1>"Nature-conscious architecture"</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, nisi.</p>
      </div>
    </section>
    
    
    </>
    
  )
}

export default Company
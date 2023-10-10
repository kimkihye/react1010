import React, { useRef, useState, useEffect} from 'react';

function Company() {
  const [name, setName] = useState([]);
  const [input, setInput] = useState('');
  const [count, setCount] = useState(0);
  const countRef = useRef(0);
  const logoURL = "./img/기업1.PNG";

  function inserinput(e) {
    setInput(e.target.value);
  }
  function setUpdate() {
    setName((prevState) => {
      return [...prevState, input];
    });
  }

  function plusRef() {
    setCount(count + 1); // count 상태 업데이트
    countRef.current = countRef.current + 1;
    console.log("useRef:", countRef.current);
  }
  // function plusRef() {
  //   countRef.current = countRef.current + 2;
  //   console.log("useRef:", countRef.current);
  // }
  useEffect(() => {

	}, [count]);

	useEffect(() => {
    
	}, [name]);

  return (
    <>
      <section id='company'>
        <img src={process.env.PUBLIC_URL + logoURL} alt="" />
        <div className='inner'>
          <h1>"Nature-conscious architecture"</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, nisi.</p>
        </div>
      </section>

      <div>
        <input type='text' value={input} onChange={inserinput} />
        <button onClick={setUpdate}>Update</button>
        
        {name.map((el, index) => {
          return <p key={index}>{el}</p>;
        })}
        
        <p>count : {count}</p> 
        <button onClick={plusRef}>count</button> 

        <input type="texts" value={name} onChange={inserinput} />
			  <span>name : {name}</span>
      </div>
    </>
  );
}

export default Company;

import React, { useState } from 'react';
import './App.css';

function App() {
  const [bgColor, setBgColor] = useState('#FFFFFF'); // Default background color is white
  const [displayHex, setDisplayHex] = useState(false); // Initially, display simple color names
  console.log(bgColor)
  // Color data with simple color names and hex values

  const list = [
    { name: 'Red', hex: '#FF0000' },
    { name: 'Green', hex: '#00FF00' },
    { name: 'Blue', hex: '#0000FF' },
    { name: 'Blue', hex: '#0000FF' },
    { name: 'Yellow', hex: '#FFFF00' },
    { name: 'Olive', hex: '#808000' },
    { name: 'Lime', hex: '#00FF00' },
    { name: 'Aqua', hex: '#00FFFF' },
    { name: 'Pink', hex: '#FFC0CB' },
    { name: 'Orange', hex: '#FFA500' },
    { name: 'Purple', hex: '#800080' },
    { name: 'Teal', hex: '#008080' },
    { name: 'LightCoral', hex: '#F08080' },
    // Add more colors here
  ];
  
  

  const getRandomColor = () => {
    const randomColor = list[Math.floor(Math.random() * list.length)];
    setBgColor(randomColor[displayHex ? 'hex' : 'name']);
  };


  const toggleHexDisplay = () => {
    setDisplayHex(!displayHex);
  };

  

  return (
    <>
      <div className="App" style={{backgroundColor: bgColor}}>
        
      <header className="App-header">
        <h2>Color Flipper</h2>
        <div className="options">
          <p onClick={toggleHexDisplay} className={displayHex ? '' : 'active'}>
            Simple
          </p>
          <p onClick={toggleHexDisplay} className={displayHex ? 'active' : ''}>
            Hex
          </p>
        </div>
      </header>
        
        <h3>The color is {bgColor}</h3>
          <button className='btnChange' onClick={getRandomColor}>
            Change Color
          </button>

          {/* {list.map((lists, index) =>(
            <div key={index} >
              <p>{lists.name}</p>
            </div>
          ))} */}
      </div>
    </>
  );
}

export default App;

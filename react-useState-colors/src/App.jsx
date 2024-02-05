import { useState } from 'react';

function App() {  
  const [buttonColor, setButtonColor] = useState('red');
  
  const changeColor = () => {    
    const randomColor = `#${Math.floor(Math.random()*16777215).toString(16)}`;
    setButtonColor(randomColor);
  };

  return (
    <div className="App">
      <button
        style={{ backgroundColor: buttonColor }}
        onClick={changeColor}
      >
        Click here to change the color
      </button>     
    </div>
  );
}

export default App;
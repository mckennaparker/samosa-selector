import {useState} from 'react'
import './App.css'

const App = () => {
  // Introduce State Variables
  const [count, setCount] = useState(0);
  const [multiplier, setMultiplier] = useState(1);

  // Update Count
  const updateCount = () => setCount(count + multiplier);

  // Upgrade Functions
  const buyDoubleStuffed = () => {
    if (count >= 10) {
      setMultiplier(multiplier * 2);
      setCount(count - 10);
    }
  }

  const buyPartyPack = () => {
    if (count >= 100) {
      setMultiplier(multiplier * 5);
      setCount(count - 100);
    }
  }

  const buyFullFeast = () => {
    if (count >= 1000) {
      setMultiplier(multiplier * 10);
      setCount(count - 1000);
    }
  }

  return (
    <div className="App">
      <div className="header">
        <h1>Samosa Selector</h1>
        <h2>Count: {count}</h2>
        <img className="samosa" src="assets/samosa.png" onClick={updateCount} />
      </div>
      <div className="container">
        <div className="upgrade">
          <h3>Double Stuffed 👯‍♀️</h3>
          <p>2x per click</p>
          <button onClick={buyDoubleStuffed}><label>10 samosas</label></button>
        </div>
        <div className="upgrade">
          <h3>Party Pack 🎉</h3>
          <p>5x per click</p>
          <button onClick={buyPartyPack}><label>100 samosas</label></button>
        </div>
        <div className="upgrade">
          <h3>Full Feast 🧑‍🍳</h3>
          <p>10x per click</p>
          <button onClick={buyFullFeast}><label>1000 samosas</label></button>
        </div>
      </div>
    </div>
  )
}

export default App

import React from 'react';
import './App.css';
import { layout } from './Layout.js'
import { puzzleConfig } from './model/PuzzleConfigs.js'
import Model from './model/Model.js'

function App() {

  var puzzle = JSON.parse(JSON.stringify(puzzleConfig))
  const [model, setModel] = React.useState(new Model)
  const appRef = React.useRef(null)
  const canvasRef = React.useRef(null)

  React.useEffect (() => {
    redrawCanvas(model, canvasRef.current, appRef.current)
  }, [model])


  return (
    <main style={layout.Appmain} ref={appRef}>
      <canvas tabIndex="1" className='App-canvas' ref={canvasRef} width={layout.width} height={layout.height}/>
      <label style={layout.text}>Empty Squares: </label>
      <div style={layout.buttons}>
        <button style={layout.up}> Up </button>
      </div>
    </main>
  );
}

export default App;

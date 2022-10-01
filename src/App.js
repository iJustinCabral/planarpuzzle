import React from 'react';
import './App.css';
import { layout } from './Layout.js'
import { config0, config1, config2 } from './model/PuzzleConfigs.js'
import { redrawCanvas } from './boundary/Boundary.js';
import { Up, Down, Left, Right } from './model/Model.js';
import { selectConfig, selectSquare, extendColor, resetPuzzle} from './controller/Controllers.js';
import Model from './model/Model.js'

function App() {

  var puzzle = JSON.parse(JSON.stringify(config0))
  const [model, setModel] = React.useState(new Model(puzzle))

  const appRef = React.useRef(null)
  const canvasRef = React.useRef(null)

    React.useEffect (() => {
      redrawCanvas(model, canvasRef.current, appRef.current)
    }, [model]) 

    const handleClick = (e) => {
      let newModel = selectSquare(model, canvasRef.current, e)
      setModel(newModel)
    }
  
    const extenColorHandler = (direction) => {
      let newModel = extendColor(model, direction)
      setModel(newModel)
    }

    const selectConfigHandler = (level) => {
      let newModel = selectConfig(model, level)
      setModel(newModel)
    }

    const resetPuzzleHandler = (e) => {
      let newModel = new resetPuzzle(model)
      setModel(newModel)
    }

  return (
    <main style={layout.Appmain} ref={appRef}>
    <canvas tabIndex="1"  
      data-testid="canvas"
      className="App-canvas"
      ref={canvasRef}
      width={layout.canvas.width}
      height={layout.canvas.height}
      onClick={handleClick}
      style={layout.canvas}
      />

      { model.isVictorious() ? (<label data-testid="victory-label" style={layout.victory}>Congratulations! Puzzle Solved!</label>) : null }

      <div style={layout.buttons}>
         <button data-testid="upbutton" style={layout.upbutton}  onClick={(e) => extenColorHandler(Up)} disabled={!model.isValid(Up)}>Up</button>
         <button data-testid="leftbutton" style={layout.leftbutton} onClick={(e) => extenColorHandler(Left)} disabled={!model.isValid(Left)}>Left</button>
         <button data-testid="rightbutton" style={layout.rightbutton} onClick={(e) => extenColorHandler(Right)} disabled={!model.isValid(Right)}>Right</button>
         <button data-testid="downbutton" style={layout.downbutton} onClick={(e) => extenColorHandler(Down)} disabled={!model.isValid(Down)}>Down</button>
         
         <button data-testid="resetbutton" style={layout.resetbutton} onClick={(e) => resetPuzzleHandler()}>Reset Puzzle</button>

         <button data-testid="level1button" style={layout.level1button} onClick={(e) => selectConfigHandler(1)}>Level 1  Beginner</button>
         <button data-testid="level2button" style={layout.level2button} onClick={(e) => selectConfigHandler(2)}>Level 2  Intermediate</button>
         <button data-testid="level3button" style={layout.level3button} onClick={(e) => selectConfigHandler(3)}>Level 3  Advanced</button>

         <label data-testid="extend-label" style={layout.extendtext}>{"Extend Color"}</label>
      </div>
  </main>
  );
}

export default App;

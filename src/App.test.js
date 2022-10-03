import React from 'react'
import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';
import Model from './model/Model.js'
import { config1 } from './model/PuzzleConfigs';
import { Up, Down, Left, Right } from './model/Model.js';
import { selectConfig, selectSquare, extendColor, resetPuzzle} from './controller/Controllers.js';

var puzzle = JSON.parse(JSON.stringify(config1))
var model = new Model(puzzle)

// Model Tests
test('Empty Squares should not be zero at start of game', () => {
  expect(model.numEmptySquares != 0 )
});

test('Model numRows should not be zero at start of game', () => {
  expect(model.numsRows != 0 )
});

test('Model numColumns should not be zero at start of game', () => {
  expect(model.numColumns != 0 )
});

test('Expect victorious to be false at start of game', () => {
  expect(model.victorious == false)
});

test('Expect isVictorious to be false at start of game', () => {
  expect(model.isVictorious == false)
});

test('Expect model copy function to not return null', () => {
  expect(model.copy() != null)
});

test('Expect model isValid to be null', () => {
  expect(model.isValid(Up) == false)
});

test('Expect model isValid to be null', () => {
  expect(model.currentConfigutation == "Level-1")
});

test('Expect model is not null when initiating with a puzzle config', () => {
  expect(model.initialize(puzzle) != null)
});



// Test Planar Puzzle 
test('Expect puzzle squares array to not be empty when puzzle starts', () => {
  expect(model.puzzle.squares.length != 0)
});

test('Expect puzzle base squares array to not be empty when puzzle starts', () => {
  expect(model.puzzle.baseSquares.length != 0)
});

test('Expect puzzle unused squares array to not be empty when puzzle starts', () => {
  expect(model.puzzle.unusedSquares.length != 0)
});

test('Expect puzzle empty squares array to not be empty when puzzle starts', () => {
  expect(model.puzzle.emptySquares.length != 0)
});

test('Expect puzzles selected square to be null', () => {
  expect(model.puzzle.selected == null)
});

test('Expect puzzles name to not be null', () => {
  expect(model.puzzle.name != "")
});

test('Expect puzzle.clone() to be not return null', () => {
  expect(model.puzzle.clone() != null)
});

test('Expect puzzle.clone() to be not return null', () => {
  expect(model.puzzle.clone() != null)
});

test('Expect puzzle.checkPathCount to return 0 since no squares are filled', () => {
  expect(model.puzzle.checkPathCount("red") == 0)
});

test('Expect puzzle.emptySquareCount() to not be 0', () => {
  expect(model.puzzle.emptySquareCount() != 0)
});

test('Expect puzzle.validExentions to be null since no square is selected', () => {
  expect(model.puzzle.validExtensions() == null)
});

// Test moving on the board & solving
test('Valid First Moves', () => {
  var square = model.puzzle.squares.find(square => square.row == 0 && square.column == 0)
  model.puzzle.select(square)
  expect(model.puzzle.selected == square)

  expect(model.isValid(Left) == false)
  expect(model.isValid(Right) == true)
  expect(model.isValid(Up) == false)
  expect(model.isValid(Down) == true)

  square = model.puzzle.squares.find(square => square.row == 0 && square.column == 2)
  model.puzzle.select(square)
  expect(model.isValid(Left) == true)
  expect(model.isValid(Right) == false)
  expect(model.isValid(Up) == false)
  expect(model.isValid(Down) == false)

  square = model.puzzle.squares.find(square => square.row == 0 && square.column == 3)
  model.puzzle.select(square)
  expect(model.isValid(Left) == false)
  expect(model.isValid(Right) == false)
  expect(model.isValid(Up) == false)
  expect(model.isValid(Down) == true)

  square = model.puzzle.squares.find(square => square.row == 1 && square.column == 2)
  model.puzzle.select(square)
  expect(model.isValid(Left) == true)
  expect(model.isValid(Right) == true)
  expect(model.isValid(Up) == false)
  expect(model.isValid(Down) == false)

})

test('Test solve puzzle', () => {
  var square = model.puzzle.squares.find(square => square.row == 0 && square.column == 0)
  model.puzzle.select(square)
  expect(model.puzzle.selected == square)

  expect(model.isValid(Left) == false)
  expect(model.isValid(Right) == true)
  expect(model.isValid(Up) == false)
  expect(model.isValid(Down) == true)
  model.puzzle.extend(Down)

  square = model.puzzle.squares.find(square => square.row == 1 && square.column == 0)
  model.puzzle.select(square)
  expect(model.isValid(Left) == false)
  expect(model.isValid(Right) == true)
  expect(model.isValid(Up) == false)
  expect(model.isValid(Down) == false)
  model.puzzle.extend(Right)

  square = model.puzzle.squares.find(square => square.row == 1 && square.column == 1)
  model.puzzle.select(square)
  expect(model.isValid(Left) == false)
  expect(model.isValid(Right) == false)
  expect(model.isValid(Up) == true)
  expect(model.isValid(Down) == false)
  model.puzzle.extend(Up)

  square = model.puzzle.squares.find(square => square.row == 0 && square.column == 3)
  model.puzzle.select(square)
  expect(model.isValid(Left) == false)
  expect(model.isValid(Right) == false)
  expect(model.isValid(Up) == false)
  expect(model.isValid(Down) == true)
  model.puzzle.extend(Down)

  expect(model.puzzle.checkIfSolved())

})


// Test Controller Functions
test('Test extendColor controller', () => {
  var square = model.puzzle.squares.find(square => square.row == 0 && square.column == 0)
  model.puzzle.select(square)

  expect(model.puzzle.selected == square)
  expect(model.puzzle.isSelected(square) != null)
  expect(model.isValid(Left) == false)
  expect(model.isValid(Right) == true)
  expect(model.isValid(Up) == false)
  expect(model.isValid(Down) == true)

  let newModel = extendColor(model, Down)
  expect(model.puzzle.selected == null)
})

test('Test resetPuzzle controller', () => {
    resetPuzzle(model)
    expect(model.puzzle.name == "Level-1")
})

test('Test selectConfig controller', () => {
  selectConfig(model, 1)
  expect(model.puzzle.name == "Level-1")
})


// Test GUI Renders
test('Expect App to be rendered', () => {
  expect(<App/>)
});

test('Expect Extend Color to be rendered', () => {
  const { getByText } = render(<App/>)
  const textElement = getByText(/Extend Color/i)
  expect(textElement).toBeInTheDocument()
});

test('Expect Buttons be to be rendered and disabled', () => {
  const wrapper = render(<App/>)
  var square = model.puzzle.squares.find(square => square.row == 0 && square.column == 1)
  model.puzzle.select(square)

  const canvasElememnt = screen.getByTestId("canvas")
  const level2button = screen.getByTestId("level2button")
  fireEvent.click(level2button)

  const upButton = screen.getByTestId("upbutton")
  const downButton = screen.getByTestId("downbutton")
  const leftButton = screen.getByTestId("leftbutton")
  const rightButton = screen.getByTestId("rightbutton")

  expect(upButton.disabled).toBeTruthy()
  expect(downButton.disabled).toBeTruthy()
  expect(leftButton.disabled).toBeTruthy()
  expect(rightButton.disabled).toBeTruthy()

  // 83 162 83 83
  // 31 108 31 29
  fireEvent.click(canvasElememnt, {screenX: 31, screenY: 108, clienX: 31, clientY: 29})
})

test('Expect Rest Button to be clicked', () => {
  const wrapper = render(<App/>)
  const canvasElememnt = screen.getByTestId("canvas")
  const level1button = screen.getByTestId("level1button")
  fireEvent.click(level1button)
  const level2button = screen.getByTestId("level2button")
  fireEvent.click(level2button)
  const level3button = screen.getByTestId("level3button")
  fireEvent.click(level3button)
  const resetButton = screen.getByTestId("resetbutton")
  fireEvent.click(resetButton)
  fireEvent.click(canvasElememnt, {screenX: 31, screenY: 108, clienX: 31, clientY: 29})

  expect(model.puzzle.emptySquareCount() != 0)
})

test('Expect Left Button to be clicked', () => {
  const wrapper = render(<App/>)
  const canvasElememnt = screen.getByTestId("canvas")
  const level2button = screen.getByTestId("level2button")
  const resetButton = screen.getByTestId("resetbutton")
  fireEvent.click(level2button)

  var square = model.puzzle.squares.find(square => square.row == 0 && square.column == 1)
  model.puzzle.select(square)

  const leftButton = screen.getByTestId("leftbutton")
  fireEvent.click(leftButton)

  expect(model.puzzle.emptySquareCount() != 0)
})

test('Expect Down Button to be clicked', () => {
  const wrapper = render(<App/>)
  const canvasElememnt = screen.getByTestId("canvas")
  const level1button = screen.getByTestId("level1button")
  const resetButton = screen.getByTestId("resetbutton")
  fireEvent.click(level1button)

  var square = model.puzzle.squares.find(square => square.row == 0 && square.column == 0)
  model.puzzle.select(square)

  const downButton = screen.getByTestId("downbutton")
  fireEvent.click(downButton)

  expect(model.puzzle.emptySquareCount() != 0)
})

test('Expect Black Square to be clicked', () => {
  const wrapper = render(<App/>)
  const canvasElememnt = screen.getByTestId("canvas")
  const level2button = screen.getByTestId("level2button")
  fireEvent.click(level2button)

  var square = model.puzzle.squares.find(square => square.row == 1 && square.column == 1)
  model.puzzle.select(square)

  fireEvent.click(canvasElememnt, {screenX: 61, screenY: 158, clienX: 61, clientY: 79})

})



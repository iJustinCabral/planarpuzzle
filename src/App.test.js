import { render, screen } from '@testing-library/react';
import App from './App';
import Model from './model/Model.js'
import { config1 } from './model/PuzzleConfigs';

var puzzle = JSON.parse(JSON.stringify(config1))
var model = new Model(puzzle)

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

test('Expect App to be rendered', () => {
  expect(<App/>)
});




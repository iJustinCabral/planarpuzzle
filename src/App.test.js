import { render, screen } from '@testing-library/react';
import App from './App';
import Model from './model/Model.js'
import { config1 } from './model/PuzzleConfigs';

var puzzle = JSON.parse(JSON.stringify(config1))
var model = new Model(puzzle)

test('Empty Squares should not be zero at start of game', () => {
  expect(model.numEmptySquares != 0 )
});

test('Expect victorious to be false at start of game', () => {
  expect(model.victorious == false)
});

test('Expect App to be rendered', () => {
  expect(<App/>)
});



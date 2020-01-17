import React from 'react';
import ReactDOM from 'react-dom';
import App,{ sum } from './App';
import {render} from '@testing-library/react'
test('it returns the sum of two numbers', ()=>{
  expect(sum(2,2)).toBe(4);
})

test('renders without crashing', () => {
  render(<App />);
});



test('render without crashing', ()=>{
  const container = render(<App/>);
  // console.log(container.getByText('Some Cool Stuff'));
  container.getByText('Some Cool Stuff');
})
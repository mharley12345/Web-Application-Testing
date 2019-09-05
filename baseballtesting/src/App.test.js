import React from 'react';
import ReactDOM from 'react-dom';
import  { render } from "@testing-library/react"
import App from './App';

import * as rtl from '@testing-library/react';


// AAA - Arrange, Act, Assert
test("contains Balls, Strikes", () => {
  // Arrange
  const { getByText } =render(<App />);

  // Act - getting the node by text
  getByText(/balls/i);
  getByText(/strikes/i);
  // Assertion is if ^^^ is truthy
});
it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

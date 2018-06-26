import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { shallow } from 'enzyme'

describe('App', () => {

  it('should add a new grocery to state when addGrocery is called', () => {
    // Setup
    const wrapper = shallow(<App />)
    const mockGrocery = { name: 'Banannas', quantity: '12' } 
    const expected = [{...mockGrocery, starred: false}]

    // Execution
    wrapper.instance().addGrocery(mockGrocery)

    // Expectation
    expect(wrapper.state('groceries')).toEqual(expected)
  })
})

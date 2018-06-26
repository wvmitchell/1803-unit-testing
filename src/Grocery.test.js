import React from 'react'
import Grocery from './Grocery'
import { shallow } from 'enzyme'

describe('Grocery', () => {
  it.skip('should have a title in h3 tags', () => {
    // Setup
    const wrapper = shallow(<Grocery name="apples" starred={false} />)
    const expected = <h3>apples</h3>

    // Execution
    
    // Expectation or Assertion
    expect(wrapper.contains(expected)).toEqual(true)
  })

  it('should match the snapshot when all the info is passed', () => {
    const wrapper = shallow(<Grocery 
                              name="apples" 
                              quantity='10'
                              notes='apples are good'
                              starred={false} 
                              onStar={jest.fn()}
                              onDelete={jest.fn()}
                              onPurchase={jest.fn()}
                            />)

    expect(wrapper).toMatchSnapshot()
  })

  it('should call onDelete when the delete button is clicked', () => {
    // Setup
    const mockDelete = jest.fn()
    const wrapper = shallow(<Grocery 
                              name="apples" 
                              quantity='10'
                              notes='apples are good'
                              starred={false} 
                              onStar={jest.fn()}
                              onDelete={mockDelete}
                              onPurchase={jest.fn()}
                            />)

    // Execution
    wrapper.find('.delete-button').simulate('click')

    // Expectation
    expect(mockDelete).toHaveBeenCalled()
  })
})

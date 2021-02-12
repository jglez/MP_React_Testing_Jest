import React from 'react'
import { render, screen } from '@testing-library/react'
import ContactForm from './ContactForm'

test('ContactForm renders without errors.', () => {
  render(<ContactForm />)
})

// This test failed because the input that corresponds with this
// label had no form control.
// I added an id value on the input and now it is passing.
test('Has First Name field.', () => {
  // Arrange - setup
  const { debug } = render(<ContactForm />)   // render returns a sort of container of DOM

  debug() // we can use .debug() to observe the DOM in memory

  // Act - action
  const firstName = screen.getByLabelText(/first name*/i) // screen are query functions to find elements

  // Assert - what do we expect
  expect(firstName).toBeInTheDocument
})

test('has Last Name field', () => {

})

test('Has Submit button', () => {

})

test('Able to click Submit button', () => {

})

// I EXPECT
// last name and email are required

// I DON'T EXPECT
// name field accepts numbers
// name field accepts maximum 3 characters
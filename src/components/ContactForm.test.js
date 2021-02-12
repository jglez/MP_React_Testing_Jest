import React from 'react'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

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
  expect(firstName).toBeInTheDocument()
})

test('Has Last Name field', () => {
  // Arrange
  render(<ContactForm />)

  // Act
  const lastName = screen.getByLabelText(/last name*/i)

  // Assert
  expect(lastName).toBeInTheDocument()
})

// This test failed
// Fixed Email id value
test('Has Email field.', () => {
  // Arrange - setup
  render(<ContactForm />)

  // Act - action
  const email = screen.getByLabelText(/email*/i)

  // Assert - what do we expect
  expect(email).toBeInTheDocument()
})

test('Has Message field.', () => {
  // Arrange - setup
  render(<ContactForm />)

  // Act - action
  const message = screen.getByLabelText(/message/i)

  // Assert - what do we expect
  expect(message).toBeInTheDocument()
})

test('Can type in First Name input.', () => {
  // Arrange - setup
  render(<ContactForm />)

  // Act - action
  userEvent.type(firstName, 'Jorge')

  // Assert - what do we expect
  console.log(firstName)
})

test('Has Submit button', () => {
  // Arrange
  render(<ContactForm />)

  // Act
  const button = screen.getByRole('button', { name: /submit/i })

  // Assert
  expect(button).toBeInTheDocument()
})

test('Able to click Submit button', () => {

})

// I EXPECT
// last name and email are required

// I DON'T EXPECT
// name field accepts numbers
// name field accepts maximum 3 characters
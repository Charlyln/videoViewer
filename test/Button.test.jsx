import Button from '../src/components/utils/cssComponents/Button'
import { render } from '@testing-library/react'
import React from 'react'
import { screen } from '@testing-library/dom'
import '@testing-library/jest-dom/extend-expect'

test('initial', function () {
  render(<Button name={'buttonName'} />)
  const button = screen.getByText('buttonName')
  expect(button).not.toBeNull()
  expect(button).not.toBeEmptyDOMElement()
  expect(button).not.toBeInvalid()
  expect(button).toBeVisible()
  expect(button).toBeInTheDocument()
  expect(button).toHaveTextContent('buttonName')
})

test('enabled', function () {
  render(<Button name={'buttonName'} />)
  const button = screen.getByText('buttonName')
  expect(button).toBeEnabled()
  expect(button).not.toBeDisabled()
})

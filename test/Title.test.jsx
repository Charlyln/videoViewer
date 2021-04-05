import Title from '../src/components/utils/cssComponents/Title'
import { render } from '@testing-library/react'
import React from 'react'
import { screen } from '@testing-library/dom'
import '@testing-library/jest-dom/extend-expect'

test('initial', function () {
  render(<Title name={'titleName'} />)
  const title = screen.getByText('titleName')
  expect(title).not.toBeNull()
  expect(title).not.toBeEmptyDOMElement()
  expect(title).not.toBeInvalid()
  expect(title).toBeVisible()
  expect(title).toBeInTheDocument()
  expect(title).toHaveTextContent('titleName')
})

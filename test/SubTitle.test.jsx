import SubTitle from '../src/components/utils/cssComponents/SubTitle'
import { render } from '@testing-library/react'
import React from 'react'
import { screen } from '@testing-library/dom'
import '@testing-library/jest-dom/extend-expect'

test('initial', function () {
  render(<SubTitle name={'subTitleName'} />)
  const subTitle = screen.getByText('subTitleName')
  expect(subTitle).not.toBeNull()
  expect(subTitle).not.toBeEmptyDOMElement()
  expect(subTitle).not.toBeInvalid()
  expect(subTitle).toBeVisible()
  expect(subTitle).toBeInTheDocument()
  expect(subTitle).toHaveTextContent('subTitleName')
})

import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import BoardThumbnail from '../BoardThumbnail'
import renderer from 'react-test-renderer'

describe('Render Board Thumbnail Component', () => {

  it('Board Thumbnail snapshot', () => {
    const createBoardThumbnail = renderer
      .create(<BoardThumbnail />)
    expect(createBoardThumbnail).toMatchSnapshot()
  })

  it('Should render with correct title', () => {
    render(<BoardThumbnail title="Create a new Board" />)

    const titleE1 = screen.getByTestId("title")
    expect(titleE1.textContent).toBe("Create a new Board")
  })

})

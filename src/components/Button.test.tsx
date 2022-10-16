import {render, screen, fireEvent} from "@testing-library/react"
import Button from "./Button"

describe('Button Component', () => {
  test('button shows loading text when in loading state', () => {
    render(<Button loading>Test</Button>)
    expect(screen.getByText('Loading...')).toBeInTheDocument()
  })

  test('button cannot be clicked when in disabled state', () => {
    const {container} = render(<Button disabled>Test</Button>)
    expect(container.getElementsByClassName('opacity-75 pointer-events-none').length).toBe(1)
  })

  test('button calls callback when clicked', () => {
    const callback = jest.fn()
    render(<Button onClick={callback}>Test</Button>)
    const button = screen.getByRole('button')
    fireEvent.click(button)
    expect(callback).toHaveBeenCalled()
  })
})
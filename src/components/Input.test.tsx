import {render, screen, fireEvent} from "@testing-library/react"
import userEvent from '@testing-library/user-event';
import { FormEvent } from "react";
import Input from "./Input"

describe('Input Component', () => {
  test('input shows label', () => {
    render(<Input label="Test Label" value="" onChange={() => {}}/>)
    expect(screen.getByText('Test Label')).toBeInTheDocument()
  })

  test('input shows error', () => {
    render(<Input error="Test Error" value="" onChange={() => {}}/>)
    expect(screen.getByText('Test Error')).toBeInTheDocument()
  })

  test('input has placeholder', () => {
    render(<Input placeholder="Test Placeholder" value="" onChange={() => {}}/>)
    expect(screen.getByPlaceholderText('Test Placeholder'))
  })

  test('input can be disabled', () => {
    const {container} = render(<Input disabled value="" onChange={() => {}}/>)
    const input = container.querySelector("input[type=text]")
    expect(input).toBeDisabled()
  })

  test('input updates its value', () => {
    const callback = jest.fn((event: FormEvent) => {console.log((event.target as HTMLInputElement).value)})
    const {container} = render(<Input value="" onChange={callback}/>)
    const input = container.querySelector("input[type=text]")
    userEvent.type(input!, "test");
    expect(callback).toBeCalledTimes(4);
  })
})
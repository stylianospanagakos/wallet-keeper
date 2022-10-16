import { FormEvent } from "react"

export default interface Interface {
  onClick?: (event?: FormEvent) => void;
}
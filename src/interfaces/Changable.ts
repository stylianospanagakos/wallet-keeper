import { FormEvent } from "react"

export default interface Interface {
  onChange: (event: FormEvent) => void;
}
export const hasTitleError = (value: string) => {
  return !value.length ? 'Title cannot be empty.' : '';
}

export const hasPasswordError = (value: string, compare?: string) => {
  if (!value.length) {
    return 'Password cannot be empty.'
  }

  if (compare?.length && value !== compare) {
    return 'Passwords do not match.'
  }

  return '';
}

export const isHex = (value: string) => {
  return Boolean(value.match(/^0x[0-9a-f]+$/i))
}

export const isValueInteger = (value: string) => {
  return Number.isInteger(parseInt(value)) && !isHex(value)
}
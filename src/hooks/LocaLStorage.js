import { useState } from 'react'

const useLocalStorage = (key, initialValue) => {
  const [value, setValue] = useState(initialValue)

  const updateValue = newValue => {
    setValue(newValue)
    localStorage.setItem(key, newValue)
  }
  return [value, updateValue]
}

export default useLocalStorage

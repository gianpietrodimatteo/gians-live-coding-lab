import '@testing-library/jest-dom'
import { configure } from '@testing-library/react'

// Reduce DOM output in test failures
configure({
  getElementError: (message, container) => {
    return new Error(message)
  }
})
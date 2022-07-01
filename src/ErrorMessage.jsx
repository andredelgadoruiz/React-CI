import React from 'react'

const ErrorMessage = ({ error }) => (
  <div data-testid="error">An error occuredd: {error.toString()}</div>
)

export default ErrorMessage

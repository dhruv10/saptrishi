import * as React from 'react'

// Defining an interface IButton that extends the properties of a HTML button element
export interface IButton extends React.HTMLProps<HTMLButtonElement> {}

// Defining a functional component Button that takes in properties defined in IButton
// The properties include children and onClick
const Button: React.FC<IButton> = ({ children, onClick }) => {
  // The component returns a button element
  // The button's onClick event is set to the onClick passed in as a prop
  // The children of the button are set to the children passed in as a prop
  return <button onClick={onClick}>{children}</button>
}

export default Button

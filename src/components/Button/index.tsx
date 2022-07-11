// libraries
import React, { ReactNode } from 'react'

// styles
import StyledButton from './styles'

interface IButtonProps {
  text: string
  onClick: () => void
  disable?: boolean
  color?: 'primary' | 'secondary'
  startIcon?: ReactNode
  endIcon?: ReactNode
}

const Button = ({
  text = 'Button',
  disable = false,
  color = 'primary',
  startIcon = false,
  endIcon = false,
  onClick = () => {},
}: IButtonProps) => {
  return (
    <StyledButton
      color={color}
      disabled={disable}
      variant='contained'
      startIcon={startIcon ? startIcon : false}
      endIcon={endIcon ? endIcon : false}
      onClick={onClick}
    >
      {text}
    </StyledButton>
  )
}

export default Button

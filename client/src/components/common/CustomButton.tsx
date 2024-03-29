import React from 'react'
import { Button } from '@pankod/refine-mui'
import { CustomButtonProps } from 'interfaces/common'

function CustomButton({ type, title, handleClick, backgroundColor, color, fullWidth, icon, disabled }: CustomButtonProps) {
  return (
    <Button
      disabled={disabled}
      type={type === 'submit' ? 'submit' : 'button'}
      sx={{
        flex: fullWidth ? 1 : 'unset',
        padding: '10px 15px',
        width: fullWidth ? '100%' : 'fit-content',
        minWidth: 130,
        backgroundColor,
        color,
        fontSize: 16,
        fontWeight: 600,
        gap: '10px',
        textTransform: 'capitalize',
        '&:hover': {
          opacity: 0.9,
          backgroundColor,
        }
      }}

      title="Add Property"
      onClick={handleClick}
    >
      {icon}
      {title}
    </Button>
  )
}

export default CustomButton
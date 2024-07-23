'use client'

import React, { ButtonHTMLAttributes, DetailedHTMLProps } from 'react'

import clsx from 'clsx'

import { COLOR_NAME } from 'enum'

export interface ButtonProps
  extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
  color?: COLOR_NAME
  backgroundType?: 'filled' | 'outlined' | 'none'
}

const Button: React.FC<ButtonProps> = ({
  children,
  type = 'button',
  backgroundType = 'filled',
  className = '',
  color = COLOR_NAME.CYAN,
  disabled = false
}) => {
  const disableOrHoverClassName = disabled ? 'opacity-60 cursor-not-allowed' : ''

  const colorClassName = {
    [COLOR_NAME.BLUE]:
      backgroundType === 'filled'
        ? 'bg-blue500 hover:bg-blue700 active:bg-blue800'
        : backgroundType === 'outlined'
          ? 'border-2 border-blue600 hover:border-blue700 text-blue600 hover:text-blue700'
          : 'text-blue600 hover:text-blue700',
    [COLOR_NAME.CYAN]:
      backgroundType === 'filled'
        ? 'bg-cyan500 hover:bg-cyan700 active:bg-cyan800'
        : backgroundType === 'outlined'
          ? 'border-2 border-cyan600 hover:border-cyan700 text-cyan600 hover:text-cyan700'
          : 'text-cyan600 hover:text-cyan700',
    [COLOR_NAME.GRAY]:
      backgroundType === 'filled'
        ? 'bg-gray500 hover:bg-gray700 active:bg-gray800'
        : backgroundType === 'outlined'
          ? 'border-2 border-gray600 hover:border-gray700 text-gray600 hover:text-gray700'
          : 'text-gray600 hover:text-gray700',
    [COLOR_NAME.GREEN]:
      backgroundType === 'filled'
        ? 'bg-green500 hover:bg-green700 active:bg-green800'
        : backgroundType === 'outlined'
          ? 'border-2 border-green600 hover:border-green700 text-green600 hover:text-green700'
          : 'text-green600 hover:text-green700',
    [COLOR_NAME.RED]:
      backgroundType === 'filled'
        ? 'bg-red500 hover:bg-red700 active:bg-red800'
        : backgroundType === 'outlined'
          ? 'border-2 border-red600 hover:border-red700 text-red600 hover:text-red700'
          : 'text-red600 hover:text-red700',
    [COLOR_NAME.WHITE]:
      backgroundType === 'filled'
        ? 'bg-white500 hover:bg-white700 active:bg-white800 !text-gray900'
        : backgroundType === 'outlined'
          ? 'border-2 border-white600 hover:border-white700 text-white600 hover:text-white700'
          : 'text-white600 hover:text-white700',
    [COLOR_NAME.YELLOW]:
      backgroundType === 'filled'
        ? 'bg-yellow500 hover:bg-yellow700 active:bg-yellow800 !text-gray900'
        : backgroundType === 'outlined'
          ? 'border-2 border-yellow600 hover:border-yellow700 text-yellow600 hover:text-yellow700'
          : 'text-yellow600 hover:text-yellow700'
  }

  return (
    <button
      type={type}
      className={clsx(
        'py-2 px-4 rounded-lg',
        'transition-colors duration-300',
        'text-white100 text-lg font-semibold',
        colorClassName[color],
        disableOrHoverClassName,
        className
      )}
      disabled={disabled}>
      {children}
    </button>
  )
}

export default Button

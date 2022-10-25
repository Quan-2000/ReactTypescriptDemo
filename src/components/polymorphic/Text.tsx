import React from 'react'

type TextOwnProps <ET extends React.ElementType> = {
  size?: 'sm' | 'md' | 'lg' 
  color?: 'primary' | 'secondary'
  children: React.ReactNode
  as?: ET
}

type TextProps<ET extends React.ElementType> = TextOwnProps<ET> & 
  Omit<React.ComponentProps<ET>, keyof TextOwnProps<ET>>

export const Text = <ET extends React.ElementType = 'div'>({ 
  size, 
  color, 
  children, 
  as 
}: TextProps<ET>) => {
  const Component = as || 'div'
  return (
    <Component className={`class-with-${size}-${color}`}>{children}</Component>
  )
}
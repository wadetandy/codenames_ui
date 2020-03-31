import React, {
  DetailedHTMLProps,
  ButtonHTMLAttributes,
} from 'react'

export default function ActionButton({
  children,
  ...buttonProps
}: DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>) {
  return (
    <button className="p-6 m-4 bg-gray-200 text-gray-600 rounded" {...buttonProps}>
      { children }
    </button>
  )
}
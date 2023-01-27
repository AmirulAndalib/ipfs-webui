import * as React from 'react'

function SvgStrokeMonitor (props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" {...props}>
      <path d="M85.92 14.75h-67a6.51 6.51 0 00-6.5 6.5v43a6.51 6.51 0 006.5 6.5h21.24v4.62c0 1.56-1.84 2.88-4 2.88h-.21a3.5 3.5 0 000 7h33a3.5 3.5 0 000-7h-1.9c-2.11 0-3.89-1.33-3.89-2.91v-4.59h22.76a6.51 6.51 0 006.5-6.5v-43a6.51 6.51 0 00-6.5-6.5zm-67 3h67a3.5 3.5 0 013.5 3.5v35h-74v-35a3.5 3.5 0 013.5-3.5zm48.13 62.5h1.85a1.5 1.5 0 010 3h-33a1.5 1.5 0 010-3h.21c3.32 0 6-2.19 6-4.88v-4.62h19v4.59c.05 2.71 2.69 4.91 5.94 4.91zm18.87-12.5h-67a3.5 3.5 0 01-3.5-3.5v-7h74v7a3.5 3.5 0 01-3.5 3.5z" />
      <path d="M86.54 23.73H18.29v29.63h68.25zm-1 28.63H19.29V24.73h66.25zm-33.12 6.89a3 3 0 103 3 3 3 0 00-3-3zm0 5a2 2 0 112-2 2 2 0 01-2 2z" />
    </svg>
  )
}

export default SvgStrokeMonitor
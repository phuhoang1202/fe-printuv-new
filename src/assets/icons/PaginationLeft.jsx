import React from 'react'

const PaginationLeft = ({ className, ...rest }) => {
  return (
    <svg
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      className={`${className}`}
      {...rest}
    >
      <path d='M11 17L6 12L11 7' stroke='#282828' strokeWidth='1.5' strokeLinecap='round' strokeLinejoin='round' />
      <path d='M18 17L13 12L18 7' stroke='#282828' strokeWidth='1.5' strokeLinecap='round' strokeLinejoin='round' />
    </svg>
  )
}

export default PaginationLeft

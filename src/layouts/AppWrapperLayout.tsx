import React from 'react'

type Props = {
    children: React.ReactNode
}

function AppWrapperLayout({children}: Props) {
  return (
    <div className='px-6'>
        {children}
    </div>
  )
}

export default AppWrapperLayout
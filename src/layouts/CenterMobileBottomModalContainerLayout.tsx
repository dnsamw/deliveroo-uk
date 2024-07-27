import React from 'react'

type Props = {
    children: React.ReactNode;
}

function CenterMobileBottomModalContainerLayout({children}: Props) {
  return (
    <div className="animate-zoom w-full xl:w-[600px] bg-white min-h-[20%] xl:max-h-[90%] rounded flex flex-col absolute bottom-0 xl:relative">
      {children}
    </div>
  )
}

export default CenterMobileBottomModalContainerLayout
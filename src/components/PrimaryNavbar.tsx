import React, { useState } from 'react'
import brandIcon from './UI/SVGIcons/logo-teal.svg'
import { IconButtonTypes, siteMaterData } from '../Config'
import IconButton from './UI/IconButton'
import IconSearchBar from './UI/IconSearchBar'
import useUIMeasurements from '../hooks/useUIMeasurements'
import SharedModalLayout from '../layouts/SharedModalLayout'
import { ModalType } from '../types'

type Props = {}

function PrimaryNavbar({}: Props) {
  const[isModalOpen, setIsModalOpen] = useState(false);
  const { offsetWidth } = useUIMeasurements();
 
  return (
    <nav className='primary-navbar px-6 border h-[70px] flex gap-4 justify-between items-center relative'>
      <div className="brand ">
        <img className='h-12' src={brandIcon} alt={siteMaterData.brandName} />
      </div>
      <div className="search w-[40%] hidden lg:block">
        <IconSearchBar />
      </div>
      <div className="actions flex gap-4 w-auto justify-end">
        {offsetWidth <= 1004 && <IconButton onClick={()=>setIsModalOpen(true)} type={IconButtonTypes.SEARCH} isResponsive={true} isEnableFocus={true} />}
        <IconButton type={IconButtonTypes.SIGNUP_LOGIN} text='Sign up or log in' isResponsive={true} />
        <IconButton type={IconButtonTypes.ACCOUNT} text='Account' isResponsive={true}/>
      </div>
      {isModalOpen && <SharedModalLayout modalType={ModalType.MobileSearch} onClose={()=>setIsModalOpen(false)} />}
    </nav>
  )
}

export default PrimaryNavbar
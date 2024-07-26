import React from 'react'
import brandIcon from './UI/SVGIcons/logo-teal.svg'
import { IconButtonTypes, siteMaterData } from '../Config'
import IconButton from './UI/IconButton'
import IconSearchBar from './UI/IconSearchBar'
import useUIMeasurements from '../hooks/useUIMeasurements'

type Props = {}

function PrimaryNavbar({}: Props) {
  const { offsetWidth } = useUIMeasurements();
 
  return (
    <nav className='primary-navbar px-6 border h-[70px] flex gap-4 justify-between items-center'>
      <div className="brand ">
        <img className='h-12' src={brandIcon} alt={siteMaterData.brandName} />
      </div>
      <div className="search w-[40%] hidden lg:block">
        <IconSearchBar />
      </div>
      <div className="actions flex gap-4 w-auto justify-end">
        {offsetWidth <= 1004 && <IconButton type={IconButtonTypes.SEARCH} isResponsive={true} isEnableFocus={true} />}
        <IconButton type={IconButtonTypes.SIGNUP_LOGIN} text='Sign up or log in' isResponsive={true} />
        <IconButton type={IconButtonTypes.ACCOUNT} text='Account' isResponsive={true}/>
      </div>
    </nav>
  )
}

export default PrimaryNavbar
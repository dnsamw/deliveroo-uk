import React from 'react'
import brandIcon from './UI/SVGIcons/logo-teal.svg'
import { IconButtonTypes, siteMaterData } from '../Config'
import IconButton from './UI/IconButton'
import IconSearchBar from './UI/IconSearchBar'

type Props = {}

function PrimaryNavbar({}: Props) {
  return (
    <nav className='primary-navbar px-6 border h-[70px] flex gap-4 justify-between items-center'>
      <div className="brand ">
        <img className='h-12' src={brandIcon} alt={siteMaterData.brandName} />
      </div>
      <div className="search w-[40%]">
        <IconSearchBar />
      </div>
      <div className="actions flex gap-4 w-auto justify-end">
        <IconButton type={IconButtonTypes.SIGNUP_LOGIN} text='Sign up or log in' />
        <IconButton type={IconButtonTypes.ACCOUNT} text='Account' />
      </div>
    </nav>
  )
}

export default PrimaryNavbar
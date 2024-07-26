import React from 'react'

type Props = {}

function FooterInfoCard({}: Props) {
  return (
    <div className="bg-[#434949] text-white p-8 flex flex-col w-full xl:w-[280px] rounded h-auto">
      <h2 className="font-bold text-2=xl mb-2">Discover Deliveroo</h2>
      <ul className="space-y-1 text-sm">
        <li><a href="#" className="hover:text-teal-400">Investors</a></li>
        <li><a href="#" className="hover:text-teal-400">About us</a></li>
        <li><a href="#" className="hover:text-teal-400">Takeaway</a></li>
        <li><a href="#" className="hover:text-teal-400">More</a></li>
        <li><a href="#" className="hover:text-teal-400">Newsroom</a></li>
        <li><a href="#" className="hover:text-teal-400">Engineering blog</a></li>
        <li><a href="#" className="hover:text-teal-400">Design blog</a></li>
        <li><a href="#" className="hover:text-teal-400">Gift Cards</a></li>
        <li><a href="#" className="hover:text-teal-400">Deliveroo Students</a></li>
        <li><a href="#" className="hover:text-teal-400">Careers</a></li>
        <li><a href="#" className="hover:text-teal-400">Restaurant signup</a></li>
        <li><a href="#" className="hover:text-teal-400">Become a rider</a></li>
      </ul>
    </div>
  )
}

export default FooterInfoCard
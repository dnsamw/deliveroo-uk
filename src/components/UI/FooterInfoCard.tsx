import React from 'react'

type Props = {}

function FooterInfoCard({}: Props) {
  return (
    <div className="bg-[#434949] text-white p-8 w-full rounded-lg h-full xl:w-[15%]">
      <h2 className="font-bold text-2xl mb-2">Discover Deliveroo</h2>
      <ul className="space-y-1">
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
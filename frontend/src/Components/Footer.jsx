import React from 'react'
import { assets } from '../assets/frontend_assets'

const Footer = () => {
  return (
    <div className=''>
        <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 text-sm'>
            <div>
                <img className='mb-5 w-32' src={assets.logo} alt="" />
                <p className='w-full md:w-2/3 text-gray-600 '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis, blanditiis consequuntur. Maiores quaerat repudiandae atque autem labore cupiditate molestias fuga!</p>
            </div>
            <div>
                <p className='text-xl font-medium mb-5 '>COMPANY</p>
                <ul className='flex flex-col gap-1 text-gray-600'>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Delivery</li>
                    <li>Privacy Policy</li>
                </ul>
            </div>
            <div>
                <p className='text-xl font-medium mb-5 '>GET IN TOUCH</p>
                <ul className='flex flex-col gap-1 text-gray-600'>
                    <li>+92-3217077229</li>
                    <li>howigrow@gmail.com</li>
                </ul>
            </div>
        </div>

        <div>
            <hr />
            <p className='py-5 text-sm text-center'>&copy; Copyright 2025 @ Howigrow.com - All Right Reserved.</p>
        </div>
    </div>
  )
}

export default Footer
import React from 'react'
import Title from '../Components/Title'
import { assets } from '../assets/frontend_assets'
import NewsletterBox from '../Components/NewsletterBox'

const Contact = () => {
  return (
    <div>
      <div className='text-center text-2xl pt-10 border-t'>
        <Title text1={"CONTACT"} text2={"US"} />
      </div>
      <div className='flex flex-col justify-center md:flex-row gap-10 mb-28 my-10 '>
        <img src={assets.contact_img} className='w-full md:max-w-[480px]' alt="" />
        <div className='flex flex-col justify-center items-start gap-6'>
          <p className='font-semiblot text-gray-600 text-xl'>Our Store</p>
          <p className='text-gray-500'>Backer Street 335 <br /> Suite 489, Sialkot, pakistan</p>
          <p className='text-gray-500'>Tel: (052) 888-4443 <br />Email: howigrow@gmail.com</p>
          <p className='text-gray-600 font-semibold text-xl'>Careers at How I Grow</p>
          <p className='text-gray-500'>Learn more about our teams and job openings.</p>
          <button className='border border-black px-8 py-4 text-sm hover:bg-black hover:text-white transition-all duration-500'>Explore Jobs</button>
        </div>
      </div>
      <NewsletterBox />
    </div>
  )
}

export default Contact
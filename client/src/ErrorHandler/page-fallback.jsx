import React from 'react'
import { Logo } from '../assets'

export default function PageFallback(){
    return (
        <div className="bg-darkblue h-screen bg-img">
            <div className='h-28'>
                <img className='h-full mx-5 p-1 -rotate-[77.15deg]' src={Logo} alt='Piyush' />
            </div>

            <div className='h-4/5'>
                <h2 className='align-middle text-bold text-lightblue text-center text-5xl'>
                    Uh Oh! 
                    <br />
                    Some Error Occurred
                    <br />
                    :(
                </h2>
            </div>

            <div>
                <p className='text-dullblue text-center'>
                    Report this error to our developer at <span className='italic underline text-grey cursor-pointer'>
                         <a href="mailto:developerpiyush1610@gmail.com">developerpiyush1610@gmail.com</a>
                    </span> 
                </p>
            </div>
        </div>
    )
}
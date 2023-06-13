import React from 'react'  

export default function PageFallback(props){
    return (
        <div className="bg-darkblue h-screen bg-img">

            <div className='h-4/5'>
                <h2 className='align-middle text-bold text-lightblue text-center text-5xl'>
                    Uh Oh! 
                    <br />
                    {props.tag === "page" ? "Page Not Found" : "Some Error Occurred"}
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
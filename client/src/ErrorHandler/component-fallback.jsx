import React from 'react'

export default function ComponentFallback(props) {
    return (
        <div className='bg-dullblue p-5 rounded border-2 border-darkblue m-2'>
            <p className='text-darkblue font-semibold text-lg font-mono text-center'>{props.type === "notfound" ? "404 : File Not Found" : "Some Error Occurred :("}</p>
        </div>
    )
}
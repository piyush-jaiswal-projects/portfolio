import React from 'react'
import Identity from '../IdentityCard/identity'
import MenuLinks from '../menulinks/menu-links'

export default function Sidebar() {
    return (
        <div className='bg-secondary override-theme w-[20%] fixed flex flex-col justify-start items-center h-[100vh] p-2'>
            <Identity />
            <br />
            <MenuLinks />
        </div>
    )
}
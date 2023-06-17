import {logo} from '../assets'

function Logo() {
    function openHome() {
        window.location.replace("/")
    }
    return (
        <div className='hover:animate-pulse h-28 inline-flex items-center'>
                <img className='cursor-pointer h-full mx-5 p-1 -rotate-[77.15deg] inline-flex' onClick={openHome} src={logo} alt='Piyush' />
        </div>
    )
}

export default Logo;
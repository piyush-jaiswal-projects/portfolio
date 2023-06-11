import {logo} from '../assets'

function Logo() {
    return (
        <div className='h-28 inline-flex items-center'>
                <img className='h-full mx-5 p-1 -rotate-[77.15deg] inline-flex' src={logo} alt='Piyush' />
        </div>
    )
}

export default Logo;
import $ from 'jquery'

export default function SmallCard(props) {

    function onMouseOver(e) {
        $("#" + e.target.id + "-div").removeClass("hidden");
        setTimeout(() => {
            $("#" + e.target.id + "-div").addClass("hidden");
        }, 2000)
    }


    return (
        <div onMouseOver={onMouseOver} id={props.item.id} key={props.item.id} className="smooth-card overlayCont overflow-x:hidden popup w-[80vw] sm:w-[70vw] md:w-[40vw] lg:w-[25vw] h-[50vw] sm:h-[45vw] md:h-[25vw] lg:h-[15vw] bg-lightblue shadow-xl mx-auto rounded-md my-3 md:my-2">
            <a href={"/projects/" + props.item.id} rel="noreferrer" target="_blank" >
            <div id={props.item.id + "-div"} className='rounded-t-sm smooth-card-height  absolute  z-50 hidden w-[80vw] sm:w-[70vw] md:w-[40vw] lg:w-[25vw] bg-darkblueTwo text-center flex justify-center flex-col'>
                <h2 className='text-[1.2rem]'>{props.item.title}</h2>
                <p className='text-[15px]'>click to view project</p>
            </div>
            <div className="overLay absolute hidden z-50 bg-darkblueTwo w-[25%] h-[50px]">Hi</div>
            <div className="bg-lightblue h-[50vw] sm:h-[45vw] md:h-[25vw] lg:h-[15vw] rounded-md">
                <img id={props.item.id} className="rounded-md w-[80vw] sm:w-[70vw] md:w-[40vw] lg:w-[25vw] h-[50vw] sm:h-[45vw] md:h-[25vw] lg:h-[15vw]" src={props.item.previewImage} alt={props.item.title} />
                </div>
                </a>

        </div>
    )
}
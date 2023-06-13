
export default function Footer() {
    const year = new Date().getFullYear();
    console.log(year);
    return (
        <div className="bg-darkblue text-center text-dullblue py-[2vw] md:py-[1.5vw]">
            <h3 className="text-[] sm:text-[] md:text-[] lg:text-[1.2vw]">Copyright @ {year}</h3>
            <p className="text-[] sm:text-[] md:text-[] lg:text-[1vw]">Designed and Developed by Piyush Jaiswal</p>
        </div>
    )
}
export default function NotesCard(props) {

    return (
        <div onClick={()=>{window.location.href = "/notes/" + props.id;}} key={props.id} className="bg-lightblue cursor-pointer w-[150px] h-[200px] rounded-md mx-4 my-4 flex items-center justify-center">
            <div className="rounded-md border border-darkblue w-[90%] h-[90%] flex items-center justify-center">
            <h3 className="font-bold text-[20px] leading-tight">{props.title}</h3>
            </div>
        </div>
    )
}
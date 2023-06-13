import { Heading, TextPara, Button } from "../components"

export default function AboutMe() {
    return (
        <div className="bg-darkblueTwo">
            <div className="w-[90vw] mx-auto my-[2vw] pb-[4vw] py-[1vw] text-center">
            <Heading text="About Me" />
            <TextPara align="center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin tincidunt massa 
            eget turpis tincidunt hendrerit. Duis convallis hendrerit porttitor. Etiam finibus consectetur tempor. Suspendisse sed luctus tortor. Proin gravida viverra elit, quis luctus ex gravida non. Etiam id risus ante. Suspendisse eget eros ac velit pretium pharetra.
            </TextPara>
            <Button text="Download Resume" actionType="redirect" url="https://drive.google.com/file/d/1B28Y8dIPNmC43k6lf8JuqLIAIweJ6CLH/view?usp=sharing"/>
            <Button text="Know More" actionType="redirect" url="/about"/>
            </div>
        </div>
    )
}
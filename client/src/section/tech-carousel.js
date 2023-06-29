import { CircularImage } from "../components"
import { skills } from "../data";

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { Heading } from '../components'


export default function TechCarousel() {
    return (
        <div className="bg-darkblueTwo py-2 align-middle">
            <Heading text="Tech I Know" />
            <Carousel
                transitionTime={2000}
                autoPlay={true}
                centerMode={true}
                showStatus={false}
                showIndicators={false}
                showThumbs={false}
                centerSlidePercentage={30}
                showArrows={false}
                interval={2000}
                infiniteLoop={true}>
            {skills.map((tech) => {
                return (
                    <CircularImage key={tech.name} name={tech} />
                )
            })}
        </Carousel>
        </div>
    )
}
import { CircularImage } from "../components"
import { techStacks } from "../data";

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { Heading } from '../components'


export default function TechCarousel() {
    return (
        <div className="bg-darkblueTwo py-2 align-middle">
            <Heading text="Tech I Know" />
            <Carousel
                transitionTime={1000}
                autoPlay={true}
                centerMode={true}
                showStatus={false}
                showIndicators={false}
                centerSlidePercentage={20}
                showArrows={false}
                interval={1000}
                infiniteLoop={true}>
            {techStacks.map((tech) => {
                return (
                    <CircularImage name={tech} />
                )
            })}
        </Carousel>
        </div>
    )
}
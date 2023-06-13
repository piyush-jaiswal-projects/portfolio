import { certificates } from "../data";

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { Heading, CertificateCard } from '../components'


export default function TechCarousel() {
    return (
        <div className="bg-darkblueThree py-2 align-middle">
            <Heading text="Certifications" />
            <Carousel
                transitionTime={1000}
                autoPlay={true}
                centerMode={true}
                showStatus={false}
                showIndicators={false}
                centerSlidePercentage={30}
                showArrows={false}
                interval={3000}
                infiniteLoop={true}>

                {certificates.map((cert) => {
                    console.log(cert);
                return (
                    <CertificateCard id={cert.id} name={cert.name} />
                )
                })}
                
        </Carousel>
        </div>
    )
}
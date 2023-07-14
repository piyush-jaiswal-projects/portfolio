import { certificates } from "../data";

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { Heading, CertificateCard } from '../components'
import { useWindowWidth } from "../hooks";


export default function TechCarousel() {
    return (
        <div className="border border-t-0 border-darkblue py-2 align-middle">
            <Heading text="Certifications" />
            {useWindowWidth() >= 600 ? 
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
                return (
                    <CertificateCard id={cert.id} title={cert.title} link={cert.url} />
                )
                })}
                
                </Carousel>
                :
                <Carousel
                transitionTime={1000}
                autoPlay={true}
                centerMode={true}
                showStatus={false}
                showIndicators={false}
                centerSlidePercentage={100}
                showArrows={false}
                interval={3000}
                infiniteLoop={true}>

                {certificates.map((cert) => {
                return (
                    <CertificateCard id={cert.id} title={cert.title} link={cert.url} />
                )
                })}
                
                </Carousel>
            }
        </div>
    )
}
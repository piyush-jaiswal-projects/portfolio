import { Heading } from "../components"

export default function Story(props) {
    return (
        <div id="Story" className="bg-darkblue w-[90vw] text-[3.5vw] sm:text-[3vw] md:text-[2.3vw] lg:text-[1.3vw] mx-auto my-5">
            <Heading text=" My Story " />
            {/* A deep dive into my story */}
            <p className="text-white">
            Hey there, Currently I am a final-year student pursuing my bachelor's in electrical and electronics engineering 
                UIET, Panjab University. I believe in personal growth and value addition. I am trying to build valuable products and services.
                <br />
                Vestibulum ultricies turpis eget turpis interdum efficitur. Duis sed dolor a enim congue sodales nec quis turpis. Duis iaculis enim nec mi tincidunt, quis aliquam eros scelerisque. Nam faucibus lacus sit amet magna mollis congue. Nunc tempor sem at nisi congue scelerisque. Donec consequat varius mi, ac aliquet lectus tincidunt in. Sed congue, nisi ac bibendum malesuada, sapien turpis malesuada nisi, ut volutpat sapien arcu at ligula. Mauris lobortis tortor et purus feugiat, ut molestie elit sagittis. Sed posuere rutrum convallis.
Cras consequat gravida lorem in congue. Maecenas non lobortis arcu, in posuere elit. Pellentesque pharetra posuere elit, in commodo augue. In faucibus lorem ut arcu placerat, sit amet commodo felis laoreet. Nunc eu sapien ac enim mattis condimentum. Mauris felis purus, sodales vitae pulvinar et, placerat ut tellus. Pellentesque rutrum congue aliquam. Aenean finibus molestie sapien, eget viverra felis viverra sit amet. Curabitur sed mi magna. Curabitur at convallis massa. In nunc ante, mattis ut laoreet sed, euismod sit amet quam.
                Mauris condimentum, lectus vel porta suscipit, est nulla ultrices lorem,
                </p>
        </div>
    )
}
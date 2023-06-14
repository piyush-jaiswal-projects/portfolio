import { Heading } from "../components"

export default function Story(props) {
    return (
        <div id="Story" className="bg-darkblue w-[90vw] text-[3.5vw] sm:text-[3vw] md:text-[2.3vw] lg:text-[1.3vw] mx-auto my-5">
            <Heading text=" Summary " />
            {/* A deep dive into my story */}
            <p className="text-dullblue">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque tincidunt eros sit amet laoreet lacinia. Suspendisse fermentum vitae dolor ut auctor. Maecenas accumsan nisi vestibulum leo consectetur, eu iaculis turpis lobortis. Curabitur luctus, magna id lacinia bibendum, quam justo mollis turpis, quis cursus dolor dui nec nunc. Curabitur elementum vel velit eget sodales. Sed consectetur semper magna, sit amet pulvinar ligula efficitur non. Vivamus pharetra libero vel lacus sagittis, ut faucibus libero suscipit. Cras sagittis sem in aliquam egestas. In leo tellus, dictum sit amet condimentum vitae, placerat in ipsum. Integer rutrum semper sem ut hendrerit. In hac habitasse platea dictumst. Etiam suscipit pellentesque convallis. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Quisque tincidunt sem ac sem commodo, ut porttitor ante pulvinar. Nunc non dolor dui.
                In lacinia elit ac sapien tempor blandit.
                <br />
                Vestibulum ultricies turpis eget turpis interdum efficitur. Duis sed dolor a enim congue sodales nec quis turpis. Duis iaculis enim nec mi tincidunt, quis aliquam eros scelerisque. Nam faucibus lacus sit amet magna mollis congue. Nunc tempor sem at nisi congue scelerisque. Donec consequat varius mi, ac aliquet lectus tincidunt in. Sed congue, nisi ac bibendum malesuada, sapien turpis malesuada nisi, ut volutpat sapien arcu at ligula. Mauris lobortis tortor et purus feugiat, ut molestie elit sagittis. Sed posuere rutrum convallis.
Cras consequat gravida lorem in congue. Maecenas non lobortis arcu, in posuere elit. Pellentesque pharetra posuere elit, in commodo augue. In faucibus lorem ut arcu placerat, sit amet commodo felis laoreet. Nunc eu sapien ac enim mattis condimentum. Mauris felis purus, sodales vitae pulvinar et, placerat ut tellus. Pellentesque rutrum congue aliquam. Aenean finibus molestie sapien, eget viverra felis viverra sit amet. Curabitur sed mi magna. Curabitur at convallis massa. In nunc ante, mattis ut laoreet sed, euismod sit amet quam.
                Mauris condimentum, lectus vel porta suscipit, est nulla ultrices lorem,
                <br />
                vel laoreet velit sapien eget augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nullam pellentesque id risus et luctus. Nulla in metus eu elit finibus malesuada. Curabitur elit orci, volutpat ut turpis vehicula, luctus euismod elit. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; In efficitur, orci et sagittis blandit, purus tellus faucibus enim, et aliquet ligula turpis nec ante. Sed viverra sed leo eget auctor. Integer mattis non magna id consequat. Mauris finibus auctor quam in condimentum. Integer fermentum tincidunt dolor, quis luctus risus egestas efficitur.
Fusce blandit lacus in urna molestie, non tristique risus pretium. Pellentesque tellus magna, faucibus et ornare ac, semper ut metus. Praesent semper laoreet orci, non cursus lorem placerat at. Nunc erat neque, gravida ut pulvinar nec, interdum vel ante. Donec ac dui id risus sollicitudin lobortis in nec nulla. Duis eu orci tortor. Ut vitae libero a lorem lobortis eleifend et ut tellus. Ut id vestibulum odio. Proin commodo ut metus id tempus. Donec sit amet dapibus nulla. Curabitur eu metus sem.
            </p>
        </div>
    )
}
import Image from "next/image";
import Link from "next/link";
import react from "react";

export default function Identity() {
  return (
    <div className="w-[100%] flex flex-col justify-center items-center my-[20px]">
          <div className="w-[70px] h-[70px] rounded-full bg-white m-2">
        <Image src="" alt="" />
          </div>
          <br />
      <h1 className="text-[1.8rem]">Piyush Jaiswal</h1>
      <p className="">Full Stack Developer</p>
      <section>
        <span title="Github">
          <Link href="">
            <Image src="" alt="" />
          </Link>
        </span>
        <span title="Linkedin">
          <Link href="">
            <Image src="" alt="" />
          </Link>
        </span>
        <span title="Resume">
          <Link href="">
            <Image src="" alt="" />
          </Link>
        </span>
        <span title="Twitter">
          <Link href="">
            <Image src="" alt="" />
          </Link>
        </span>
        <span title="Blog">
          <Link href="">
            <Image src="" alt="" />
          </Link>
        </span>
      </section>
    </div>
  );
}

import Image from "next/image";
import React from "react";

export default function BlogCard(props: {
  image: string;
  title: string;
  desc: string;
}) {
  return (
    <div className="bg-secondary translate-up text-black p-2 w-[300px] h-[330px]">
          <div className="w-[280px] mx-auto h-[150px] rounded-lg bg-[red]">
              hi
        <Image src="" alt="" />
      </div>

          <div className="p-2">
          <h1 className="text-[1.3rem] font-semibold" >{props.title}</h1>
      <p className="text-[1rem] text-justify leading-tight">{props.desc.substring(0, 120) + "...READ MORE"}</p>
      </div>
    </div>
  );
}

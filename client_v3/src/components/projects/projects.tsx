import React from "react";
import { projects } from "@/dumyData";
import ProjectCard from "./project-card";
import Link from "next/link";

export default function Projects() {
  const projectsSliced = projects.slice(0, 6);

  return (
    <div className="my-[50px] w-[95%] md:w-[90%] mx-auto">
      <h1 className="text-[2rem] translate-right">Projects</h1>
      <section
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 my-[30px] 
            w-[95%] lg:w-[88.5%] mx-auto section-translate-up text-center"
      >
        {projectsSliced.map((item, index) => {
          return <ProjectCard data={item} key={index} />;
        })}
      </section>
      <div className="text-center">
        <Link
          href="/projects"
          className="border border-secondary p-2 rounded-lg"
        >
          See All Projects
        </Link>
      </div>
    </div>
  );
}

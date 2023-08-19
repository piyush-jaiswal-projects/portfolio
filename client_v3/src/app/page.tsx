import About from "@/components/about/about";
import Sidebar from "@/components/sidebar/sidebar";
import Skills from "@/components/skils/skills";
import ThemeButton from "@/components/themebutton/theme-button";

export default function Home() {
  return (
    <div id="app" className="dark-theme">
      <div className="w-[100vw] mx-auto flex justify-between items-start">
        <Sidebar />
        <div className="w-[75%] min-h-[100vh] ml-[22.5%] bg-red-500 h-[auto]">
          <ThemeButton />
          <About />
          <Skills />
        </div>
      </div>
    </div>
  );
}

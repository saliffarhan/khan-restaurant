import Hero from "./components/Hero/page";
import About from "./components/about/page";
import Ambiance from "./components/Ambiance/page";
import Navbar from "./components/Navbar/page";
import Menu from "./components/Menu/page";
import Fotter from "./components/fotter/page";

export default function Home() {
  return (
    <div>
        <Hero/>
       <About/> 
       <Ambiance/>  
       <Menu/>
      <Fotter/>   
    </div>

  );
}

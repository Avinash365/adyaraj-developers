import Footer from "@/components/footer/Footer";
import Navbar from "@/components/navbar/Navbar";
import HeroSlider from "@/page/home/HeroSlider";

export default function Home() {
  return (
    <div>
      <Navbar/>  
      <HeroSlider/> 
      <Footer/>
      {/* <HeroSlider /> */}
    </div>
  );
}

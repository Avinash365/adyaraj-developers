import Footer from "@/components/footer/Footer";
import Navbar from "@/components/navbar/Navbar";
import HomePage from "@/page/careers/HomePage";

export default function Home() {
  return (
    <div>
      <Navbar/>  
      <HomePage/> 
      <Footer/>
      {/* <HeroSlider /> */}
    </div>
  );
}

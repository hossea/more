import Image from "next/image";
import ImageSlider from './components/ImageSlider/ImageSlider';
import Topbar from './components/Topbar/Topbar';
import SimpleSlider from "./components/SimpleSlider/SimpleSlider";
import RecentBar from "./components/RecentBar/RecentBar";
import TwoHeaders from "./components/TwoHeaders/TwoHeaders";
import ItemBar from "./components/pages/ItemBar";
import Footer from './components/Footer/Footer';


export default function Home() {
  return (
   <main>
    <Topbar/>
    <ImageSlider/>
    <SimpleSlider/>
    <RecentBar recentAds={[]}/>
    <TwoHeaders/>
    <ItemBar/>
    <Footer/>
    
   </main>
  );
}

import Banner from "./components/Banner/Banner";
import CustomFeatureBox from "./components/CustomBox/CustomBox";
import TopSellingProducts from "./components/TopSellingProducts/TopSellingProducts";

export default function Home() {
  return (


<div className="flex flex-col min-h-screen lg:max-w-[70%] max-w-[85%] mx-auto"> 


<Banner/>

<div className="mt-40">
<CustomFeatureBox/>

</div>



<TopSellingProducts/>


    </div>
  );
}
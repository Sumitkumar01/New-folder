import About from "../components/HomePage/About";
import Aminities from "../components/HomePage/Aminities";
import Banner from "../components/HomePage/Banner";
import Blog from "../components/HomePage/Blog";
import Momories from "../components/HomePage/Momories";

import OurSpecialization from "../components/landingpage/OurSpecialization";
import Testimonial from "../components/landingpage/Testimonial";

const page = () => {
  return (
    <div className="flex flex-col gap-10">
      <Banner />
      <About />
      <Momories />
      <Aminities />
      <OurSpecialization />
      <Blog />
      <Testimonial />
    </div>
  );
};

export default page;

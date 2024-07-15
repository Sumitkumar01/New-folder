import Activities from "../../components/landingpage/Activities";
import Banner from "../../components/landingpage/Banner";
import BottomGallery from "../../components/landingpage/BottomGallery";
import Form from "../../components/landingpage/Form";
import Grid from "../../components/landingpage/Grid";
import OurSpecialization from "../../components/landingpage/OurSpecialization";
import RoomSwiper from "../../components/landingpage/RoomSwiper";
import Testimonial from "../../components/landingpage/Testimonial";
import YouTube from "../../components/landingpage/YouTube";
import BannerImage from "../../../public/images/00 Cover_11zon.jpg"


const page = () => {
    return (
        <div className="flex flex-col gap-10 overflow-hidden">
            <Banner BannerImage={BannerImage} />
            <Grid />
            <hr className=" h-px my-8 bg-[white]" />

            <RoomSwiper />
            <hr className="h-px my-8 bg-[white]" />

            <YouTube />

            <OurSpecialization />
            <Activities />
            <Testimonial />
            <BottomGallery />
            <Form />
        </div>
    )
}

export default page;
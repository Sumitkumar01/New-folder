import AddOn from "../../components/Activities/AddOn";
import IndoorActivities from "../../components/Activities/IndoorActivities";
import InstaGrid from "../../components/Activities/InstaGrid";
import OutdoorActivities from "../../components/Activities/OutdoorActivities";
import WhatInstaButton from "../../utils/WhatInstaButton";
import BannerImage from "../../../public/images/00 Cover_11zon.jpg"
import Banner from "../../components/landingpage/Banner";



const page = () => {
    return (
        <div className="flex flex-col gap-10">
            <Banner BannerImage={BannerImage} />

            <OutdoorActivities />
            <IndoorActivities />
            <AddOn />
            <WhatInstaButton button={"whatsapp"} link="https://google.com" />
            <InstaGrid />
            <WhatInstaButton button={"insta"} link="https://instagram.com" />

            <hr className="h-px my-4 bg-[#D5D5D5] border-0" />
        </div>
    )
}

export default page;
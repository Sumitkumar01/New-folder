import Banner from "../../components/AboutPage/Banner";
import c1 from "../../../public/images/01 Picnic_11zon.jpg";
import about1 from "../../../public/images/about1.jpg";
import about2 from "../../../public/images/about2.jpg";
import about3 from "../../../public/images/about3.jpg";

import aroundcapm1 from "../../../public/images/aroundcamp1.jpg";
import aroundcapm2 from "../../../public/images/aroundcamp2.jpg";
// import aroundcapm3 from "../../../public/images/arouncamp3.jpg"

import GeorgeEverest from "../../components/AboutPage/GeorgeEverest";

export const metadata = {
    title: "Camping in George Everest Mussoorie | Mussoorie Camp Resort",
    description:
        "EBC is a Experience top-notch camping in George Everest Mussoorie. Enjoy serene views and luxurious stays at Mussoorie Camp Resort. Visit us!",
};




const page = () => {
    const datas = [
        {
            heading: "About Everest Base Camp",
            subheading: "",
            paragraph:
                "Welcome to Everest Base Camp, a luxurious camping resort located in the untouched landscape of Mussoorie. Our property is a nostalgic family treasure that we've transformed into a unique vacation experience for you. We take pride in our honest approach to hospitality and our efforts to blend in with the natural surroundings. Our plush tents offer a perfect balance of luxury and nature to help you unwind after a day full of curated experiences like treks and picnics. At Everest Base Camp, we believe in giving back to the land that nurtures us, and we welcome you to join us on this journey. Discover a new level of relaxation and rejuvenation amidst Mussoorie's flora and fauna.",
            subPara: "Our family heritage, is now your favorite escape.",
            images: [about1, about2, about3],
        },

        {
            heading: "Around Camp",
            subheading: "New friends & old",
            paragraph:
                "At our resort, guests always leave with new friends - the local birds, trees, and wildlife. Our property is an extension of their natural habitat, and we encourage our guests to embrace the outdoors and connect with the land. Listen to the songs of the magpies and capture the beauty of the deodar and pine trees. And when it's time to retreat indoors, our luxurious accommodations provide the perfect sanctuary to unwind and relax. Embrace nature's beauty and enjoy the best of both worlds at our camp.",
            subPara: "",
            images: [aroundcapm1, aroundcapm2],
        },
    ];

    return (
        <div className="flex flex-col gap-10">
            <Banner data={datas[0]} order={"1"} color="#D5D5D5" />

            <GeorgeEverest />

            <Banner data={datas[1]} order={"2"} color="#D5D5D5" />
        </div>
    );
};

export default page;

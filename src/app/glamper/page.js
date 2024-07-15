import Banner from "../../components/AboutPage/Banner"
import c1 from "../../../public/images/glampers.webp"
import Section from "../../components/GlamperPage/Section"

const page = () => {

    const datas = [

        {
            "heading": "",
            "subheading": "",
            "paragraph": "Nature can be unpredictable, and that’s part of the adventure you are about to embark on. Our seasoned campers have put together a non-exhaustive list of essentials that will help you get prepared to be one with nature when you visit us.",
            "subPara": "",
            "images": [c1, c1, c1, c1, c1, c1, c1,]
        },
    ]

    return (
        <div className="flex flex-col">
            <div className="flex flex-col gap-5  items-center max-md:px-3 mb-10">
                <h2 className="text-[42px] max-md:text-center text-white font-medium leading-[45px]">A Glamper&apos;s Guide</h2>
                {/* <p className=" text-center max-md:text-justify text-white">Experience luxury amidst the serene hills at Everest Base Camp with a range of
                to choose from, including a fine dining restaurant, outdoor activities, and luxury accommodations,
                we provide the perfect escape from the hustle and bustle of everyday life.</p> */}
            </div>
            <Banner data={datas[0]} order={"1"} color="" />

            <Section />
        </div>
    )
}

export default page
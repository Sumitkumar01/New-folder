import ActivitiesCard from "./ActivitiesCard"
import Activities2 from "../../../public/activity/DSC04128_11zon.jpg"
import Activities1 from "../../../public/activity/activitydiv1.webp"
import indoor1 from "../../../public/activity/indoor1.png"
import indoor2 from "../../../public/activity/indoor2.png"
const Activities = () => {


    const ActivitiesData = [
        {
            "heading": "Outdoor Activities",
            "para": "Discover thrilling outdoor activities like badminton, archery, mountain biking, and hooping. Join the brave for haunted walks around the campsite or witness the stunning sunrise at Mussoorie's Lal Tibba. For a unique challenge, partake in a momo-eating contest and unite with fellow birdwatchers at Benog Wildlife Sanctuary. Explore numerous hikes and trails for an unforgettable adventure.",
            "images": [Activities1, Activities2]
        },
        {
            "heading": "Indoor Activities",
            "para": "Explore our diverse range of board games perfect for a cosy indoor adventure. Join us for a relaxing day of strategic fun and friendly competition.",
            "images": [indoor1, indoor2]
        },
    ]
    return (
        <div className="maxwidth mx-auto flex flex-col gap-5 ">
            {
                ActivitiesData.map((data, index) => (
                    <ActivitiesCard key={index} index={index} activitiesData={data} />
                ))
            }
        </div>
    )
}

export default Activities
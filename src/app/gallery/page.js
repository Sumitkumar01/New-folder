import Gallery from "../../components/GalleryPage/Gallery";
import test from "../../../public/images/03 Dining_11zon.jpg";
import test2 from "../../../public/images/29 Exterior_11zon.jpg";
import test3 from "../../../public/images/23 Facade_11zon.jpg";

import camper1 from "../../../public/gallery/camper1.jpg"
import camper2 from "../../../public/gallery/camper2.jpg"
import camper3 from "../../../public/gallery/camper3.jpg"
import camper4 from "../../../public/gallery/camper4.jpg"
import camper5 from "../../../public/gallery/camper5.jpg"
import camper6 from "../../../public/gallery/camper6.jpg"


import glamper1 from "../../../public/gallery/glamper1.jpg"
import glamper2 from "../../../public/gallery/theglamper2.jpg"
import glamper3 from "../../../public/gallery/theglamper3.jpg"
import glamper4 from "../../../public/gallery/theglamper4.jpg"
import glamper5 from "../../../public/gallery/theglamer5.jpg"
import glamper6 from "../../../public/gallery/theglamer6.jpg"


import survey1 from "../../../public/gallery/survey1.jpg"
import survey2 from "../../../public/gallery/survery2.jpg"
import survey3 from "../../../public/gallery/survey3.jpg"
import survey4 from "../../../public/gallery/survey4.jpg"
import survey5 from "../../../public/gallery/survey5.jpg"
import survey6 from "../../../public/gallery/survey6.jpg"
import survey7 from "../../../public/gallery/survery7.jpg"
import survey8 from "../../../public/gallery/survey8.jpg"


import surveysuite1 from "../../../public/gallery/surveysuite1.jpg"
import surveysuite2 from "../../../public/gallery/surveysuite2.jpg"
import surveysuite3 from "../../../public/gallery/surveysuite3.jpg"


import picnic1 from "../../../public/gallery/picnic1.jpg"
import picnic2 from "../../../public/gallery/picnic2.jpg"
import picnic3 from "../../../public/gallery/picnic3.jpg"
import picnic4 from "../../../public/gallery/picnic4.jpg"
import picnic5 from "../../../public/gallery/picnic5.jpg"
import picnic6 from "../../../public/gallery/picnic6.jpg"
import picnic7 from "../../../public/gallery/picnic7.jpg"
import picnic8 from "../../../public/gallery/picnic8.jpg"
import picnic9 from "../../../public/gallery/picnic9.jpg"
import picnic10 from "../../../public/gallery/picnic10.jpg"

import bar1 from "../../../public/gallery/bar1.jpg"
import bar2 from "../../../public/gallery/bar2.jpg"
import bar3 from "../../../public/gallery/bar3.webp"
import bar4 from "../../../public/gallery/bar4.jpg"









const galleryData = {
  items: [
    {
      Category: "camper room",
      Images: [camper1,camper2,camper3,camper4,camper5,camper6],
      Required: true,
    },
    {
      Category: "glamper room",
      Images: [glamper1,glamper2,glamper3,glamper4,glamper5,glamper6],
      Required: true,
    },
    {
      Category: "Surveyor room",
      Images: [survey1,survey2,survey3,survey4,survey5,survey6,survey7,survey8],
      Required: true,
    },
    { Category: `Surveyor Suite Room`, Images: [surveysuite1,surveysuite2,surveysuite3], Required: true },
    { Category: "Picnic", Images: [picnic1,picnic2,picnic3,picnic4,picnic5,picnic6,picnic7,picnic8,picnic9,picnic10], Required: true },
    { Category: "Barbeque", Images: [bar1,bar2,bar3,bar4], Required: true },
  ],
};

const page = () => {
  return (
    <div className="bg-white">
      <Gallery {...galleryData} />
    </div>
  );
};

export default page;

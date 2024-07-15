import Image from "next/image";

const Banner = ({ BannerImage }) => {
  return (
    <div className="max-w-[1600px] w-full mx-auto ">
      <div className="bg-[#D5D5D5] max-h-[700px] md:h-[700px] overflow-hidden">
        <Image
          src={BannerImage}
          alt="banner"
          className="h-full w-full object-cover object-bottom-[10%]"
        // width={600}
        // height={400}
        />
      </div>
    </div>
  );
};

export default Banner;

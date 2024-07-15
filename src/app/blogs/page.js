import BlogComponent from "./BlogComponent";
export const metadata = {
  title: "Blog - EBC Mussoorie",
  description:
    "Explore EBC's blog for the latest travel tips, adventure stories, and insights on the best camping and glamping spots in Mussoorie. Visit us!",
};

function Page() {
  return (
    <>
      <BlogComponent />
      <hr className="h-px my-4 mt-10 bg-[#D5D5D5] border-0" />
    </>
  );
}

export default Page;

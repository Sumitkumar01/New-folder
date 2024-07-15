import blogData from "./data";
import DynamicPage from "./DynamicPage";

// This function generates the static paths for the dynamic routes
// export async function generateStaticParams() {
//   // Map over the blogData to create an array of paths
//   const paths = blogData.map((item) => ({
//     params: { name: encodeURIComponent(item.title.trim()) },
//   }));

//   console.log("path:",paths);
//   return paths;
// }
// Generates the paths for static generation
export async function generateStaticParams() {
  const paths = blogData.map((item) => ({
    name: encodeURIComponent(item.title.trim()),
  }));

  return paths.map((path) => ({
    name: path.name,
  }));
}

// Fetches the data for a given page
async function getData(name) {
  const decodedName = decodeURIComponent(name);
  const data = blogData.find((item) => item.title.trim() === decodedName);
  return data;
}


// export default function page({ params,data }) {
//   return <DynamicPage params={params} data={data} />;
// }

// 

export default async function Page({ params }) {
  const { name } = params;
  const data = await getData(name);

  return <DynamicPage params={params} data={data} />;
}
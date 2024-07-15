"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";

function Gallery({ items }) {
  const [gallery, setGallery] = useState([]);
  const [index, setIndex] = useState("");
  const [isAll, setIsAll] = useState(true);
  const [isFilter, setIsFilter] = useState(false);

  const [filterGallery, setFilterGallery] = useState([...items]);

  // const [imgSelect, setImgSelect] = useState([]);
  // const [previewImage, setPreviewImage] = useState(false);
  // const [imgSelectIndex, setImgSelectIndex] = useState(0);

  const allImages = items.reduce((accumulator, currentValue) => {
    if (currentValue.Required) {
      return accumulator.concat(currentValue.Images);
    }
    // If 'Required' is false, just return the accumulator as is
    return accumulator;
  }, []);

  const handleClick = (e, ind) => {
    setIsAll(false);
    setIndex(ind);

    if (e.target.value.toLowerCase() === "all") {
      setIsAll(true);
      const allImages = items.reduce((accumulator, currentValue) => {
        if (currentValue.Required) {
          return accumulator.concat(currentValue.Images);
        }
        // If 'Required' is false, just return the accumulator as is
        return accumulator;
      }, []);
      setGallery([...allImages]);
      setIsFilter(false);
    } else {
      const filterData = items?.filter((i) => {
        return i.Category.toLowerCase() === e.target.value.toLowerCase();
      });
      setFilterGallery([...filterData]);
      setIsFilter(true);
    }
  };

  return (
    <div className="bg-[#ACACAC] py-6">
      <div className="flex flex-wrap justify-center gap-4">
        <button
          className="text-[1.2rem] capitalize font-medium px-6 py-2 hover:bg-[#29422C] hover:text-white rounded-sm"
          value={"all"}
          style={{
            background: isAll ? "#29422C" : "",
            color: isAll ? "white" : "",
          }}
          onClick={(e) => {
            handleClick(e);
          }}
        >
          All
        </button>
        {items.map((i, ind) => {
          if (i.Required) {
            return (
              <button
                value={i.Category}
                className="text-[1.2rem] capitalize font-medium px-3 py-2 hover:bg-[#29422C] hover:!text-white rounded-sm"
                style={{
                  background: ind === index ? "#29422C" : "",
                  color: ind === index ? "white" : "black",
                }}
                key={ind}
                onClick={(e) => {
                  handleClick(e, ind);
                }}
              >
                {i.Category}
              </button>
            );
          }
        })}
      </div>

      <div className="max-w-5xl px-3 mx-auto">
        {!isFilter && (
          <div className="grid lg:grid-cols-3 md:grid-cols-2  gap-5 mt-6">
            {allImages.map((item, index) => (
              <div key={index}>
                <div className="relative w-full aspect-[4/3]" key={index}>
                  <Image src={item} alt={`image${index}`} fill className="object-cover" />
                </div>
              </div>
            ))}
          </div>
        )}

        {isFilter && (
          <div className="grid md:grid-cols-3 gap-5 mt-16">
            {filterGallery[0]?.Images?.map((i, index) => {
              return (
                <div className="relative w-full aspect-[4/3]" key={index}>
                  <Image
                    src={i}
                    fill
                    className="object-cover"
                    alt={`image${index}`}
                  // width={600}
                  // height={400}
                  />
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}

export default Gallery;

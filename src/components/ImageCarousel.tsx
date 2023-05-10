"use client";
import React from "react";
import { Carousel } from "antd";
import Image8598 from "public/images/IMG_8598.jpg";
import Image8599 from "public/images/IMG_8599.jpg";
import Image8600 from "public/images/IMG_8600.jpg";
import Image8601 from "public/images/IMG_8601.jpg";
import Image8602 from "public/images/IMG_8602.jpg";
import Image8603 from "public/images/IMG_8603.jpg";
import Image8604 from "public/images/IMG_8604.jpg";
import Image8605 from "public/images/IMG_8605.jpg";
import Image8606 from "public/images/IMG_8606.jpg";
import Image from "next/image";

const ImageCarousel = () => {
  const images = [
    Image8598,
    Image8599,
    Image8600,
    Image8601,
    Image8602,
    Image8603,
    Image8604,
    Image8605,
    Image8606,
  ];

  return (
    <div
      className="test"
      style={{
        width: "90%",
        minHeight: "200px",
        marginTop: "10px",
      }}
    >
      <Carousel autoplay>
        {images.map((image) => (
          <Image
            key={image.src}
            src={image.src}
            width={image.width}
            height={200}
            alt=""
          />
        ))}
        {/* <Image
          src={Image8599}
          width={300}
          height={200}
          alt=""
          style={{ borderRadius: "30px" }}
        />
        <Image
          src={Image8600}
          width={300}
          height={200}
          alt=""
          style={{ borderRadius: "30px" }}
        />
        <Image
          src={Image8601}
          width={300}
          height={200}
          alt=""
          style={{ borderRadius: "30px" }}
        />
        <Image
          src={Image8602}
          width={300}
          height={200}
          alt=""
          style={{ borderRadius: "30px" }}
        />
        <Image
          src={Image8603}
          width={300}
          height={200}
          alt=""
          style={{ borderRadius: "30px" }}
        />
        <Image
          src={Image8604}
          width={300}
          height={200}
          alt=""
          style={{ borderRadius: "30px" }}
        />
        <Image
          src={Image8605}
          width={300}
          height={200}
          alt=""
          style={{ borderRadius: "30px" }}
        />
        <Image
          src={Image8606}
          width={300}
          height={200}
          alt=""
          style={{ borderRadius: "30px" }}
        /> */}
      </Carousel>
    </div>
  );
};

export default ImageCarousel;

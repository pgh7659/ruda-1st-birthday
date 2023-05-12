"use client";
import React from "react";
import { Image } from "antd";
import { StaticImageData } from "next/image";

const ImagesPreview = ({ images }: { images: StaticImageData[] }) => {
  return (
    <div
      style={{
        width: "95%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          marginTop: "20px",
          width: "100%",
        }}
      >
        <Image.PreviewGroup>
          {images.map((image) => (
            <Image
              key={image.src}
              height={50}
              width={50}
              src={image.src}
              alt=""
            />
          ))}
        </Image.PreviewGroup>
      </div>
      <p style={{ fontSize: "10px", color: "gray", textAlign: "center" }}>
        사진 터치하시면 크게 보여요!
      </p>
    </div>
  );
};

export default ImagesPreview;

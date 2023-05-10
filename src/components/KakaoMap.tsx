"use client";
import Script from "next/script";
import React, { useCallback, useEffect, useRef, useState } from "react";

const API_KEY = "33f07b5152b871149ffee3016b5d42b7";
const AROUND_TABLE_POSITION = { lat: 37.65999798, lng: 126.75521373 };
const KakaoMap = () => {
  const mapDiv = useRef<HTMLDivElement>(null);
  const [map, setMap] = useState<kakao.maps.Map | null>(null);

  const init = useCallback(
    (
      lat: number = AROUND_TABLE_POSITION.lat,
      lng: number = AROUND_TABLE_POSITION.lng
    ) => {
      kakao.maps.disableHD();
      if (mapDiv.current) {
        const container = mapDiv.current;
        const options = {
          center: new kakao.maps.LatLng(lat, lng),
          level: 5,
        };

        const map = new kakao.maps.Map(container, options);
        setMap(map);
      }
    },
    [mapDiv]
  );

  const setMarker = useCallback(
    (
      lat: number = AROUND_TABLE_POSITION.lat,
      lng: number = AROUND_TABLE_POSITION.lng
    ) => {
      if (map) {
        const markerPosition = new kakao.maps.LatLng(lat, lng);
        const marker = new kakao.maps.Marker({
          position: markerPosition,
        });

        marker.setMap(map);
      }
    },
    [map]
  );

  const onLoad = () => {
    kakao.maps.load(() => {
      init();
    });
  };

  useEffect(() => {
    if (map) {
      setMarker();
    }
  }, [map, setMarker]);

  return (
    <div style={{ minWidth: "286px", width: "95%" }}>
      <Script
        id="kakao-map"
        src="//dapi.kakao.com/v2/maps/sdk.js?autoload=false&appkey=33f07b5152b871149ffee3016b5d42b7"
        strategy="afterInteractive"
        onLoad={onLoad}
      ></Script>
      <div
        ref={mapDiv}
        id="map"
        style={{
          height: "300px",
          width: "100%",
          borderRadius: "30px",
        }}
      ></div>
    </div>
  );
};

export default KakaoMap;

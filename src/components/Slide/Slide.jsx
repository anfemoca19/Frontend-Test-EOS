import styles from "./Slide.module.css";
import clsx from "clsx";
import { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import FetchData from "../../fetchData";
import { Suspense } from "react";

const apiData = FetchData("https://picsum.photos/v2/list?page=2&limit=100");
export default function Slide() {
  const data = apiData.read();
  return (
    <>
      <Swiper
        rewind={true}
        navigation={true}
        modules={[Navigation]}
        className={clsx(styles["mySwiper"])}
      >
        <Suspense fallback={<div>Loading...</div>}>
          {data?.map((item) => (
            <SwiperSlide>{item.url}</SwiperSlide>
          ))}
        </Suspense>
      </Swiper>
    </>
  );
}

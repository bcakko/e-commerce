import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper";

import CollectionCard from "./CollectionCard";
import CollectionImage from "./CollectionImage";

import "swiper/css";
import "swiper/css/navigation";
import { Show } from "../../types/Shows.types";
import { Movie } from "../../types/Movies.types";

const Carousel = (props: {
  type: "banner" | "list";
  slides: (Movie | Show)[];
}) => {
  if (props.type === "list") {
    return (
      <Swiper
        autoplay={{
          delay: 4000,
          disableOnInteraction: true,
        }}
        breakpoints={{
          0: {
            slidesPerView: 2,
          },
          // when window width is >= 500px
          500: {
            slidesPerView: 3,
            slidesPerGroup: 2,
          },
          // when window width is >= 740px
          740: {
            slidesPerView: 5,
          },
        }}
        spaceBetween={0}
        loop={true}
        loopFillGroupWithBlank={true}
        navigation
        modules={[Autoplay, Navigation]}
        className={``}
      >
        {props.slides?.map((item) => (
          <SwiperSlide key={item.id}>
            <CollectionCard
              id={item.id}
              title={"title" in item ? item.title : item.name}
              imageUrl={item["poster_path"]}
              rating={item["vote_average"]}
              type={"title" in item ? "movie" : "tv"}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    );
  } else {
    return (
      <Swiper
        autoplay={{
          delay: 10000,
          disableOnInteraction: false,
        }}
        spaceBetween={0}
        loop={true}
        loopFillGroupWithBlank={true}
        navigation={false}
        modules={[Autoplay, Navigation]}
        className={``}
      >
        {props.slides?.map((item) => (
          <SwiperSlide key={item.id}>
            <CollectionImage
              url={item["backdrop_path"]}
              className="absolute h-full w-full object-cover -z-10 brightness-[60%] blur-[1px]"
            />
            <div className="flex justify-center items-center text-header-main-color">
              <div className="w-1/2 md:w-1/4 lg:w-1/6 md:py-16">
                <CollectionCard
                  id={item.id}
                  imageUrl={item["poster_path"]}
                  rating={item["vote_average"]}
                  type={"title" in item ? "movie" : "tv"}
                />
              </div>
              <div className="w-1/2">
                <h1 className="font-bold text-2xl md:text-4xl md:pb-8">
                  {"title" in item ? item.title : item.name}
                </h1>
                <p className="md:text-xl h-[170px] overflow-hidden overflow-y-scroll">
                  {item.overview}
                </p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    );
  }
};

export default Carousel;

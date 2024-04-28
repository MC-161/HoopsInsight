// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import LJ from "../../../assets/HomeRes/TopPlayers/LJmobile.jpg";
import GA from "../../../assets/HomeRes/TopPlayers/GAmobile.webp";
import SC from "../../../assets/HomeRes/TopPlayers/SCmobile.webp";
import KI from "../../../assets/HomeRes/TopPlayers/KImobile.jpg";
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
// import required modules
import { EffectCoverflow, Pagination } from "swiper/modules";

const data = [
  {
    name: "Kyrie Irving",
    image: KI,
    description:" The Maestro of the Hardwood, weaving magic with his dribble, sinking shots that defy belief, and orchestrating plays with finesse.",
  },
  {
    name: "Lebron James",
    image: LJ,
    description:" The Maestro of the Hardwood, weaving magic with his dribble, sinking shots that defy belief, and orchestrating plays with finesse.",
  },
  {
    name: "Giannis Antetokounmpo",
    image: GA,
    description:" The Maestro of the Hardwood, weaving magic with his dribble, sinking shots that defy belief, and orchestrating plays with finesse.",
  },
  {
    name: "Stephen Curry",
    image: SC,
    description:" The Maestro of the Hardwood, weaving magic with his dribble, sinking shots that defy belief, and orchestrating plays with finesse.",
  },
];

const TopPlayersMob = () => {
  return (
    <div className="flex items-center flex-col p-5 mb-10">
      <p className="pb-5 text-lg">Top Players</p>
      <Swiper
        initialSlide={1}
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={2}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper h-72 w-96"
      >
        {data.map((slide, index) => (
          <SwiperSlide key={index} className="border-2 rounded-sm">
            <img className="h-full w-full" src={slide.image} alt={slide.name} />
            <div className="hidden active:absolute flex-col bg-black bg-opacity-60 bottom-0 p-4 text-center" >
              <p>{slide.name}</p>
              <p className="text-xs text-justify">
                {slide.description}
              </p>
              <button className="border-2 rounded-md">Tap for Stats</button>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default TopPlayersMob;

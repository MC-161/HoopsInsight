// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import GSW from "../../../assets/HomeRes/TopTeams/GSW.webp"
import LAL from "../../../assets/HomeRes/TopTeams/LAL.jpg"
import MWB from "../../../assets/HomeRes/TopTeams/MWB.jpg"
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
// import required modules
import { EffectCoverflow, Pagination } from "swiper/modules";

const data = [
  {
    name: "Los Angeles Lakers",
    image: LAL,
    description:" The Maestro of the Hardwood, weaving magic with his dribble, sinking shots that defy belief, and orchestrating plays with finesse.",
  },
  {
    name: "Golden State Warriors",
    image: GSW,
    description:" The Maestro of the Hardwood, weaving magic with his dribble, sinking shots that defy belief, and orchestrating plays with finesse.",
  },
  {
    name: "Milwuakee Bucks",
    image: MWB,
    description:" The Maestro of the Hardwood, weaving magic with his dribble, sinking shots that defy belief, and orchestrating plays with finesse.",
  },
];

const TopTeamsMob = () => {
  return (
    <div className="flex items-center flex-col p-5 mb-10">
      <p className="pb-5 text-lg">Top Teams</p>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
      >
        {data.map((slide, index) => (
          <SwiperSlide key={index} className="border-2 rounded-md">
            <img className="h-full w-full" src={slide.image} alt={slide.name} />
            <div className=" hidden absolute flex-col bg-black bg-opacity-60 bottom-0 right-0 left-0 p-4 text-center">
              <p>{slide.name}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default TopTeamsMob;

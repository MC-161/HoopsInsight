
import WidgetWrapper from "@/components/Widget/WidgetWrapper";
import { Button } from "@/components/ui/button";
const NewsCard = () => {
  return (
      <WidgetWrapper className="hover:shadow-glow shadow-primary-logo h-fit">
        <section className="h-full flex flex-col gap-2 p-3">
          <div className="image border-2">
            <img
              src="https://a.espncdn.com/photo/2022/1017/r1077135_1296x518_5-2.jpg"
              alt=""
            />
          </div>
          <div className="title text-xs lg:text-sm">
            Ain't it fun? Steph Curry performs with Paramore at Chase Center
            concert
          </div>
          <Button variant={"outline"} className="self-center text-xs mt-3 h-8 px-10 bg-transparent hover:border">Link</Button>
        </section>
      </WidgetWrapper>
  );
};

export default NewsCard;

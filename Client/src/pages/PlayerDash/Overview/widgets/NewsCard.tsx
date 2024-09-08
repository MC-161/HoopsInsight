
import WidgetWrapper from "@/components/Widget/WidgetWrapper";
import { Button } from "@/components/ui/button";

interface NewsCardProps{
  link: string,
  image: string,
  title: string,
}

const NewsCard:React.FC<NewsCardProps> = ({link, image, title}) => {
  return (
      <WidgetWrapper className="hover:shadow-glow shadow-primary-logo h-fit">
        <section className="h-full flex flex-col gap-2 p-3">
          <div className="image border-2">
            <img
              src={image}
              alt=""
            />
          </div>
          <div className="title text-xs lg:text-sm">
            {title}
          </div>
          <Button variant={"outline"} className="self-center text-xs mt-3 h-8 px-10 bg-transparent hover:border"><a href={link} target="_blank"></a>Link</Button>
        </section>
      </WidgetWrapper>
  );
};

export default NewsCard;

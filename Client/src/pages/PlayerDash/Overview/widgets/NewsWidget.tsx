import { PlayerData } from "@/types/Dash/PlayerDash";
import NewsCard from "@/pages/PlayerDash/Overview/widgets/NewsCard";
import useNews from "@/hooks/useNews";
interface NewsWidgetProps {
  playerData: PlayerData;
}

const NewsWidget: React.FC<NewsWidgetProps> = ({ playerData }) => {
  const { data, isLoading, error } = useNews(playerData.playerStats._id);

  if (isLoading) {
    return <div>Loading news data...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }
  return (
    <>
      {" "}
      <p className="lg:pt-2 text-lg font-bold">News</p>
      <div className="w-full  grid grid-cols-2 gap-6 lg:grid-cols-4 lg:mt-4">
        {data?.body.map((news, index) => (
          <NewsCard key={index} link={news.link} image={news.image} title={news.title}/>
        ))}
      </div>
    </>
  );
};

export default NewsWidget;

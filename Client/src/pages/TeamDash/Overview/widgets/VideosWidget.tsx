import { getYouTubeVideoId } from "@/pages/utils/getYTId";
import { TeamVideos } from "@/types/Dash/TeamDash";

interface VideosWidgetProps{
  teamVideos:TeamVideos
}

const VideosWidget: React.FC<VideosWidgetProps> = ({teamVideos}) => {
  return (
    <>
      <p className="lg:pt-2 text-lg font-bold">Videos</p>
      <div className="w-full grid grid-cols-2 gap-4 lg:grid-cols-4 lg:mt-4 overflow-x-scroll">
        {teamVideos.videos.map((video, index) => {
          const videoUrl = Object.values(video)[0]; // Get the video URL
          const videoId = getYouTubeVideoId(videoUrl); // Extract the video ID

          // Only render the iframe if the videoId is valid
          return (
            videoId && (
              <iframe
                key={index}
                width={400}
                height={200}
                src={`https://www.youtube.com/embed/${videoId}?modestbranding=1`}
                title={`YouTube video player ${index}`}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                className="rounded-md"
              />
            )
          );
        })}
      </div>
    </>
  );
};

export default VideosWidget;
import React, { useEffect, useState } from 'react';
import { getYouTubeVideoDetails } from "@/pages/utils/getYTId";
import { TeamVideos } from "@/types/Dash/TeamDash";

interface VideosWidgetProps {
  teamVideos: TeamVideos;
  apiKey: string; // Pass YouTube API key as a prop
}

const VideosWidget: React.FC<VideosWidgetProps> = ({ teamVideos}) => {
  const [videosData, setVideosData] = useState<any[]>([]);
  const apiKey = import.meta.env.VITE_YT_KEY
  useEffect(() => {
    async function fetchVideos() {
      const videosPromises = teamVideos.videos.map(async (video) => {
        const videoUrl = Object.values(video)[0]; // Get the video URL
        return await getYouTubeVideoDetails(videoUrl, apiKey);
      });

      const videosDetails = await Promise.all(videosPromises);
      setVideosData(videosDetails.filter(Boolean)); // Filter out null results
    }

    fetchVideos();
  }, [teamVideos, apiKey]);

  return (
    <>
      <p className="lg:pt-2 text-lg font-bold">Videos</p>
      <div className="w-full grid grid-cols-2 gap-4 lg:grid-cols-4 lg:mt-4 overflow-x-scroll">
        {videosData.map((video, index) => (
          <div key={index} className="video-card">
            {video && (
              <>
                <iframe
                  width={400}
                  height={200}
                  src={`https://www.youtube.com/embed/${video.id}?modestbranding=1`}
                  title={`YouTube video player ${index}`}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  className="rounded-md"
                />
                <p className="font-bold mt-2">{video.title}</p>
              </>
            )}
          </div>
        ))}
      </div>
    </>
  );
};

export default VideosWidget;

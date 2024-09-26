import axios from 'axios';

// Fetch video details using YouTube Data API
export async function getYouTubeVideoDetails(videoUrl: string, apiKey: string) {
  try {
    const videoId = extractYouTubeVideoId(videoUrl);
    if (!videoId) throw new Error('Invalid YouTube video URL');
    
    const response = await axios.get(
      `https://www.googleapis.com/youtube/v3/videos?id=${videoId}&part=snippet,contentDetails,statistics&key=${apiKey}`
    );
    
    const videoData = response.data.items[0]; // Assuming one video ID
    if (!videoData) throw new Error('No video data found');
    
    return {
      id: videoId,
      title: videoData.snippet.title,
      description: videoData.snippet.description,
      thumbnail: videoData.snippet.thumbnails.medium.url,
      statistics: videoData.statistics,
    };
  } catch (error) {
    console.error('Error fetching YouTube video details:', error);
    return null;
  }
}

// Utility function to extract the video ID
function extractYouTubeVideoId(url: string): string | null {
  try {
    const urlParams = new URLSearchParams(new URL(url).search);
    return urlParams.get('v');
  } catch (error) {
    console.error('Invalid URL:', error);
    return null;
  }
}

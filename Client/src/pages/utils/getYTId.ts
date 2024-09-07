export function getYouTubeVideoId(url: string): string | null {
  try {
    const urlParams = new URLSearchParams(new URL(url).search);
    return urlParams.get('v');
  } catch (error) {
    console.error('Invalid URL:', error);
    return null;
  }
}
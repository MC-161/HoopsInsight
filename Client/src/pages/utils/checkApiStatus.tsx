export const checkApiStatus = async (url: string): Promise<boolean> => {
  while (true) {
    try {
      const response = await fetch(url, { method: 'HEAD' });
      if (response.ok) {
        return true;
      }
    } catch (error) {
      console.error('API check failed:', error);
    }
    await new Promise(resolve => setTimeout(resolve, 5000)); // Wait 5 seconds before retrying
  }
};

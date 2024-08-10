import { useState, useEffect } from 'react';

interface Asset {
  src: string;
}

const useAssetsLoading = (assets: Asset[]): boolean => {
  const [loaded, setLoaded] = useState<boolean>(false);

  useEffect(() => {
    const imageSources = assets.map(asset => asset.src);

    let loadedCount = 0;
    const totalAssets = imageSources.length;

    const handleAssetLoad = () => {
      loadedCount++;
      if (loadedCount === totalAssets) {
        setLoaded(true);
      }
    };

    imageSources.forEach(src => {
      const img = new Image();
      img.src = src;
      img.onload = handleAssetLoad;
      img.onerror = handleAssetLoad; // Handle errors as loaded
    });

  }, [assets]);

  return loaded;
};

export default useAssetsLoading;

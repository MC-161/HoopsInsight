import { useState, useEffect } from 'react';

const useResponsivePagination = () => {
  const [playersPerPage, setPlayersPerPage] = useState<number>(20);

  useEffect(() => {
    const updatePlayersPerPage = () => {
      setPlayersPerPage(window.innerWidth <= 640 ? 6 : 20);
    };

    updatePlayersPerPage();
    window.addEventListener('resize', updatePlayersPerPage);

    return () => window.removeEventListener('resize', updatePlayersPerPage);
  }, []);

  return playersPerPage;
};

export default useResponsivePagination;

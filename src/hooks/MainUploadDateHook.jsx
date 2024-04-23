import { useState, useEffect } from "react";

const useWeeksAgo = (dateString) => {
  const [weeksAgo, setWeeksAgo] = useState(0);

  useEffect(() => {
    const dateObj = new Date(dateString);
    const diff = new Date() - dateObj;
    const weeks = Math.floor(diff / (1000 * 60 * 60 * 24 * 7));
    setWeeksAgo(weeks);
  }, [dateString]);

  return weeksAgo;
};

export default useWeeksAgo;

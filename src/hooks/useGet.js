import { useState, useEffect } from 'react';
import axios from 'axios';

const useGet = (url) => {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(null);
  useEffect(() => {
    (async () => {
      setLoading(true);
      try {
        const response = await axios.get(url);
        setData(response.data);
      } catch (e) {
        setError(e.message);
      }
      setLoading(false);
    })();
  }, [url]);
  return { error, loading, data };
};

export default useGet;

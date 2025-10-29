import { useEffect, useState } from 'react';

function useFetch(url) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const fetchData = async () => {
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error('Response is not ok');
      }

      const data = await response.json();
      console.log('data=', data.data);
      setData(data.data);
    } catch (error) {
      setError(error?.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    setLoading(true);
    fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Response is not ok');
        }
        return response.json();
      })
      .then((data) => {
        console.log('data=', data.data);
        setData(data.data);
      })
      .catch((error) => setError(error.message))
      .finally(() => setLoading(false));
  }, [url]);

  return { data, loading, error };
}

export function Books({ url }) {
  const { data, loading, error } = useFetch(url);
  console.log('fetch fetch=', data);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div>
      <h2>Books</h2>
      <ul>
        {data.map((item) => (
          <li key={item.id}>{item.title}</li>
        ))}
      </ul>
    </div>
  );
}

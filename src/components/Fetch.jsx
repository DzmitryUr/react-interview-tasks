import { useEffect, useState } from 'react';

const useFetch = (url) => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetcData = async (url) => {
      try {
        const response = await fetch(url);

        console.log('response=', response);
        if (!response.ok) {
          setError(test);
          return;
        }

        const data = await response.json();
        setData(data.data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetcData(url);
  }, [url]);

  return { data, error, loading };
};

export function Fetch({ url }) {
  const { loading, error, data } = useFetch(url);
  console.log('data in fetch', data);
  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div>
      {data.map((item) => (
        <div key={item.id}>
          <h2>{item.title}</h2>
          <p>{item.author}</p>
          <p>{item.description}</p>
        </div>
      ))}
    </div>
  );
}

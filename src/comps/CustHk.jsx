import { useState, useEffect } from 'react';

// Custom Hook to fetch, add, edit, and delete data
const useDataApi = (url) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch data from the API
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const result = await response.json();
        setData(result);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };
    fetchData();
  }, [url]);

  // Add new data to the API
  const addData = async (newData) => {
    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newData),
      });
      const result = await response.json();
      setData((prevData) => [...prevData, result]);
    } catch (err) {
      setError(err.message);
    }
  };

  // Edit existing data in the API
  const editData = async (id, updatedData) => {
    try {
      const response = await fetch(`${url}/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedData),
      });
      const result = await response.json();
      setData((prevData) =>
        prevData.map((item) => (item.id === id ? result : item))
      );
    } catch (err) {
      setError(err.message);
    }
  };

  // Delete data from the API
  const deleteData = async (id) => {
    try {
      await fetch(`${url}/${id}`, {
        method: 'DELETE',
      });
      setData((prevData) => prevData.filter((item) => item.id !== id));
    } catch (err) {
      setError(err.message);
    }
  };

  return { data, loading, error, addData, editData, deleteData };
};

export default useDataApi;
import { useState, useEffect } from 'react';
import Gallery from './components/Gallery';


const API_URL = 'https://api.allorigins.win/raw?url=https://course-api.com/react-tours-project' //Fetch tours 

function App() {
  const [tours, setTours] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchTours = async () => {
    setLoading(true);
    try {
      const response = await fetch(API_URL);
      if (!response.ok) {
        throw new Error('Failed to fetch tours');
      }
      const data = await response.json();
      setTours(data);
      setError(null);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTours();
  }, []);

  // If loading is true, display "Loading..."
  // If error, display an error message
  // Else, render Gallery with tour data

  if (loading) return <h2>Loading...</h2>;
  if (error) return <h2>Error: {error}</h2>;

  // Refresh button if no tours are left
  if (tours.length === 0) {
    return (
      <div className="refresh">
        <h2>No tours left</h2>
        <button onClick={fetchTours}>Refresh</button>
      </div>
    );
  }

  return (
    <main>
      <h1>Our Tours</h1>
      <Gallery tours={tours} setTours={setTours} />
    </main>
  );
}

export default App;
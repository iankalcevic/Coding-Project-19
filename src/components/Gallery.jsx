import TourCard from './TourCard';

function Gallery({ tours, setTours }) {
  const handleRemove = (id) => {
    const newTours = tours.filter(tour => tour.id !== id);
    setTours(newTours);
  };

  return (
    <section className="gallery">
      {tours.map(tour => (
        <TourCard key={tour.id} tour={tour} onRemove={handleRemove} />
      ))}
    </section>
  );
}

export default Gallery;
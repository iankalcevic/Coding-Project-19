
function TourCard({ tour, onRemove }) {
    const { id, name, info, image, price } = tour;
 // Create a card component to display a tour's name, info, image, and price 
    return (
      <div className="card">
        <img src={image} alt={name} />
        <div className="card-body">
          <h2>{name}</h2>
          <h4>${price}</h4>
          <p>{info}</p>
          <button onClick={() => onRemove(id)}>Not Interested</button> 
        </div>
      </div>
    ); // Include not interest button that removes tour
  }
  
  export default TourCard;
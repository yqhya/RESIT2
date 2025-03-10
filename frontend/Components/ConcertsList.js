import React, { useState, useEffect } from 'react';

const ConcertsList = () => {
  const [concerts, setConcerts] = useState([]);

  const getAllConcerts = () => {
    fetch('http://localhost:555/concerts')
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          console.error('Failed to fetch concerts');
          return [];
        }
      })
      .then((data) => {
        setConcerts(data);
      })
      .catch((error) => {
        console.error('Error fetching concerts:', error);
      });
  };

  const purchaseTicket = (concertId) => {
    fetch(`http://localhost:555/concerts/${concertId}/purchase`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: "include"
    })
    .then((response) => {
      if (response.ok) {
        alert('Ticket purchased successfully!');
        getAllConcerts(); // Refresh the list
      } else {
        alert('Failed to purchase ticket. Please try again.');
      }
    })
    .catch((error) => {
      console.error('Error purchasing ticket:', error);
      alert('Error purchasing ticket. Please try again.');
    });
  };

  useEffect(() => {
    getAllConcerts();
  }, []);

  return (
    <div className="form-section">
      <h3>Available Concerts</h3>
      <button onClick={getAllConcerts}>Refresh Concerts</button>
      <div className="concerts-grid">
        {concerts.map((concert) => (
          <div key={concert.ID} className="concert-card">
            <h4>{concert.ARTIST}</h4>
            <p>Venue: {concert.VENUE}</p>
            <p>Date: {concert.DATE}</p>
            <p>Available Tickets: {concert.AVAILABLE_TICKETS}</p>
            <p>Price: ${concert.TICKET_PRICE}</p>
            <button 
              onClick={() => purchaseTicket(concert.ID)}
              disabled={concert.AVAILABLE_TICKETS <= 0}
            >
              {concert.AVAILABLE_TICKETS > 0 ? 'Purchase Ticket' : 'Sold Out'}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ConcertsList;

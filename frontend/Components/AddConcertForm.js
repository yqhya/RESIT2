import React, { useState } from 'react';

const AddConcertForm = () => {
  const [artist, setArtist] = useState('');
  const [venue, setVenue] = useState('');
  const [date, setDate] = useState('');
  const [availableTickets, setAvailableTickets] = useState('');
  const [ticketPrice, setTicketPrice] = useState('');
  const [message, setMessage] = useState('');

  const addConcert = () => {
    fetch('http://localhost:555/concerts/addconcert', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        artist,
        venue,
        date,
        availableTickets,
        ticketPrice
      }),
      credentials: "include"
    })
    .then((response) => {
      if (!response.ok) {
        throw new Error(`Failed to add concert. status code ${response.status}`);
      }
      setMessage('Concert added successfully');
      alert('Concert added successfully');
    })
    .catch((error) => {
      setMessage(`Error: ${error.message}`);
      alert(error.message);
    });
  };

  return (
    <div className="form-section">
      <h3>Add Concert (Admin)</h3>
      <form>
        <input
          type="text"
          placeholder="Artist/Band Name"
          value={artist}
          onChange={(e) => setArtist(e.target.value)}
          required
        /><br />
        <input
          type="text"
          placeholder="Venue"
          value={venue}
          onChange={(e) => setVenue(e.target.value)}
          required
        /><br />
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          required
        /><br />
        <input
          type="number"
          placeholder="Available Tickets"
          value={availableTickets}
          onChange={(e) => setAvailableTickets(e.target.value)}
          required
        /><br />
        <input
          type="number"
          placeholder="Ticket Price ($)"
          value={ticketPrice}
          onChange={(e) => setTicketPrice(e.target.value)}
          required
        /><br />
        <button type="button" onClick={addConcert}>Add Concert</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};

export default AddConcertForm;

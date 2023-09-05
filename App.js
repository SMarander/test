import React, { useState } from 'react';
import BookingForm from './BookingForm';
import Confirmation from './Confirmation';

function App() {
  const [bookingData, setBookingData] = useState(null);

  return (
    <div className="App">
      {bookingData ? (
        <Confirmation formData={bookingData} />
      ) : (
        <BookingForm setBookingData={setBookingData} />
      )}
    </div>
  );
}

export default App;

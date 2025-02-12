import { useState, useEffect } from "react";

const EventsDates = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    fetch('http://127.0.0.1:8000/events/')
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setEvents(data);
      })
      .catch((error) => console.error("Error fetching events:", error));
  }, []);

  return (
    <div className="mt-10 mb-10 px-4">
      <h3 className="text-center mb-12 text-2xl text-red-800 font-semibold">
        Events & Dates
      </h3>
      <div className="space-y-6">
        {events.map((event) => (
          <div
            key={event.id}
            className="flex flex-col md:flex-row justify-between items-center  text-center bg-gray-100 text-black p-4 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            <img
              src={`http://127.0.0.1:8000${event.image}`}
              alt={event.title}
              className="w-full md:w-60 h-48 object-cover rounded-lg mb-4 md:mb-0"
            />
            <div className="flex-1 md:ml-20 text-center md:text-left">
              <h3 className="text-2xl font-bold text-orange-500 mb-2">{event.title}</h3>
              <p className="text-gray-800 mb-4">{event.description}</p>
            </div>
            <div className="flex flex-col py-4">
              <h3 className="text-xl bg-orange-500 shadow-xl px-3 py-2">Dates</h3>
            <h4 className="text-xl text-red-800 ">
              {event.event_date}
            </h4>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EventsDates;
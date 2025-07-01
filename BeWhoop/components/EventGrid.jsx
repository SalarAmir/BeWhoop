// src/components/events/EventGrid.jsx
import React from 'react';
import EventCard from './EventCard';

const EventGrid = () => {
  const events = [
    {
      id: 1,
      image: 'group-young-teens-celebrating-world-youth-day-by-doing-activities-together.jpg',
      title: 'Singing Event',
      location: 'Lake View Park, Islamabad',
      date: { day: '25', month: 'May' },
      position: { left: 537, top: 167 },
    },
    {
      id: 2,
      image: 'people-taking-part-high-protocol-event.jpg',
      title: 'Formal Business',
      location: 'Lake View Park, Islamabad',
      date: { day: '25', month: 'May' },
      position: { left: -208, top: 167 },
    },
    {
      id: 3,
      image: 'tomorrowland-event.jpg',
      title: 'Tomorrowland',
      location: 'Lake View Park, Islamabad',
      date: { day: '25', month: 'May' },
      position: { left: 162, top: 167 },
    },
  ];

  return (
    <div className="event-grid">
      <div className="background-gradient" />
      <div className="red-blur-effect" />
      
      {events.map(event => (
        <EventCard key={event.id} event={event} />
      ))}
    </div>
  );
};

export default EventGrid;
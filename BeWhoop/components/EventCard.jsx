// src/components/events/EventCard.jsx
import React from 'react';
import DateBadge from './DateBadge';
import Icon from '../ui/Icon';

const EventCard = ({ event }) => {
  const { image, title, location, date, position } = event;

  return (
    <div 
      className="event-card" 
      style={{ 
        left: `${position.left}px`, 
        top: `${position.top}px` 
      }}
    >
      <div className="image-container">
        <img 
          src={`/images/${image}`} 
          alt={title} 
          className="event-image"
        />
        <div className="image-overlay" />
      </div>
      
      <DateBadge date={date} />
      
      <div className="event-details">
        <h3 className="event-title">{title}</h3>
        <p className="event-location">{location}</p>
      </div>
      
      <div className="event-actions">
        <Icon name="heart" />
        <Icon name="chat" />
      </div>
    </div>
  );
};
// src/components/events/EventCard.jsx (additional styles)
const eventCardStyles = css`
  position: absolute;
  width: 350px;
  height: 607px;
  border-radius: 42px;
  overflow: hidden;
  z-index: 10;

  .image-container {
    position: relative;
    width: 100%;
    height: 100%;
  }

  .event-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 42px;
  }

  .image-overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(0deg, rgba(0, 0, 0, 0.9) 0%, rgba(0, 0, 0, 0) 72.66%);
    border-radius: 42px;
  }

  .event-details {
    position: absolute;
    bottom: 30px;
    left: 30px;
    color: white;
  }

  .event-title {
    font-size: 30px;
    font-weight: 600;
    letter-spacing: -1px;
    margin-bottom: 8px;
  }

  .event-location {
    font-size: 15px;
    font-weight: 300;
    opacity: 0.8;
    letter-spacing: -1px;
  }

  .event-actions {
    position: absolute;
    right: 20px;
    bottom: 30px;
    display: flex;
    gap: 15px;
  }
`;

export default EventCard;
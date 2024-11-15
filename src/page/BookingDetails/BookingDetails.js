import React, { useState } from 'react';
import Sidebar from './Sidebar';
import Content from './Content';

const BookingDetails = () => {
    const [items, setItems] = useState([]);

    const handleAddItem = (item) => {
      setItems([...items, item]);
    };
  
    return (
      <div className="flex max-h-screen p-3 gap-3 w-full">
        <Sidebar onAddItem={handleAddItem} />
        <Content items={items} className="h-full"/>
      </div>
    );
};

export default BookingDetails;
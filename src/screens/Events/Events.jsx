
import React from 'react';
import { Route, Routes,Navigate } from 'react-router-dom';
import Event1 from './Components/Event1';
import Events2 from './Components/Events2';
const Events = () => {
  return (
    <Routes>
      <Route path="/" element={<Event1 />}>
        <Route index element={<Navigate to="home" />} />
        <Route path="home" element={<Events2 />} />
        {/* <Route path="contact" element={<ContactPage />} /> */}
      </Route>
    </Routes>
  );
};

export default Events;
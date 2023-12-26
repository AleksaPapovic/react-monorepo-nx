import * as React from 'react';

import { Link, Route, Routes } from 'react-router-dom';
const Marketing = React.lazy(() => import('marketing/Module'));
export function App() {
  return (
    <React.Suspense fallback={null}>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/marketing">Marketing</Link>
        </li>
      </ul>
      <Routes>
        <Route path="/" element={<div>HOME</div>} />
        <Route path="/marketing" element={<Marketing />} />
      </Routes>
    </React.Suspense>
  );
}

export default App;

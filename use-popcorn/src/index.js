import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import StarRating from './StarRating';
import App from './App';
import './index.css'
// import './index.css';
// import App from './App';

function Test() {
  const [movieRating, setMovieRating] = useState(0);
  return (
    <div>
      <StarRating color='blue' maxRating={10} setMovieRating={setMovieRating} />
      <p>This movie was rated {movieRating} stars</p>
    </div>
  );
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   <App/>
  </React.StrictMode>
);


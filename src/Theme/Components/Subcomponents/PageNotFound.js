import React from 'react';
import { Link } from 'react-router-dom';

const PageNotFound = () => {
  return (
    <div className="not-found">
      <h1>404 - Page Not Found</h1>
      <p>Sorry, the page you are looking for does not exist.</p>
   <Link to="/"> <button className='btn btn-success' >Back To Home </button></Link>
    </div>
  );
};

export default PageNotFound;

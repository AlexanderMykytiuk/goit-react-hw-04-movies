import React from 'react';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import Loader from 'react-loader-spinner';

const Spinner = () => {
  return (
    <div className="mt-5 text-center">
     <Loader type="BallTriangle" color="#00BFFF" height={80} width={80} />
    </div>
  );
};
export default Spinner;

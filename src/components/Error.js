import React from 'react'
import { useRouteError } from 'react-router'

const OOPSS = () => {
    const err = useRouteError();
    console.log(err);
  return (
    <div>
      <h1>err.error </h1>
    </div>
  );
}

export default OOPSS
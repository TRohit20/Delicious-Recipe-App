// This is where we add the components

import veggie from "../components/veggie";
import popular from "../components/popular";

import React from 'react'

function home() {
  return (
    <div>
        {/* Basically we are rendering the components */}
        <veggie/>
        <popular/>
    </div>
  )
}

export default home
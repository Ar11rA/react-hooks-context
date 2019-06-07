import React, { useContext } from 'react';
import SampleContext from '../Context/SampleContext'

const SampleConsumer = () => { 
  const sampleData = useContext(SampleContext)
  
  return <div>
    <h2>Sample consumer</h2>
    <p>{sampleData}</p>
  </div>
}
export default SampleConsumer;

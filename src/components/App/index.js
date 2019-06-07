import React from 'react';
import SampleContext from '../Context/SampleContext'
import ProductListUseState from '../ProductListUseState'
import ProductListUseEffect from '../ProductListUseEffect'
import SampleConsumer from '../SampleConsumerComponent'

function App() {
  return (
  <div >  
    <ProductListUseState />
    <ProductListUseEffect />
    <SampleContext.Provider value='hi from sample'>
      <SampleConsumer />
    </SampleContext.Provider>
  </div>  
  );
}

export default App;

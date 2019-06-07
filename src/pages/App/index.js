import React from 'react';
import SampleContext from '../../context/SampleContext'
import ProductListUseState from '../../components/ProductListUseState'
import ProductListUseEffect from '../../components/ProductListUseEffect'
import SampleConsumer from '../../components/SampleConsumerComponent'

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

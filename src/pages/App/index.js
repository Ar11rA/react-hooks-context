import React, {Fragment} from 'react';
import SampleContext from '../../context/SampleContext'
import ProductListUseState from '../../components/ProductListUseState'
import ProductListUseEffect from '../../components/ProductListUseEffect'
import SampleConsumer from '../../components/SampleConsumerComponent'
import CounterUseState from '../../components/CounterUseState'
import CounterUseReducer from '../../components/CounterUseReducer'

function App() {
  return (
  <Fragment>  
    <ProductListUseState />
    <ProductListUseEffect />
    <SampleContext.Provider value='hi from sample'>
      <SampleConsumer />
    </SampleContext.Provider>
    <CounterUseState />
    <CounterUseReducer />
  </Fragment>  
  );
}

export default App;

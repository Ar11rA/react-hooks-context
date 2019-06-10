import React from 'react';
import useGet from '../../hooks/useGet';
import urls from '../../constants/api';

const SampleUseGet = () => {
  const { error, loading, data } = useGet(urls.MOCK_GET_URL);
  if (loading) {
    return (<p>loading...</p>);
  }
  if (error) {
    return (<p>error...</p>);
  }
  return (
    <div>
      <h2>Sample get call</h2>
      <p>{data}</p>
    </div>
  );
};
export default SampleUseGet;

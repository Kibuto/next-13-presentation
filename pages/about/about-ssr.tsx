import Card from '@/components/card';
import React, { useEffect } from 'react';

export async function getServerSideProps() {
  // Fetch data from an API
  const response = await fetch('https://jsonplaceholder.typicode.com/posts/1');
  const data = await response.json();

  // Return the data as props
  return {
    props: {
      data,
    },
  };
}

const Home = (props: any) => {
  const { data } = props;

  useEffect(() => {
    const btn = document.getElementById('button');
    btn?.addEventListener('click', () => {
      console.log('log');
    });
  }, []);

  return (
    <div className="container">
      <h1>Server Side Rendering Example</h1>
      <Card data={data} />
      <button id="button">Click here</button>
    </div>
  );
};

export default Home;

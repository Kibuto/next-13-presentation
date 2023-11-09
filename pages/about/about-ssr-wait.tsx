import Card from '@/components/card';
import { wait } from '@/utils';
import React, { useEffect, useState } from 'react';

export async function getServerSideProps() {
  // Fetch data from an API
  await wait(3000);
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
  const [count, setCount] = useState(0);

  useEffect(() => {
    const btn = document.getElementById('button');
    btn?.addEventListener('click', () => {
      console.log('log');
    });
  }, []);

  return (
    <div className="container">
      <h1>Server Side Rendering Wait 3s Example</h1>
      <Card data={data} />
      <button id="button">Click me</button>
      <span>{count}</span>
      <button onClick={() => setCount((c) => c + 1)}>Count</button>
    </div>
  );
};

export default Home;

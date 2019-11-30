import React from 'react';
import Head from 'next/head';
import AppLayout from '../components/AppLayout';

const Home = () => (
  <React.Fragment>
    <Head>
      <title>node study</title>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/antd/3.23.6/antd.min.css"></link>
    </Head>
    <AppLayout>
      <div>Hello, Next!</div>
    </AppLayout>
  </React.Fragment>
);

export default Home;
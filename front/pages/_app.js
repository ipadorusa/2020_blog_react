import React from 'react';
import Head from 'next/head';
import Protypes from 'prop-types';
import AppLayout from '../components/AppLayout';

const nodeBird = ({ Component }) => {
  return (
    <React.Fragment>
      <Head>
        <title>node study</title>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/antd/3.23.6/antd.min.css" />
      </Head>
      <AppLayout>
        <Component />
      </AppLayout>
    </React.Fragment> 
  )
};
nodeBird.Protypes = {
  Component: Protypes.elementType
};

export default nodeBird;
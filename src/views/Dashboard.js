import React, { useState, useEffect } from 'react';
import { MainTemplate } from 'templates/MainTemplate';
import Heading from 'components/atom/Heading/Heading';
import { GetCamera } from 'api/FetchCamera';

const Dashboard = () => (
  <MainTemplate>
    <Heading>Jak czesto widziany jest twój futszak ...</Heading>
  </MainTemplate>
);

export default Dashboard;

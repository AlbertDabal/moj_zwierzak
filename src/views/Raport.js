import { GetCamera } from 'api/FetchCamera';
import Heading from 'components/atom/Heading/Heading';
import React, { useState, useEffect } from 'react';
import { MainTemplate } from 'templates/MainTemplate';
import { RaportsMain } from 'components/organism/Raports/RaportsMain';

export const Raport = () => (
  <MainTemplate>
    <RaportsMain />
  </MainTemplate>
);

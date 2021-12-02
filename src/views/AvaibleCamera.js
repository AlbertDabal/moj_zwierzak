import React, { useState, useEffect } from 'react';

import { CamerasMain } from 'components/organism/Cameras/CamerasMain';
import { MainTemplate } from 'templates/MainTemplate';

export const AvaibleCamera = () => (
  <MainTemplate>
    <CamerasMain />
  </MainTemplate>
);

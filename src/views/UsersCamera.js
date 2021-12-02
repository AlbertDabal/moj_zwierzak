import React from 'react';
import { MainTemplate } from 'templates/MainTemplate';
import { useLocation, Link, useHistory } from 'react-router-dom';
import { CamerasMain } from 'components/organism/Cameras/CamerasMain';

export const UsersCamera = () => {
  const state = useLocation();
  const userId = state.pathname.replace('/allUser/camera/', '');

  return (
    <MainTemplate>
      <CamerasMain userId={userId} />
    </MainTemplate>
  );
};

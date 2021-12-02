import React, { useState, useEffect } from 'react';
import { MainTemplate } from 'templates/MainTemplate';
import { useLocation, Link, useHistory } from 'react-router-dom';
import { RaportsMain } from 'components/organism/Raports/RaportsMain';

export const UsersRaport = () => {
  const state = useLocation();
  const userId = state.pathname.replace('/allUser/raport/', '');

  return (
    <MainTemplate>
      <RaportsMain userId={userId} />
    </MainTemplate>
  );
};

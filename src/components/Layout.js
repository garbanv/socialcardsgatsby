import React from 'react';
import Header from './Header';
import '../styles/mainStyles.css'

export default function Layout({children}) {
  return (
  <>
  <Header />
{children}
  </>);
}

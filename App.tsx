import React from 'react';
import {ThemeProvider} from 'styled-components';
import Routes from './src/routes';
import theme from './src/styles/theme';
import ReactQueryProvider from './src/services/query';

export default function App() {
  return (
    <ReactQueryProvider>
      <ThemeProvider theme={theme}>
        <Routes />
      </ThemeProvider>
    </ReactQueryProvider>
  );
}

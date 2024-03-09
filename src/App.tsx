import React from 'react';
import { Amplify } from 'aws-amplify';
import { Authenticator } from '@aws-amplify/ui-react';
import logo from './logo.svg';
import './App.css';
import '@aws-amplify/ui-react/styles.css';
import {
  defaultDarkModeOverride,
  ThemeProvider,
  Card,
  Text,
  ToggleButtonGroup,
  ToggleButton
} from '@aws-amplify/ui-react';
import awsExports from './aws-exports';
Amplify.configure(awsExports);


export default function App() {
  const [colorMode, setColorMode] = React.useState<any>('dark');
  const theme = {
    name: 'my-theme',
    overrides: [defaultDarkModeOverride],
  };

  return (
    <Authenticator>
      {({ signOut, user }) => (
        <ThemeProvider theme={theme} colorMode={colorMode}>
          <div className="App">
            <header className="App-header">
              <img src={logo} className="App-logo" alt="logo" />
              <p>
                Edit <code>src/App.tsx</code> and save to reload.
              </p>
              <a
                className="App-link"
                href="https://reactjs.org"
                target="_blank"
                rel="noopener noreferrer"
              >
                Learn React
              </a>
              <button onClick={signOut}>Sign out</button>
            </header>
          </div>
        </ThemeProvider>
      )}
    </Authenticator>
  );
}

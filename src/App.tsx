import React from 'react';
import { Amplify } from 'aws-amplify';
import { Authenticator } from '@aws-amplify/ui-react';
import { Routes, Route, Link } from "react-router-dom";
import logo from './logo.svg';
// import './App.css';
import '@aws-amplify/ui-react/styles.css';
import {
  defaultDarkModeOverride,
  ThemeProvider,
  Card,
  Text,
  ToggleButtonGroup,
  ToggleButton
} from '@aws-amplify/ui-react';
import Layout from "./components/Layout";
import Dashboard from "./pages/dashboard";
import Profile from "./pages/profile";
import Tables from "./pages/tables";
import UsersTable from "./pages/tables/UsersTablePage";
import Forms from "./pages/forms";
import EditForm from "./pages/forms/EditForm";
import awsExports from './aws-exports';
Amplify.configure(awsExports);

export default function App() {
  const [colorMode, setColorMode] = React.useState<any>('light');
  const theme = {
    name: 'my-theme',
    overrides: [defaultDarkModeOverride],
  };

  return (
    <Authenticator>
      {({ signOut, user }) => (
        <ThemeProvider theme={theme} colorMode={colorMode}>
          <div className="App">
            <Routes>
              <Route path="/" element={<Layout />}>
                <Route index element={<Dashboard />} />
                <Route path="forms" element={<Forms />} />
                <Route path="edit-form/:conceptId" element={<EditForm />} />
                <Route path="tables" element={<Tables />} />
                <Route path="users-table" element={<UsersTable />} />
                <Route path="profile" element={<Profile />} />
                <Route path="*" element={<NoMatch />} />
              </Route>
            </Routes>
          </div>
        </ThemeProvider>
      )}
    </Authenticator>
  );
}

function NoMatch() {
  return (
    <div>
      <h2>Nothing here!</h2>
      <p><Link to="/">Go to home page</Link></p>
    </div>
  )
}
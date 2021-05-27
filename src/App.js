import React from 'react';
import Map from "./componentMap/Map"
import './App.css';
import Amplify from "aws-amplify";
import awsconfig from "./aws-exports";
import { withAuthenticator,AmplifySignOut} from '@aws-amplify/ui-react'

Amplify.configure(awsconfig);

function App() {
  return (
    <div className="App">
      <AmplifySignOut />
      <h1>Challan Wala</h1>
      <p>sourab ka g</p>
      <Map />
    </div>
  );
}

export default withAuthenticator(App);

import * as React from "react";
import { Admin, Resource, ListGuesser } from 'react-admin';

import authProvider from './providers/authProvider';
import dataProvider from './providers/dataProvider';
import MyLogoutButton from './LogoutButton';

import { PatientList } from './lists/patientList';
import { HospitalList } from './lists/hospitalList';
import { ResearcherList } from './lists/researcherList';

import dashboard from './dashboard';

const App = () => (
  <Admin logoutButton={MyLogoutButton} dashboard={dashboard} authProvider={authProvider} dataProvider={dataProvider}>
    <Resource name="reports/patients" list={PatientList} />
    <Resource name="reports/hospitals" list={HospitalList} />
    <Resource name="reports/researchers" list={ResearcherList} />
  </Admin>
);

export default App;
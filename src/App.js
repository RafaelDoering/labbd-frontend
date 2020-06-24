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
    <Resource name="reports/pacientes" options={{ label: 'Pacientes' }} list={PatientList} />
    <Resource name="reports/hospitais" options={{ label: 'Hospitais' }} list={HospitalList} />
    <Resource name="reports/pesquisadores" options={{ label: 'Pesquisadores' }} list={ResearcherList} />
  </Admin>
);

export default App;
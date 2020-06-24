import * as React from "react";
import { Admin, Resource, ListGuesser, EditGuesser } from 'react-admin';

import authProvider from './providers/authProvider';
import dataProvider from './providers/dataProvider';
import MyLogoutButton from './LogoutButton';

import { PatientList } from './lists/patientList';
import { HospitalList } from './lists/hospitalList';
import { ResearcherList } from './lists/researcherList';
import { LaboratoryList } from './lists/laboratoryList';

import dashboard from './dashboard';

const App = () => (
  <Admin logoutButton={MyLogoutButton} dashboard={dashboard} authProvider={authProvider} dataProvider={dataProvider}>
    {permissions => [
        <Resource name="reports/pacientes" options={{ label: 'Pacientes' }} list={PatientList} />,
        <Resource name="reports/pesquisadores" options={{ label: 'Pesquisadores' }} list={ResearcherList} />,
        permissions === 'Medicina' || permissions === 'Admin'
          ? <Resource name="reports/hospitais" options={{ label: 'Hospitais' }} list={HospitalList} />
          : null,
        permissions === 'Pesquisa' || permissions === 'Admin'
          ? <Resource name="reports/laboratorios" options={{ label: 'Laboratórios' }} list={LaboratoryList} />
          : null,
    ]}
  </Admin>
);

export default App;

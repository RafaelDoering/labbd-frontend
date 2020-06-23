import * as React from "react";
import { List, Datagrid, TextField, NumberField } from 'react-admin';

export const PatientList = props => (
  <List {...props}>
    <Datagrid rowClick="edit">
      <TextField source="nome" />
      <NumberField source="idade" />
      <TextField source="sexo" />
      <NumberField source="data_de_nascimento" />
      <TextField source="contato_telefonico" />
      <TextField source="endereco" />
      <TextField source="hospital" />
    </Datagrid>
  </List>
);

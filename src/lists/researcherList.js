import * as React from "react";
import { List, Datagrid, TextField, NumberField, DateField } from 'react-admin';

export const ResearcherList = props => (
  <List {...props}>
    <Datagrid rowClick="edit">
      <TextField source="nome" />
      <NumberField source="registro_institucional" />
      <DateField source="data_contratacao" />
      <NumberField source="id_amostra" />
      <DateField source="data" />
      <TextField source="resultado" />
    </Datagrid>
  </List>
);

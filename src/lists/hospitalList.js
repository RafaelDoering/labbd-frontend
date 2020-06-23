import * as React from "react";
import { List, Datagrid, TextField, NumberField } from 'react-admin';

export const HospitalList = props => (
  <List {...props}>
    <Datagrid rowClick="edit">
      <TextField source="nome" />
      <TextField source="concat" />
      <NumberField source="qtd_funcionario" />
      <NumberField source="qtd_leitos" />
      <TextField source="qtd_atendimentos" />
      <TextField source="qtd_pacientes" />
    </Datagrid>
  </List>
);

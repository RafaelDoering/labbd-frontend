import * as React from "react";
import { List, Datagrid, TextField, NumberField, DateField } from 'react-admin';

export const SampleList = props => (
  <List {...props}>
    <Datagrid rowClick="edit">
      <TextField source="Nome do paciente" />
      <NumberField source="Idade" />
      <TextField source="Sexo" />
      <TextField source="Endereço Completo" />
      <DateField source="Data da Amostra" />
      <TextField source="Resultado" />
      <TextField source="Laboratório" />
    </Datagrid>
  </List>
);

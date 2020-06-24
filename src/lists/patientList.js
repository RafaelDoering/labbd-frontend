import * as React from "react";
import { List, Datagrid, TextField, NumberField, Filter, TextInput } from 'react-admin';

const PatientFilter = (props) => (
  <Filter {...props}>
    <TextInput label="Nome" source="q" alwaysOn />
  </Filter>
);

export const PatientList = props => (
  <List filters={<PatientFilter />} {...props}>
    <Datagrid rowClick="edit">
      <TextField source="nome" label="Nome" sortable={false} />
      <NumberField source="idade" label="Idade" sortable={false} />
      <TextField source="sexo" label="Sexo" sortable={false} />
      <NumberField source="data_de_nascimento" label="Data de Nascimento" sortable={false} />
      <TextField source="contato_telefonico" label="Contato Telefônico" sortable={false} />
      <TextField source="endereco_completo" label="Endereço Completo" sortable={false} />
      <TextField source="hospital" label="Hospital" sortable={false} />
    </Datagrid>
  </List>
);

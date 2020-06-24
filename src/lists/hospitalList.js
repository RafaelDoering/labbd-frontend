import * as React from "react";
import { List, Datagrid, TextField, NumberField, Filter, TextInput } from 'react-admin';

const HospitalFilter = (props) => (
  <Filter {...props}>
    <TextInput label="Nome Hospital" source="q" alwaysOn />
  </Filter>
);

export const HospitalList = props => (
  <List filters={<HospitalFilter />} {...props}>
    <Datagrid rowClick="edit">
      <TextField source="nome_hospital" label="Nome Hospital" sortable={false} />
      <TextField source="endereco_completo" label="Endereço Completo" sortable={false} />
      <NumberField source="quantidade_de_funcionarios" label="Quantidade de Funcionários" sortable={false} />
      <NumberField source="quantidade_de_leitos" label="Quantidade de Leitos" sortable={false} />
      <TextField source="quantidade_de_atendimentos_registrados" label="Quantidade de Atendimentos registrados" sortable={false} />
      <TextField source="quantidade de_pacientes_distintos_atendidos" label="Quantidade de Pacientes distintos atendidos" sortable={false} />
    </Datagrid>
  </List>
);

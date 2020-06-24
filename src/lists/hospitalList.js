import * as React from "react";
import { List, Datagrid, TextField, NumberField, Filter, ReferenceInput, SelectInput, TextInput } from 'react-admin';

const HospitalFilter = (props) => (
  <Filter {...props}>
    <TextInput label="Pesquisar" source="q" alwaysOn />
    <ReferenceInput label="Nome Hospital" source="nome_hospital" reference="reports/hospitais" allowEmpty>
      <SelectInput optionText="nome_hospital" />
    </ReferenceInput>
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

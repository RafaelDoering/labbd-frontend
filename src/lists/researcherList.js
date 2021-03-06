import * as React from "react";
import { List, Datagrid, TextField, NumberField, DateField, Filter, TextInput } from 'react-admin';

const ResearcherFilter = (props) => (
  <Filter {...props}>
    <TextInput label="Nome do pesquisador" source="q" alwaysOn />
  </Filter>
);

export const ResearcherList = props => (
  <List filters={<ResearcherFilter />} {...props}>
    <Datagrid rowClick="edit">
      <TextField source="nome_do_pesquisador" label="Nome do pesquisador" sortable={false} />
      <NumberField source="registro_institucional" label="Registro Institucional" sortable={false} />
      <DateField source="data_de_contratacao" label="Data de Contratação" sortable={false} />
      <NumberField source="identificador_da_amostra" label="Identificador da Amostra" sortable={false} />
      <DateField source="data_da_amostra" label="Data da amostra" sortable={false} />
      <TextField source="resultado_da_amostra" label="Resultado da Amostra" sortable={false} />
    </Datagrid>
  </List>
);

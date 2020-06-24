import * as React from "react";
import { List, Datagrid, TextField, NumberField, Filter, TextInput } from 'react-admin';

const LaboratoryFilter = (props) => (
  <Filter {...props}>
    <TextInput label="Nome do laboratório" source="q" alwaysOn />
  </Filter>
);

export const LaboratoryList = props => (
  <List filters={<LaboratoryFilter />} {...props}>
    <Datagrid rowClick="edit">
      <TextField source="nome_do_laboratorio" label="Nome do laboratório" sortable={false} />
      <NumberField source="quantidade_de_pesquisadores" label="Quantidade de Pesquisadores" sortable={false} />
      <TextField source="endereco_completo" label="Endereço Completo" sortable={false} />
      <NumberField source="quantidade_de_amostras_recebidas" label="Quantidade de amostras recebidas" sortable={false} />
    </Datagrid>
  </List>
);

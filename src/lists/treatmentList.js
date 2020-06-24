import * as React from "react";
import { List, Datagrid, TextField, NumberField, Filter, TextInput } from 'react-admin';

const TreatmentFilter = (props) => (
  <Filter {...props}>
    <TextInput label="Cidade" source="q" alwaysOn />
  </Filter>
);


export const TreatmentList = props => (
  <List filters={<TreatmentFilter />}  {...props}>
    <Datagrid rowClick="edit">
      <TextField source="cidade" label="Cidade" sortable={false} />
      <NumberField source="atendimentos" label="Quantidade de pacientes" sortable={false} />
      <NumberField source="pacientes" label="Quantidade de atendimentos realizados" sortable={false} />
      <NumberField source="janeiro" label="Janeiro" sortable={false} />
      <NumberField source="fevereiro" label="Fevereiro" sortable={false} />
      <NumberField source="março" label="Março" sortable={false} />
      <NumberField source="abril" label="Abril" sortable={false} />
      <NumberField source="maio" label="Maio" sortable={false} />
      <NumberField source="junho" label="Junho" sortable={false} />
      <NumberField source="julho" label="Julho" sortable={false} />
      <NumberField source="agosto" label="Agosto" sortable={false} />
      <NumberField source="setembro" label="Setembro" sortable={false} />
      <NumberField source="outubro" label="Outubro" sortable={false} />
      <NumberField source="novembro" label="Novembro" sortable={false} />
      <NumberField source="dezembro" label="Dezembro" sortable={false} />
    </Datagrid>
  </List>
);

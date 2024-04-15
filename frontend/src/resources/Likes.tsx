//Source code generated by AppGPT (www.appgpt.tech)
import {
  Datagrid,
  List,
  EditButton,
  Edit,
  SimpleForm,
  Create,
  SelectColumnsButton,
  DatagridConfigurable,
  TopToolbar,
  CreateButton,
  ExportButton,
  FilterButton,
  //Field controls
  BooleanField,
  DateField,
  EmailField,
  ImageField,
  NumberField,
  ReferenceField,
  TextField,
  UrlField,
  //Input controls
  BooleanInput,
  DateInput,
  EmailInput,
  ImageInput,
  NumberInput,
  ReferenceInput,
  TextInput,
  UrlInput,
  PasswordInput,
} from 'react-admin';
import { useRecordContext } from 'react-admin';
import { Grid } from '@mui/material';
const ReadOnlyPasswordField = ({ record, source }) => {
  // You can customize the way you display the password here, e.g., mask it with asterisks
  const maskedPassword = '********';

  return <span>{maskedPassword}</span>;
};
const ListActions = () => (
  <TopToolbar>
    <FilterButton />
    <CreateButton />
    <ExportButton />
    <SelectColumnsButton />
  </TopToolbar>
);
const LikesTitle = () => {
  const record = useRecordContext();
  return <span>Likes {record ? `"${record.userId}"` : ''}</span>;
};

export const LikesList = () => (
  <List actions={<ListActions />} filters={ResourceFilters}>
    <DatagridConfigurable>
      <ReferenceField source="userId" reference="Users" />
      <ReferenceField source="targetId" reference="Users" />
      <DateField source="timestamp" />
      <EditButton />
    </DatagridConfigurable>
  </List>
);

export const LikesEdit = () => (
  <Edit title={<LikesTitle />}>
    <SimpleForm>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 5 }}>
        <Grid item xs={4}>
          <ReferenceInput source="userId" reference="Users" />
        </Grid>
        <Grid item xs={4}>
          <ReferenceInput source="targetId" reference="Users" />
        </Grid>
        <Grid item xs={4}>
          <DateInput source="timestamp" />
        </Grid>
      </Grid>
    </SimpleForm>
  </Edit>
);

export const LikesCreate = () => (
  <Create>
    <SimpleForm>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 5 }}>
        <Grid item xs={4}>
          <ReferenceInput source="userId" reference="Users" />
        </Grid>
        <Grid item xs={4}>
          <ReferenceInput source="targetId" reference="Users" />
        </Grid>
        <Grid item xs={4}>
          <DateInput source="timestamp" />
        </Grid>
      </Grid>
    </SimpleForm>
  </Create>
);

const ResourceFilters = [
  <TextInput source="q" label="Search" alwaysOn />,
  <ReferenceInput source="userId" label="userId" reference="Users" alwaysOn />,
  <ReferenceInput
    source="targetId"
    label="targetId"
    reference="Users"
    alwaysOn
  />,
  ,
];

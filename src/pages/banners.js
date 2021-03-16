import * as React from "react";
import { useMediaQuery } from "@material-ui/core";
import {
  Filter,
  List,
  Datagrid,
  SimpleList,
  TextField,
  EditButton,
  Edit,
  Create,
  SimpleForm,
  ReferenceInput,
  SelectInput,
  TextInput,
  ImageInput,
  ImageField,
} from "react-admin";

const BannerFilter = (props) => {
  return (
    <Filter {...props}>
      <TextInput label="Search" source="q" alwaysOn />
      <ReferenceInput label="User" source="userId" reference="users" allowEmpty>
        <SelectInput optionText="name" />
      </ReferenceInput>
    </Filter>
  );
};

export const BannerList = (props) => {
  const isSmall = useMediaQuery((theme) => theme.breakpoints.down("sm"));

  return (
    <List filters={<BannerFilter />} {...props}>
      {isSmall ? (
        <SimpleList
          primaryText={(record) => record.title}
          secondaryText={(record) => `${record.views} views`}
          tertiaryText={(record) =>
            new Date(record.published_at).toLocaleDateString()
          }
        />
      ) : (
        <Datagrid>
          <TextField source="id" />
          <TextField source="name" />
          <TextInput source="url" />
          <TextField source="description" />
          <EditButton />
        </Datagrid>
      )}
    </List>
  );
};

export const BannerEdit = (props) => (
  <Edit {...props}>
    <SimpleForm>
      <TextInput disabled source="id" />
      <TextInput source="name" fullWidth />
      <TextInput multiline source="url" fullWidth />
      <ImageInput
        source="cover"
        label="Cover (max 1MB)"
        accept="image/*"
        placeholder={<p>Drop your image here</p>}
        maxSize={1024 * 1 * 1000} //1MB
      >
        <ImageField source="src" title="name" />
      </ImageInput>
      <TextInput multiline source="description" fullWidth />
    </SimpleForm>
  </Edit>
);

export const BannerCreate = (props) => (
  <Create {...props}>
    <SimpleForm>
      <TextInput source="name" fullWidth />
      <TextInput multiline source="url" fullWidth />
      <ImageInput
        source="cover"
        label="Cover (max 1MB)"
        accept="image/*"
        placeholder={<p>Drop your image here</p>}
        maxSize={1024 * 1 * 1000} //1MB
      >
        <ImageField source="src" title="name" />
      </ImageInput>
      <TextInput multiline source="description" fullWidth />
    </SimpleForm>
  </Create>
);

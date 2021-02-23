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
  TextInput,
  ImageInput,
  ImageField,
} from "react-admin";

const PlaceFilter = (props) => {
  return (
    <Filter {...props}>
      <TextInput label="Search" source="q" alwaysOn />
    </Filter>
  );
};

export const PlaceList = (props) => {
  const isSmall = useMediaQuery((theme) => theme.breakpoints.down("sm"));

  return (
    <List filters={<PlaceFilter />} {...props}>
      {isSmall ? (
        <SimpleList
          primaryText={(record) => record.title}
          secondaryText={(record) => record.description}
          // secondaryText={(record) => `${record.views} views`}
          tertiaryText={(record) =>
            new Date(record.updatedAt).toLocaleDateString()
          }
        />
      ) : (
        <Datagrid>
          <TextField source="id" fullWidth />
          <TextField source="title" fullWidth />
          <TextField source="description" fullWidth />
          <EditButton />
        </Datagrid>
      )}
    </List>
  );
};

export const PlaceEdit = (props) => (
  <Edit {...props}>
    <SimpleForm>
      <TextInput disabled source="id" fullWidth />
      <TextInput source="title" fullWidth />
      <TextInput multiline source="body" fullWidth />
      <TextInput multiline source="description" fullWidth />
      <TextInput multiline source="travelTips" fullWidth />
      <ImageInput
        source="cover"
        label="Cover (max 1MB)"
        accept="image/*"
        placeholder={<p>Drop your file here</p>}
        maxSize={1024 * 1 * 1000} //1MB
      >
        <ImageField source="src" title="title" />
      </ImageInput>
      <ImageInput
        source="pictures"
        label="Images (max 1MB)"
        accept="image/*"
        placeholder={<p>Drop your files here</p>}
        multiple
        maxSize={1024 * 1 * 1000} //1MB
      >
        <ImageField source="src" title="title" />
      </ImageInput>
    </SimpleForm>
  </Edit>
);

export const PlaceCreate = (props) => (
  <Create {...props}>
    <SimpleForm>
      <TextInput source="title" fullWidth />
      <TextInput multiline source="description" fullWidth />
      <TextInput multiline source="travelTips" fullWidth />
      <ImageInput
        source="cover"
        label="Cover (max 1MB)"
        accept="image/*"
        placeholder={<p>Drop your file here</p>}
        maxSize={1024 * 1 * 1000} //1MB
      >
        <ImageField source="src" title="title" />
      </ImageInput>
      <ImageInput
        source="pictures"
        label="Images (max 1MB)"
        accept="image/*"
        placeholder={<p>Drop your files here</p>}
        multiple
        maxSize={1024 * 1 * 1000} //1MB
      >
        <ImageField source="src" title="title" />
      </ImageInput>
    </SimpleForm>
  </Create>
);

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
  TextInput,
  ImageInput,
  ImageField,
  BooleanInput,
  TabbedForm,
  FormTab,
  ArrayInput,
  SimpleFormIterator,
} from "react-admin";
import RichTextInput from "ra-input-rich-text";

const LocalDiariesFilter = (props) => {
  return (
    <Filter {...props}>
      <TextInput label="Search" source="q" alwaysOn />
    </Filter>
  );
};

export const LocalDiariesList = (props) => {
  const isSmall = useMediaQuery((theme) => theme.breakpoints.down("sm"));

  return (
    <List filters={<LocalDiariesFilter />} {...props}>
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

export const LocalDiariesEdit = (props) => (
  <Edit {...props}>
    <TabbedForm>
      <FormTab label="summary">
        <TextInput disabled source="id" fullWidth />
        <TextInput source="title" fullWidth />
        <TextInput source="description" fullWidth />

        <ImageInput
          source="cover"
          label="Cover (max 200KB)"
          accept="image/*"
          placeholder={<p>Drop your image here</p>}
          maxSize={1024 * 1 * 200} //200KB
        >
          <ImageField source="src" title="name" />
        </ImageInput>

        <BooleanInput source="isActive" label="Active" />
        <BooleanInput source="isRecommended" label="Recommend" />
      </FormTab>

      <FormTab label="paragraphs">
        <ArrayInput source="paragraphs">
          <SimpleFormIterator>
            <RichTextInput source="content" label="Content" />
            <ImageInput
              source="image"
              label="Image (max 200KB)"
              accept="image/*"
              Restaurantholder={<p>Drop your image here</p>}
              maxSize={1024 * 1 * 200} //200KB
            >
              <ImageField source="src" title="name" />
            </ImageInput>
          </SimpleFormIterator>
        </ArrayInput>
      </FormTab>
    </TabbedForm>
  </Edit>
);

export const LocalDiariesCreate = (props) => (
  <Create {...props}>
    <TabbedForm>
      <FormTab label="summary">
        <TextInput source="title" fullWidth />
        <TextInput source="description" fullWidth />

        <ImageInput
          source="cover"
          label="Cover (max 200KB)"
          accept="image/*"
          placeholder={<p>Drop your image here</p>}
          maxSize={1024 * 1 * 200} //200KB
        >
          <ImageField source="src" title="name" />
        </ImageInput>
        <BooleanInput source="isActive" label="Active" defaultValue={true} />
        <BooleanInput source="isRecommended" label="Recommend" />
      </FormTab>

      <FormTab label="paragraphs">
        <ArrayInput source="paragraphs">
          <SimpleFormIterator>
            <RichTextInput source="content" label="Content" />
            <ImageInput
              source="image"
              label="Image (max 200KB)"
              accept="image/*"
              Restaurantholder={<p>Drop your image here</p>}
              maxSize={1024 * 1 * 200} //200KB
            >
              <ImageField source="src" title="name" />
            </ImageInput>
          </SimpleFormIterator>
        </ArrayInput>
      </FormTab>
    </TabbedForm>
  </Create>
);

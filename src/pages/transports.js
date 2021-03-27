import * as React from "react";
import { useMediaQuery, Box } from "@material-ui/core";
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
  RichTextField,
} from "react-admin";
import RichTextInput from "ra-input-rich-text";

const TransportFilter = (props) => {
  return (
    <Filter {...props}>
      <TextInput label="Search" source="q" alwaysOn />
    </Filter>
  );
};

export const TransportList = (props) => {
  const isSmall = useMediaQuery((theme) => theme.breakpoints.down("sm"));

  return (
    <List filters={<TransportFilter />} {...props}>
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
          <TextField source="name" fullWidth />
          <RichTextField source="description" fullWidth />
          <EditButton />
        </Datagrid>
      )}
    </List>
  );
};

export const TransportEdit = (props) => (
  <Edit {...props}>
    <TabbedForm>
      <FormTab label="summary">
        <TextInput disabled source="id" fullWidth />
        <TextInput source="name" fullWidth />
        <TextInput source="city" fullWidth />
        <TextInput source="address" fullWidth />
        <TextInput
          source="openingHours"
          initialValue="8 AM - 10 PM"
          fullWidth
        />
        <NumberInput
          source="priceEstimation"
          fullWidth
          step={1000}
          defaultValue={5000}
        />
        <BooleanInput source="isActive" label="Active" />
        <BooleanInput source="isRecommended" label="Recommend" />
      </FormTab>

      <FormTab label="description">
        <RichTextInput source="description" />
      </FormTab>

      <FormTab label="facilities">
        <Box display="flex" p="1em">
          <Box flex={1} mr="1em">
            <BooleanInput source="facilities[parking]" label="Parking" />
            <BooleanInput source="facilities[toilet]" label="Toilet" />
            <BooleanInput source="facilities[wifi]" label="Wifi" />
            <BooleanInput source="facilities[mushola]" label="Mushola" />
          </Box>
        </Box>
      </FormTab>

      <FormTab label="pictures">
        <ImageInput
          source="cover"
          label="Cover (max 1MB)"
          accept="image/*"
          Transportholder={<p>Drop your image here</p>}
          maxSize={1024 * 1 * 1000} //1MB
        >
          <ImageField source="src" title="name" />
        </ImageInput>
        <ImageInput
          source="images"
          label="Images (max 1MB)"
          accept="image/*"
          Transportholder={<p>Drop your images here</p>}
          multiple
          maxSize={1024 * 1 * 1000} //1MB
        >
          <ImageField source="src" title="name" />
        </ImageInput>
      </FormTab>
    </TabbedForm>
  </Edit>
);

export const TransportCreate = (props) => (
  <Create {...props}>
    <TabbedForm>
      <FormTab label="summary">
        <TextInput source="name" fullWidth />
        <TextInput source="city" fullWidth />
        <TextInput source="address" fullWidth />
        <TextInput
          source="openingHours"
          initialValue="8 AM - 10 PM"
          fullWidth
        />
        <NumberInput
          source="priceEstimation"
          fullWidth
          step={1000}
          defaultValue={5000}
        />
        <BooleanInput source="isActive" label="Active" defaultValue={true} />
        <BooleanInput source="isRecommended" label="Recommend" />
      </FormTab>

      <FormTab label="description">
        <RichTextInput source="description" />
      </FormTab>

      <FormTab label="facilities">
        <Box display="flex" p="1em">
          <Box flex={1} mr="1em">
            <BooleanInput source="facilities[parking]" label="Parking" />
            <BooleanInput source="facilities[toilet]" label="Toilet" />
            <BooleanInput source="facilities[wifi]" label="Wifi" />
            <BooleanInput source="facilities[mushola]" label="Mushola" />
          </Box>
        </Box>
      </FormTab>

      <FormTab label="pictures">
        <ImageInput
          source="cover"
          label="Cover (max 1MB)"
          accept="image/*"
          Transportholder={<p>Drop your image here</p>}
          maxSize={1024 * 1 * 1000} //1MB
        >
          <ImageField source="src" title="name" />
        </ImageInput>
        <ImageInput
          source="images"
          label="Images (max 1MB)"
          accept="image/*"
          Transportholder={<p>Drop your images here</p>}
          multiple
          maxSize={1024 * 1 * 1000} //1MB
        >
          <ImageField source="src" title="name" />
        </ImageInput>
      </FormTab>
    </TabbedForm>
  </Create>
);

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
  NumberInput,
  ArrayInput,
  SimpleFormIterator,
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
          <RichTextField source="policy" fullWidth />
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
        <TextInput source="phoneNumber" fullWidth />
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

        <NumberInput source="position[longitude]" fullWidth />
        <NumberInput source="position[latitude]" fullWidth />
        <BooleanInput source="isActive" label="Active" />
        <BooleanInput source="isRecommended" label="Recommend" />
      </FormTab>

      <FormTab label="policy">
        <RichTextInput source="policy" />
      </FormTab>
      <FormTab label="termsConditions">
        <RichTextInput source="termsConditions" />
      </FormTab>

      <FormTab label="types">
        <Box display="flex" p="1em">
          <Box flex={1} mr="1em">
            <BooleanInput source="types[car]" label="Car" />
            <BooleanInput source="types[motorcycle]" label="Motorcycle" />
            <BooleanInput source="types[bike]" label="Bike" />
            <BooleanInput source="types[boat]" label="Boat" />
          </Box>
        </Box>
      </FormTab>

      <FormTab label="pictures">
        <ImageInput
          source="cover"
          label="Cover (max 200KB)"
          accept="image/*"
          Transportholder={<p>Drop your image here</p>}
          maxSize={1024 * 1 * 200} //200KB
        >
          <ImageField source="src" title="name" />
        </ImageInput>
        <ImageInput
          source="images"
          label="Images (max 200KB)"
          accept="image/*"
          Transportholder={<p>Drop your images here</p>}
          multiple
          maxSize={1024 * 1 * 200} //200KB
        >
          <ImageField source="src" title="name" />
        </ImageInput>
      </FormTab>

      <FormTab label="menus">
        <ArrayInput source="menus">
          <SimpleFormIterator>
            <ImageInput
              source="image"
              label="Image (max 200KB)"
              accept="image/*"
              Restaurantholder={<p>Drop your image here</p>}
              maxSize={1024 * 1 * 200} //200KB
            >
              <ImageField source="src" title="name" />
            </ImageInput>
            <TextInput source="name" fullWidth label="Name" />
            <TextInput
              source="description"
              fullWidth
              label="Price/Description"
            />
            <NumberInput source="capacity" fullWidth label="Capacity" />
            <BooleanInput source="isRecommended" label="Recommend" />
          </SimpleFormIterator>
        </ArrayInput>
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
        <TextInput source="phoneNumber" fullWidth />
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

        <NumberInput source="position[longitude]" fullWidth />
        <NumberInput source="position[latitude]" fullWidth />
        <BooleanInput source="isActive" label="Active" defaultValue={true} />
        <BooleanInput source="isRecommended" label="Recommend" />
      </FormTab>

      <FormTab label="policy">
        <RichTextInput source="policy" />
      </FormTab>
      <FormTab label="termsConditions">
        <RichTextInput source="termsConditions" />
      </FormTab>

      <FormTab label="types">
        <Box display="flex" p="1em">
          <Box flex={1} mr="1em">
            <BooleanInput source="types[car]" label="Car" />
            <BooleanInput source="types[motorcycle]" label="Motorcycle" />
            <BooleanInput source="types[bike]" label="Bike" />
            <BooleanInput source="types[boat]" label="Boat" />
          </Box>
        </Box>
      </FormTab>

      <FormTab label="pictures">
        <ImageInput
          source="cover"
          label="Cover (max 200KB)"
          accept="image/*"
          Transportholder={<p>Drop your image here</p>}
          maxSize={1024 * 1 * 200} //200KB
        >
          <ImageField source="src" title="name" />
        </ImageInput>
        <ImageInput
          source="images"
          label="Images (max 200KB)"
          accept="image/*"
          Transportholder={<p>Drop your images here</p>}
          multiple
          maxSize={1024 * 1 * 200} //200KB
        >
          <ImageField source="src" title="name" />
        </ImageInput>
      </FormTab>

      <FormTab label="menus">
        <ArrayInput source="menus">
          <SimpleFormIterator>
            <ImageInput
              source="image"
              label="Image (max 200KB)"
              accept="image/*"
              Restaurantholder={<p>Drop your image here</p>}
              maxSize={1024 * 1 * 200} //200KB
            >
              <ImageField source="src" title="name" />
            </ImageInput>
            <TextInput source="name" fullWidth label="Name" />
            <TextInput
              source="description"
              fullWidth
              label="Price/Description"
            />
            <NumberInput source="capacity" fullWidth label="Capacity" />
            <BooleanInput source="isRecommended" label="Recommend" />
          </SimpleFormIterator>
        </ArrayInput>
      </FormTab>
    </TabbedForm>
  </Create>
);

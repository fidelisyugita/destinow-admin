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

const SouvenirFilter = (props) => {
  return (
    <Filter {...props}>
      <TextInput label="Search" source="q" alwaysOn />
    </Filter>
  );
};

export const SouvenirList = (props) => {
  const isSmall = useMediaQuery((theme) => theme.breakpoints.down("sm"));

  return (
    <List filters={<SouvenirFilter />} {...props}>
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

export const SouvenirEdit = (props) => (
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

        <NumberInput source="position[longitude]" fullWidth />
        <NumberInput source="position[latitude]" fullWidth />
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
            <BooleanInput source="facilities[restaurant]" label="Restaurant" />
          </Box>
          <Box flex={1}>
            <BooleanInput source="facilities[lodging]" label="Lodging" />
            <BooleanInput source="facilities[playground]" label="Playground" />
            <BooleanInput source="facilities[watersport]" label="Watersport" />
            <BooleanInput source="facilities[open24Hour]" label="Open 24Hour" />
            <BooleanInput
              source="facilities[deliveryService]"
              label="Delivery Service"
            />
          </Box>
          <Box flex={1}>
            <BooleanInput source="facilities[liveMusic]" label="Live Music" />
            <BooleanInput
              source="facilities[outdoorSheets]"
              label="Outdoor Sheets"
            />
            <BooleanInput
              source="facilities[reservation]"
              label="Reservation"
            />
            <BooleanInput
              source="facilities[smokingArea]"
              label="Smoking Area"
            />
            <BooleanInput source="facilities[takeAway]" label="Take Away" />
          </Box>
        </Box>
      </FormTab>

      <FormTab label="pictures">
        <ImageInput
          source="cover"
          label="Cover (max 200KB)"
          accept="image/*"
          Souvenirholder={<p>Drop your image here</p>}
          maxSize={1024 * 1 * 200} //200KB
        >
          <ImageField source="src" title="name" />
        </ImageInput>
        <ImageInput
          source="images"
          label="Images (max 200KB)"
          accept="image/*"
          Souvenirholder={<p>Drop your images here</p>}
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
            <TextInput source="description" fullWidth label="Description" />
            <BooleanInput source="isRecommended" label="Recommend" />
          </SimpleFormIterator>
        </ArrayInput>
      </FormTab>
    </TabbedForm>
  </Edit>
);

export const SouvenirCreate = (props) => (
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

        <NumberInput source="position[longitude]" fullWidth />
        <NumberInput source="position[latitude]" fullWidth />
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
            <BooleanInput source="facilities[restaurant]" label="Restaurant" />
          </Box>
          <Box flex={1}>
            <BooleanInput source="facilities[lodging]" label="Lodging" />
            <BooleanInput source="facilities[playground]" label="Playground" />
            <BooleanInput source="facilities[watersport]" label="Watersport" />
            <BooleanInput source="facilities[open24Hour]" label="Open 24Hour" />
            <BooleanInput
              source="facilities[deliveryService]"
              label="Delivery Service"
            />
          </Box>
          <Box flex={1}>
            <BooleanInput source="facilities[liveMusic]" label="Live Music" />
            <BooleanInput
              source="facilities[outdoorSheets]"
              label="Outdoor Sheets"
            />
            <BooleanInput
              source="facilities[reservation]"
              label="Reservation"
            />
            <BooleanInput
              source="facilities[smokingArea]"
              label="Smoking Area"
            />
            <BooleanInput source="facilities[takeAway]" label="Take Away" />
          </Box>
        </Box>
      </FormTab>

      <FormTab label="pictures">
        <ImageInput
          source="cover"
          label="Cover (max 200KB)"
          accept="image/*"
          Souvenirholder={<p>Drop your image here</p>}
          maxSize={1024 * 1 * 200} //200KB
        >
          <ImageField source="src" title="name" />
        </ImageInput>
        <ImageInput
          source="images"
          label="Images (max 200KB)"
          accept="image/*"
          Souvenirholder={<p>Drop your images here</p>}
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
            <TextInput source="description" fullWidth label="Description" />
            <BooleanInput source="isRecommended" label="Recommend" />
          </SimpleFormIterator>
        </ArrayInput>
      </FormTab>
    </TabbedForm>
  </Create>
);

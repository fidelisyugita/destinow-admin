import * as React from "react";
import { Admin, Resource } from "react-admin";
import UserIcon from "@material-ui/icons/Group";
import AddAPhoto from "@material-ui/icons/AddAPhoto";
import BeachAccessIcon from "@material-ui/icons/BeachAccess";
import RestaurantIcon from "@material-ui/icons/Restaurant";
import DirectionsBikeIcon from "@material-ui/icons/DirectionsBike";
import CardGiftcardIcon from "@material-ui/icons/CardGiftcard";

import { dataProvider, myAuthProvider } from "./lib/firebase";

import Dashboard from "./Dashboard";
import { UserList } from "./pages/users";
import { BannerList, BannerEdit, BannerCreate } from "./pages/banners";
import { PlaceList, PlaceEdit, PlaceCreate } from "./pages/places";
import {
  RestaurantList,
  RestaurantEdit,
  RestaurantCreate,
} from "./pages/restaurants";
import { SouvenirList, SouvenirEdit, SouvenirCreate } from "./pages/souvenirs";
import {
  TransportList,
  TransportEdit,
  TransportCreate,
} from "./pages/transports";

const App = () => (
  <Admin
    dashboard={Dashboard}
    authProvider={myAuthProvider}
    dataProvider={dataProvider}
  >
    <Resource icon={UserIcon} name="users" list={UserList} />
    <Resource
      icon={AddAPhoto}
      name="banners"
      list={BannerList}
      edit={BannerEdit}
      create={BannerCreate}
    />
    <Resource
      icon={BeachAccessIcon}
      name="places"
      list={PlaceList}
      edit={PlaceEdit}
      create={PlaceCreate}
    />
    <Resource
      icon={RestaurantIcon}
      name="restaurants"
      list={RestaurantList}
      edit={RestaurantEdit}
      create={RestaurantCreate}
    />
    <Resource
      icon={CardGiftcardIcon}
      name="souvenirs"
      list={SouvenirList}
      edit={SouvenirEdit}
      create={SouvenirCreate}
    />
    <Resource
      icon={DirectionsBikeIcon}
      name="transport"
      list={TransportList}
      edit={TransportEdit}
      create={TransportCreate}
    />
  </Admin>
);

export default App;

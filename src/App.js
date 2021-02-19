import * as React from "react";
import { Admin, Resource } from "react-admin";
import UserIcon from "@material-ui/icons/Group";
import RestaurantIcon from "@material-ui/icons/Restaurant";

import { dataProvider, myAuthProvider } from "./lib/firebase";

import Dashboard from "./Dashboard";
import { UserList } from "./pages/users";
import {
  RestaurantList,
  RestaurantEdit,
  RestaurantCreate,
} from "./pages/restaurants";

const App = () => (
  <Admin
    dashboard={Dashboard}
    authProvider={myAuthProvider}
    dataProvider={dataProvider}
  >
    <Resource icon={UserIcon} name="users" list={UserList} />
    <Resource
      icon={RestaurantIcon}
      name="restaurants"
      list={RestaurantList}
      edit={RestaurantEdit}
      create={RestaurantCreate}
    />
  </Admin>
);

export default App;

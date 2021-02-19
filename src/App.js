import * as React from "react";
import { Admin, Resource } from "react-admin";
import jsonServerProvider from "ra-data-json-server";
import PostIcon from "@material-ui/icons/Book";
import UserIcon from "@material-ui/icons/Group";

import Dashboard from "./Dashboard";
import authProvider from "./authProvider";
import { UserList } from "./pages/users";
import { PostList, PostEdit, PostCreate } from "./pages/posts";

const dataProvider = jsonServerProvider("https://jsonplaceholder.typicode.com");
const App = () => (
  <Admin
    dashboard={Dashboard}
    authProvider={authProvider}
    dataProvider={dataProvider}
  >
    <Resource icon={UserIcon} name="users" list={UserList} />
    <Resource
      icon={PostIcon}
      name="posts"
      list={PostList}
      edit={PostEdit}
      create={PostCreate}
    />
  </Admin>
);

export default App;

import {
  FirebaseAuthProvider,
  FirebaseDataProvider,
  FirebaseRealTimeSaga,
} from "react-admin-firebase";

const config = {
  apiKey: process.env.REACT_APP_FIREBASE_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_FIREBASE_DB_URL,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
  measurementId: process.env.REACT_APP_FIREBASE_MEASURMENT_ID,
};

// All options are optional
const options = {
  // Use a different root document to set your resource collections, by default it uses the root collections of firestore
  // rootRef: 'root-collection/some-doc' | () => 'root-collection/some-doc',

  // Your own, previously initialized firebase app instance
  //   app: firebaseAppInstance,

  // Enable logging of react-admin-firebase
  logging: false,

  // Resources to watch for realtime updates, will implicitly watch all resources by default, if not set.
  watch: ["posts"],

  // Resources you explicitly dont want realtime updates for
  dontwatch: ["comments"],

  // Authentication persistence, defaults to 'session', options are 'session' | 'local' | 'none'
  persistence: "session",

  // Disable the metadata; 'createdate', 'lastupdate', 'createdby', 'updatedby'
  disableMeta: false,

  // Have custom metadata field names instead of: 'createdate', 'lastupdate', 'createdby', 'updatedby'
  renameMetaFields: {
    created_at: "createdAt", // default: 'createdate'
    created_by: "createdBy", // default: 'createdby'
    updated_at: "updatedAt", // default: 'lastupdate'
    updated_by: "updatedBy", // default: 'updatedby'
  },

  // Prevents document from getting the ID field added as a property
  dontAddIdFieldToDoc: false,

  // Adds 'deleted' meta field for non-destructive deleting functionality
  // NOTE: Hides 'deleted' records from list views unless overridden by filtering for {deleted: true}
  softDelete: false,

  // Changes meta fields like 'createdby' and 'updatedby' to store user IDs instead of email addresses
  associateUsersById: false,

  // Casing for meta fields like 'createdby' and 'updatedby', defaults to 'lower', options are 'lower' | 'camel' | 'snake' | 'pascal' | 'kebab'
  metaFieldCasing: "camel",

  // Instead of saving full download url for file, save just relative path and then get download url
  // when getting docs - main use case is handling multiple firebase projects (environments)
  // and moving/copying documents/storage files between them - with relativeFilePaths, download url
  // always point to project own storage
  relativeFilePaths: false,

  // Add file name to storage path, when set to true the file name is included in the path
  useFileNamesInStorage: true,

  // Use firebase sdk queries for pagination, filtering and sorting
  lazyLoading: {
    enabled: false,
  },

  // Logging of all reads performed by app (additional feature, for lazy-loading testing)
  //   firestoreCostsLogger: {
  //     enabled: false,
  //     localStoragePrefix, // optional
  //   },
};

export const dataProvider = FirebaseDataProvider(config, options);
const authProvider = FirebaseAuthProvider(config, options);
// export const firebaseRealtime = FirebaseRealTimeSaga(dataProvider, options);

// Use this just like the normal auth provider
export const myAuthProvider = {
  // Copy all authprovider functionality
  ...authProvider,
  // Wrap the login and check for custom claims
  login: async (params) => {
    const user = await authProvider.login(params);
    // getPermissions is how when get the custom claims for the logged in user
    const claims = await authProvider.getPermissions();
    // const isAdmin = Array.isArray(claims) && claims.includes("admin");
    if (!claims.isAdmin) {
      // Make sure user is logged out, if not an admin
      await authProvider.logout();
      throw new Error("Login error, invalid permissions");
    }
  },
};

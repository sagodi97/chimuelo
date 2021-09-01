import { Appwrite } from "appwrite";

const appwrite = new Appwrite();

appwrite.setEndpoint("http://localhost:1980/v1").setProject("612b53b6b93f1");

export default appwrite;

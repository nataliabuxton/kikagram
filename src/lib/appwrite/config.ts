import { Client, Account, Databases, Storage, Avatars } from "appwrite";

export const appwriteConfig = {
    projectId: import.meta.env.VITE_APPWRITE_PROJECT_ID,
    url: import.meta.env.VITE_APPWRITE_URL,
    storageId: import.meta.env.VITE_APPWRITE_STORAGE_ID,
    databaseId: import.meta.env.VITE_APPWRITE_DATABASE_ID,
    postCollectionId: import.meta.env.VITE_APPWRITE_POST_ID,
    userCollectionId: import.meta.env.VITE_APPWRITE_USER_ID,
    savesCollectionId: import.meta.env.VITE_APPWRITE_SAVESS_ID,
}

export const client = new Client();
console.log(appwriteConfig.projectId)
console.log(appwriteConfig.url)

client.setEndpoint(appwriteConfig.url);
client.setProject(appwriteConfig.projectId);




export const account = new Account(client);
export const databases = new Databases(client);
export const storage = new Storage(client);
export const avatars = new Avatars(client);

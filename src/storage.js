import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
  deleteObject,
} from 'firebase/storage';
import { getFirebaseConfig } from './firebase-config';
import { initializeApp } from 'firebase/app';

const firebaseAppConfig = getFirebaseConfig();

// Initialize Firebase
const firebaseApp = initializeApp(firebaseAppConfig);

// Get a reference to the storage service, which is used to create references in your storage bucket
const storage = getStorage(firebaseApp);

// Upload the file to firebase cloud storage
export async function uploadFile(file, uniqueId) {
  try {
    // Create a storage reference from our storage service
    const storageRef = ref(storage, `${uniqueId}/${file.name}`);
    const fileSnapshot = await uploadBytesResumable(storageRef, file);
    // Generate a public URL for the file
    const url = await getDownloadURL(storageRef);

    return url;
  } catch (error) {
    console.error(
      'There was an error uploading a file to Cloud Storage:',
      error
    );
  }
}

export async function deleteFile(file, uniqueId) {
  try {
    const storageRef = ref(storage, `${uniqueId}/${file.name}`);
    const res = await deleteObject(storageRef);
  } catch (error) {
    console.log(error);
  }
}

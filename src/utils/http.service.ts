import axios from "axios";
import * as ImagePicker from "expo-image-picker";

// const baseUrl = "http://192.168.0.102:4200";

const baseUrl = "https://image-editing-container.azurewebsites.net"

export async function takeAndUploadPhotoAsync(filterName) {
  // Display the camera to the user and wait for them to take a photo or to cancel
  // the action
  let result = await ImagePicker.launchImageLibraryAsync({
    mediaTypes: ImagePicker.MediaTypeOptions.Images,
    allowsEditing: true,
    quality: 1,
  });

  if (result.cancelled) {
    return;
  }

  // ImagePicker saves the taken photo to disk and returns a local URI to it
  let localUri = result.uri;
  let filename = localUri.split('/').pop();

  // Infer the type of the image
  let match = /\.(\w+)$/.exec(filename);
  let type = match ? `image/${match[1]}` : `image`;

  // Upload the image using the fetch and FormData APIs
  let formData = new FormData();
  // Assume "photo" is the name of the form field the server expects
  formData.append('photo', { uri: localUri, name: filename, type });

  const headers = {
    'content-type': 'multipart/form-data',
  }
  return await axios.post(`${baseUrl}/upload/${filterName}`,
    formData, {
    headers: headers
  });
}
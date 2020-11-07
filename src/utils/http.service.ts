import axios from "axios";

const baseUrl = "http://192.168.0.102:4200";

// const baseUrl = "https://app-test-learn.herokuapp.com";

// const baseUrl = "http://192.168.43.8:4200";
// export const handleUploadImage = (photo: { base64: any; filter: string }) => {
//   return axios.post(
//     `${baseUrl}/upload/${photo.filter}`,
//     { image: photo.base64 },
//     {
//       headers: {
//         Accept: "application/json",
//       },
//     }
//   );
// };

export const handleUploadImage = (photo: { base64: any; filter: string }) => {
  // return axios.post(
  //   `${baseUrl}/upload/${photo.filter}`,
  //   { image: photo.base64 },
  //   {
  //     headers: {
  //       Accept: "application/json",
  //     },
  //   }
  // );
};

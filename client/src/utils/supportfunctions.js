import { deleteObject, ref } from "firebase/storage";
import { storage } from "../config/firebase.config";

export const filters = [
  { id: 1, name: "Indie", value: "indie" },
  { id: 2, name: "Rap", value: "rap" },
  { id: 3, name: "Rock", value: "rock" },
  { id: 4, name: "Bollywood", value: "bollywood" },
  { id: 5, name: "Pop", value: "pop" },
  { id: 6, name: "Metal", value: "metal" },
  { id: 7, name: "Grunge", value: "grunge" },
];

export const filterByLanguage = [
  { id: 1, name: "English", value: "english" },
  { id: 2, name: "Hindi", value: "hindi" },
  { id: 3, name: "Japanese", value: "japanese" },
  { id: 4, name: "Telungu", value: "Telungu" },
  { id: 5, name: "Marathi", value: "marathi" },
];

export const deleteAnObject = (referenceUrl) => {
  const deleteRef = ref(storage, referenceUrl);
  deleteObject(deleteRef)
    .then(() => {
      return true;
    })
    .catch((error) => {
      return false;
    });
};
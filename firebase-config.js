// Import the functions you need from the SDKs
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCpLC89l1EV_o399HEH_qppqecedVAhmdE",
    authDomain: "dignify-69351.firebaseapp.com",
    projectId: "dignify-69351",
    storageBucket: "dignify-69351.firebasestorage.app",
    messagingSenderId: "141142153545",
    appId: "1:141142153545:web:c464f04b452206d1456298",
    measurementId: "G-FV52NPV5Q4"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and export it
export const db = getFirestore(app);


// --- ImgBB UPLOAD HELPER FUNCTION ---
const IMGBB_API_KEY = "13e864239eb3c12842c5690cd9fd06dd"; // <-- මේ වගේ ඔයාගේ key එක දාන්න// !! IMPORTANT: මෙතනට ඔයාගේ ImgBB API Key එක දාන්න

export async function uploadImageToImgBB(file, statusCallback) {
    const formData = new FormData();
    formData.append('key', IMGBB_API_KEY);
    formData.append('image', file);

    if (statusCallback) {
        statusCallback(`Uploading ${file.name}...`);
    }

    const response = await fetch('https://api.imgbb.com/1/upload', {
        method: 'POST',
        body: formData,
    });
    
    const jsonResponse = await response.json();

    if (!jsonResponse.success) {
        throw new Error(`ImgBB upload failed: ${jsonResponse.error.message}`);
    }
    
    return jsonResponse.data.url;
}

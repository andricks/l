const admin = require("firebase-admin");
const serviceAccount = require("../servicio-automotriz-cb886-firebase-adminsdk-h35xq-86b07326c1.json"); // Ruta al archivo de configuración de Firebase

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://servicio-automotriz-cb886-default-rtdb.firebaseio.com"
});

const db = admin.database();

module.exports = db;

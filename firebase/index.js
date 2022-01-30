var admin = require("firebase-admin");

var serviceAccount = require("../config/fbServiceAccountKey.json");

admin.initializeApp({
  // credential: admin.credential.cert(serviceAccount),
  credential: admin.credential.cert({
    project_id: process.env.SERVICE_ACCOUNT_PROJECT_ID,
    private_key: process.env.SERVICE_ACCOUNT_PRIVATE_KEY.replace(/\\n/g, "\n"),
    clientEmail: process.env.SERVICE_ACCOUNT_CLIENT_EMAIL,
  }),
});

module.exports = admin;

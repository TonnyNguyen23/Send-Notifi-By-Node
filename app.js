const firebase = require("firebase-admin");
const serverAccount = require("./privatekey.json");

const firebaseToken =
  "fn847sTeRRqzbov6cAdhB_:APA91bFt4PLihxTj1jOviu8di_yEjMF2Ks3MswwUZpTD0h1TvBR_P-9yd28yV95Q5i-rU1han94IZbIYFWbUCZQ2TQ7_Uc75LvTyPZ817tPU4onaPYD10JLg3neunU99fYfkMUTW-Ykt";

firebase.initializeApp({
  credentials: firebase.credential.cert(serverAccount),
});

const payload = {
  notification: {
    title: "UDA",
    body: "Have a nice day!",
    click_action: "FLUTTER_NOTIFICATION_CLICK",
  },

  data: {
    data1: "data1 value",
    data2: "data2 value",
  },
};

const options = { priority: "high", timeToLive: 60 * 60 * 24 };

firebase.messaging().sendToDevice(firebaseToken, payload, options);

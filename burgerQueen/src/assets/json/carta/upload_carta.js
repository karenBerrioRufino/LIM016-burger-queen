const admin = require('firebase-admin');
const serviceAccount = require("./key_service_account.json");
const data = require("./menu.json");
const collectionKey = "carta"; //Name of the collection
admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
});
const firestore = admin.firestore();
const settings = { timestampsInSnapshots: true };
firestore.settings(settings);

if (data && (typeof data === "object")) {
    data.hamburguesas.forEach(docKey => {
        firestore.collection(collectionKey).doc().set(docKey).then((res) => {
            console.log("Document " + docKey + " successfully written!", res);
        }).catch((error) => {
            console.error("Error writing document: ", error);
        });
    })

    data.sandwiches.forEach(docKey => {
        firestore.collection(collectionKey).doc().set(docKey).then((res) => {
            console.log("Document " + docKey + " successfully written!", res);
        }).catch((error) => {
            console.error("Error writing document: ", error);
        });
    })

    data.aperitivos.forEach(docKey => {
        firestore.collection(collectionKey).doc().set(docKey).then((res) => {
            console.log("Document " + docKey + " successfully written!", res);
        }).catch((error) => {
            console.error("Error writing document: ", error);
        });
    })

    data.bebidas.forEach(docKey => {
        firestore.collection(collectionKey).doc().set(docKey).then((res) => {
            console.log("Document " + docKey + " successfully written!", res);
        }).catch((error) => {
            console.error("Error writing document: ", error);
        });
    })
}

/*     Object.keys(data).forEach(docKey => {
        data[docKey].map(item => {
            firestore.collection(collectionKey).doc(docKey).collection(item.title).doc(item.id).set(item).then((res) => {
                console.log("Document " + item.title + " successfully written!", res);
            }).catch((error) => {
                console.error("Error writing document: ", error);
            });
        })
    }); */
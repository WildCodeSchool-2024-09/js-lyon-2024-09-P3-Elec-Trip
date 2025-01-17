import express from "express";

const router = express.Router();

/* ************************************************************************* */
// Define Your API Routes Here
/* ************************************************************************* */

// Define item-related routes
import itemActions from "./modules/item/itemActions";

router.get("/api/items", itemActions.browse);
router.get("/api/items/:id", itemActions.read);
router.post("/api/items", itemActions.add);

import accountActions from "./modules/account/accountActions";
// creation de compte
router.post("/api/account", accountActions.add);
// connexion au compte
router.put("/api/account", accountActions.edit);

import localisationActions from "./modules/localisation/localisationActions";

router.get("/EVstations", localisationActions.browse);
/* ************************************************************************* */

export default router;

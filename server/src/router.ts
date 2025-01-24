import express from "express";

const router = express.Router();

/* ************************************************************************* */
// Define Your API Routes Here
/* ************************************************************************* */

import authActions from "./modules/auth/authActions";
// Define item-related routes
import itemActions from "./modules/item/itemActions";

router.get("/api/items", itemActions.browse);
router.get("/api/items/:id", itemActions.read);
router.post("/api/items", itemActions.add);

import accountActions from "./modules/account/accountActions";
// creation de compte
// router.post("/api/register", accountActions.add);
// connexion au compte
router.post("/api/login", authActions.login);
// router.post("/api/register", accountActions.add);

import stationLocationAction from "./modules/stationLocation/stationLocationAction";
router.get("/EVstations", stationLocationAction.browse);

export default router;

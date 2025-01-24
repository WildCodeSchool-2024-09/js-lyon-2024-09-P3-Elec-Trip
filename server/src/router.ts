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
router.post("/api/register", accountActions.add);
// router.post("/api/login", accountActions.add);

import stationLocationAction from "./modules/stationLocation/stationLocationAction";
router.get("/EVstations", stationLocationAction.browse);

export default router;

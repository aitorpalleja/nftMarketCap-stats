import Express from "express";
import fs from "fs";
const router = Express.Router();

import { getCollectionStats} from "../controllers/DataController.js";


router.get('/getStats/:nftSymbol', getCollectionStats);


export default router;

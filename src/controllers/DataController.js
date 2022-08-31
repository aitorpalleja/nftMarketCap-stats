import DataModel from "../models/dataModel.js";
import { RequestService } from '../services/requestService.js';

const requestService = new RequestService();

export const getCollectionStats = (req, res) => {
    let symbol = req.params.nftSymbol;

    requestService.get("https://api-mainnet.magiceden.dev/v2/collections/" + symbol + "/stats").then(result => {
        const data = result;
        res.status(200).send(data);
    }).catch(error => {
        res.send({ message: error });
    });

}
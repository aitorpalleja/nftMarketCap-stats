import DataModel from "../models/dataModel.js";
//import { requestService } from '../services/requestService.js';
import axios from 'axios';

/*export const getCollectionStats = (req, res) => {
    //let symbol = req.params.nftSymbol;
    
    axios.get("https://api-mainnet.magiceden.dev/v2/collections/degods/stats").then(result => {
        const data = result;
        res.status(200).send(data);
    }).catch(error => {
        res.send({message: error});
    });

}*/

export const getCollectionStats = (req, res) => {

    let symbol = req.params.nftSymbol;

    axios.get("https://api-mainnet.magiceden.dev/v2/collections/"+ symbol +"/stats")
        .then(function (response) {
            // handle success
            console.log(response.data);
        })
        .catch(function (error) {
            // handle error
            console.log(error);
        })
        .then(function () {
            // always executed
        });

}
import  Mongoose  from "mongoose";
const Schema = Mongoose.Schema;

const DataSchema = Schema({
    name : String,
    value: Number
})
const DataModel = Mongoose.model('stats',DataSchema);
export default DataModel;

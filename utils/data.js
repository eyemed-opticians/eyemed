// const Data =require("../models/data_entry");
const data = require("../data/all_data.json.json").data_entries;

async function get_data(){

    const phone = data.find(de => de.name === "phone");
    const email = data.find(de => de.name === "email");

    return { phone, email };

}

module.exports = get_data;
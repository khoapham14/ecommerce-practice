require('dotenv').config();

const productData = require('./data/products');
const connectDB = require('./config/db');
const Product = require('./models/Product');

connectDB();

const importData = async () => {
    try {
        await Product.deleteMany({}); // Clear database

        await Product.insertMany(productData);  //Add products into database.

        console.log("Data import was successful!");

        process.exit();
    } catch (error) {
        console.error("Data import has failed!");
        process.exit(1);
    }
};


importData();
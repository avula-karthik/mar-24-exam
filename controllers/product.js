const { body, validationResult } = require('express-validator');
const product = require('../models/product');
function getproducts(req, res) {
    product.find((err, products_list) => {
        if (err) {
            res.json(err);
        } else {
            res.json(products_list);
        }
    });
}
const createproduct = [
    (req, res) => {
        const errors = validationResult(req);
        console.log(errors);
        if (!errors.isEmpty()) {
            res.json({ status: 0, debug_data: errors });
        } else {
            console.log(req.body);
            let { name, inStore, upload_date, sizes } = req.body;
            let productObj = new product({
                name,
                inStore,
                upload_date,
                sizes,
            });
            productObj.save((error) => {
                if (error) {
                    res.json(error);
                } else {
                    res.json({ status: 'product created and added' });
                }
            });
        }
    },
];
module.exports = { getproducts, createproduct };

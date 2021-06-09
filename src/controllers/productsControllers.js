const controller = {};

controller.list = (req, res) => {
    req.getConnection((err, conn) => {
        conn.query('SELECT * FROM product', (err, products) => {
            if (err) {
                res.json(err);
            }

            res.render('products', {
                data: products
            });
        });
    });
};


module.exports = controller;
import express from 'express';
import ProductModel from '../../models/products';

const router = express.Router();

//creating controller
router.get('/list',(req: any, res: any, next:any)=>{
    try {
        ProductModel.find().then((document) => {
            res.json(document);
        });
    } catch (err) {
        next(err);
    }
});

router.get('/search/:productName',(req: any, res: any, next:any)=>{
    try {
        const { productName } = req.params;
        ProductModel.find({name: productName}).then((document) => {
            res.json(document);
        });
    } catch (err) {
        next(err);
    }
});

router.post('/',(req: any, res: any, next:any)=>{
    try {
        const foodItem = req.body;
        ProductModel.insertMany([foodItem]).then((document) => {
            res.json(document);
        });
    } catch (err) {
        next(err);
    }
})

router.put('/:productName',(req: any, res: any, next:any)=>{
    try {
        const { productName } = req.params;
        const foodItem = req.body;
        ProductModel.update(
            { name: productName },
            {
                name: foodItem.name,
                description: foodItem.description,
                price: foodItem.price,
                rating: foodItem.rating
            }
        ).then((document) => {
            res.json(document);
        });
    } catch (err) {
        next(err);
    }
})

export default router;

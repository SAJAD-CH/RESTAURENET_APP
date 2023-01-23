import express from 'express'
import productController from './products'

const router= express.Router();

router.use("/product",productController);

export default router;
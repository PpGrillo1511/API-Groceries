import Product from "../models/products.model.js";
const ProductDAO={};
ProductDAO.getAll=async()=>{
    const products=await Product.find({});
    return products;
};
ProductDAO.getOne=async(barcode)=>{
    const products=await Product.findOne({barcode:barcode});
    return products;
};
ProductDAO.insertOne=async(product)=>{
    return await Product.create(product);
};

export default ProductDAO;
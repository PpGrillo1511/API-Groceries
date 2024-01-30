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

export default ProductDAO;
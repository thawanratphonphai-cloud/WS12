import { OrderDAO } from "./OrderDAO.ts";
import { ProductDAO } from "./ProductDAO.ts";

const productDAO = new ProductDAO();
const orderDAO = new OrderDAO();



const products = productDAO.findAll();
products.forEach(p =>{
    console.log(p.getInfo());
})

let id=3;
console.log("================");
const product = productDAO.findProductById(id);
console.log(product?.getInfo());

if(product){
    orderDAO.createOrder(product, 2);
    const updateProduct = productDAO.findProductById(id);
    console.log(`สินค้า ${product.getName()} คงเหลือ ${updateProduct?.getStock()}`);
}
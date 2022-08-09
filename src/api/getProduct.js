import {products} from '../data/products';

export const getProduct = (sku) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const product = products.find(p => p.sku === sku);

            if (product) {
                resolve(product);
            } else {
                reject({message: `Product with ${sku} sku was not found`});
            }
        }, 2000);
    });
}

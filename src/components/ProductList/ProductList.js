import { Product } from '../Product'

export const ProductList = ({ title = '', productList, isLoading }) => {
  return (
    <section className='product-list'>
      {title && <h2 className='product-list-title'>{title}</h2>}
      {isLoading
        ? <p className='loading'>loading...</p>
        : <ul className='product-items'>
          {productList.map(product => (
            <li key={product.sku} className='product-items-list'>
              <Product product={product} />
            </li>
          ))}
        </ul>}
    </section>
  )
}

import { useContext, useEffect, useState } from 'react'
import { ProductList } from '../../components/ProductList'
import { ProductListContext } from '../../context/productListContext'
import { getRandomProducts } from '../../utils/getRandomProducts'

export const HomePage = () => {
  const { productList, isLoading } = useContext(ProductListContext)
  const [bestSellersList, setBestSellersList] = useState([])
  const [newArrivalsList, setNewArrivalsList] = useState([])

  useEffect(() => {
    if (productList.length > 0) {
      setBestSellersList(getRandomProducts(productList, 4))
      setNewArrivalsList(getRandomProducts(productList, 3))
    }
  }, [productList])

  return (
    <section className='main-content'>
      <ProductList title='Bestsellers' productList={bestSellersList} isLoading={isLoading} className='best-sellers' />
      <ProductList title='New Arrivals' productList={newArrivalsList} isLoading={isLoading} className='new-arrivals' />
    </section>
  )
}

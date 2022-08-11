import { createContext, useState, useEffect } from 'react'
import { getProductsList } from '../api'

export const ProductListContext = createContext()

export const ProductListProvider = ({ children }) => {
  const [productList, setProductList] = useState([])
  const [isLoading, setIsloading] = useState(true)

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await getProductsList()
        setProductList(res)
      } catch (error) {
        console.log(error)
      } finally {
        setIsloading(false)
      }
    }

    fetchProducts()
  }, [])

  return (
    <ProductListContext.Provider value={{ productList, isLoading }}>
      {children}
    </ProductListContext.Provider>
  )
}


import { Home, Products } from './src/screens'
import fonts from './src/global/fonts'
import { useFonts } from 'expo-font'
import { useState } from 'react'


export default function App() {
  const [fontsLoaded] = useFonts(fonts)
  const [categorySalected, setCategorySelected] = useState('')
  const [productSalected, setProductSelected] = useState()

  if (!fontsLoaded) {
    return null
  }

  return productSalected ? (
    <Details product={productSalected} />
  ) : categorySalected ? (
    <Products
      category={categorySalected}
      setProductSelected={setProductSelected} />
  ) : (
    <Home setCategorySelected={setCategorySelected} />
  )
}


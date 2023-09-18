import { Home, Products } from './src/screens'
import fonts from './src/global/fonts'
import { useFonts } from 'expo-font'
import { useState } from 'react'



export default function App() {
  const [fontsLoaded] = useFonts(fonts)
  const [categorySalected, setCategorySelected] = useState('')

  if (!fontsLoaded) {
    return null
  }

  return categorySalected ? (
    <Products category={categorySalected} />
  ) : (
    <Home setCategorySelected={setCategorySelected} />
  )
}


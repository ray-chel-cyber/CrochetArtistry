import './App.css'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import LandingPage from './pages/landingpage'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import ContactForm from './pages/ContactForm'
import CategoryCard from './pages/CategoryCard'
import Catalogue from './pages/Catalogue'

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <LandingPage />
    },

    {
      path: "ContactForm",
      element: <ContactForm />
    },

    
    {
      path: "CategoryCard",
      element: <CategoryCard/>
    },

    
    {
      path: "Catalogue",
      element: <Catalogue/>
    },

  ])

  return (
    <RouterProvider router={router}/>
  )
}

export default App

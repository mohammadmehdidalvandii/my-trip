import React from 'react'
import TopBar from './components/modules/TopBar/TopBar';
import Navbar from './components/modules/Navbar/Navbar';
import routes from './routes';
import { useRoutes } from 'react-router-dom';

const App:React.FC= ()=>{

  const router = useRoutes(routes)

  return (
   <>
   <TopBar/>
   <Navbar/>
   {router}
   </>
  )
}

export default App
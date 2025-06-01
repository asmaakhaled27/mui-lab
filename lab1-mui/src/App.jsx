import React from "react"
import Chat from "./component/Chat.jsx"
import Login from "./component/Login.jsx"
import ProductCard from "./component/ProductCard.jsx"
import { Box } from "@mui/material"
import SelectForm from "./component/SelectForm.jsx"

function App() {
 

  return (
    <>
      <Box>
        <Chat  Reciver_Name="ahmed"/>
        <Login />
        <ProductCard />
        <SelectForm />
      </Box>
    </>
  )
}

export default App

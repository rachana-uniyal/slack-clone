import React from 'react'
import styled from 'styled-components'
import Sidebar from './Sidebar'
import Chat from './Chat'
import Header from './Header'

function HomeContainer() {

  return (
    <div>
        <Header/>
    <AppBody>
        <Sidebar/>
        <Chat/>
    </AppBody>   
    
    </div>
  )
}

export default HomeContainer

const AppBody = styled.div`
    display: flex;
    height: 100vh;
  `
import React from 'react'
import styled from 'styled-components'
import { db } from '../firebase.js'
import { useDispatch } from 'react-redux'
import { collection, addDoc } from 'firebase/firestore'
import { enterRoom } from '../features/appSlice.js'

function SidebarOption({Icon, title, addChannelOption,id}) {
    const dispatch = useDispatch()

    const addChannel = () =>{
        const channelName = prompt("Please enter the channel name")

        if(channelName){
            const docRef =  addDoc(collection(db,'rooms'),{
                name: channelName
            })
            console.log("Document written with ID: ", docRef.id)
        }
    }

    const selectChannel = () =>{
        if (id){
            dispatch(enterRoom({
                roomId: id
            }))
        }
    }

  return (
    <SidebarOptionContainer
        onClick={addChannelOption ? addChannel : selectChannel }
        >
        {Icon && <Icon fontSize='small' style={{ padding: 10 }}/>}
        {Icon ? (
                <h3>{title}</h3>
            ):
            (
                <SidebarOptionChannel>
                    <span>#</span>{title}
                </SidebarOptionChannel>
            )
        }
    </SidebarOptionContainer>
  )
}

export default SidebarOption


const SidebarOptionContainer = styled.div`
    display:flex;
    font-size: 12px;
    align-items: center;
    padding-left: 2px;

    :hover {
        opacity:0.9;
        background-color: #340e34;
    };

    >h3 {
        font-weight: 500;
    };

    >h3 > span{
        padding: 15px;
    }
`

const SidebarOptionChannel = styled.h3`
    padding: 10px 0;
    color: white;
    font-weight: 300;
`
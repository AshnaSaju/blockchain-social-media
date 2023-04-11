import React, { useState } from 'react'
import ModalContext from './ModalContext'


const ModalStates = (props) => {
  const [openView, setOpenView] = useState(false)
  const openViewModal = ()=>{
        setOpenView(true)
    }

    const closeViewModal = ()=>{
        setOpenView(false)
    }

    const [openPeople, setOpenPeople] = useState(false)
    const openPeopleModal = ()=>{
          setOpenPeople(true)
      }
  
      const closePeopleModal = ()=>{
          setOpenPeople(false)
      }

      
    const [createModal, setCreateModal] = useState(false)
    const openCreateModal = ()=>{
        setCreateModal(true)
    }

    const closeCreateModal = ()=>{
        setCreateModal(false)
    }

  return (
    <ModalContext.Provider value={{openView,openViewModal,closeViewModal,openPeople,openPeopleModal,closePeopleModal,createModal,openCreateModal,closeCreateModal}}>
        {props.children}
    </ModalContext.Provider>
  )
}

export default ModalStates
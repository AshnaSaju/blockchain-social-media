import React, { useContext,useState } from 'react'
import ModalContext from '../../../Context/ModalContext'
import "./createmodal.css"
import { Web3Storage } from 'web3.storage'

const CreateModal = () => {
    const context = useContext(ModalContext)
    const { createModal, closeCreateModal } = context
    const [ipfsFile,setipfsFile]=useState(null)
    function getAccessToken () {
  return "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkaWQ6ZXRocjoweDA5MzQzQzUzOTM2MTE4NTNCZDNiNjY3RjZjNWQwZTkzOTkzMzhDQjEiLCJpc3MiOiJ3ZWIzLXN0b3JhZ2UiLCJpYXQiOjE2ODEwMzU4ODY1MTcsIm5hbWUiOiJ0b2tlbjEifQ.BwE_yRAZijnjQ-_RvgB6entVfS0gRboSxCkowK7DgsU"
}

function makeStorageClient () {
  return new Web3Storage({ token: getAccessToken() })
}
function getFiles (e) {
  const fileInput = e.target.files
  setipfsFile(fileInput)
}
    async function storeFiles (files) {
  const client = makeStorageClient()
  const cid = await client.put(files)
  console.log('stored files with cid:', cid)
}
    return (
        <>
            {createModal && <div className='CreateModal'>
                <div className="box">
                    <div className="header">
                        <div className="heading"><b>Create New Post</b></div>
                        <i style={{ cursor: "pointer", color: "red" }} className='bx bx-x-circle bx-sm' onClick={() => { closeCreateModal() }}></i>
                    </div>


                    <div className="body">
                        <i style={{ fontSize: "7em" }} class='bx bx-images'></i>
                        <p style={{ margin: "2%" }}>Upload Your Images Here</p>
                        <input onChange={getFiles} type="file" id="file" className='btn' />
                        <label for="file">
                            Select from Computer
                        </label>
                    </div>
                <button onClick={()=>storeFiles(ipfsFile)}>submit</button>
                </div>
            </div>

            }
        </>
    )
}

export default CreateModal

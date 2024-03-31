import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashCanArrowUp,  faSave, faEdit  } from '@fortawesome/free-solid-svg-icons'

import user from '../Images/profile_3135715.png'





export default function ContactList(props) {

    const [editingContact, setEditingContact] = useState(null)
    const [editedName, setEditedName] = useState('')
    const [editedEmail, setEditedEmail] = useState('')


    const editHandler = (contact)=>{
        setEditingContact(contact)
        setEditedName(contact.name)
        setEditedEmail(contact.email)
    }

    const editHandlerSave=()=>{
        props.onEdit(editingContact.id,{...editingContact, name: editedName, email: editedEmail})
        setEditingContact(null)
    }

    const changeHandler = (e)=>{
        const {name, value }= e.target
       if (name === 'name') {
            setEditedName(value)
        }else if (name==='email'){
            setEditedEmail(value)
        }
    }



        return(
            <ul className= 'list-group'>

            {

                props.contacts.map((contact)=>(
                    <li className= 'list-group-item' key={contact.id}>
                        <img src={user} alt="" srcset="" />
                        <strong> <b>Name:</b></strong> <strong>{contact.name},</strong> 
                        <strong> <b>Email:</b></strong> <strong>{contact.email}</strong>
                        <FontAwesomeIcon icon={ faTrashCanArrowUp}  style={{  position: 'absolute', right: '10px', top: '10px', color:"red" }}
                        onClick={()=>props.deleteContact(contact.id)}
                        />


{editingContact === contact ? (
                        <>
                            <input
                                type="text"
                                name="name"
                                value={editedName}
                                onChange={changeHandler}
                                style={{fontWeight:"bolder"}}
                            />
                            <input

                                type="email"
                                name="email"
                                value={editedEmail}
                                onChange={changeHandler}

                                style={{fontWeight:"bolder"}}
                            />
                            <button
                                style={{ marginLeft: '10px' }}
                                onClick={editHandlerSave}
                            >
                               <FontAwesomeIcon icon={faSave} />
                            </button>
                        </>
                    ) : (
                        <button
                            style={{ position: 'absolute', right: '10px', top: '10px', color: 'red', marginTop: '37px' }}
                            onClick={() => editHandler(contact)}
                        >
                            <FontAwesomeIcon icon={faEdit} style={{color: "skyblue"}} />
                        </button>
                    )}

                       

                        </li>
                        
                ))
                
            }
                           
            </ul>
        )
}

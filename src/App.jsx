
import {useEffect, useState } from 'react';
import './App.css';
import AddContact from './Component/AddContact';
// import ContactCard from './Component/ContactCard';
import ContactList from './Component/ContactList';
import Header from './Component/Header';
import {v4 as uuidv4} from 'uuid'




const LOCAL_STORAGE_KEY = "contacts"

function App() {


const [contacts, setcontacts] =useState([])

 const addContactHandler = (contact)=>{
  // console.log(contact);

  setcontacts([...contacts, {id: uuidv4(), ...contact}])

 }

 const deleteContact = (id) => {
  setcontacts(contacts.filter(contact => contact.id !== id));
};

const editContact = (id, updateContact)=>{
  setcontacts(contacts.map(contact=>(contact.id===id ? updateContact: contact)))
}




useEffect(()=>{
const retriveContacts = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY ))

if (retriveContacts) setcontacts(retriveContacts)
},[])


useEffect(()=>{
  try {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
  } catch (error) {
    console.error("Error saving contacts to local storage:", error);
  }
}, [contacts]);




  return (
    <div>
      <Header/>
      <AddContact addContactHandler={addContactHandler}/>
      <ContactList contacts={contacts}
      deleteContact = {deleteContact}
      onEdit={editContact}
      />
      {/* <ContactCard contacts={contacts}/> */}
    </div>
  );
}

export default App;

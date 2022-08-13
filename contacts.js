const fs = require("fs").promises;
const path = require("path");

const {nanoid} = require("nanoid");

const contactsPath = path.join(__dirname, "/db/contacts.json");

const updateContacts = async(contacts) => await fs.writeFile(contactsPath, JSON.stringify(contacts, null, 2));

const list = async () =>{
    const data = await fs.readFile(contactsPath); 
    return JSON.parse(data);
}  
  
const get = async (contactId) => {
    const contacts = await list();
    const result = contacts.find(contact => contact.id === contactId);
    return result || null;
}

const remove = async (contactId) => {
    const contacts = await list();
    const idx = contacts.findIndex(contact => contact.id === contactId);
    if(idx === -1){
        return null;
    } 
    const [result] = contacts.splice(idx, 1);
    await updateContacts(contacts);
    return result;
}
  
const add = async (name, email, phone) => {
    const contacts = await list();
    const newContact = {
        id: nanoid(),
        name,
        email,
        phone
    };
    contacts.push(newContact);
    await updateContacts(contacts);
    return newContact;
}

module.exports = {
    list,
    get,
    remove,
    add
}
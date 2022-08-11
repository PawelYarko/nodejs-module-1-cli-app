const contacts = require("./contacts");

// const argv = require("yargs").argv;


// TODO: рефакторить
const invokeAction = async ({ action, id, name, email, phone }) => {
  switch (action) {
    case "listContacts":
      const allContacts = await contacts.listContacts();
      console.log(allContacts);
      break;

    case "getContactById":
      const contact = await contacts.getContactById(id);
      console.log(contact);
      break;

    case "addContact":
      const newContact = await contacts.addContact(name, email, phone);
      console.log(newContact);
      break;

    case "remove":
      // ... id
      break;

    default:
      console.warn("\x1B[31m Unknown action type!");
  }
}

// invokeAction(argv);
invokeAction({action:'addContact' ,name: 'pavel', email:'pavel@mail.com' , phone:'12345678'});
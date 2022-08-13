const {program} = require("commander");

const contacts = require("./contacts");


const invokeAction = async ({ action, id, name, email, phone }) => {
  switch (action) {
    case "list":
      const allContacts = await contacts.list();
      console.table(allContacts);
      break;

    case "get":
      const contact = await contacts.get(id);
      console.log(contact);
      break;

    case "add":
      const newContact = await contacts.add(name, email, phone);
      console.log(newContact);
      break;

    case "remove":
      const removeElem = await contacts.remove(id);
      console.log(removeElem);
      break;

    default:
      console.warn("\x1B[31m Unknown action type!");
  }
}

program
.option("-a, --action <type>")
.option("-i, --id <type>")
.option("-n, --name <type>")
.option("-e, --email <type>")
.option("-p, --phone <type>")

program.parse();

const options = program.opts();

const start = async (options) => {
  try {
      await invokeAction(options);
  } catch (error) {
      console.log(error);
  }
};

start(options);





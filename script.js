let phoneBook = [];

// Function to add a new contact
function addContact(name, phoneNumber, email) {
    let contact = {
        name: name,
        phoneNumber: phoneNumber,
        email: email
    };
    phoneBook.push(contact);
    console.log(`Contact ${name} added successfully!`);
}

// Function to search for a contact
function searchContact(name) {
    let foundContact = phoneBook.find(contact => contact.name === name);
    if (foundContact) {
        console.log(`Name: ${foundContact.name}`);
        console.log(`Phone Number: ${foundContact.phoneNumber}`);
        console.log(`Email: ${foundContact.email}`);
    } else {
        console.log(`Contact ${name} not found.`);
    }
}

// Function to update a contact
function updateContact(name, newPhoneNumber, newEmail) {
    let contactIndex = phoneBook.findIndex(contact => contact.name === name);
    if (contactIndex !== -1) {
        phoneBook[contactIndex].phoneNumber = newPhoneNumber;
        phoneBook[contactIndex].email = newEmail;
        console.log(`Contact ${name} updated successfully!`);
    } else {
        console.log(`Contact ${name} not found.`);
    }
}

// Function to delete a contact
function deleteContact(name) {
    let contactIndex = phoneBook.findIndex(contact => contact.name === name);
    if (contactIndex !== -1) {
        phoneBook.splice(contactIndex, 1);
        console.log(`Contact ${name} deleted successfully!`);
    } else {
        console.log(`Contact ${name} not found.`);
    }
}
addContact("Yogita", "1234567890", "yogitazee1@gmail.com");
addContact("Shruti", "0987654321", "yogitag22@navgurukul.org");

searchContact("Yogita");
searchContact("Shruti");
searchContact("Riya");

updateContact("Yogita", "9876543210", "yogitazee1@gmail.com");

deleteContact("Shruti");
deleteContact("Riya");

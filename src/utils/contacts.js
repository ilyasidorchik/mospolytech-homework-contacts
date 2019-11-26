const getContactList = () => {
	const savedContactList = localStorage.getItem('contacts');
	if (savedContactList) {
		return JSON.parse(savedContactList);
	}
};

const getContact = id => {
	let savedContactList = localStorage.getItem('contacts');

	if (savedContactList) {
		savedContactList = JSON.parse(savedContactList);

		if (savedContactList) {
			return savedContactList[id];
		}
	}
};

const addContact = name => {
	let savedContactList = getContactList();

	if (savedContactList == null) {
		localStorage.setItem('contacts', '[]');
		savedContactList = getContactList();
	}

	savedContactList.push({
		name
	});

	localStorage.setItem('contacts', JSON.stringify(savedContactList));
};

const editContact = (id, name) => {
	let savedContactList = getContactList();

	if (savedContactList) {
		let editedContact = savedContactList[id];

		editedContact.name = name;

		localStorage.setItem('contacts', JSON.stringify(savedContactList));
	}
};

const removeContact = id => {
	let savedContactList = localStorage.getItem('contacts');

	if (savedContactList) {
		savedContactList = JSON.parse(savedContactList);

		if (savedContactList) {
			savedContactList.splice(id, 1);

			if (savedContactList.length > 0) {
				localStorage.setItem(
					'contacts',
					JSON.stringify(savedContactList)
				);
			} else {
				localStorage.removeItem('contacts');
			}
		}
	}
};

export { getContactList, getContact, addContact, editContact, removeContact };

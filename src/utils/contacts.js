const getContactList = () => {
	const savedContactList = localStorage.getItem('contacts');
	return JSON.parse(savedContactList);
};

const addContact = newName => {
	let savedContactList = getContactList();

	if (savedContactList == null) {
		localStorage.setItem('contacts', '[]');
		savedContactList = getContactList();
	}

	savedContactList.push({
		name: newName
	});

	localStorage.setItem('contacts', JSON.stringify(savedContactList));
};

export { getContactList, addContact };

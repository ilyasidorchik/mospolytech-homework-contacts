const getContactList = () => {
	const savedContactList = localStorage.getItem('contacts');
	if (savedContactList) {
		return JSON.parse(savedContactList);
	}
};

const getContact = (id)  => {
	let savedContactList = localStorage.getItem('contacts');

	if (savedContactList) {
		savedContactList = JSON.parse(savedContactList);

		if (savedContactList) {
			return savedContactList[id];
		}
	}
};

const addContact = (name) => {
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

export { getContactList, getContact, addContact };

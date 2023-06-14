const form = document.getElementById('contact-form');

form.addEventListener('submit', (event) => {
	event.preventDefault();
	
	let name = document.getElementById('name').value.trim();
	let email = document.getElementById('email').value.trim();
	let subject = document.getElementById('subject').value.trim();
	let message = document.getElementById('message').value.trim();

	if (!name) {
		showError('name', 'Name is required');
	} else {
		hideError('name');
	}

	if (!email) {
		showError('email', 'Email is required');
	} else if (!isValidEmail(email)) {
		showError('email', 'Please enter a valid email address');
	} else {
		hideError('email');
	}

	if (!subject) {
		showError('subject', 'Subject is required');
	} else {
		hideError('subject');
	}

	if (!message) {
		showError('message', 'Message is required');
	} else {
		hideError('message');
	}

	if (name && email && isValidEmail(email) && subject && message) {
		alert('Form is not found');
    }else {
		hideError('message');
	}
}


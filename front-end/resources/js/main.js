// Properties
const server = 'http://localhost:3000';
const form = document.forms.add_gift_form;

// Event listener Methods
document.addEventListener('DOMContentLoaded', async () => {
    
});

form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const data = new FormData(form);
    const jsonData = Object.fromEntries(data);
    // const updateData
})
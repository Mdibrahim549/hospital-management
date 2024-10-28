document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('patient-form');
    const recordsTable = document.getElementById('patient-records').getElementsByTagName('tbody')[0];

    form.addEventListener('submit', async (event) => {
        event.preventDefault();
        
        const patientData = {
            name: document.getElementById('name').value,
            age: parseInt(document.getElementById('age').value),
            gender: document.getElementById('gender').value,
            contact: document.getElementById('contact').value,
            address: document.getElementById('address').value,
            condition: document.getElementById('condition').value
        };

        await fetch('/api/patients', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(patientData)
        });

        loadRecords();
        form.reset();
    });

    async function loadRecords() {
        const response = await fetch('/api/patients');
        const patients = await response.json();
        
        recordsTable.innerHTML = '';
        patients.forEach(patient => {
            const row = recordsTable.insertRow();
            row.innerHTML = `
                <td>${patient.id}</td>
                <td>${patient.name}</td>
                <td>${patient.age}</td>
                <td>${patient.gender}</td>
                <td>${patient.contact}</td>
                <td>${patient.address}</td>
                <td>${patient.condition}</td>
            `;
        });
    }

    loadRecords();
});

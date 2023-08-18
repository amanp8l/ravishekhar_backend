const express = require('express');
const app = express();

// Sample data
const jobData = [
    {
        name: 'Interventional Cardiologist',
        location: 'New York City, USA',
        posted: '25th May',
        status: 'Published',
        applied: 98,
        jobViews: 128,
        daysLeft: 2,
        premium: false,
        dateFormat: '2023-05-25',
    },
    // ... other job data objects
];

// Calculate the count per day for Received and Applied
const receivedCounts = Array(30).fill(22); // Replace with actual data
const appliedCounts = Array(30).fill(22);  // Replace with actual data

app.get('/api/jobs', (req, res) => {
    const responseData = {
        type: 'Active Jobs',
        countPerDay: {
            Received: receivedCounts,
            Applied: appliedCounts,
        },
        jobData: jobData,
    };
    
    res.json(responseData);
});

const PORT = 8000; // You can change this to any desired port number
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

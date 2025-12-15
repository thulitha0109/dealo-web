const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
const path = require('path');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Reusable mail transporter
const transporter = nodemailer.createTransport({
    host: 'mail.dealo.io',
    port: 465,
    secure: true,
    auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
    },
});

// Form configuration
const formConfig = {
    contact: {
        recipient: 'dilshan@dealo.io',
        subject: 'New Contact Message',
        format: (data) => `Name: ${data.name}\nEmail: ${data.email}\nMessage: ${data.message}`,
    },
    rfq: {
        recipient: 'dilshan@dealo.io',
        subject: 'New RFQ Submission',
        format: (data) =>
            `Name: ${data.name}\nEmail: ${data.email}\nCompany: ${data.company}\nRequirements: ${data.requirements}`,
    },
    freight: {
        recipient: 'dilshan@dealo.io',
        subject: 'New Freight Request Submission',
        format: (data) =>
            `Name: ${data.name}\nEmail: ${data.email}\nCompany: ${data.company}\nRequirements: ${data.requirements}`,
    },
    partnership: {
        recipient: 'dilshan@dealo.io',
        subject: 'New Partnership Inquiry',
        format: (data) =>
            `Name: ${data.name}\nEmail: ${data.email}\nCompany: ${data.company}\nMessage: ${data.message}`,
    },
};

// Generic sendMail function
const sendMail = async ({ fromName, fromEmail, to, subject, text }) => {
    return transporter.sendMail({
        from: `"${fromName}" <${process.env.SMTP_USER}>`,
        to,
        subject,
        text,
        replyTo: fromEmail,
    });
};

// API Endpoint
app.post('/api/send', async (req, res) => {
    const { formType, ...formData } = req.body;

    if (!formConfig[formType]) {
        return res.status(400).send({ success: false, error: 'Invalid form type' });
    }

    const { recipient, subject, format } = formConfig[formType];

    try {
        await sendMail({
            fromName: formData.name,
            fromEmail: formData.email,
            to: recipient,
            subject,
            text: format(formData),
        });
        res.status(200).send({ success: true });
    } catch (error) {
        console.error('Mail error:', error);
        res.status(500).send({ success: false, error: error.message });
    }
});

// Serve Static Files in Production
if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, '../dist')));

    app.get('*', (req, res) => {
        res.sendFile(path.join(__dirname, '../dist', 'index.html'));
    });
}

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

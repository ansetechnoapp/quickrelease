import React, { useState } from 'react';

export function UnlockForm() {
  interface FormData {
    deviceModel: string;
    imei: string;
    email: string;
  }

  const [formData, setFormData] = useState<FormData>({
    deviceModel: '',
    imei: '',
    email: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  type SubmitEvent = React.FormEvent<HTMLFormElement>;

  interface FetchResponse {
    ok: boolean;
  }

  const handleSubmit = async (e: SubmitEvent): Promise<void> => {
    e.preventDefault();
    try {
      // Transform the form data to match the backend's expected format
      const emailData = {
        to: formData.email, // Use the email from the form as the recipient
        subject: `Unlock Request for ${formData.deviceModel}`, // Create a subject
        text: `Device Model: ${formData.deviceModel}\nIMEI: ${formData.imei}\nEmail: ${formData.email}`, // Create the email content
      };
  
      const response: FetchResponse = await fetch('/api/sendEmail', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(emailData), // Send the transformed data
      });
  
      if (!response.ok) {
        throw new Error('Erreur lors de l\'envoi de l\'email');
      }
  
      alert('Email sent successfully!');
    } catch (error) {
      console.error('Erreur lors de l\'envoi de l\'email:', error);
      alert('Failed to send email. Please try again.');
    }
  };

  return (
    <section id="unlock" className="bg-white py-16">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Débloquer Votre Appareil</h2>
        <form onSubmit={handleSubmit} className="max-w-xl mx-auto bg-gray-50 p-6 shadow-md rounded-lg">
          <div className="mb-4">
            <label htmlFor="deviceModel" className="block text-gray-700 font-medium mb-2">
              Modèle d'Appareil 
            </label>
            <input
              type="text"
              id="deviceModel"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
              placeholder="ex: iPhone 12 Pro"
              value={formData.deviceModel}
              onChange={handleChange}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="imei" className="block text-gray-700 font-medium mb-2">
              Numéro IMEI
            </label>
            <input
              type="text"
              id="imei"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
              placeholder="Enter your device's IMEI"
              value={formData.imei}
              onChange={handleChange}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
              Adresse Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-lg shadow hover:bg-blue-700 transition duration-300"
          >
            Envoyer
          </button>
        </form>
      </div>
    </section>
  );
}
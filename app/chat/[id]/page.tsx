// app/chat/[id]/page.tsx

import { Metadata } from 'next'; // Optional: for setting page metadata
import React from 'react';

interface DynamicPageProps {
    params: { id: string }; // Define the structure of params
}

// Optionally define page metadata
export const metadata: Metadata = {
    title: 'Chat Page',
    description: 'Dynamic chat page based on ID',
};

// The server component
const Page = async ({ params }: DynamicPageProps) => {
    const { id } = params; // Access the id from URL parameters

    // Fetch data on the server-side
    const res = await fetch(`http://localhost:5555/api/chatbot/create`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ id }), // Send id as payload
    });

    // Check if the response is successful
    if (!res.ok) {
        throw new Error('Failed to fetch data');
    }

    const data = await res.json(); // Parse the JSON response

    return (
        <div>
            <h1>Dynamic Chat Page</h1>
            <p>The ID from the URL is: {id}</p>
            <h2>Fetched Data:</h2>
            <pre>{JSON.stringify(data, null, 2)}</pre>
        </div>
    );
};

export default Page;

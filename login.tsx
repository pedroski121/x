import { useUser } from '@auth0/nextjs-auth0/client';
import { useFetch } from '@hooks/general/useFetch';
import { getAccessToken } from '@auth0/nextjs-auth0';
import { useEffect, useState } from 'react';
import axios from 'axios';

export default function Index() {
    const { user, error, isLoading } = useUser();
    const [accessToken, setAccessToken] = useState<string>('')

    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>{error.message}</div>;

    const callBackend = async () => {
        if (user) {
            const response = await fetch('/api/auth/token');
            const { accessToken } = await response.json();

            const backendResponse = await fetch('http://localhost:5000/api/protected', {
                headers: {
                    Authorization: `Bearer ${accessToken}`
                }
            });

            if (backendResponse.ok) {
                const data = await backendResponse.json();
                console.log(data);
            } else {
                console.error('Failed to fetch from backend');
            }
        }
        // const response = await fetch('https://dev-0kbl15zaxtc8l4yb.us.auth0.com/oauth/token', {
        //     method: "POST",
        //     body: JSON.stringify({ "client_id": "tRaS8F7r4HAHc6HvPTHuYn4ZPYtKWUjd", "client_secret": "6nzvlOgTt9H1BzIqF1maeU3k0wDQ3BtvuL_dzRWXRmr669DYr7ZuVTClQtPbiiv-", "audience": "https://dev-0kbl15zaxtc8l4yb.us.auth0.com/api/v2/", "grant_type": "client_credentials" }), // Convert data to JSON string
        //     headers: {
        //         "Content-Type": "application/json", // Set the content type
        //     },
        // });
        // console.log(response)
    };


    if (user) {
        // return (
        //     <div>
        //         Welcome {user.name}! <a href="/api/auth/logout">Logout</a>
        //     </div>
        // );
        return <button onClick={callBackend}>Call Backend</button>;
    }

    return <></>;
}
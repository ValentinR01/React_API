import {useEffect} from "react";

export default function usePostInscription(credentials) {
        useEffect(() => {
            const body = new URLSearchParams({
                username: credentials.username,
                password: credentials.password
            })

            const headers = new Headers({
                'content-type': 'application/json'
            })

            fetch('http://localhost:3000', {
                method: 'POST',
                body: body,
                headers: headers,
                mode: 'cors',
                credentials: 'include'
            })
        }, [])


};

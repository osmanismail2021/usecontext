import WelcomeMessage from "../components/Homepage/welcomemessage";
import { Database } from '../context/index';
import { React, useContext } from 'react';



export default function Contact(data) {

    const MyDb = useContext(Database)[3]

    return (
        <>
            <WelcomeMessage message="Blueberry | Contact" color="warning" />

            {MyDb.map((post, index) => (
                <div>
                    <p>{post.title}</p>
                </div>
            ))}
        </>
    )
}
import { React, useContext } from 'react'
import WelcomeMessage from '../components/Homepage/welcomemessage'
import { Database } from '../context/index';

export default function Homepage() {
    const [state,SaySomething,OnlyString,posts] = useContext(Database) 
    return (
       <>
            <WelcomeMessage message="Blueberry | Contact" color="danger" />
            
       </>       

    )
}

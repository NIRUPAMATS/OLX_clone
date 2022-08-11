import {createContext, useState} from 'react'

export const FirebaseContext=createContext(null)
export const AuthContext=createContext(null);


export default function Context({children}){
    const [user,setUser]=useState('nameeee')

    return (
        <AuthContext.Provider>
            {children}
        </AuthContext.Provider>
    )
}
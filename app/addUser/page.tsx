"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";



export default function AddUser() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");

    const router = useRouter();



    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (!username || !password || !firstName || !lastName || !email || !phone) {
          alert("All fields are required.");
          return;
        }
    
        try {
          const res = await fetch(`/api/users`, {
            method: "POST",
            headers: {  "Content-type": "application/json", },
            body: JSON.stringify({ username, password, firstName, lastName, email, phone }),
          });
    
          if (res.ok) {
            router.push("/");
          } else {
            throw new Error("Failed to create a user");
          }
        } catch (error) {
          console.log(error);
        }
      };

      
    return (
    <>
        <form onSubmit={handleSubmit}>
            <input
                onChange={(e) => setUsername(e.target.value)}
                value={username}
                type="text"
                placeholder="Username"
            />
            
            <input
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                type="password"
                placeholder="Password"
            />

            <input
                onChange={(e) => setFirstName(e.target.value)}
                value={firstName}
                type="text"
                placeholder="First Name"
            />

            <input
                onChange={(e) => setLastName(e.target.value)}
                value={lastName}
                type="text"
                placeholder="Last Name"
            />

            <input
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                type="text"
                placeholder="Email"
            />

            <input
                onChange={(e) => setPhone(e.target.value)}
                value={phone}
                type="text"
                placeholder="Phone"
            />

            <button type="submit">Add User</button>
        </form>
    </>
    )
}

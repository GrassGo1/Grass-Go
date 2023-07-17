"use client"

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function EditForm(props: any) {
    const { user } = props;
    const router = useRouter();

    const [username, setUsername] = useState(user.username);
    const [password, setPassword] = useState("");
    const [firstName, setFirstName] = useState(user.firstName);
    const [lastName, setLastName] = useState(user.lastName);
    const [email, setEmail] = useState(user.email);
    const [phone, setPhone] = useState(user.phone);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (!username || !password || !firstName || !lastName || !email || !phone) {
          alert("All fields are required.");
          return;
        }
    
        try {
          const res = await fetch(`/api/users/${user._id}`, {
            method: "PUT",
            headers: {  "Content-type": "application/json", },
            body: JSON.stringify({ username, password, firstName, lastName, email, phone }),
          });
    
          if (res.ok) {
            router.push("/");
          } else {
            throw new Error("Failed to edit the user");
          }
        } catch (error) {
          console.log(error);
        }
      };


    return (
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

            <button type="submit">Edit User</button>
        </form>
    )
}
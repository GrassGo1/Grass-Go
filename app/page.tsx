
import Link from "next/link";
import DeleteButton from "@/components/DeleteButton";
import EditButton from "@/components/EditButton";

const getUsers = async () => {
    try {
        const res = await fetch(`${process.env.DOMAIN_URL}/api/users`, {
            cache: "no-store"
        });

        if (!res.ok) throw new Error("Failed to fetch users");
        return res.json();
    } catch (err) {
        console.log(err);
    }
}



type User = {
    _id: String,
    username: String,
    password: String,
    firstName: String,
    lastName: String,
    phone: String,
    email: String
};



export default async function Home() {
    const { users } = await getUsers();
    console.log(`Number of users: ${users.length}`)

    return (
    <>
        <Link href={`/addUser`}>Add User</Link>
        {users.map((u: User) => (
            <div className="user-border" key={u._id as string}>
                <h1>ID: {u._id} </h1>
                <h5>Username: {u.username}</h5>
                <h5>Password: {u.password}</h5>
                <h5>First name: {u.firstName}</h5>
                <h5>Last name: {u.lastName}</h5>
                <h5>Phone: {u.phone}</h5>
                <h5>Email: {u.email}</h5>
                <div className="user-icons">
                    <DeleteButton userID={u._id}></DeleteButton>
                    <EditButton userID={u._id}></EditButton>
                </div>
            </div>
        ))}
    </>
    )
}

"use client"

import Link from "next/link"

interface userIDProp {
    userID: String
}



export default function EditButton(props: userIDProp) {
    const { userID } = props

    return (
    <>
        <Link href={`/editUser/${userID}`}>
            <i className="bi bi-pencil" style={{color: "green"}}></i>
        </Link>
    </>
    )
}


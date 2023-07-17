"use client"


interface userIDProp {
    userID: String
  }
  


export default function DeleteButton(props: userIDProp) {
    const { userID } = props

    const handleDelete = async () => {
        const response = await fetch(`/api/users?id=${userID}`, {
            method: "DELETE"
        });
        // console.log(response);
    };
      

    return (
    <>
        <div onClick={handleDelete}>
            <i className="bi bi-trash3"></i>
        </div>
    </>
    )
}


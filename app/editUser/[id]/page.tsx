import EditForm from "@/components/EditForm"


const getUserByID = async (id: string) => {
    try {
        const res = await fetch(`http://localhost:3000/api/users/${id}`, {
            cache: "no-store",
        });

        if (!res.ok) throw new Error("Failed to fetch topic");

        return res.json();
    } catch (err) {
        console.log(err);
    }
};

  
export default async function EditTopic({ params }: any) {
    const { id } = params;
    const { user } = await getUserByID(id);
    
    return (
        <EditForm user={user} />
    )
}


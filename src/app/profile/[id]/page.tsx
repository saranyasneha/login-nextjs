export default function ProfileParam({params}:any){
    return (
        <div>
            <h1>profile</h1>
            <p>profile page</p>
            <span className=" text-white rounded bg-orange-500">{params.id}</span>

        </div>
    )
}
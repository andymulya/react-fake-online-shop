export default function ProfileComponent({ children }){
    return(
        <div className="flex flex-col items-center gap-10 m-5 card">
            { children }
        </div>
    )
}

const Head = ({ title }) => {
    return(
        <div className="flex flex-col items-center gap-5 card-title">
            <div className="avatar bg-slate-600 w-20 h-20 rounded-full" />
            <h1 className="font-bold uppercase">{ title }</h1>
        </div>
    )
}

const Body = ({ children }) => {
    return (
        <div>
            { children }
        </div>
    )
}

ProfileComponent.Head = Head
ProfileComponent.Body = Body
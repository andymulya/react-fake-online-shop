import avatarDefault from '../../assets/img/avatar_default.webp'

export default function ProfileComponent({ children }){
    return(
        <div className="flex flex-col sm:flex-row sm:justify-center gap-10 mt-10 p-16 card shadow-lg md:w-[600px]">
            { children }
        </div>
    )
}

const Head = ({ title }) => {
    return(
        <div className="flex flex-col items-center gap-5 card-title">
            <img src={ avatarDefault } className="w-48 h-48 rounded-full" />
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
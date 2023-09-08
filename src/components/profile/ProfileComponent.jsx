import avatarDefault from '../../assets/img/avatar_default.webp'

export default function ProfileComponent({ children }){
    return(
        <div className="flex flex-col sm:flex-row sm:justify-between gap-10 mt-10 card shadow-lg md:w-[800px]">
            { children }
        </div>
    )
}

const Head = ({ title }) => {
    return(
        <div className="flex flex-col items-center gap-5 p-16 card-title bg-gradient-to-br from-sky-200 to-navy rounded-r-full">
            <img src={ avatarDefault } className="w-48 h-48 rounded-full" />
            <h1 className="font-bold uppercase">{ title }</h1>
        </div>
    )
}

const Body = ({ children }) => {
    return (
        <div className="p-16">
            { children }
        </div>
    )
}

ProfileComponent.Head = Head
ProfileComponent.Body = Body
import avatarDefault from '../../assets/img/avatar_default.webp'

export default function ProfileComponent({ children }){
    return(
        <div className="flex flex-col bg-sky-100 md:flex-row md:justify-between my-10 card group shadow-[15px_15px_0px_rgb(14,116,144)] rounded-none">
            { children }
        </div>
    )
}

const Head = ({ title }) => {
    return(
        <div className="flex flex-col items-center gap-5 p-10 card-title bg-gradient-to-br from-sky-200 to-navy rounded-r-full">
            <img src={ avatarDefault } className="w-48 h-48 border-4 border-white rounded-full" />
            <h1 className="font-bold uppercase">{ title }</h1>
        </div>
    )
}

const Body = ({ children }) => {
    return (
        <div className="p-14 z-10 bg-sky-100">
            { children }
        </div>
    )
}

ProfileComponent.Head = Head
ProfileComponent.Body = Body
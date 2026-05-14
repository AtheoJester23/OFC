import type { LucideIcon } from "lucide-react";
import {Link} from "react-router-dom"

const OptionCard = ({title, message, page, Icon}: {title: string; message: string; page: string; Icon: LucideIcon}) => {
  return (
    <section className="bg-white p-5 rounded-lg shadow flex flex-col gap-3">
        <div className="flex items-center gap-2">
            <Icon size={24}/>
            <h1 className="font-bold text-xl">
                {title}
            </h1>
        </div>
        <span>{message}</span>
        <Link to={page} className="bg-blue-500 flex justify-center items-center rounded font-bold py-2 text-white hover:bg-white hover:border hover:border-blue-500 duration-200 hover:text-blue-500 hover:cursor-pointer border border-blue-500">
            Choose
        </Link>
    </section>
  )
}

export default OptionCard

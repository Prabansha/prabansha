import { Icon } from "lucide-react"
import Link from "next/link"

import {FaFacebook, FaLinkedinIn, FaPinterest, FaGithub} from 'react-icons/fa'

const socials = [
    {icon: <FaFacebook/>, path: ''},
    {icon: <FaLinkedinIn/>, path: ''},
    {icon: <FaPinterest/>, path: ''},
    {icon: <FaGithub/>, path: ''},
]

const Social = ({containerStyles, iconStyles}) => {
  return (
    <div className={containerStyles}>
        {socials.map((item, index)=>{
            return (
                <Link key={index} href={item.path} className={iconStyles}>
                    {item.icon}
                </Link>
            )
        })}
    </div>
  )
}

export default Social
import { Icon } from "lucide-react"
import Link from "next/link"

import {FaFacebook, FaLinkedinIn, FaPinterest, FaGithub} from 'react-icons/fa'

const socials = [
    {icon: <FaFacebook/>, path: 'https://www.facebook.com/profile.php?id=100088991413755&mibextid=ZbWKwL'},
    {icon: <FaLinkedinIn/>, path: 'https://www.linkedin.com/in/prabhansha-dissanayake-a6a91a225?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app'},
    {icon: <FaPinterest/>, path: 'https://pin.it/2ln2Lqegk'},
    {icon: <FaGithub/>, path: 'https://github.com/Prabansha'},
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
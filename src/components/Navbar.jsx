import { useState } from "react";
import { navLinks } from "../static_data";
import styles from "../styles";

const Navbar = () => {
    const [toggle, setToggle] = useState(false);
    return (
        <div className="flex items-center justify-between">
            <div className="flex-1 pl-4">
                <h1 className="font-DynaPuff text-third text-[24px]">
                    untitled.
                    <span className="text-secondary">blend</span>
                </h1>
            </div>
            <nav className="flex-[1.75] flex justify-end md:pr-0 pr-6">
                <ul className="md:flex md:justify-end md:items-center hidden">
                    {navLinks.map((link, index) => (
                        <li
                            key={link.id}
                            className={`${index === navLinks.length - 1 ? 'mr-0 button__primary' : 'mr-6 hover:text-secondary'} cursor-pointer text-[18px]`}>
                            <a href={link.url}>{link.content}</a>
                        </li>
                    ))}
                </ul>

                <div
                    className={`${styles.flexCenter} flex-col p-1 md:hidden w-[40px] h-[40px] border-primary border-[2px] gap-1 rounded-[3px] cursor-pointer z-[6] ${toggle && 'hamburger__active'}`}
                    onClick={() => setToggle(bool => !bool)} >
                    <span className="hamburger__line" />
                    <span className="hamburger__line" />
                    <span className="hamburger__line" />
                </div>

                <ul className={`${!toggle && 'hidden'} flex items-end flex-col absolute inset-0 pt-32 pr-14 z-[5] bg__blur`}>
                    {navLinks.map((link, index) => (
                        <li
                            key={link.id}
                            className={`${index === navLinks.length - 1 ? 'button__primary mt-6 py-0' : 'mb-3 text-primary hover:text-secondary border-[2px] rounded-md border-secondary'} cursor-pointer text-[18px]`}
                            onClick={() => setToggle(bool => !bool)} >
                            <a
                                href={link.url}
                                className="py-2 px-4 block"
                            >{link.content}</a>
                        </li>
                    ))}
                </ul>
            </nav>
        </div>
    )
}

export default Navbar;
import React from 'react'
import styles from '../../styles/styles'
import { Link } from 'react-router-dom'

const Navbar = ({ activeHeading, navItems }) => {
    return (
        <div className={`block 800px:${styles.normalFlex}`}>
            {navItems && navItems.map((item, index) => (
                <div className="flex" key={index}>
                    <Link
                        to={item.url}
                        className={`${activeHeading === index + 1 ? "text-[#17DD1F] 800px:scale-125" : "text-black 800px:text-[#fff] hover:bg-white rounded-lg duration-200"} font-Poppins hover:text-[#17DD1F] font-[500] px-6 pb-[30px] 800px:pb-0 cursor-pointer`}
                    >
                        {item.title}
                    </Link>
                </div>
            ))}
        </div>
    )
}

export default Navbar
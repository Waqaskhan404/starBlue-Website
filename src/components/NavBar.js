"use client"
import Link from "next/link";
import { usePathname } from "next/navigation";

const NavBar = () => {
    const pathName = usePathname();
    return (
        <nav className="bg-white shadow-md p-4 font-[Poppins] text-[14px] font-normal">
            <div className="container flex items-center justify-between ">
            {/* Left Side - Logos */}
            <div className="flex items-center gap-4">
                <img src="/logo.png" alt="Logo 1" className="h-20" />
                <img src="/logo-2.png" alt="Logo 2" className="h-[4rem]" />
            </div>
            
            {/* Right Side - Navigation Links */}
            <ul className="flex items-center gap-8 text-gray-700">
                {[
                    { name: "Home", path: "/" },
                    { name: "About", path: "/about" },
                    { name: "Products", path: "/products" },
                    { name: "Projects", path: "/projects" },
                    { name: "Catalogue", path: "/catalogue" },
                    { name: "Blog", path: "/blog" },
                    { name: "Branches", path: "/branches" },
                    { name: "Contact", path: "/contact" }
                ].map((item) => (
                    <li key={item.path}>
                        <Link 
                            href={item.path} 
                            className={`${pathName === item.path ? "text-[#BE854C] border-b-2 border-[#BE854C]" : "hover:text-[#BE854C] hover:border-b-2 hover:border-[#BE854C]"} pb-1`}
                        >
                            {item.name}
                        </Link>
                    </li>
                ))}
            </ul>
            </div>
        </nav>
    );
};

export default NavBar;

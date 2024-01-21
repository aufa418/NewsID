import { Link } from "@inertiajs/react"

const Navbar = ({ user }) => {
    console.log('navbar : ', user);
    const authMenu = () => {
        return (
            <div className="dropdown dropdown-end">
                <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                    <div className="w-10 rounded-full">
                        <img alt="Tailwind CSS Navbar component" src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                    </div>
                </div>
                <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-primary rounded-box w-52">
                    <li>
                        <Link href={route('dashboard')}>Dashboard</Link>
                    </li>
                    <li><a>Settings</a></li>
                    <li>
                        <Link method="POST" href={route('logout')} as="button">Logout</Link>
                    </li>
                </ul>
            </div>
        )
    }

    const guestMenu = () => {
        return (
            <>
                <div className="pl-5">
                    <Link href={route('login')}>Login</Link> | <Link href={route('register')}>Register</Link>
                </div>

            </>
        )
    }
    const isAuth = () => {
        return user == null ? guestMenu() : authMenu()
    }

    return (
        <div className="navbar bg-primary px-16 text-white">
            <div className="flex-1">
                <Link className="btn btn-ghost text-xl" href={route('homepage')}>NewsID</Link>
            </div>
            <div className="flex-none gap-2">
                {isAuth()}
            </div>
        </div>
    )
}

export default Navbar

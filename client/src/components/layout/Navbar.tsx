// src/components/layout/Navbar.tsx
export function Navbar() {
    return (
        <div className="navbar bg-base-300 rounded-box mb-8">
            <div className="flex-1">
                <a className="btn btn-ghost text-xl">BirdList</a>
            </div>
            <div className="flex-none">
                <ul className="menu menu-horizontal px-1">
                    <li><a>Login</a></li>
                </ul>
            </div>
        </div>
    );
}
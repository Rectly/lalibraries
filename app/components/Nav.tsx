import { Link, NavLink } from "react-router";

export default function Nav() {
    return (
        <nav style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: '2rem 0',
            borderBottom: '1px solid var(--border-color)'
        }}>
            <Link to="/" style={{ fontWeight: 600, fontSize: '1.2rem', textDecoration: 'none' }}>
                LA Libraries
            </Link>
            <div style={{ display: 'flex', gap: '1.5rem' }}>
                <NavLink
                    to="/"
                    style={({ isActive }: { isActive: boolean }) => ({ opacity: isActive ? 1 : 0.6, textDecoration: 'none' })}
                >
                    Home
                </NavLink>
                <NavLink
                    to="/portfolio"
                    style={({ isActive }: { isActive: boolean }) => ({ opacity: isActive ? 1 : 0.6, textDecoration: 'none' })}
                >
                    Portfolio
                </NavLink>
                <NavLink
                    to="/about"
                    style={({ isActive }: { isActive: boolean }) => ({ opacity: isActive ? 1 : 0.6, textDecoration: 'none' })}
                >
                    About
                </NavLink>
                <NavLink
                    to="/metrics"
                    style={({ isActive }: { isActive: boolean }) => ({ opacity: isActive ? 1 : 0.6, textDecoration: 'none' })}
                >
                    Metrics
                </NavLink>
            </div>
        </nav>
    );
}

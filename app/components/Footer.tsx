export default function Footer() {
    return (
        <footer style={{
            padding: '3rem 0',
            marginTop: 'auto',
            borderTop: '1px solid var(--border-color)',
            color: '#666',
            fontSize: '0.9rem'
        }}>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <div>
                    &copy; {new Date().getFullYear()} LA Libraries Inc.
                </div>
                <div>
                    Institutional | Operating | Research
                </div>
            </div>
        </footer>
    );
}

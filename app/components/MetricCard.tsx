interface Props {
    label: string;
    value: string;
    description?: string;
    trend?: string; // Optional: "+12%" etc.
}

export default function MetricCard({ label, value, description }: Props) {
    return (
        <div style={{
            border: '1px solid var(--border-color)',
            borderRadius: '8px',
            padding: '20px',
            background: '#fff'
        }}>
            <div style={{ fontSize: '2rem', fontWeight: 600, marginBottom: '0.5rem' }}>
                {value}
            </div>
            <div style={{ fontSize: '0.9rem', color: '#666', fontWeight: 500 }}>
                {label}
            </div>
            {description && (
                <div style={{ fontSize: '0.8rem', color: '#999', marginTop: '0.5rem' }}>
                    {description}
                </div>
            )}
        </div>
    );
}

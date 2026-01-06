import { Link } from "react-router";
import type { Company } from "../data/companies";

interface Props {
    company: Company;
    compact?: boolean;
}

export default function CompanyCard({ company, compact = false }: Props) {
    return (
        <Link
            to={`/portfolio/${company.slug}`}
            style={{
                display: 'block',
                textDecoration: 'none',
                color: 'inherit',
                border: '1px solid var(--border-color)',
                borderRadius: '12px',
                padding: '24px',
                height: '100%',
                transition: 'border-color 0.2s ease'
            }}
            className="company-card"
        >
            <style>{`
        .company-card:hover {
          border-color: var(--accent-color) !important;
        }
      `}</style>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '1rem' }}>
                <h3 style={{ fontSize: '1.5rem', margin: 0 }}>{company.name}</h3>
                <span style={{
                    fontSize: '0.8rem',
                    textTransform: 'uppercase',
                    letterSpacing: '0.05em',
                    padding: '4px 8px',
                    borderRadius: '4px',
                    background: '#eee'
                }}>
                    {company.status}
                </span>
            </div>
            <p style={{ color: '#666', marginBottom: compact ? '1rem' : '2rem' }}>
                {company.tagline}
            </p>

            {!compact && (
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1rem' }}>
                    {company.metrics.slice(0, 3).map((m) => (
                        <div key={m.label}>
                            <div style={{ fontSize: '1.2rem', fontWeight: 600 }}>{m.value}</div>
                            <div style={{ fontSize: '0.8rem', color: '#888' }}>{m.label}</div>
                        </div>
                    ))}
                </div>
            )}
        </Link>
    );
}

import { Link, redirect } from "react-router";
import type { Route } from "./+types/company";
import { companies } from "../data/companies";
import MetricCard from "../components/MetricCard";

export function meta({ params }: Route.MetaArgs) {
    const company = companies.find(c => c.slug === params.slug);
    return [
        { title: company ? `${company.name} - LA Libraries` : "Not Found" },
    ];
}

// In a real app with an API, we'd use loader. For now, we filter in component or use a simple check.
// Using clientLoader to simulate strict 404 behavior if needed, or just handled in render.
export async function clientLoader({ params }: Route.ClientLoaderArgs) {
    const company = companies.find((c) => c.slug === params.slug);
    if (!company) {
        throw new Response("Not Found", { status: 404 });
    }
    return { company };
}

export default function CompanyDetail({ loaderData }: Route.ComponentProps) {
    const { company } = loaderData;

    return (
        <div>
            <div style={{ marginBottom: '2rem' }}>
                <Link to="/portfolio" style={{ fontSize: '0.9rem', color: '#888', textDecoration: 'none' }}>
                    &larr; Back to Portfolio
                </Link>
            </div>

            <header style={{ marginBottom: '3rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
                    <h1 style={{ fontSize: '3rem', margin: 0 }}>{company.name}</h1>
                    <span style={{
                        fontSize: '0.9rem',
                        textTransform: 'uppercase',
                        letterSpacing: '0.05em',
                        padding: '6px 10px',
                        borderRadius: '4px',
                        background: '#eee',
                        transform: 'translateY(4px)'
                    }}>
                        {company.status}
                    </span>
                </div>
                <p style={{ fontSize: '1.4rem', color: '#555', maxWidth: '700px', marginBottom: '1.5rem' }}>
                    {company.tagline}
                </p>
                <a
                    href={company.domain}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                        fontSize: '1rem',
                        fontWeight: 500,
                        textDecoration: 'underline',
                        textUnderlineOffset: '4px'
                    }}
                >
                    {company.domain.replace('https://', '')} &nearr;
                </a>
            </header>

            <section className="section">
                <h2 style={{ fontSize: '1.5rem', marginBottom: '1.5rem' }}>About</h2>
                <p style={{ fontSize: '1.1rem', lineHeight: 1.6, maxWidth: '700px' }}>{company.description}</p>
            </section>

            <section className="section">
                <h2 style={{ fontSize: '1.5rem', marginBottom: '1.5rem' }}>Key Metrics</h2>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.5rem' }}>
                    {company.metrics.map((metric: any) => (
                        <MetricCard
                            key={metric.label}
                            label={metric.label}
                            value={metric.value}
                            description={metric.description}
                        />
                    ))}
                </div>
            </section>
        </div>
    );
}

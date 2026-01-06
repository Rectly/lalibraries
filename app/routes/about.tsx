import type { Route } from "./+types/about";

export function meta({ }: Route.MetaArgs) {
    return [
        { title: "About - LA Libraries" },
    ];
}

export default function About() {
    return (
        <div style={{ maxWidth: '700px' }}>
            <header style={{ marginBottom: '4rem' }}>
                <h1 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>About</h1>
                <p style={{ fontSize: '1.3rem', color: '#555', fontStyle: 'italic' }}>
                    "The library is a place where order prevents the accumulation of information from becoming chaos."
                </p>
            </header>

            <div className="content">
                <section style={{ marginBottom: '3rem' }}>
                    <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Why "Libraries"?</h2>
                    <p style={{ fontSize: '1.1rem', lineHeight: 1.6, color: '#333' }}>
                        We believe the most valuable digital assets of the next decade will be curated, structured indexes of specific domains. In a world awash with generated content, the role of the librarian—who selects, catalogues, and preserves—becomes the role of the platform builder.
                    </p>
                </section>

                <section style={{ marginBottom: '3rem' }}>
                    <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Our Thesis</h2>
                    <p style={{ fontSize: '1.1rem', lineHeight: 1.6, color: '#333' }}>
                        Vertical integration of data. Unlike general purpose search engines that index everything shallowly, our subsidiaries go deep. We own the ingestion pipelines, the classification schemas, and the retrieval interfaces. This allows for higher fidelity, lower latency, and greater trust.
                    </p>
                </section>

                <section style={{ marginBottom: '3rem' }}>
                    <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Structure</h2>
                    <p style={{ fontSize: '1.1rem', lineHeight: 1.6, color: '#333' }}>
                        LA Libraries operates as a holding company. Each subsidiary (Reinfras, Raimnts, etc.) operates independently with its own leadership, but shares a common infrastructure layer for payments, identity, and compliance. This allows them to move fast while we ensure long-term stability.
                    </p>
                </section>
            </div>
        </div>
    );
}

export default function HomePage() {
  return (
    <main className="container">
      <section className="hero">
        <div className="badge">Live on Vercel</div>
        <h1>
          Hello<span className="wave">👋</span> from <span className="gradient">Agentic</span>
        </h1>
        <p className="subtitle">
          Minimal Next.js app. Fast, accessible, and deploy-ready.
        </p>
        <div className="cta">
          <a className="button primary" href="https://nextjs.org" target="_blank" rel="noreferrer">Learn Next.js</a>
          <a className="button" href="https://vercel.com" target="_blank" rel="noreferrer">Vercel</a>
        </div>
      </section>
      <footer>
        <span>© {new Date().getFullYear()} Agentic</span>
      </footer>
    </main>
  );
}

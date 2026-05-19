export default function PageHero({ kicker, title, copy, children }) {
  return (
    <section className="relative overflow-hidden bg-radial-tech pb-12 pt-32 md:pt-40">
      <div className="section-shell">
        <div className="max-w-4xl">
          <span className="section-kicker">{kicker}</span>
          <h1 className="mt-5 text-4xl font-black leading-tight text-white md:text-6xl">{title}</h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">{copy}</p>
          {children ? <div className="mt-8">{children}</div> : null}
        </div>
      </div>
    </section>
  );
}

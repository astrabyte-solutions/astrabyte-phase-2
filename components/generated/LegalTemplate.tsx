type LegalSection = {
  title: string;
  paragraphs: string[];
};

type LegalTemplateProps = {
  title: string;
  subtitle: string;
  sections: LegalSection[];
  updatedLabel?: string;
};

export default function LegalTemplate({ title, subtitle, sections, updatedLabel = "Last updated: April 2026" }: LegalTemplateProps) {
  return (
    <main id="main-content" className="pt-32 pb-20 px-6">
      <section className="max-w-5xl mx-auto mb-12">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-brand-border bg-brand-card mb-6">
          <span className="w-2 h-2 rounded-full bg-brand-accent" />
          <span className="text-xs font-medium text-brand-secondary uppercase tracking-widest">Legal</span>
        </div>
        <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">{title}</h1>
        <p className="text-lg text-brand-secondary max-w-3xl">{subtitle}</p>
        <p className="text-sm text-brand-secondary mt-4">{updatedLabel}</p>
      </section>

      <section className="max-w-5xl mx-auto space-y-6">
        {sections.map((section) => (
          <article key={section.title} className="bg-brand-card border border-brand-border rounded-2xl p-8">
            <h2 className="text-2xl font-bold mb-4">{section.title}</h2>
            <div className="space-y-3">
              {section.paragraphs.map((paragraph) => (
                <p key={paragraph} className="text-brand-secondary leading-relaxed">{paragraph}</p>
              ))}
            </div>
          </article>
        ))}
      </section>
    </main>
  );
}

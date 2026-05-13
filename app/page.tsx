export default function Home() {
  const faqs = [
    {
      q: 'Which platforms are supported?',
      a: 'PostPeak supports Instagram, Twitter/X, LinkedIn, Facebook, TikTok, and Pinterest — all in one dashboard.'
    },
    {
      q: 'How does the optimal time prediction work?',
      a: 'We analyze your audience activity patterns over the past 90 days using ML algorithms to surface the exact windows when your followers are most active and likely to engage.'
    },
    {
      q: 'Can I cancel anytime?',
      a: 'Yes. Cancel anytime from your billing portal with no questions asked. Your access continues until the end of the billing period.'
    }
  ]

  return (
    <main className="max-w-3xl mx-auto px-6 py-20">
      {/* Hero */}
      <section className="text-center mb-20">
        <span className="inline-block bg-[#161b22] border border-[#30363d] text-[#58a6ff] text-xs font-semibold px-3 py-1 rounded-full mb-6 uppercase tracking-widest">
          Social Media Optimizer
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-5">
          Post at the{' '}
          <span className="text-[#58a6ff]">perfect moment</span>
          {' '}every time
        </h1>
        <p className="text-lg text-[#8b949e] max-w-xl mx-auto mb-8">
          PostPeak analyzes your audience activity patterns across platforms and schedules your content for peak engagement — automatically.
        </p>
        <a
          href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || '#'}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-8 py-3 rounded-lg transition-colors text-base"
        >
          Start Optimizing — $12/mo
        </a>
        <p className="text-[#8b949e] text-sm mt-3">No credit card required for 7-day trial</p>
      </section>

      {/* Features strip */}
      <section className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-20">
        {[
          { icon: '📊', title: 'Audience Analytics', desc: 'See exactly when your followers are online across every platform.' },
          { icon: '🤖', title: 'ML Predictions', desc: 'Smart algorithms forecast your best posting windows 7 days ahead.' },
          { icon: '📅', title: 'Auto-Scheduler', desc: 'Queue content once and let PostPeak publish at the optimal time.' }
        ].map((f) => (
          <div key={f.title} className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
            <div className="text-2xl mb-2">{f.icon}</div>
            <h3 className="text-white font-semibold mb-1">{f.title}</h3>
            <p className="text-[#8b949e] text-sm">{f.desc}</p>
          </div>
        ))}
      </section>

      {/* Pricing */}
      <section className="mb-20">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Simple pricing</h2>
        <div className="bg-[#161b22] border-2 border-[#58a6ff] rounded-2xl p-8 max-w-sm mx-auto text-center">
          <p className="text-[#58a6ff] font-semibold uppercase tracking-widest text-xs mb-3">Pro Plan</p>
          <div className="flex items-end justify-center gap-1 mb-2">
            <span className="text-5xl font-bold text-white">$12</span>
            <span className="text-[#8b949e] mb-2">/mo</span>
          </div>
          <p className="text-[#8b949e] text-sm mb-6">Everything you need to grow faster</p>
          <ul className="text-left space-y-2 mb-8">
            {[
              'Up to 10 social accounts',
              'ML-powered time predictions',
              'Visual content calendar',
              'Bulk scheduling',
              'Engagement analytics dashboard',
              'Email & chat support'
            ].map((item) => (
              <li key={item} className="flex items-center gap-2 text-sm text-[#c9d1d9]">
                <span className="text-[#58a6ff] font-bold">✓</span> {item}
              </li>
            ))}
          </ul>
          <a
            href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || '#'}
            className="block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-6 py-3 rounded-lg transition-colors"
          >
            Get Started
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section>
        <h2 className="text-2xl font-bold text-white text-center mb-8">Frequently asked questions</h2>
        <div className="space-y-4">
          {faqs.map((faq) => (
            <div key={faq.q} className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
              <h3 className="text-white font-semibold mb-2">{faq.q}</h3>
              <p className="text-[#8b949e] text-sm leading-relaxed">{faq.a}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="text-center text-[#8b949e] text-xs mt-20">
        © {new Date().getFullYear()} PostPeak. All rights reserved.
      </footer>
    </main>
  )
}

import Logo from "@/components/Logo";
import PrayerForm from "@/components/PrayerForm";

export default function Home() {
  return (
    <>
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-navy-900 backdrop-blur-md">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <a href="#" className="flex items-center gap-3">
            <Logo size={36} light />
            <span className="font-[family-name:var(--font-playfair)] text-lg font-bold text-white">
              LivingWater
            </span>
          </a>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-navy-200">
            <a href="#about" className="hover:text-white transition-colors">About</a>
            <a href="#mission" className="hover:text-white transition-colors">Our Mission</a>
            <a href="#prayer" className="hover:text-white transition-colors">Prayer</a>
            <a href="#contact" className="hover:text-white transition-colors">Contact</a>
          </div>
        </div>
      </nav>

      {/* Hero — radial gradient glowing from center */}
      <section
        className="relative pt-36 pb-28 px-6 text-center"
        style={{
          background: "radial-gradient(ellipse at 50% 40%, #1e3a52 0%, #162c3f 40%, #0e1e2e 100%)",
        }}
      >
        <div className="relative max-w-3xl mx-auto">
          <Logo size={80} className="mx-auto mb-8" light />
          <h1 className="font-[family-name:var(--font-playfair)] text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
            LivingWater
          </h1>
          <p className="text-lg md:text-xl text-navy-200 mb-3 italic font-[family-name:var(--font-playfair)]">
            &ldquo;Whoever drinks the water I give them will never thirst.&rdquo;
          </p>
          <p className="text-sm text-navy-300 mb-12">&mdash; John 4:14</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#prayer"
              className="px-8 py-3 bg-cream text-navy-800 rounded-lg font-semibold hover:bg-cream-dark transition-colors"
            >
              Submit a Prayer Request
            </a>
            <a
              href="#about"
              className="px-8 py-3 border-2 border-cream/30 text-cream rounded-lg font-semibold hover:bg-cream/10 transition-colors"
            >
              Learn More
            </a>
          </div>
        </div>
      </section>

      {/* About — white */}
      <section id="about" className="py-20 px-6 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-[family-name:var(--font-playfair)] text-3xl md:text-4xl font-bold text-navy-800 mb-6">
            Who We Are
          </h2>
          <div className="w-16 h-1 bg-navy-300 mx-auto mb-8 rounded-full" />
          <p className="text-lg text-navy-600 leading-relaxed mb-6">
            LivingWater is a Christian community born from a simple calling &mdash; to
            share the love of Jesus Christ with the world through the language of
            today. We believe the Gospel is for everyone, everywhere, and we use
            social media as our mission field.
          </p>
          <p className="text-lg text-navy-600 leading-relaxed mb-6">
            Founded with a heart for evangelism and encouragement, we create
            daily content that draws people closer to God &mdash; through Scripture,
            devotionals, testimonies, and creative expressions of faith.
          </p>
          <p className="text-lg text-navy-600 leading-relaxed">
            Our international account{" "}
            <span className="font-semibold text-navy-800">@livingwater.intl</span>{" "}
            serves as our English-speaking home, with localized accounts reaching
            communities in their own languages &mdash; because the Good News has no
            borders.
          </p>
        </div>
      </section>

      {/* What We Do — cream, white cards, colorful icons */}
      <section id="mission" className="py-20 px-6 bg-cream">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="font-[family-name:var(--font-playfair)] text-3xl md:text-4xl font-bold text-navy-800 mb-6">
              What We Do
            </h2>
            <div className="w-16 h-1 bg-navy-300 mx-auto mb-8 rounded-full" />
            <p className="text-lg text-navy-600 max-w-2xl mx-auto">
              Every day, we share content designed to encourage, equip, and
              inspire believers and seekers alike.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Daily Devotionals — warm amber */}
            <div className="bg-white rounded-xl p-8 text-center shadow-sm hover:shadow-md transition-shadow">
              <div className="flex justify-center mb-5">
                <div className="w-14 h-14 rounded-full bg-amber-50 flex items-center justify-center">
                  <svg className="w-7 h-7 text-amber-500" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
                  </svg>
                </div>
              </div>
              <h3 className="font-[family-name:var(--font-playfair)] text-xl font-bold text-navy-800 mb-3">Daily Devotionals</h3>
              <p className="text-navy-600 leading-relaxed">Start each day with God&rsquo;s Word. Our daily verses, reflections, and devotional series help you stay rooted in Scripture.</p>
            </div>

            {/* Testimonies — rose */}
            <div className="bg-white rounded-xl p-8 text-center shadow-sm hover:shadow-md transition-shadow">
              <div className="flex justify-center mb-5">
                <div className="w-14 h-14 rounded-full bg-rose-50 flex items-center justify-center">
                  <svg className="w-7 h-7 text-rose-500" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                  </svg>
                </div>
              </div>
              <h3 className="font-[family-name:var(--font-playfair)] text-xl font-bold text-navy-800 mb-3">Testimonies &amp; Stories</h3>
              <p className="text-navy-600 leading-relaxed">Real stories of God&rsquo;s faithfulness. Every Tuesday, we share testimonies that remind us He is always at work.</p>
            </div>

            {/* Prayer Community — sky blue */}
            <div className="bg-white rounded-xl p-8 text-center shadow-sm hover:shadow-md transition-shadow">
              <div className="flex justify-center mb-5">
                <div className="w-14 h-14 rounded-full bg-sky-50 flex items-center justify-center">
                  <svg className="w-7 h-7 text-sky-500" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
                  </svg>
                </div>
              </div>
              <h3 className="font-[family-name:var(--font-playfair)] text-xl font-bold text-navy-800 mb-3">Prayer Community</h3>
              <p className="text-navy-600 leading-relaxed">You are never alone. Submit your prayer requests and join a community that lifts each other up before the Lord.</p>
            </div>

            {/* Word Studies — violet */}
            <div className="bg-white rounded-xl p-8 text-center shadow-sm hover:shadow-md transition-shadow">
              <div className="flex justify-center mb-5">
                <div className="w-14 h-14 rounded-full bg-violet-50 flex items-center justify-center">
                  <svg className="w-7 h-7 text-violet-500" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
                  </svg>
                </div>
              </div>
              <h3 className="font-[family-name:var(--font-playfair)] text-xl font-bold text-navy-800 mb-3">Word Studies</h3>
              <p className="text-navy-600 leading-relaxed">Dive deeper into biblical words like grace, shalom, and chesed. Discover the richness of God&rsquo;s language.</p>
            </div>

            {/* Creative Content — emerald */}
            <div className="bg-white rounded-xl p-8 text-center shadow-sm hover:shadow-md transition-shadow">
              <div className="flex justify-center mb-5">
                <div className="w-14 h-14 rounded-full bg-emerald-50 flex items-center justify-center">
                  <svg className="w-7 h-7 text-emerald-500" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.876-5.814a1.151 1.151 0 00-1.597-1.597L14.146 6.32a15.996 15.996 0 00-4.649 4.763m3.42 3.42a6.776 6.776 0 00-3.42-3.42" />
                  </svg>
                </div>
              </div>
              <h3 className="font-[family-name:var(--font-playfair)] text-xl font-bold text-navy-800 mb-3">Creative Content</h3>
              <p className="text-navy-600 leading-relaxed">Beautiful verse cards, worship song reflections, and seasonal devotional series that make faith visual and shareable.</p>
            </div>

            {/* Global Reach — indigo */}
            <div className="bg-white rounded-xl p-8 text-center shadow-sm hover:shadow-md transition-shadow">
              <div className="flex justify-center mb-5">
                <div className="w-14 h-14 rounded-full bg-indigo-50 flex items-center justify-center">
                  <svg className="w-7 h-7 text-indigo-500" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5a17.92 17.92 0 01-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
                  </svg>
                </div>
              </div>
              <h3 className="font-[family-name:var(--font-playfair)] text-xl font-bold text-navy-800 mb-3">Global Reach</h3>
              <p className="text-navy-600 leading-relaxed">From @livingwater.intl to localized accounts, we bring the Gospel to every language and every nation.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Prayer Request — white */}
      <section id="prayer" className="py-20 px-6 bg-white">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="font-[family-name:var(--font-playfair)] text-3xl md:text-4xl font-bold text-navy-800 mb-6">
              Prayer Request
            </h2>
            <div className="w-16 h-1 bg-navy-300 mx-auto mb-8 rounded-full" />
            <p className="text-lg text-navy-600">
              We believe in the power of prayer. Share your request and our
              community will pray with you and for you.
            </p>
          </div>
          <PrayerForm />
        </div>
      </section>

      {/* Contact — cream */}
      <section id="contact" className="py-20 px-6 bg-cream">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-[family-name:var(--font-playfair)] text-3xl md:text-4xl font-bold text-navy-800 mb-6">
            Contact Us
          </h2>
          <div className="w-16 h-1 bg-navy-300 mx-auto mb-8 rounded-full" />
          <p className="text-lg text-navy-600 mb-10">
            Need someone to talk to? Have questions about faith? We&apos;re here
            for you. Reach out anytime.
          </p>

          <div className="flex flex-col sm:flex-row gap-8 justify-center items-center">
            <a
              href="https://wa.me/6281216369077"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 px-6 py-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow"
            >
              <svg className="w-6 h-6 text-green-600" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              <div className="text-left">
                <div className="text-xs text-navy-400">WhatsApp</div>
                <div className="font-medium text-navy-800">+62 812-1636-9077</div>
              </div>
            </a>

            <a
              href="mailto:livingwater.intl@gmail.com"
              className="flex items-center gap-3 px-6 py-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow"
            >
              <svg className="w-6 h-6 text-navy-500" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
              </svg>
              <div className="text-left">
                <div className="text-xs text-navy-400">Email</div>
                <div className="font-medium text-navy-800">livingwater.intl@gmail.com</div>
              </div>
            </a>
          </div>

          <div className="mt-10 flex justify-center gap-6">
            <a
              href="https://instagram.com/livingwater.intl"
              target="_blank"
              rel="noopener noreferrer"
              className="text-navy-400 hover:text-navy-700 transition-colors"
            >
              <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.209-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
            </a>
            <a
              href="https://tiktok.com/@livingwater.intl"
              target="_blank"
              rel="noopener noreferrer"
              className="text-navy-400 hover:text-navy-700 transition-colors"
            >
              <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1v-3.5a6.37 6.37 0 00-.79-.05A6.34 6.34 0 003.15 15.2a6.34 6.34 0 0010.86 4.48v-7.1a8.16 8.16 0 005.58 2.2V11.3a4.85 4.85 0 01-3.77-1.84V6.69h3.77z" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-10 px-6 bg-navy-900 text-center text-sm">
        <div className="max-w-4xl mx-auto">
          <p className="font-[family-name:var(--font-playfair)] text-lg text-white mb-2">
            LivingWater
          </p>
          <p className="italic text-navy-300 mb-4 max-w-xl mx-auto leading-relaxed">
            &ldquo;But whoever drinks the water I give them will never thirst.
            Indeed, the water I give them will become in them a spring of water
            welling up to eternal life.&rdquo; &mdash; John 4:14
          </p>
          <p className="text-navy-400">
            &copy; 2026 LivingWater. All glory to God.
          </p>
        </div>
      </footer>
    </>
  );
}

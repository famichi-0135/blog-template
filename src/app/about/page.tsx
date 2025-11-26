export default function About() {
  return (
    <div className="min-h-screen">
      <div className="container mx-auto px-5 py-16 mt-20">
        <div className="max-w-4xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight text-neutral-900 mb-6">
              About Me
            </h1>
            <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
              Web開発とデザインに情熱を注ぐエンジニア
            </p>
          </div>

          {/* Introduction Section */}
          <section className="mb-16">
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-neutral-200/50 p-8 md:p-10 hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-1 h-8 bg-gradient-to-b from-blue-500 to-purple-500 rounded-full"></div>
                <h2 className="text-3xl font-bold text-neutral-900 flex items-center gap-3">
                  <span className="text-3xl">👋</span>
                  はじめまして
                </h2>
              </div>
              <p className="text-neutral-700 leading-relaxed text-lg">
                このブログを運営している開発者です。Web技術、プログラミング、そして日々の学びについて発信しています。
                モダンな技術スタックを使って、美しく使いやすいWebアプリケーションを作ることに情熱を注いでいます。
              </p>
            </div>
          </section>

          {/* Skills Section */}
          <section className="mb-16">
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-neutral-200/50 p-8 md:p-10 hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-1 h-8 bg-gradient-to-b from-blue-500 to-purple-500 rounded-full"></div>
                <h2 className="text-3xl font-bold text-neutral-900 flex items-center gap-3">
                  <span className="text-3xl">💻</span>
                  スキル
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Frontend Card */}
                <div className="group relative bg-gradient-to-br from-blue-50 to-blue-100/50 rounded-xl p-6 border border-blue-200/50 hover:shadow-md transition-all duration-300 hover:-translate-y-1">
                  <div className="absolute top-0 right-0 w-20 h-20 bg-blue-500/10 rounded-bl-full"></div>
                  <h3 className="font-bold text-xl mb-4 text-neutral-900 flex items-center gap-2">
                    <span className="text-2xl">🎨</span>
                    フロントエンド
                  </h3>
                  <ul className="space-y-3">
                    {["React / Next.js", "TypeScript", "Tailwind CSS"].map(
                      (skill) => (
                        <li
                          key={skill}
                          className="flex items-center gap-2 text-neutral-700"
                        >
                          <span className="w-1.5 h-1.5 bg-blue-500 rounded-full"></span>
                          {skill}
                        </li>
                      )
                    )}
                  </ul>
                </div>

                {/* Backend Card */}
                <div className="group relative bg-gradient-to-br from-purple-50 to-purple-100/50 rounded-xl p-6 border border-purple-200/50 hover:shadow-md transition-all duration-300 hover:-translate-y-1">
                  <div className="absolute top-0 right-0 w-20 h-20 bg-purple-500/10 rounded-bl-full"></div>
                  <h3 className="font-bold text-xl mb-4 text-neutral-900 flex items-center gap-2">
                    <span className="text-2xl">⚙️</span>
                    バックエンド
                  </h3>
                  <ul className="space-y-3">
                    {["Node.js", "Python", "Database Design"].map((skill) => (
                      <li
                        key={skill}
                        className="flex items-center gap-2 text-neutral-700"
                      >
                        <span className="w-1.5 h-1.5 bg-purple-500 rounded-full"></span>
                        {skill}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Interests Section */}
          <section className="mb-16">
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-neutral-200/50 p-8 md:p-10 hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-1 h-8 bg-gradient-to-b from-blue-500 to-purple-500 rounded-full"></div>
                <h2 className="text-3xl font-bold text-neutral-900 flex items-center gap-3">
                  <span className="text-3xl">🎯</span>
                  興味のある分野
                </h2>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  { icon: "🚀", text: "モダンなWeb開発技術" },
                  { icon: "🎨", text: "UI/UXデザイン" },
                  { icon: "⚡", text: "パフォーマンス最適化" },
                  { icon: "♿", text: "アクセシビリティ" },
                ].map((item) => (
                  <div
                    key={item.text}
                    className="flex items-center gap-3 p-4 bg-gradient-to-r from-neutral-50 to-neutral-100/50 rounded-lg border border-neutral-200/50 hover:shadow-md transition-all duration-300 hover:-translate-y-0.5"
                  >
                    <span className="text-2xl">{item.icon}</span>
                    <span className="text-neutral-700 font-medium">
                      {item.text}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Contact Section */}
          <section>
            <div className="bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl shadow-lg p-8 md:p-10 text-white hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center gap-3 mb-6">
                <h2 className="text-3xl font-bold flex items-center gap-3">
                  <span className="text-3xl">📫</span>
                  Contact
                </h2>
              </div>
              <p className="text-blue-50 leading-relaxed text-lg mb-6">
                お仕事のご依頼やご質問は、お気軽にご連絡ください。
              </p>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-white text-blue-600 px-6 py-3 rounded-full font-semibold hover:bg-blue-50 transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    fillRule="evenodd"
                    d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                    clipRule="evenodd"
                  />
                </svg>
                GitHub で連絡する
              </a>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

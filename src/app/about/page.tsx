export default function About() {
  return (
    <div className="min-h-screen">
      <div className="container mx-auto px-5 py-16 mt-20">
        <div className="max-w-4xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight text-neutral-900 dark:text-neutral-100 mb-6">
              About Me
            </h1>
            <p className="text-lg text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto">
              Web開発とITに情熱を注ぐIT系専門学生
            </p>
          </div>

          {/* Introduction Section */}
          <section className="mb-16">
            <div className="bg-white/80 dark:bg-neutral-800/80 backdrop-blur-sm rounded-2xl shadow-lg dark:shadow-black/50 border border-neutral-200/50 dark:border-neutral-700/50 p-8 md:p-10 hover:shadow-xl dark:hover:shadow-black/70 transition-shadow duration-300">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-1 h-8 bg-gradient-to-b from-blue-500 to-purple-500 rounded-full"></div>
                <h2 className="text-3xl font-bold text-neutral-900 dark:text-neutral-100 flex items-center gap-3">
                  <span className="text-3xl">👋</span>
                  はじめまして
                </h2>
              </div>
              <p className="text-neutral-700 dark:text-neutral-300 leading-relaxed text-lg">
                このブログを運営している開発者です。Web技術、プログラミング、そして日々の学びについて発信しています。
                モダンな技術スタックを使って、美しく使いやすいWebアプリケーションを作ることに情熱を注いでいます。
              </p>
            </div>
          </section>

          {/* Skills Section */}
          <section className="mb-16">
            <div className="bg-white/80 dark:bg-neutral-800/80 backdrop-blur-sm rounded-2xl shadow-lg dark:shadow-black/50 border border-neutral-200/50 dark:border-neutral-700/50 p-8 md:p-10 hover:shadow-xl dark:hover:shadow-black/70 transition-shadow duration-300">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-1 h-8 bg-gradient-to-b from-blue-500 to-purple-500 rounded-full"></div>
                <h2 className="text-3xl font-bold text-neutral-900 dark:text-neutral-100 flex items-center gap-3">
                  <span className="text-3xl">💻</span>
                  スキル
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Frontend Card */}
                <div className="group relative bg-gradient-to-br from-blue-50 to-blue-100/50 dark:from-blue-950 dark:to-blue-900/50 rounded-xl p-6 border border-blue-200/50 dark:border-blue-800/50 hover:shadow-md dark:hover:shadow-black/50 transition-all duration-300 hover:-translate-y-1">
                  <div className="absolute top-0 right-0 w-20 h-20 bg-blue-500/10 rounded-bl-full"></div>
                  <h3 className="font-bold text-xl mb-4 text-neutral-900 dark:text-neutral-100 flex items-center gap-2">
                    <span className="text-2xl">🎨</span>
                    フロントエンド
                  </h3>
                  <ul className="space-y-3">
                    {[
                      "React / Next.js",
                      "Vue / Nuxt.js",
                      "TypeScript",
                      "Tailwind CSS",
                    ].map((skill) => (
                      <li
                        key={skill}
                        className="flex items-center gap-2 text-neutral-700 dark:text-neutral-300"
                      >
                        <span className="w-1.5 h-1.5 bg-blue-500 rounded-full"></span>
                        {skill}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Backend Card */}
                <div className="group relative bg-gradient-to-br from-purple-50 to-purple-100/50 dark:from-purple-950 dark:to-purple-900/50 rounded-xl p-6 border border-purple-200/50 dark:border-purple-800/50 hover:shadow-md dark:hover:shadow-black/50 transition-all duration-300 hover:-translate-y-1">
                  <div className="absolute top-0 right-0 w-20 h-20 bg-purple-500/10 rounded-bl-full"></div>
                  <h3 className="font-bold text-xl mb-4 text-neutral-900 dark:text-neutral-100 flex items-center gap-2">
                    <span className="text-2xl">⚙️</span>
                    バックエンド
                  </h3>
                  <ul className="space-y-3">
                    {["Java", "Go", "Node.js", "Bun", "Database Design"].map(
                      (skill) => (
                        <li
                          key={skill}
                          className="flex items-center gap-2 text-neutral-700 dark:text-neutral-300"
                        >
                          <span className="w-1.5 h-1.5 bg-purple-500 rounded-full"></span>
                          {skill}
                        </li>
                      )
                    )}
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Interests Section */}
          <section className="mb-16">
            <div className="bg-white/80 dark:bg-neutral-800/80 backdrop-blur-sm rounded-2xl shadow-lg dark:shadow-black/50 border border-neutral-200/50 dark:border-neutral-700/50 p-8 md:p-10 hover:shadow-xl dark:hover:shadow-black/70 transition-shadow duration-300">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-1 h-8 bg-gradient-to-b from-blue-500 to-purple-500 rounded-full"></div>
                <h2 className="text-3xl font-bold text-neutral-900 dark:text-neutral-100 flex items-center gap-3">
                  <span className="text-3xl">🎯</span>
                  興味のある分野
                </h2>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  { icon: "🚀", text: "モダンなWeb開発技術" },
                  { icon: "🎨", text: "データベース" },
                  { icon: "⚡", text: "クラウド" },
                  { icon: "♿", text: "アルゴリズム" },
                ].map((item) => (
                  <div
                    key={item.text}
                    className="flex items-center gap-3 p-4 bg-gradient-to-r from-neutral-50 to-neutral-100/50 dark:from-neutral-900 dark:to-neutral-800/50 rounded-lg border border-neutral-200/50 dark:border-neutral-700/50 hover:shadow-md dark:hover:shadow-black/30 transition-all duration-300 hover:-translate-y-0.5"
                  >
                    <span className="text-2xl">{item.icon}</span>
                    <span className="text-neutral-700 dark:text-neutral-300 font-medium">
                      {item.text}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Contact Section */}
          <section>
            <div className="bg-gradient-to-br from-blue-500 to-purple-600 dark:from-blue-600 dark:to-purple-700 rounded-2xl shadow-lg dark:shadow-black/70 p-8 md:p-10 text-white hover:shadow-xl dark:hover:shadow-black/80 transition-shadow duration-300">
              <div className="flex items-center gap-3 mb-6">
                <h2 className="text-3xl font-bold flex items-center gap-3">
                  <span className="text-3xl">📫</span>
                  Contact
                </h2>
              </div>
              <p className="text-blue-50 dark:text-blue-100 leading-relaxed text-lg mb-6">
                お仕事のご依頼やご質問は、お気軽にご連絡ください。
              </p>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-white text-blue-600 px-6 py-3 rounded-full font-semibold hover:bg-blue-50 transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  width="30"
                  height="30"
                  viewBox="0 0 30 30"
                >
                  <path d="M15,3C8.373,3,3,8.373,3,15c0,5.623,3.872,10.328,9.092,11.63C12.036,26.468,12,26.28,12,26.047v-2.051 c-0.487,0-1.303,0-1.508,0c-0.821,0-1.551-0.353-1.905-1.009c-0.393-0.729-0.461-1.844-1.435-2.526 c-0.289-0.227-0.069-0.486,0.264-0.451c0.615,0.174,1.125,0.596,1.605,1.222c0.478,0.627,0.703,0.769,1.596,0.769 c0.433,0,1.081-0.025,1.691-0.121c0.328-0.833,0.895-1.6,1.588-1.962c-3.996-0.411-5.903-2.399-5.903-5.098 c0-1.162,0.495-2.286,1.336-3.233C9.053,10.647,8.706,8.73,9.435,8c1.798,0,2.885,1.166,3.146,1.481C13.477,9.174,14.461,9,15.495,9 c1.036,0,2.024,0.174,2.922,0.483C18.675,9.17,19.763,8,21.565,8c0.732,0.731,0.381,2.656,0.102,3.594 c0.836,0.945,1.328,2.066,1.328,3.226c0,2.697-1.904,4.684-5.894,5.097C18.199,20.49,19,22.1,19,23.313v2.734 c0,0.104-0.023,0.179-0.035,0.268C23.641,24.676,27,20.236,27,15C27,8.373,21.627,3,15,3z"></path>
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

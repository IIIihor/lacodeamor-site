export default function FirmWebsite() {
  const reviews = [
    {
      name: "Ana",
      text: "Ficamos muito satisfeitos com o atendimento. Tudo foi claro, rápido e sem complicações.",
    },
    {
      name: "Beatriz",
      text: "Gostei da forma como a empresa trabalha: tudo por etapas, com transparência e comunicação objetiva.",
    },
    {
      name: "Marina",
      text: "Ótimo serviço e suporte em cada etapa. Recomendo.",
    },
  ];

  const steps = [
    {
      title: "1. Solicitação",
      text: "O cliente envia uma solicitação pelo site ou entra em contato pelo canal mais conveniente.",
    },
    {
      title: "2. Consultoria",
      text: "Analisamos os detalhes, respondemos às dúvidas e propomos a melhor solução.",
    },
    {
      title: "3. Execução do trabalho",
      text: "Alinhamos etapas e prazos e iniciamos o trabalho de acordo com o plano aprovado.",
    },
    {
      title: "4. Entrega e suporte",
      text: "Entregamos o resultado final e continuamos disponíveis para suporte quando necessário.",
    },
  ];

  return (
    <div className="min-h-screen bg-white text-slate-900">
      <header className="border-b border-slate-200 bg-white/95 sticky top-0 z-20 backdrop-blur">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <div>
            <div className="text-xl font-bold">Nome da empresa</div>
            <div className="text-sm text-slate-500">Um slogan curto da sua empresa</div>
          </div>
          <nav className="hidden md:flex gap-6 text-sm">
            <a href="#about" className="hover:text-slate-600">Sobre a empresa</a>
            <a href="#work" className="hover:text-slate-600">Como trabalhamos</a>
            <a href="#reviews" className="hover:text-slate-600">Depoimentos</a>
            <a href="#contacts" className="hover:text-slate-600">Contato</a>
          </nav>
        </div>
      </header>

      <main>
        <section className="max-w-6xl mx-auto px-6 py-20 grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <div className="inline-flex rounded-full border border-slate-300 px-4 py-1 text-sm mb-5">
              Confiável • Claro • Prático
            </div>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              Ajudamos nossos clientes a obter um resultado claro, seguro e de qualidade
            </h1>
            <p className="mt-5 text-lg text-slate-600 max-w-xl">
              Aqui você pode descrever brevemente o que a sua empresa faz, para quem trabalha
              e por que o cliente deve escolher você.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#contacts"
                className="rounded-2xl bg-slate-900 text-white px-6 py-3 text-sm font-medium shadow-sm hover:opacity-90"
              >
                Solicitar contato
              </a>
              <a
                href="#work"
                className="rounded-2xl border border-slate-300 px-6 py-3 text-sm font-medium hover:bg-slate-50"
              >
                Como trabalhamos
              </a>
            </div>
          </div>

          <div className="bg-slate-100 rounded-3xl p-8 shadow-sm">
            <div className="text-sm text-slate-500 mb-2">Por que escolher a nossa empresa</div>
            <div className="grid gap-4">
              <div className="bg-white rounded-2xl p-5 shadow-sm">
                <div className="font-semibold">Processo transparente</div>
                <div className="text-slate-600 mt-2 text-sm">
                  O cliente entende cada etapa do trabalho e sabe exatamente o que acontece em seguida.
                </div>
              </div>
              <div className="bg-white rounded-2xl p-5 shadow-sm">
                <div className="font-semibold">Atendimento e suporte</div>
                <div className="text-slate-600 mt-2 text-sm">
                  Mantemos contato em todas as etapas e ajudamos sempre que necessário.
                </div>
              </div>
              <div className="bg-white rounded-2xl p-5 shadow-sm">
                <div className="font-semibold">Foco em resultados</div>
                <div className="text-slate-600 mt-2 text-sm">
                  Trabalhamos para que o cliente receba um resultado prático, eficiente e de qualidade.
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="bg-slate-50 border-y border-slate-200">
          <div className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-10">
            <div>
              <h2 className="text-3xl font-bold">Sobre a empresa</h2>
              <p className="mt-4 text-slate-600 leading-7">
                Aqui você pode colocar uma apresentação da sua empresa: há quanto tempo atua no mercado,
                que tipo de problema resolve, quais são seus diferenciais e quais valores são importantes para o seu negócio.
              </p>
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="bg-white rounded-2xl p-6 shadow-sm">
                <div className="text-3xl font-bold">10+</div>
                <div className="text-slate-600 mt-2">anos de experiência</div>
              </div>
              <div className="bg-white rounded-2xl p-6 shadow-sm">
                <div className="text-3xl font-bold">500+</div>
                <div className="text-slate-600 mt-2">clientes satisfeitos</div>
              </div>
              <div className="bg-white rounded-2xl p-6 shadow-sm">
                <div className="text-3xl font-bold">24/7</div>
                <div className="text-slate-600 mt-2">suporte disponível</div>
              </div>
              <div className="bg-white rounded-2xl p-6 shadow-sm">
                <div className="text-3xl font-bold">100%</div>
                <div className="text-slate-600 mt-2">compromisso com qualidade</div>
              </div>
            </div>
          </div>
        </section>

        <section id="work" className="max-w-6xl mx-auto px-6 py-16">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-bold">Como trabalhamos</h2>
            <p className="mt-4 text-slate-600">
              Um processo simples e claro para que o cliente entenda tudo, do primeiro contato até a entrega final.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5 mt-10">
            {steps.map((step) => (
              <div key={step.title} className="rounded-3xl border border-slate-200 p-6 shadow-sm bg-white">
                <div className="font-semibold text-lg">{step.title}</div>
                <p className="text-slate-600 text-sm mt-3 leading-6">{step.text}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="reviews" className="bg-slate-50 border-y border-slate-200">
          <div className="max-w-6xl mx-auto px-6 py-16">
            <div className="max-w-2xl">
              <h2 className="text-3xl font-bold">Depoimentos de clientes</h2>
              <p className="mt-4 text-slate-600">
                Aqui você pode mostrar a confiança dos seus clientes e as experiências reais com a sua empresa.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-5 mt-10">
              {reviews.map((review) => (
                <div key={review.name} className="bg-white rounded-3xl p-6 shadow-sm border border-slate-200">
                  <div className="text-lg font-semibold">{review.name}</div>
                  <p className="mt-4 text-slate-600 leading-7">“{review.text}”</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="contacts" className="max-w-6xl mx-auto px-6 py-16">
          <div className="rounded-3xl bg-slate-900 text-white p-8 md:p-10 grid md:grid-cols-2 gap-8 items-start">
            <div>
              <h2 className="text-3xl font-bold">Entre em contato</h2>
              <p className="mt-4 text-slate-300 leading-7 max-w-lg">
                Deixe seus dados e entraremos em contato para entender a sua necessidade,
                responder suas dúvidas e apresentar a melhor solução.
              </p>
            </div>
            <div className="grid gap-4 text-sm">
              <a href="https://wa.me/380994944809" target="_blank" className="rounded-2xl bg-green-500 text-white p-4 text-center font-medium hover:opacity-90">Falar no WhatsApp</a>
              <a href="https://www.instagram.com/laco.deamor.oficial?igsh=M2ptbWw2bnljaWt2&utm_source=qr" target="_blank" className="rounded-2xl bg-pink-500 text-white p-4 text-center font-medium hover:opacity-90">Instagram</a>
              <div className="rounded-2xl bg-white/10 p-4">E-mail: laco.deamor.oficiall@gmail.com</div>
              <div className="rounded-2xl bg-white/10 p-4">Horário de atendimento: Seg–Sex, 09:00–18:00</div>
            </div>
              <div className="rounded-2xl bg-white/10 p-4">E-mail: laco.deamor.oficiall@gmail.com</div>
              <div className="rounded-2xl bg-white/10 p-4">Endereço: sua cidade, seu endereço</div>
              <div className="rounded-2xl bg-white/10 p-4">Horário de atendimento: Seg–Sex, 09:00–18:00</div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

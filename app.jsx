/* eslint-disable */
const { useState, useEffect } = React;

/* ============================================================
   Lucide icon refresh
============================================================ */
function refreshIcons() {
  if (window.lucide && window.lucide.createIcons) {
    window.lucide.createIcons({ attrs: { 'stroke-width': 1.6 h} });
  }
}

/* ============================================================
   Lead capture form (reusable, OAB-compliant framing)
============================================================ */
const CONTACT_EMAIL = 'contato@sitorskiadvogados.com.br';

function LeadForm({ c, variant }) {
  const [sent, setSent] = useState(false);
  const [agree, setAgree] = useState(false);
  useEffect(refreshIcons);

  async function handleSubmit(e) {
    e.preventDefault();
    if (!agree) return;
    const f = e.target;
    const get = (n) => (f.elements[n] && f.elements[n].value || '').trim();
    const payload = {
      access_key: "31c912e6-37e4-498b-b4ef-200a0c8f6cab",
      subject: "Solicitação de análise – Edital PGFN 6/2026",
      from_name: get('nome'),
      email: get('email'),
      phone: get('telefone'),
      message:
        `Nome: ${get('nome')}\n` +
        `WhatsApp / telefone: ${get('telefone')}\n` +
        `E-mail: ${get('email')}\n` +
        `Tipo de contribuinte: ${get('tipo')}\n` +
        `Faixa do débito: ${get('faixa')}`
    };
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload)
      });
      const data = await res.json();
      if (data.success) {
        setSent(true);
      } else {
        alert("Erro ao enviar. Tente novamente ou entre em contato pelo WhatsApp.");
      }
    } catch (err) {
      alert("Erro de conexão. Tente novamente.");
    }
  }
  if (sent) {
    return (
      <div className="lp-formcard">
        <div className="lp-form__ok">
          <div className="lp-form__okmark"><Icon name="check" size={22} /></div>
          <h4>Quase lá.</h4>
          <p>Abrimos seu aplicativo de e-mail com a mensagem pronta para <b>{CONTACT_EMAIL}</b>. Basta enviar. A análise do caso concreto é indispensável.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="lp-formcard">
      <div className="lp-formcard__eyebrow">{c.formEyebrow}</div>
      <h3 className="lp-formcard__ti">{c.formTitle}</h3>
      <p className="lp-formcard__sub">{c.formSub}</p>
      <form className="lp-form" onSubmit={handleSubmit}>
        <div className="lp-form__row">
          <div>
            <label className="slk-label">Nome</label>
            <input name="nome" className="slk-input" placeholder="Seu nome" required />
          </div>
          <div>
            <label className="slk-label">WhatsApp / telefone</label>
            <input name="telefone" className="slk-input" placeholder="(67) 9 ____-____" required />
          </div>
        </div>
        <div className="lp-form__full">
          <label className="slk-label">E-mail</label>
          <input name="email" className="slk-input" type="email" placeholder="seu@email.com" required />
        </div>
        <div className="lp-form__row">
          <div>
            <label className="slk-label">Tipo de contribuinte</label>
            <select name="tipo" className="slk-select" defaultValue="">
              <option value="" disabled>Selecione</option>
              <option>Pessoa física (PF)</option>
              <option>MEI / ME / EPP</option>
              <option>Pessoa jurídica (PJ)</option>
              <option>Em recuperação judicial</option>
            </select>
          </div>
          <div>
            <label className="slk-label">Faixa do débito</label>
            <select name="faixa" className="slk-select" defaultValue="">
              <option value="" disabled>Selecione</option>
              <option>Até R$ 100 mil</option>
              <option>R$ 100 mil – R$ 1 mi</option>
              <option>R$ 1 mi – R$ 10 mi</option>
              <option>R$ 10 mi – R$ 45 mi</option>
            </select>
          </div>
        </div>
        <label className="lp-form__consent">
          <input type="checkbox" checked={agree} onChange={(e) => setAgree(e.target.checked)} />
          <span>Autorizo o contato e declaro estar ciente de que esta página é informativa e que a análise do caso concreto é indispensável.</span>
        </label>
        <button className="slk-btn slk-btn-primary lp-form__send" type="submit" disabled={!agree} style={{ opacity: agree ? 1 : 0.55 }}>
          {variant === 'hero' ? 'Solicitar análise' : c.ctaPrimary} <Icon name="arrow-right" size={16} />
        </button>
      </form>
    </div>
  );
}

/* ============================================================
   Top alert bar
============================================================ */
function AlertBar({ c }) {
  useEffect(refreshIcons);
  return (
    <div className="lp-alert">
      <div className="lp-alert__inner">
        <span className="lp-alert__dot"></span>
        <span>{c.alert[0]} <strong>{c.alert[1]}</strong> {c.alert[2]}</span>
      </div>
    </div>
  );
}

/* ============================================================
   Header
============================================================ */
function Header({ c }) {
  return (
    <header className="lp-header">
      <div className="slk-container lp-header__inner">
        <a className="lp-header__logo" href="#top" aria-label="Sitorski Lins Advogados">
          <img src="assets/logo-mono-blue.png" alt="Sitorski Lins Advogados" />
        </a>
        <div className="lp-header__right">
          <span className="lp-header__meta">Direito Tributário · Edital PGFN 6/2026</span>
          <a className="slk-btn slk-btn-outline lp-header__cta" href="#capturar">Falar com a equipe</a>
        </div>
      </div>
    </header>
  );
}

/* ============================================================
   Hero — A (editorial) / B (blue + form)
============================================================ */
function Hero({ c, layout }) {
  if (layout === 'b') {
    return (
      <section className="lp-hero" id="top">
        <img className="lp-hero__wave" src="assets/logo-white.png" alt="" aria-hidden="true" />
        <div className="slk-container lp-hero__inner">
          <div>
            <div className="lp-hero__edital">{c.heroEyebrow}</div>
            <h1 className="lp-hero__title">{c.heroTitle[0]}<em>{c.heroTitle[1]}</em>{c.heroTitle[2]}</h1>
            <p className="lp-hero__lead">{c.heroLead}</p>
            <div className="lp-hero__chips">
              <span className="lp-chip">Desconto de <b>&nbsp;até 65%</b></span>
              <span className="lp-chip">Em <b>&nbsp;até 133 meses</b></span>
              <span className="lp-chip">Débitos de <b>&nbsp;até R$ 45 mi</b></span>
              <span className="lp-chip">PF <b>&nbsp;e&nbsp;</b> PJ</span>
            </div>
          </div>
          <div id="capturar-hero">
            <LeadForm c={c} variant="hero" />
          </div>
        </div>
      </section>
    );
  }
  // Layout A
  return (
    <section className="lp-hero" id="top">
      <img className="lp-hero__wave" src="assets/mark-only.png" alt="" aria-hidden="true" />
      <div className="slk-container lp-hero__inner">
        <div className="lp-hero__edital">{c.heroEyebrow}</div>
        <h1 className="lp-hero__title">{c.heroTitle[0]}<em>{c.heroTitle[1]}</em>{c.heroTitle[2]}</h1>
        <p className="lp-hero__lead">{c.heroLead}</p>
        <div className="lp-hero__ctas">
          <a className="slk-btn slk-btn-primary" href="#capturar">{c.ctaPrimary} <Icon name="arrow-right" size={16} /></a>
          <a className="slk-btn slk-btn-ghost" href="#numeros">{c.ctaGhost} →</a>
        </div>
        <div className="lp-hero__meta">
          <div className="lp-hero__metaitem"><div className="lp-hero__metanum">até 65%</div><div className="lp-hero__metalbl">de desconto</div></div>
          <div className="lp-hero__metaitem"><div className="lp-hero__metanum">até 133</div><div className="lp-hero__metalbl">meses para pagar</div></div>
          <div className="lp-hero__metaitem"><div className="lp-hero__metanum">30/09/26</div><div className="lp-hero__metalbl">prazo de adesão</div></div>
          <div className="lp-hero__metaitem"><div className="lp-hero__metanum">PF · PJ</div><div className="lp-hero__metalbl">público elegível</div></div>
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   Numbers band
============================================================ */
function Numbers({ c }) {
  return (
    <section className="lp-sec lp-numbers" id="numeros">
      <div className="slk-container">
        <div className="lp-label">{c.numbersLabel}</div>
        <h2 className="lp-h lp-reveal" style={{ marginBottom: 40, maxWidth: '22ch' }}>{c.numbersTitle}</h2>
        <div className="lp-numbers__grid">
          {NUMEROS.map((n, i) => (
            <div className="lp-num lp-reveal" key={i} style={{ transitionDelay: `${i * 70}ms` }}>
              <div className="lp-num__cond">{n.cond}</div>
              <div className="lp-num__val">{n.val}<small>{n.unit}</small></div>
              <div className="lp-num__lbl">{n.lbl}</div>
            </div>
          ))}
        </div>
        <p className="slk-caption" style={{ marginTop: 24, textTransform: 'none', letterSpacing: 0, color: 'var(--slk-fg-3)', maxWidth: '78ch', lineHeight: 1.6 }}>{c.numbersNote}</p>
      </div>
    </section>
  );
}

/* ============================================================
   Explanation
============================================================ */
function Explain({ c }) {
  return (
    <section className="lp-sec lp-explain">
      <div className="slk-container lp-explain__grid">
        <div>
          <div className="lp-label">{c.explainLabel}</div>
          <h2 className="lp-h lp-reveal">{c.explainTitle}</h2>
        </div>
        <div className="lp-explain__body lp-reveal">
          {c.explainBody.map((p, i) => <p key={i}>{p}</p>)}
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   Modalidades
============================================================ */
function Modalidades({ c }) {
  return (
    <section className="lp-sec lp-mods">
      <div className="slk-container">
        <div className="lp-label">{c.modsLabel}</div>
        <h2 className="lp-h lp-reveal" style={{ marginBottom: 8 }}>{c.modsTitle}</h2>
        <div className="lp-mods__grid">
          {MODALIDADES.map((m, i) => (
            <article className="lp-mod lp-reveal" key={i} style={{ transitionDelay: `${i * 70}ms` }}>
              <div className="lp-mod__ix">0{i + 1} / 03</div>
              <h3 className="lp-mod__ti">{m.ti}</h3>
              <hr className="slk-rule-copper" />
              <p className="lp-mod__bd">{m.bd}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   Elegibilidade + Público
============================================================ */
function Elegibilidade({ c }) {
  useEffect(refreshIcons);
  return (
    <section className="lp-sec lp-elig">
      <img className="lp-elig__wave" src="assets/logo-white.png" alt="" aria-hidden="true" />
      <div className="slk-container lp-elig__grid">
        <div>
          <div className="lp-label">{c.eligLabel}</div>
          <h2 className="lp-elig__h lp-reveal">{c.eligTitle}</h2>
          <ul className="lp-elig__list lp-reveal">
            {ELEGIBILIDADE.map((e, i) => (
              <li key={i}>
                <span className="lp-elig__ic"><Icon name="check" size={20} /></span>
                <span className="lp-elig__lt"><b>{e.b}</b>{e.t}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="lp-who lp-reveal">
          <div className="lp-label" style={{ marginBottom: 22 }}>{c.whoLabel}</div>
          {PUBLICO.map((p, i) => (
            <div className="lp-who__card" key={i}>
              <div className="lp-who__tag">{p.tag}</div>
              <div className="lp-who__ti">{p.ti}</div>
              <p className="lp-who__bd">{p.bd}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   Steps
============================================================ */
function Steps({ c }) {
  return (
    <section className="lp-sec lp-steps">
      <div className="slk-container">
        <div className="lp-label">{c.stepsLabel}</div>
        <h2 className="lp-h lp-reveal" style={{ marginBottom: 8 }}>{c.stepsTitle}</h2>
        <div className="lp-steps__grid">
          {PASSOS.map((s, i) => (
            <div className="lp-step lp-reveal" key={i} style={{ transitionDelay: `${i * 70}ms` }}>
              <div className="lp-step__n">{s.n}</div>
              <h3 className="lp-step__ti">{s.ti}</h3>
              <p className="lp-step__bd">{s.bd}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   Advogado / authority
============================================================ */
function Advogado({ c }) {
  useEffect(refreshIcons);
  return (
    <section className="lp-sec lp-adv">
      <div className="slk-container lp-adv__grid">
        <div className="lp-adv__media lp-reveal">
          <img src="assets/robson-sitorski.jpg" alt="Robson Sitorski Lins, OAB/MS 9.678" />
        </div>
        <div className="lp-reveal">
          <div className="lp-label">{c.advLabel}</div>
          <div className="lp-adv__name">{c.advName}</div>
          <div className="lp-adv__oab">{c.advOab} · Sitorski Lins Advogados Associados</div>
          <hr className="slk-rule-copper" style={{ margin: '22px 0' }} />
          <div className="lp-adv__bd">
            {c.advBody.map((p, i) => <p key={i}>{p}</p>)}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   Final capture
============================================================ */
function FinalCapture({ c }) {
  useEffect(refreshIcons);
  return (
    <section className="lp-sec lp-capture" id="capturar">
      <div className="slk-container lp-capture__grid">
        <div className="lp-capture__copy lp-reveal">
          <div className="lp-label">{c.captureLabel}</div>
          <h2 className="lp-h">{c.captureTitle}</h2>
          <p className="lp-lead">{c.captureLead}</p>
          <div className="lp-capture__contacts">
            <div className="lp-capture__contact"><span className="lp-ic"><Icon name="map-pin" size={18} /></span> Rua Amazonas, 2997 — Jd. Autonomista, Campo Grande/MS</div>
            <div className="lp-capture__contact"><span className="lp-ic"><Icon name="phone" size={18} /></span> 67 98140-7580</div>
            <div className="lp-capture__contact"><span className="lp-ic"><Icon name="mail" size={18} /></span> contato@sitorskiadvogados.com.br</div>
          </div>
        </div>
        <div className="lp-reveal" id="capturar-form">
          <LeadForm c={c} variant="final" />
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   Disclaimer
============================================================ */
function Disclaimer() {
  useEffect(refreshIcons);
  return (
    <section className="lp-sec--tight lp-disclaimer" style={{ paddingTop: 56, paddingBottom: 56 }}>
      <div className="slk-container">
        <div className="lp-disclaimer__inner">
          <span className="lp-disclaimer__ic"><Icon name="scale" size={26} stroke={1.4} /></span>
          <div>
            <p className="lp-disclaimer__big">{COMPLIANCE.disclaimerBig}</p>
            {COMPLIANCE.lines.map((l, i) => <p className="lp-disclaimer__txt" key={i}>{l}</p>)}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   Footer
============================================================ */
function Footer() {
  return (
    <footer className="lp-footer">
      <div className="slk-container lp-footer__inner">
        <div>
          <img className="lp-footer__logo" src="assets/logo-white.png" alt="Sitorski Lins Advogados" />
          <p className="lp-footer__tag">Atuação especializada em Direito Médico, Tributário, Empresarial e Sucessório. Mais de duas décadas de experiência ao lado de médicos, clínicas, sociedades de saúde e famílias empresárias.</p>
        </div>
        <div className="lp-footer__cols">
          <div className="lp-footer__col">
            <span className="slk-eyebrow">Contato</span>
            <p>Rua Amazonas, 2997</p>
            <p>Jd. Autonomista · Campo Grande/MS</p>
            <a href="tel:+5567981407580">67 98140-7580</a>
            <a href="mailto:contato@sitorskiadvogados.com.br">contato@sitorskiadvogados.com.br</a>
          </div>
          <div className="lp-footer__col">
            <span className="slk-eyebrow">Edital</span>
            <p>PGFN nº 6/2026</p>
            <p>Prazo: 30/09/2026, 19h</p>
            <p>Análise individualizada do caso</p>
          </div>
        </div>
      </div>
      <div className="slk-container lp-footer__legal">
        <span>© 2026 Sitorski Lins Advogados Associados S.S. · Responsável: Robson Sitorski Lins — OAB/MS 9.678</span>
        <span className="slk-wordmark-desc">A D V O G A D O S &nbsp; A S S O C I A D O S</span>
      </div>
    </footer>
  );
}

/* ============================================================
   App + Tweaks
============================================================ */
const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "layout": "b",
  "tom": "empatico",
  "showAlert": true
}/*EDITMODE-END*/;

function App() {
  const [t, setTweak] = useTweaks(TWEAK_DEFAULTS);
  const c = COPY[t.tom] || COPY.empatico;
  useReveal();
  useEffect(() => { refreshIcons(); }, [t.layout, t.tom]);

  return (
    <div className={`lp layout-${t.layout}`}>
      {t.showAlert && <AlertBar c={c} />}
      <Header c={c} />
      <main>
        <Hero c={c} layout={t.layout} />
        <Numbers c={c} />
        <Explain c={c} />
        <Modalidades c={c} />
        <Elegibilidade c={c} />
        <Steps c={c} />
        <Advogado c={c} />
        <FinalCapture c={c} />
        <Disclaimer />
      </main>
      <Footer />

      <TweaksPanel>
        <TweakSection label="Layout" />
        <TweakRadio
          label="Variação visual"
          value={t.layout}
          options={[{ value: 'a', label: 'A · Editorial' }, { value: 'b', label: 'B · Direto' }]}
          onChange={(v) => setTweak('layout', v)}
        />
        <TweakToggle label="Barra de prazo no topo" value={t.showAlert} onChange={(v) => setTweak('showAlert', v)} />

        <TweakSection label="Copy" />
        <TweakRadio
          label="Tom do texto"
          value={t.tom}
          options={[{ value: 'tecnico', label: 'Técnico' }, { value: 'empatico', label: 'Empático' }]}
          onChange={(v) => setTweak('tom', v)}
        />
        <p style={{ fontSize: 11.5, lineHeight: 1.5, color: 'var(--slk-fg-3)', margin: '4px 2px 0' }}>
          {t.tom === 'tecnico'
            ? 'Institucional e preciso — vocabulário jurídico, terceira pessoa.'
            : 'Acessível e próximo — fala da preocupação do contribuinte, sem perder o rigor.'}
        </p>
      </TweaksPanel>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

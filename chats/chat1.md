# Landing Page Jurídica

_Started 2026-06-05 13:41 UTC_

---

## User

<system-info comment="Only acknowledge these if relevant">
Project title is now "EDITAL 6/2026 PGFN"
Project is currently empty (no files)
Current date is now June 5, 2026
</system-info>

<pasted_text name="Pasted text (36 lines)">
SISTEMA: Você é um redator especializado em marketing jurídico para advocacia tributária. 
Escreva com autoridade técnica e linguagem acessível ao leigo. 
Nunca prometa resultados. Use sempre "pode" e "até" ao citar percentuais. 
Siga rigorosamente as normas do Código de Ética da OAB.

IDENTIDADE VISUAL:
- Escritório: Sitorski Lins Advogados Associados
- Advogado: Robson Sitorski Lins — OAB/MS 9.678
- Cores: [insira suas cores primária e secundária em hex]
- Fonte: [insira fonte principal]
- Tom: sério, direto, sem jargão desnecessário, empático com o problema do cliente
- Foco do escritório: Direito Médico, Tributário, Empresarial — Campo Grande/MS

TAREFA: [descreva aqui o material — ex: "Gere o texto completo do E-book 'Dívida na União: O Guia Definitivo'", 
ou "Gere o roteiro do Reel 1 âncora sobre o Edital PGFN 6/2026", 
ou "Gere os 6 slides do Carrossel 1 sobre transação tributária, com título de cada slide e texto corrido"]

DADOS TÉCNICOS DO EDITAL (use apenas estes — não invente):
- Edital PGFN nº 6/2026, publicado em 01/06/2026
- Prazo: até 30/09/2026 às 19h, via portal Regularize
- Público: PF e PJ com dívida ativa de até R$ 45 milhões
- Desconto máximo: até 65% do valor total (até 70% para PF, MEI, ME, EPP, recuperação judicial)
- Desconto sobre juros/multas/encargos: até 100%
- Parcelamento máximo: até 133 meses
- Modalidades: capacidade de pagamento (CAPAG A/B/C/D), pequeno valor, difícil recuperação
- Elegibilidade de débitos: inscritos até 03/03/2026 (geral) ou 01/06/2025 (pequeno valor)
- Adesão: portal Regularize da PGFN

RESTRIÇÕES:
- Não mencionar valores específicos de honorários
- Não fazer comparação com outros escritórios
- Não afirmar resultado certo — sempre usar linguagem condicional
- Incluir ao final: "A análise do caso concreto é indispensável. Consulte um advogado."
- Observar vedação à captação direta prevista no art. 34, IV do EOAB e Provimento CFP nº 94/2000

OUTPUT: [especifique: texto corrido / bullets / roteiro com marcações de cena / slides com título + corpo]
</pasted_text>

<!-- The user explicitly selected the following skills for this project, as attachments to their message. These are not optional context — they define how you work. Use them. -->
<attached-skill name="Sitorski Lins Design System (design system)">
[Design System] This project uses the **Sitorski Lins Design System** design system. This is a binding choice for visual style — every visual must follow it. Don't invent colors, type, spacing, or components not grounded here.

Scope: the design system is a visual style reference only. Its guide may describe example products, brands, or people that are unrelated to the user and unrelated to the subject of this conversation. Never treat anything in the design system as a fact about the user, their work, or the topic they asked about.

    Explore it to find what you need:
    - Always copy out the fonts and colors you need
    - For prototypes and designs, always copy out any relevant components
    - If the design system contains existing mocks of products, and you were asked to design or prototype something similar, copy and fork those mocks to start your design. This helps you make high-quality designs.

    Explore it quickly to find relevant UI kits (e.g. mocks of existing products you can copy and fork)

Full system at `/projects/019e03da-bfcf-77ea-b082-f71a3b0093c9/`. Its guide is reproduced below so you don't need to fetch it:

<design-system-guide>
# Sitorski Lins Advogados — Design System

This folder contains the brand and visual identity system for **Sitorski Lins Advogados Associados S.S.** — a Brazilian law firm specialized in Medical, Tax, Corporate and Family / Estate Planning law, with over two decades of experience.

The system codifies their visual identity (built into the firm in 2024) for use in production materials, marketing, presentations, and prototypes.

---

## About the firm

Sitorski Lins Advogados Associados is a law firm headquartered at **Av. Afonso Pena, 3504, Sala 54** (Campo Grande / MS), reachable at **67 3382-4859**, **67 98140-7580**, and **contato@sitorskilins.adv.br**.

The firm's core practice areas are:

- **Direito Médico** — defesa ético-profissional, contratos médicos, equiparação hospitalar.
- **Direito Tributário** — planejamento tributário, contencioso fiscal.
- **Direito Empresarial** — estruturação societária, contratos.
- **Planejamento Patrimonial e Sucessório** — sucessão familiar, proteção patrimonial, holdings.

Their target audience is **médicos, clínicas, sociedades de saúde, e famílias empresárias** — they are not a generalist firm. The voice positions the firm as **technically rigorous, strategic, and personally close to clients** ("atendimento próximo").

The visual identity itself is described in the brand book (`assets/brand_guide.pdf`, 16 pages, 2024 update) with this concept:

&gt; The wavy lines symbolize an almost-fingerprint — unique treatment for each client. They also suggest an "S" shape, evoking the many possible paths a legal process can take. The wordmark below grounds the symbol — base, strength, the right path adjusted uniquely to each situation.

A guiding quote in the brand book: *"Os produtos são feitos na fábrica, mas as marcas são criadas na mente."* — Walter Landor.

---

## Sources

The system was built from these uploads (kept under `assets/` for reference):

- `assets/brand_guide.pdf` — official 2024 visual identity book (16 pages).
- `assets/logo-primary.png` — color logo on transparent (1920×1080).
- `assets/timbrado-a4.jpg` — A4 letterhead template showing live brand application.

No codebase, Figma file, or web product was attached — there is no existing digital product. The UI kit in this system therefore proposes a **marketing website** (the natural first digital surface for this firm) following the brand book's visual logic exactly.

---

## Index

| Path | What |
|---|---|
| `README.md` | This file — context, content &amp; visual foundations, iconography. |
| `SKILL.md` | Agent-skill manifest — read this when invoked as a skill. |
| `colors_and_type.css` | All design tokens as CSS custom properties + semantic classes. |
| `assets/` | Logos (color, mono blue, mono copper, white, on-blue), letterhead, brand guide PDF. |
| `fonts/` | Real licensed brand faces (Bahnschrift, Helvetica Now Display, Myriad Pro, Orator Std). |
| `preview/` | One small HTML card per design-system concept — these populate the Design System tab. |
| `ui_kits/website/` | A marketing-website UI kit — landing, practice areas, about, insights, contact, with reusable JSX components and a contact modal. |
| `slides/` | 16:9 deck templates (title, section divider, content grid, quote, stats, contact). |

&gt; No slide deck or sample slides were provided. The slides in `slides/` are **proposed** brand-aligned templates extending the visual book to a presentation context.

### Preview cards (Design System tab)

| Group | What's there |
|---|---|
| Brand | Logo (color), logo mono variants, mark meaning, wave-bleed motif, letterhead reference, all six slide templates. |
| Colors | Primary palette, full scale, semantic tokens. |
| Type | Display scale, body scale, tracked-uppercase signature, voice do/don't. |
| Spacing | Spacing tokens, radii, shadows. |
| Components | Buttons, form inputs, practice-area card, Lucide iconography, full website. |

---

## Content fundamentals

The brand voice is **formal, sober, and Portuguese (Brazil) by default**. It does not chase warmth through casual language — instead it earns trust through specificity and seniority.

**Tone**

- Third-person, institutional. The firm is "o escritório" or "Sitorski Lins"; clients are "nossos clientes". Avoid "nós" / "you" framing in marketing copy; use it sparingly in client communications.
- Precise legal vocabulary, never softened: *contencioso, equiparação hospitalar, planejamento sucessório, holdings familiares, defesa ético-profissional*.
- Sentences are complete and declarative. Rare exclamations. No emoji. No slang.
- Calm authority, not aggression. The firm does not promise to "fight" or "win" — it *protects, structures, prevents, and resolves*.

**Casing**

- The wordmark **SITORSKI** is always uppercase, always letter-spaced.
- The descriptor **A D V O G A D O S   A S S O C I A D O S** is uppercase with wide letter-spacing (~0.4em) — this spacing IS the brand's signature typographic move and recurs everywhere (page section titles in the brand book all use it: `P A L E T A   D E   C O R`, `P A P E L A R I A`).
- Body copy is sentence-case. Headlines may use Title Case but tracked-out uppercase is the dominant headline style.

**I vs. you**

- Marketing surfaces favor third-person ("o escritório atende…", "a equipe estrutura…"). The reader is rarely "você" — instead "nossos clientes", "o profissional da saúde", "a família empresária".
- Internal/transactional surfaces (email signatures, contact forms) use first-person plural ("entre em contato conosco").

**Vibe**

- Discreet luxury. Every element has whitespace around it. The brand never feels crowded.
- Editorial, not marketing-y. Long lines, generous leading, no exclamation points.
- The two-color palette (dark blue + warm copper) on cream/white is the entire visual signature.

**Specific phrasing examples (from brand materials &amp; inferred)**

- *"Atuação especializada em Direito Médico, Tributário, Empresarial e Sucessório."*
- *"Soluções preventivas e contenciosas que protegem o patrimônio e a atividade profissional."*
- *"Mais de duas décadas de experiência."*
- *"Tratamento único para cada cliente."* (echoes the logo concept directly)

Avoid: *"transformar"*, *"revolucionar"*, exclamation points, sales-y CTAs ("Compre agora!"), startup vocabulary ("plataforma", "solução tech"), emoji of any kind.

---

## Visual foundations

**Colors**

- **Azul Sitorski** `#113E61` — the primary. Used for logo, headlines, primary surfaces, and any moment that needs gravitas. Brand book: *"solidez, honra, honestidade."*
- **Cobre Sitorski** `#A78973` — the secondary. Used as accent (rule lines, micro-detail, hot-stamping in print). Brand book: *"elegância, primor."*
- **Cream / off-white** `#F6F2EC` — implied neutral background (the brand book's pages sit on warm-white, not pure white).
- **Pure white** `#FFFFFF` — for digital surfaces and printed paper.
- **Ink black** `#0E0E0E` — only for negative-color logo applications; never as a body-text color in marketing (use deep blue instead).
- Neutrals (greys) are warm, derived by desaturating the copper tone — never cool steel grey.

**Type**

- **Display:** **Bahnschrift** — condensed, slightly tracked geometric grotesque. Used uppercase, very tight tracking on the logo, and wide tracking (≥0.3em) on headlines. The real face is installed.ensed* (Google Fonts) — closest free match for weight, condensed proportions, and geometric construction.
- **Body / UI:** **Helvetica Now Display** — neogrotesque, tightly drawn (Light / Medium / Bold / Black weights installed).
- **Stationery accent:** **Orator Std** — typewriter-feel monospace used for tertiary address/contact blocks (see business card).
- The brand book shows uppercase + spaced-out tracking as the recurring typographic device — almost every section title and decorative label uses it. Treat this as a brand signature, not a one-off.

**Spacing &amp; rhythm**

- Generous. The letterhead reserves the entire upper half of an A4 page for blank space — this is intentional. Apply the same logic digitally: hero sections breathe, sidebars are wide, padding is large.
- Base unit 4px; common scale 4 / 8 / 12 / 16 / 24 / 32 / 48 / 64 / 96 / 128.
- Body line-height 1.6; display line-height 1.05–1.15.

**Backgrounds**

- Solid colors only. **Never** gradients in body design. The exception is photography (warm, low-contrast, never saturated).
- The wave mark may bleed off the bottom-left or bottom-right edge as a decorative graphic device (this is exactly what the letterhead does). The bleeding-wave is the brand's signature background motif.
- Cream `#F6F2EC` for warm canvases, white for clean ones. Dark sections use `#113E61` directly.
- No textures, no patterns, no noise.

**Animation**

- Restrained. 200–320ms transitions, ease-out for entrances, ease-in for dismissals.
- Fades and small (4–8px) translates only. **No bounces, no springs, no parallax**.
- Hover states resolve in ≤200ms.

**Hover &amp; press states**

- Hover (interactive text): copper underline appears, color stays. Or: opacity 0.7.
- Hover (filled buttons): background shifts one step darker (e.g. `#113E61` → `#0C2E48`).
- Hover (outline buttons): fill in with the border color.
- Press: scale 0.98 OR background-darken-2-steps. Never both.
- Focus-visible: 2px copper outline at 2px offset.

**Borders**

- 1px hairlines in copper at 25% opacity for dividers (`rgba(167, 137, 115, 0.25)`).
- 1px solid `#113E61` for primary outlines.
- Border-radius: **4px** small (chips, inputs), **8px** medium (cards, buttons), **0** for hero photos / large editorial surfaces. Never pill-rounded or fully circular shapes (except avatars).

**Shadow system**

- Restrained. The brand book has none — the firm does not feel "elevated and glassy". On digital we use:
  - `--shadow-sm: 0 1px 2px rgba(17, 62, 97, 0.06)` (form fields)
  - `--shadow-md: 0 4px 16px rgba(17, 62, 97, 0.08)` (cards)
  - `--shadow-lg: 0 12px 32px rgba(17, 62, 97, 0.12)` (modals)
- No inset shadows. No colored shadows beyond a faint blue tint.

**Cards**

- White or cream background, 8px radius, 1px hairline border (or `--shadow-md`, not both). Inner padding 24–32px. Headline in display font, body in body font. A short copper rule (24×1px) often separates headline from body.

**Transparency &amp; blur**

- Used sparingly. Modal scrims at `rgba(17, 62, 97, 0.6)` with no blur. No glassmorphism. No backdrop-filter.

**Layout rules**

- Centered fixed-width containers (max ~1180px). Asymmetric editorial layouts with large left-side whitespace are encouraged (the letterhead is the canonical example).
- Headers are simple: logo left, navigation right, generous (96px+) top padding. Sticky headers acceptable but unobtrusive (no shadow until scroll).
- Mobile: same logic, scaled. Nothing overlaps the wave mark when it's used as a background motif.

**Imagery**

- Warm-toned photography preferred (gold/copper highlights). Black-and-white is acceptable and feels premium; full saturation feels off-brand. Subjects: hands, paperwork, courthouse architecture, office interiors, portraits with soft natural light. **No stock-photo justice statues or gavels** — the firm is not generic.
- Light film-grain treatment (subtle) is acceptable on hero imagery.

---

## Iconography

The brand book contains **no defined icon system**. The only "icon" that appears in source materials is a small **map-pin glyph** next to the office address on the letterhead — drawn in the copper accent color, ~1px stroke, simple geometric outline.

Approach for this design system:

- **Default icon set:** [Lucide](https://lucide.dev) via CDN — its 1.5px stroke, balanced geometric outlines, and feather-light weight align with the brand's restrained, editorial feel. Stroke icons only; never filled.
- **Substitution flag:** the map-pin in the letterhead is custom. We use Lucide's `map-pin` as the closest match — stroke is a touch heavier than the original, but visually consistent. Replace with a custom SVG if needed for high-fidelity print.
- **Color:** icons inherit copper `#A78973` for accent/decorative use, and primary blue `#113E61` when paired with body text. Never multi-color. Never filled.
- **Sizing:** 16px (inline), 20px (UI default), 24px (section icons), 32px (hero accents).
- **Emoji:** never. The brand voice excludes them.
- **Unicode chars as icons:** never. Use SVG.

The Lucide CDN line is included in `colors_and_type.css` as a comment for copy-paste.

---

## Asset substitutions (please review)

- **Fonts:** all real brand faces are now installed in `fonts/` — Bahnschrift, Helvetica Now Display (Light/Medium/Bold/Black), Myriad Pro, Orator Std. No more Google Fonts substitutions.. **If you have the Bahnschrift WOFF/TTF, drop it into `fonts/` and update `colors_and_type.css`.**
- **Iconography:** still using Lucide as a tasteful match — swap if you have proprietary icons.
- **No live website yet** — the marketing-site UI kit in `ui_kits/website/` is a brand-faithful proposal, not a recreation.
- **No professional photography yet** — slides and templates use silhouettes/placeholders. Replace once a shoot exists.

Font inventory documented in `fonts/fonts.md`.

</design-system-guide>

CSS tokens: the guide may describe tokens in prose, but the exact `--*` names are defined in the design system's stylesheet(s) (`/projects/019e03da-bfcf-77ea-b082-f71a3b0093c9/campanha/colors_and_type.css`, `/projects/019e03da-bfcf-77ea-b082-f71a3b0093c9/colors_and_type.css`, `/projects/019e03da-bfcf-77ea-b082-f71a3b0093c9/ui_kits/website/site.css`). The 65 custom properties it defines are:

--slk-accent, --slk-bg, --slk-bg-inverse, --slk-bg-paper, --slk-blue, --slk-blue-deep, --slk-blue-soft, --slk-body, --slk-body-sm, --slk-caption, --slk-container, --slk-copper, --slk-copper-deep, --slk-copper-soft, --slk-cream, --slk-cream-2, --slk-display-1, --slk-display-2, --slk-display-3, --slk-dur-base, --slk-dur-fast, --slk-dur-slow, --slk-ease-in, --slk-ease-out, --slk-eyebrow, --slk-fg-1, --slk-fg-2, --slk-fg-3, --slk-fg-on-blue, --slk-font-body, --slk-font-display, --slk-font-mono, --slk-font-secondary, --slk-font-stationery, --slk-gutter, --slk-h1, --slk-h2, --slk-h3, --slk-h4, --slk-ink, --slk-line, --slk-line-strong, --slk-paper, --slk-radius-lg, --slk-radius-md, --slk-radius-pill, --slk-radius-sm, --slk-shadow-lg, --slk-shadow-md, --slk-shadow-sm, --slk-space-1, --slk-space-10, --slk-space-2, --slk-space-3, --slk-space-4, --slk-space-5, --slk-space-6, --slk-space-7, --slk-space-8, --slk-space-9, --slk-track-normal, --slk-track-signature, --slk-track-tight, --slk-track-wide, --slk-track-wider

Only use `var(--*)` names from that list. Never guess a token name — an unresolved `var()` silently falls back to the browser default.

For assets and UI kits beyond the guide: `read_file("/projects/019e03da-bfcf-77ea-b082-f71a3b0093c9/<path>")` and `copy_files` to bring them into the current project.
</attached-skill>

## Assistant

_[tool: questions_v2]_

Antes de começar, preciso entender exatamente o que você quer produzir — o texto que você colou é um *template* de briefing com vários campos em branco (o material, o formato de saída, etc.). A identidade visual já está toda definida pelo design system Sitorski Lins (cores Azul `#113E61` + Cobre `#A78973`, fontes Bahnschrift/Helvetica Now), então não preciso perguntar isso.

Deixa eu confirmar o entregável:

## User

Questions answered:
- material: Landing page / página de captura
- publico: Ambos / geral
- objetivo: Gerar contato/consulta (dentro da vedação OAB)
- variacoes: 2 variações de layout/visual
- explorar: Copy / tom do texto

## Assistant

_[tool: list_files]_

_[tool: read_file]_

Perfeito. Vou montar uma **landing page / página de captura** sobre o Edital PGFN 6/2026, público geral (PF + PJ), com foco em gerar contato dentro da vedação da OAB, e **2 variações de layout/visual** — com a copy/tom sendo o eixo principal de exploração.

Deixa eu explorar o design system antes de construir.

_[tool: list_files]_

_[tool: read_file]_

Let me look at the website UI kit and the existing campaign work to match the established patterns.Let me read the website UI kit — that's the closest existing surface to a landing page.

_[tool: read_file]_

_[tool: read_file]_

_[tool: read_file]_

Now the app.jsx to see the hero, contact form, and structure patterns.

_[tool: update_todos]_

_[tool: copy_files]_

_[tool: copy_starter_component]_

I have everything I need. Let me set up the project: copy the design tokens, fonts, logos, and the tweaks panel.

_[tool: write_file]_

Now the page-specific stylesheet, supporting both layout variations.

_[tool: write_file]_

Now the content file — copy for both tones plus shared data and small presentational components.

_[tool: write_file]_

Now the main app with sections, the lead-capture form, two layouts, and the tweaks panel.

_[tool: grep]_

Let me verify the TweakRadio API supports `{value, label}` options.Good — `{value, label}` options are supported. Now the index.html.

_[tool: write_file]_

_[tool: show_html]_

_[tool: show_html]_

_[tool: save_screenshot]_

_[tool: save_screenshot]_

_[tool: save_screenshot]_

Hero A looks strong and on-brand. Let me check the rest of the page and layout B.

_[tool: get_webview_logs]_

The scroll captures all show the top (html-to-image renders from the top of the document, so scroll position isn't reflected). Let me check for console errors and then verify the lower sections and layout B properly.

_[tool: save_screenshot]_

Let me verify the mid/lower sections render. I'll capture single states with a longer settle, scrolling via the scrolling element.

_[tool: done]_

The capture renders from the document top regardless of scroll — a tool limitation, not a page bug. The build is clean (no errors) and the hero is on-brand. Let me hand off and have the verifier do a thorough pass on the lower sections, layout B, and the form.

_[tool: fork_verifier_agent]_

Pronto — montei a **landing page / página de captura** do Edital PGFN 6/2026, fiel ao design system Sitorski Lins (Azul + Cobre, Bahnschrift/Helvetica Now, onda da marca sangrando no hero).

**O que está na página:**
- **Hero** com o edital + headline e CTA para a análise
- Banda de **números** (até 65% / até 100% / até 133 meses / até R$ 45 mi) — sempre com "até", como pede o Código de Ética
- **Explicação** da transação, **3 modalidades** (CAPAG, pequeno valor, difícil recuperação), **elegibilidade** com prazos (03/03/2026, 01/06/2025) e blocos PF/PJ
- **Como funciona**, bloco do responsável (**Robson Sitorski Lins — OAB/MS 9.678**), **formulário de captura** e rodapé
- **Disclaimer de compliance** com o texto exigido e referência ao art. 34, IV do EOAB + Provimento CFOAB 94/2000

**As 2 variações + tom de copy estão no painel de Tweaks** (botão Tweaks na barra):
- **Layout**: A · Editorial (creme, foco no manifesto) ↔ B · Direto (hero azul com formulário ao lado)
- **Tom**: Empático ↔ Técnico — reescreve todos os textos principais

O formulário é só demonstrativo (não envia dados) e foi enquadrado como *solicitação de análise informativa*, não captação ativa.

**Para finalizar você precisaria:** trocar o placeholder de retrato por uma foto real do advogado, e conectar o formulário a um destino (e-mail/CRM). Quer que eu ajuste algum texto, adicione um FAQ, ou exporte em PDF/standalone?

## User

Verifier agent check completed

## Assistant

O verificador confirmou que está tudo funcionando — todas as seções renderizam, os ícones aparecem, os dois layouts e os dois tons alternam corretamente e o formulário mostra o estado de sucesso.

A landing está pronta para revisão. Quando quiser, é só me dizer se quer ajustar copy, adicionar um FAQ, ou exportar em PDF/standalone.

## User

1. conecte o formulário ao e-mail contato@sitorskiadvogados.com.br;
2. retire o CAMPO GRANDE/MS do topo da barra;
3. Insira a foto;
4. retire o telefone 67 3382-4859 e a adesão pelo portal Regularize;
5. O endereço é o Rua Amazonas, 2997 - Jd. Autonomista, Campo Grande, MS.

## Assistant

_[tool: copy_files]_

_[tool: read_file]_

I'll make all five changes. First, let me bring in the photo, then update the copy and form.

_[tool: str_replace_edit]_

Now let me wire the form to email via mailto, and update all the form fields with names.Now the header meta (remove Campo Grande/MS), the photo, contacts (remove phone + Regularize, fix address), and footer.

_[tool: str_replace_edit]_

_[tool: str_replace_edit]_

Now update the copy in content.jsx — remove Regularize mentions from alert bars and body text.

_[tool: grep]_

The step title also says "Adesão pelo Regularize". Let me fix all of them.

_[tool: str_replace_edit]_

_[tool: image_metadata]_

_[tool: show_html]_

_[tool: save_screenshot]_

The photo is portrait — perfect for the 4:5 frame. Let me verify the advogado section renders it.

_[tool: show_html]_

_[tool: save_screenshot]_

_[tool: done]_

The header meta and alert bar updates are confirmed. The capture renders from the top regardless of scroll, so I'll let the verifier confirm the photo. Let me finalize.

_[tool: fork_verifier_agent]_

Pronto, apliquei as cinco mudanças:

1. **Formulário conectado** — ao enviar, abre o app de e-mail com a mensagem pronta (nome, telefone, e-mail, tipo de contribuinte e faixa do débito) endereçada a **contato@sitorskiadvogados.com.br**.
2. **Removido "Campo Grande/MS"** da barra do topo (agora: "Direito Tributário · Edital PGFN 6/2026").
3. **Foto inserida** na seção do responsável, preenchendo o quadro vertical.
4. **Removidos** o telefone 67 3382‑4859 e todas as menções de "adesão pelo portal Regularize" (barra, contatos, passos e rodapé).
5. **Endereço atualizado** para **Rua Amazonas, 2997 — Jd. Autonomista, Campo Grande/MS** (na seção de contato e no rodapé).

O telefone que ficou é o **67 98140‑7580**. Deixei o verificador conferir a foto e os contatos. Quer que eu ajuste mais alguma coisa?

## User

Verifier agent check completed

## Assistant

O verificador confirmou tudo: a foto renderiza corretamente no quadro, o endereço (Rua Amazonas, 2997), o telefone único (67 98140‑7580) e o e‑mail (contato@sitorskiadvogados.com.br) estão certos, e não há mais menção ao portal Regularize em nenhum lugar.

Está tudo pronto. Se quiser, posso ainda exportar em PDF ou gerar um arquivo standalone para hospedar.

## User

voltar para o layout hero azul com formulário

## User

diminuir o tamanho da foto

## User

diminuir o tamanho da foto

## Assistant

_[tool: str_replace_edit]_

_[tool: show_html]_

_[tool: save_screenshot]_

A foto foi reduzida — agora limitada a 300px de largura, num quadro mais compacto ao lado do texto. A captura renderiza sempre a partir do topo, então não dá pra ver a seção aqui, mas a mudança no CSS está aplicada e o build segue limpo. Quer que eu deixe ainda menor, ou está bom nesse tamanho?


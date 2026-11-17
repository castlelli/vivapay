# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Stack

Showcase site: Astro, static, in `site/`, deployed to GitHub Pages at castlelli.github.io/vivapay (chosen in planning, approved by the author). The product itself: AdonisJS 6 API (`api/`), Ionic/Vue vendor app (`apptcc/`), JavaFX desktop manager (`views/`).

## Users

The showcase site has three audiences:

- **Founders, investors and industry people** judging whether the author can ship real products. They skim fast and judge taste.
- **Event and expo organizers** wondering whether a cashless system could run their event. The site's call to action is aimed at them ("Running an event? Let's talk").
- **Recruiters and technical evaluators** arriving from the author's portfolio (castlelli.github.io).

All arrive cold, from a link, and give the page seconds.

## Product Purpose

VivaPay is a closed-loop, QR-voucher payment system for events. It replaced cash at VivaCTI, the annual fair at CTI-UNESP (Bauru, Brazil). Visitors carry a QR voucher, cashiers top it up at a desktop station, and vendors charge it from a phone at their booth.

The showcase site is an exposition of results. It sells the product's credibility, but quotes no price and offers no plan.

## Positioning

A voucher balance is never stored as a number. It is derived from an append-only transaction log (credits minus debits and refunds, `api/app/models/ClienteEvento.ts`), so every real it holds can be traced. The API refuses a payment when the event is inactive, the vendor is not assigned to it, or the derived balance is short. It is purpose-built for one event's closed loop: top up → scan → paid → report at close.

## Operating Context

- Three clients: **VivaManager** (desktop, organizers and cashiers: events, booths, top-ups, refunds, printed receipts, PDF reports, cancellation review), **VivaSales** (mobile, vendors: scan QR, check balance, charge, sales history), **Viva Voucher** (the visitor's QR code).
- Live at a crowded school fair: 40 booths, queues, phones in hand, three consecutive days.
- Built by a student team during an IT technician program (2022–2024).

## Capabilities and Constraints

- Showcase site: bilingual, EN at `/vivapay/` and PT at `/vivapay/pt/`, with equal standing.
- Must work without JavaScript, keep content visible by default, honor `prefers-reduced-motion`, avoid heavy motion and scroll-jacking, and self-host its fonts.
- Product screens on the site are authored recreations of the real screens (`apptcc/src/views/*`, `views/src/main/resources/views/viva/views/*.fxml`) with synthetic demo data, labeled illustrative.
- No pricing, plans or sign-up.

## Brand Commitments

- No commitment to the old identity (author's decision, 2026-11-17). The original chevron logo and bright blue/orange palette read too loud and not premium. Logo, colors, type, layout and motion are all free. The old assets stay in `vivaSite/` as history only.
- The site must read **premium**: restrained, confident, the register of a serious fintech. Never loud or toy-like.
- Team credit is one role line only: "Led a team of 7". No names.

## Evidence on Hand

These are the only claims the site may make:

- R$10K+ processed
- 5,000+ people
- 10,000 transactions
- 3 days live at VivaCTI
- 40 booths
- team of 7 student developers, led by the author

Contact: vcastelli@usp.br, linkedin.com/in/viniciuscastelli. Source: github.com/castlelli/vivapay.

Absent, never to be fabricated: customers beyond VivaCTI, testimonials, press, awards, uptime or speed benchmarks, pricing, partner logos, and real photos of the fair (none exist in the repo).

## Product Principles

1. Results first: the numbers and the working loop persuade, while architecture stays in the background.
2. Prove, don't claim: show the voucher being charged and the ledger behind it.
3. Honest origin: it ran at a school fair, which is stated once and plainly.
4. Built for the floor: everything speaks to a busy event, not a bank.

## Accessibility & Inclusion

WCAG 2.1 AA contrast; keyboard reachable; reduced motion honored; works without JS.

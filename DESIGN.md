---
name: VivaPay
description: Closed-loop event payments, presented as a credential. Forest and paper grounds, champagne emphasis.
colors:
  forest: "#11201B"
  forest-deep: "#0A1411"
  forest-raised: "#182C25"
  paper: "#EDEAE2"
  paper-raised: "#F7F5F0"
  champagne: "#D5C6A1"
  champagne-ink: "#8A7A52"
  sage: "#9AAAA2"
  moss: "#4E5B54"
  credit-green: "#2F6B4F"
  duotone-base: "#8DB09E"
typography:
  display:
    fontFamily: "Schibsted Grotesk, Helvetica Neue, Arial, sans-serif"
    fontSize: "clamp(56px, 8.4vw, 124px)"
    fontWeight: 700
    lineHeight: 0.9
    letterSpacing: "-0.04em"
  display-soft:
    fontFamily: "Schibsted Grotesk, Helvetica Neue, Arial, sans-serif"
    fontSize: "clamp(56px, 8.4vw, 124px)"
    fontWeight: 400
    lineHeight: 0.9
    letterSpacing: "-0.04em"
  headline:
    fontFamily: "Schibsted Grotesk, Helvetica Neue, Arial, sans-serif"
    fontSize: "clamp(40px, 4.6vw, 68px)"
    fontWeight: 700
    lineHeight: 0.98
    letterSpacing: "-0.04em"
  title:
    fontFamily: "Schibsted Grotesk, Helvetica Neue, Arial, sans-serif"
    fontSize: "clamp(32px, 3.2vw, 46px)"
    fontWeight: 700
    lineHeight: 1
    letterSpacing: "-0.035em"
  body:
    fontFamily: "Schibsted Grotesk, Helvetica Neue, Arial, sans-serif"
    fontSize: "20px"
    fontWeight: 400
    lineHeight: 1.5
  label:
    fontFamily: "Schibsted Grotesk, Helvetica Neue, Arial, sans-serif"
    fontSize: "12px"
    fontWeight: 500
    letterSpacing: "0.1em"
  figure:
    fontFamily: "Fragment Mono, ui-monospace, Menlo, monospace"
    fontSize: "clamp(30px, 3.2vw, 46px)"
    fontWeight: 400
    lineHeight: 1
    letterSpacing: "-0.04em"
    fontFeature: "tnum"
rounded:
  none: "0px"
  phone: "42px"
spacing:
  gutter: "clamp(20px, 4.5vw, 64px)"
  section: "clamp(96px, 12vw, 168px)"
components:
  button-primary:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.forest}"
    rounded: "{rounded.none}"
    padding: "18px 26px"
  button-primary-hover:
    backgroundColor: "{colors.champagne}"
    textColor: "{colors.forest}"
  voucher:
    backgroundColor: "{colors.paper-raised}"
    textColor: "{colors.forest}"
    rounded: "{rounded.none}"
    padding: "24px"
    width: "268px"
  ledger-tape:
    backgroundColor: "{colors.paper-raised}"
    textColor: "{colors.forest}"
    rounded: "{rounded.none}"
    padding: "30px 36px 26px"
---

# Design System: VivaPay

## Overview

**Creative North Star: "The Credential"**

VivaPay presents itself the way a members' card does: dark forest stock, paper inserts, a champagne foil mark. It is quiet and confident, never loud. The product's one physical object, a QR voucher, sets the tone for every surface. Pages alternate between a deep forest field, where the visitor is in the evening fair, and a warm paper field, where the numbers and records are read.

Density is low and deliberate. Every section makes one point at a large scale and then gives it room. Proof comes from objects shown working, such as a scannable voucher, recreated app screens and a ledger that replays, rather than from icons or feature grids. The old bright blue and orange chevron identity was rejected as "too bright, not premium" and stays retired.

**Key Characteristics:**
- Two grounds only, forest and paper, with champagne as the single emphasis.
- Display type is set in a bold-and-regular pair: one line at 700, the next at 400 in champagne.
- Mono figures are reserved for money, counts and serials.
- Flat, square-cornered paper objects with soft, offset shadows.
- Photography is tinted into forest; stock is always credited and never passed off as the event.

## Colors

The palette is a dark-green evening and a warm daylight page, with one metallic accent.

### Primary
- **Evening Forest** (#11201B): the main dark ground (hero, how-it-works, origin, close) and all ink on paper.
- **Night Forest** (#0A1411): the hero base and the color photo scrims fade into.
- **Raised Forest** (#182C25): the active row in app sidebars.

### Secondary
- **Champagne Foil** (#D5C6A1): the second display line, the "Pay" half of the wordmark, focus rings, selection, button hover and the sample stamp. Use it for emphasis only, never for body copy.
- **Foil Ink** (#8A7A52): champagne darkened to read on paper, used for small marks on paper surfaces.

### Neutral
- **Warm Paper** (#EDEAE2): the light section ground and primary text on forest.
- **Card Stock** (#F7F5F0): raised paper objects (voucher, ledger tape, report, app windows).
- **Sage** (#9AAAA2): secondary text on forest (6.9:1).
- **Moss** (#4E5B54): secondary text and labels on paper (6.3:1).
- **Credit Green** (#2F6B4F): positive amounts in the ledger only.
- **Duotone Base** (#8DB09E): the multiply base under grayscale photography. It is never used as a fill on its own.

### Named Rules
**The Two Grounds Rule.** A section's ground is forest or paper. No third background, no gradients except photo scrims.
**The Foil Rule.** Champagne marks one thing per region: the emphasized line, the hovered button or the focused control. When everything is foil, nothing is.

## Typography

**Display and body font:** Schibsted Grotesk (with Helvetica Neue, Arial), self-hosted variable.
**Figure font:** Fragment Mono (with ui-monospace), self-hosted.

**Character:** Schibsted is an editorial grotesque with sharp joints. It reads as a confident publication rather than a startup template. Fragment Mono gives the numbers the even, tabular cadence of a receipt.

### Hierarchy
- **Display** (700 over 400, clamp(56px, 8.4vw, 124px), line-height 0.9, -0.04em): the hero and the closing call. Always a two-line pair, with the second line at 400 in champagne. The PT hero steps down to a 100px maximum so its longer words stay on two lines.
- **Big figure** (700, clamp(88px, 10vw, 148px), 0.86): one headline number per results section.
- **Headline** (700, clamp(40px, 4.6vw, 68px), 0.98): section titles.
- **Title** (700, clamp(32px, 3.2vw, 46px), 1): step titles.
- **Body** (400, 20px, 1.5): ledes and section copy, at 30–44ch.
- **Label** (500, 11–12px, 0.1–0.12em, uppercase): rail labels, client tags and table headers, in sans.
- **Figure** (Fragment Mono 400, tabular): stat rail values, balances, amounts, times and serials.

### Named Rules
**The Receipt Rule.** Mono appears only where a receipt would print it: money, counts, times and serial numbers. Labels, navigation and buttons stay in sans.
**The Pair Rule.** A display headline is two lines with one idea, set as a weight contrast. Don't put an eyebrow or kicker above it.

## Layout

Full-bleed bands alternate forest and paper, with a fluid gutter of clamp(20px, 4.5vw, 64px) and vertical rhythm of clamp(96px, 12vw, 168px). The hero fills the viewport (clamp(720px, 100svh, 1040px)). Its photo is mapped in image coordinates so the card's printed mark stays on the card. The four-column stat rail sits on the hero's bottom edge.

Content sections are two-column splits (photo against copy, text against object) that collapse to one column at 900px. Below 760px the hero stacks: photo, then headline, then a 2×2 stat rail. Step rows alternate their object side on desktop.

## Elevation & Depth

Surfaces are flat. Depth belongs only to paper objects resting on a ground, and it comes from soft, offset, low-opacity shadows, never from glows or borders.

### Shadow Vocabulary
- **Resting paper** (`0 1px 0 rgba(17,32,27,.06), 0 18px 40px -18px rgba(17,32,27,.35)`): the voucher on paper.
- **Ticket** (`0 30px 60px -36px rgba(17,32,27,.45)`): the ledger tape.
- **On forest** (`0 40px 80px -40px rgba(0,0,0,.6)`): app windows and the report on a forest ground.

### Named Rules
**The Resting Object Rule.** Only objects that would physically sit on a surface (a card, a ticket, a window) cast a shadow. Text blocks and sections never do.

## Shapes

Corners are square (0px) everywhere: buttons, vouchers, fields and tables. The one exception is the phone render's device body (42px). Objects carry a slight physical tilt (-3° voucher, 1.5° report) that settles toward 0° on hover. A dashed perforation (2px dashed, ink at 22%) marks a tear line on paper objects.

## Components

### Buttons
- **Shape:** square (0px).
- **Primary:** paper on forest, 18px 26px, Schibsted 500 16px, followed by a drawn 16×10 stroke arrow.
- **Hover / Focus:** the background moves to champagne and the arrow slides 4px right. Focus shows a 2px champagne outline offset by 3px.
- **Text link:** Schibsted 500 16px with a 1px underline border at 45% opacity, which goes to full on hover.

### Voucher (signature)
A card-stock ticket (268px) holding a real, scannable QR, a dashed perforation, a moss label row and a mono balance. It is tilted -3° at rest.

### Ledger tape (signature)
A card-stock table in Fragment Mono, with dashed row rules, a 2px ink rule under the caption and credits in credit green. The derived balance sits in the footer as an `<output>`. When it scrolls into view it replays: rows land one at a time from a slight blur and the balance recomputes. It is static under reduced motion, and a Replay control appears only once JS has run.

### App renders
VivaManager window, VivaSales phone and the report, recreated in the system's palette on card stock. The original Portuguese labels are kept, the data is sample data, and a caption says so.

### Scroll motion
CSS scroll-driven only (`site/public/motion.css`, served unprocessed). Each family moves in its own way:
- Display and section headlines rise 32px out of a 6px blur.
- Body copy fades up 16px.
- Photos open from a 14% top inset while the image settles from 1.12 scale.
- Paper objects slide up 64px and keep their tilt, because they use the individual `translate` property.

The hero photo drifts 72px slower than the page, and the hero copy lifts away as it leaves. Where scroll timelines are unsupported, or under reduced motion, everything is static and fully visible.

**The Quiet Motion Rule.** Motion only accompanies arrival. Nothing loops, nothing scroll-jacks, and nothing moves more than 72px.

### Navigation
Wordmark at left: "Viva" at 800 in paper, "Pay" at 400 in champagne. The links are Schibsted 500 14px in sage and turn paper on hover, and the language switch is always paper. On mobile only the language switch remains.

## Do's and Don'ts

### Do:
- **Do** keep every section on forest (#11201B) or paper (#EDEAE2).
- **Do** set money, counts and serials in Fragment Mono with tabular figures, and everything else in Schibsted Grotesk.
- **Do** tint photography into forest (grayscale under multiply on #8DB09E) and credit any stock photo on the image.
- **Do** label recreated screens and sample figures as samples.
- **Do** keep claims to the evidenced set: R$10K+, 5,000+ people, 10,000 transactions, 40 booths, 3 days, a team of 7.

### Don't:
- **Don't** bring back the bright blue/orange chevron palette or logo. The user retired them as "too bright, not premium".
- **Don't** put eyebrows or kickers above headings, or "01 / 02" section numbers.
- **Don't** use mono for labels, navigation or buttons.
- **Don't** use Unicode glyphs as icons. Draw them as 1.5px stroke SVG.
- **Don't** add pricing, testimonials, partner logos or unverified metrics.

/* global React */
// Course content — all 27 slides from the PPTX, grouped into 7 topics.

const COURSE = {
  title: "ISM Code",
  subtitle: "Safety management for NSRS SRV operations",
  durationMin: 35,
  sections: [
    {
      id: "intro",
      title: "Introduction",
      lede: "What the ISM Code is, why it exists, and how it shapes the way NSRS operates.",
      icon: "01",
      screens: [
        {
          id: "welcome",
          title: "Welcome to the <b>NSRS ISM Code</b> module",
          eyebrow: "Module overview",
          lede: "A short, conversational walk-through of the International Safety Management Code and what it means for the day-to-day operation of NSRS SRV1.",
          blocks: [
            { kind: "Hero", props: { variant: "photo", tall: true, image: "design/assets/horizon-sea.jpg", eyebrow: "NSRS · ISM 2025", title: "Pioneering safety,<br/>at sea and below.", sub: "An induction to the International Safety Management Code for everyone who works on or alongside NSRS SRV1." } },
            { kind: "Text", props: { heading: "What you'll cover", body: ["This module breaks the ISM Code into seven short topics. You can move through them in order, or jump in via the menu on the left."], points: ["Why the Code came into force, and the events that shaped it", "How SOLAS Chapter 9 makes it law", "Which certificates apply, and how they're maintained", "What a Safety Management System looks like in practice", "Your responsibilities — including the Master / Pilot in Charge"] } },
            { kind: "Stats", props: { items: [
              { num: "<b>1988</b>", label: "Year the ISM Code was enacted" },
              { num: "<b>42</b>", label: "Navies served by JFD's submarine rescue capability" },
              { num: "<b>~35</b>", label: "Minutes to complete this module" },
              { num: "<b>7</b>", label: "Topics, with a short check at the end of each" },
            ]} },
          ]
        },
        {
          id: "objectives",
          title: "What you'll learn",
          eyebrow: "Learning objectives",
          lede: "We'll look at the main points of the ISM Code — enough to give you confidence in audits, conversations and your own day-to-day decisions.",
          blocks: [
            { kind: "Hero", props: { variant: "blueprint", art: "compass", eyebrow: "Section 01 · Introduction", title: "Seven topics. <b>One Code.</b>", sub: "Tap each card below to see what we'll cover. The order matches the menu — pick up where you left off any time." } },
            { kind: "ClickReveal", props: { items: [
              { icon: "1", title: "Origins of the Code", reveal: "How two major maritime incidents — Herald of Free Enterprise and Exxon Valdez — pushed the IMO to adopt the ISM Code in 1988." },
              { icon: "2", title: "SOLAS Chapter 9", reveal: "The legal mechanism that makes the ISM Code binding on shipowners and operators worldwide." },
              { icon: "3", title: "Application", reveal: "Why NSRS SRV1, registered as a Passenger Carrying Submersible under the Merchant Shipping Act, is held to the same standard as a merchant ship." },
              { icon: "4", title: "Certification", reveal: "The Document of Compliance and Safety Management Certificate — what they are, and why both are required." },
              { icon: "5", title: "Compliance", reveal: "The components of a working Safety Management System (SMS), and how JFD/NSRS demonstrates conformity." },
              { icon: "6", title: "Roles", reveal: "The Master / Pilot in Charge, MOSHIPS, and the Designated Person Ashore — and where each fits in." },
              { icon: "7", title: "Audit & you", reveal: "Your part in the MCGA audit cycle, and how to prepare." },
            ]}}
          ]
        },
      ]
    },

    {
      id: "history",
      title: "History & events",
      lede: "The maritime incidents that forced the IMO to act — and the timeline that produced the Code.",
      icon: "02",
      screens: [
        {
          id: "ism-origins",
          title: "How the <b>ISM Code</b> came to be",
          eyebrow: "Origins",
          lede: "Prior to the late 1980s, the IMO had become increasingly concerned about the safe operation of shipping on the high seas. Two events forged and shaped the Code — one before its implementation, and one after that proved to be the last straw.",
          blocks: [
            { kind: "Hero", props: { variant: "photo-bottom", image: "design/assets/ocean.jpg", eyebrow: "Section 02 · Origins", title: "How the <b>ISM Code</b><br/>came to be.", sub: "Two disasters, two years apart — and an industry that finally agreed safety couldn't be left to individuals." } },
            { kind: "Video", props: { title: "The events that brought in the ISM Code", sub: "Watch · 2 min", duration: "02:01 / 02:01", placeholderLabel: "Intro video", poster: "design/assets/horizon-sea.jpg" } },
            { kind: "Timeline", props: { events: [
              { year: "1987", caption: "Herald of Free Enterprise", title: "Herald of Free Enterprise capsizes", body: "The roll-on/roll-off ferry capsized minutes after leaving Zeebrugge. Investigations pointed not just to a faulty bow door but to systemic failures in how the operating company managed safety. The disaster gave the IMO momentum it had been looking for." },
              { year: "1988", caption: "Code enacted", title: "ISM Code is adopted", body: "On 1 July 1988, amendments to the SOLAS Convention introduced Chapter 9, requiring shipowners and operators to comply with the ISM Code. Safety was no longer a matter of individual seamanship — it was a managed system." },
              { year: "1989", caption: "Exxon Valdez", title: "Exxon Valdez runs aground", body: "The grounding in Prince William Sound caused one of the most damaging oil spills in history. It became the 'last straw' — a public, political event that cemented the case for the ISM Code as international law." },
            ]}},
            { kind: "Callout", props: { label: "Remember", body: <>The ISM Code came into force on <b>1 July 1988</b> when amendments were made to the SOLAS Convention by the introduction of <b>Chapter 9</b>.</> } },
          ]
        },
        {
          id: "exxon",
          title: "Case study: Exxon Valdez",
          eyebrow: "1989 · Last straw",
          lede: "A worked example of why a managed safety system — not just a competent crew — became non-negotiable.",
          blocks: [
            { kind: "Hero", props: { variant: "gradient-warm", art: "anchor", eyebrow: "1989 · Last straw", title: "<b>Exxon Valdez</b> — the case that closed the argument.", sub: "A grounding in Prince William Sound and ~11 million gallons of crude oil. The chain of failures the inquiry uncovered is exactly what the ISM Code is designed to surface — before, not after." } },
            { kind: "Illus", props: { tone: "paper", art: "swordShield", heading: "What happened", body: "The Exxon Valdez was an oil tanker bound from Alaska to California. Shortly after midnight on 24 March 1989 it ran aground on Bligh Reef. The investigation found fatigue, navigational shortcuts, gaps in supervision and training — the kind of latent risk the Code is designed to flush out." } },
            { kind: "FlipCards", props: { cards: [
              { icon: "iconSword", front: "A sword", title: "If you don't comply…", back: "Failure to comply with the ISM Code can cause serious harm — to people, to the environment, and to the company. It can ultimately defeat an organisation." },
              { icon: "iconShield", front: "A shield", title: "If you do comply…", back: "When best efforts have been documented, audited and followed, the Code protects individuals and the company in the event an accident still occurs." },
              { icon: "iconStandard", front: "A standard", title: "Why it matters", back: "The Code provides an international standard for safe management and operation of ships — the safety of life, of ships, and the protection of the environment." },
            ]}}
          ]
        }
      ]
    },

    {
      id: "application",
      title: "Application",
      lede: "Where the Code applies, the legal hook through SOLAS, and why NSRS is included.",
      icon: "03",
      screens: [
        {
          id: "solas-ch9",
          title: "<b>SOLAS</b> Chapter 9",
          eyebrow: "Legal foundation",
          lede: "SOLAS Chapter 9 covers the safe operation of ships and requires every shipowner — and any person or company that has assumed responsibility for a ship — to comply with the ISM Code.",
          blocks: [
            { kind: "Hero", props: { variant: "paper", art: "scales", eyebrow: "Application · legal hook", title: "<b>SOLAS Chapter 9</b><br/>makes the Code law.", sub: "SOLAS — Safety of Life at Sea — is the most important treaty in merchant shipping. Chapter 9 added the ISM Code to its scope, turning safety management from best practice into treaty obligation." } },
            { kind: "Tabs", props: { tabs: [
              { label: "What SOLAS is", heading: "The Safety of Life at Sea convention", body: "SOLAS — the International Convention for the Safety of Life at Sea — is the most important treaty governing merchant ship safety. Chapter 9 added the ISM Code to its scope, making safety management a treaty obligation rather than a matter of best practice." },
              { label: "Who it applies to", heading: "Owners and operators", body: "The chapter applies to every shipowner — and to any person or company that has assumed responsibility for a ship from the owner. There is no opt-out for a vessel that is operated under a different commercial arrangement." },
              { label: "How it's enforced", heading: "Through Flag and Port states", body: "Compliance is verified by the ship's Flag State, with audits, inspections and the issuing of certificates. Port State Control inspectors can detain a non-compliant vessel anywhere in the world." },
            ]}},
            { kind: "Callout", props: { label: "Purpose of the Code", body: "To provide an international standard for the safe management and operation of ships — to ensure the safety of life, safer ships, and the protection of the environment." } },
          ]
        },
        {
          id: "sword-shield",
          title: "Sword and shield",
          eyebrow: "How the Code behaves",
          lede: "Two ways to think about your relationship with the Code.",
          blocks: [
            { kind: "Hero", props: { variant: "gradient", art: "swordShield", eyebrow: "How the Code behaves", title: "A <b>sword</b> and a <b>shield</b>.", sub: "The same set of clauses can cut against you or stand in front of you. Which one depends entirely on what you've documented, audited and actually done." } },
            { kind: "FlipCards", props: { cards: [
              { icon: "iconSword", front: "As a sword", title: "If you don't comply…", back: "Failure to comply with the ISM Code can be wielded against an individual or a company. Investigators, regulators and insurers will use the Code to test whether something should have been prevented." },
              { icon: "iconShield", front: "As a shield", title: "If you do comply…", back: "Comply, document, audit and act, and the Code becomes the strongest defence you have. It demonstrates that you and the company exercised proper, planned, evidenced care." },
            ]}},
          ]
        },
        {
          id: "why-nsrs",
          title: "So what — why does this matter for NSRS?",
          eyebrow: "Application to NSRS",
          lede: "The Code isn't a shipping-industry abstraction. It applies to NSRS SRV1 directly.",
          blocks: [
            { kind: "Hero", props: { variant: "photo-bottom", image: "design/assets/ships.jpg", eyebrow: "Why this matters here", title: "<b>NSRS SRV1</b> is a merchant ship in the eyes of the law.", sub: "Registered as a Passenger Carrying Submersible. Held to the same standard as any other vessel under the Code." } },
            { kind: "Text", props: { body: ["Under the Merchant Shipping Act, NSRS SRV1 is registered as a Submarine Rescue Submersible Craft and deemed by the Flag State to be a Passenger Carrying Submersible.", "The ISM Code (Statute) is therefore applied to NSRS SRV1 as a merchant ship. We must comply with the law."] } },
            { kind: "Stats", props: { items: [
              { num: "<b>1</b>", label: "Vessel: NSRS SRV1" },
              { num: "Class", label: "Passenger Carrying Submersible" },
              { num: "Statute", label: "ISM Code applies" },
            ]}},
          ]
        }
      ]
    },

    {
      id: "certification",
      title: "Certification",
      lede: "The two certificates required to operate at sea legally — what they are, what they mean and how long they last.",
      icon: "04",
      screens: [
        {
          id: "two-certificates",
          title: "Two certificates, both required",
          eyebrow: "Certification",
          lede: "To operate at sea legally, NSRS SRV1 must be certified, and JFD as the operator must be certified. The ISM Code requires two distinct certificates working together.",
          blocks: [
            { kind: "Hero", props: { variant: "blueprint", art: "certificates", eyebrow: "Section 04 · Certification", title: "Two certificates,<br/><b>both required</b>.", sub: "One for the company. One for the ship. Either alone won't fly — and neither is permanent." } },
            { kind: "FlipCards", props: { landscape: true, cards: [
              { icon: "iconDoc", front: "Document of Compliance (DOC)", title: "DOC", back: "Issued to the company. Confirms that the operator's Safety Management System meets the requirements of the ISM Code for the relevant ship type." },
              { icon: "iconSmc", front: "Safety Management Certificate (SMC)", title: "SMC", back: "Issued to the ship. Confirms that the ship is being operated in accordance with the company's approved Safety Management System." },
            ]}},
            { kind: "Text", props: { heading: "Why both?", body: ["The DOC says the company knows how to run a safe operation. The SMC says this particular ship is actually being run that way. Either certificate alone is not enough — and neither is permanent. Both rely on regular audits to remain valid."] } },
          ]
        },
        {
          id: "doc",
          title: "Document of Compliance (DOC)",
          eyebrow: "DOC · validity",
          lede: "Held by the company. Verified annually.",
          blocks: [
            { kind: "Hero", props: { variant: "paper", art: "certificates", eyebrow: "Document of Compliance", title: "The <b>company's</b> certificate.", sub: "Says the operator knows how to run a safe ship. Five-year validity — with a verification audit every twelve months." } },
            { kind: "Tabs", props: { tabs: [
              { label: "What it is", heading: "Issued to the company", body: "The DOC certifies that the company's Safety Management System has been audited and found to comply with the ISM Code, for the types of ship listed on the certificate." },
              { label: "Validity", heading: "Five years, with annual verification", body: "The DOC is valid for up to five years. It is subject to an annual verification audit — miss the audit window and the certificate lapses." },
              { label: "What audits look at", heading: "Top-tier evidence", body: "Audits review top-tier policy, procedure manuals, internal audit programmes, management review records, near-miss reporting, and the work of the Designated Person Ashore." },
            ]}},
          ]
        },
        {
          id: "smc",
          title: "Safety Management Certificate (SMC)",
          eyebrow: "SMC · validity",
          lede: "Held by the ship. Verified at intermediate audit.",
          blocks: [
            { kind: "Hero", props: { variant: "gradient", art: "submersible", eyebrow: "Safety Management Certificate", title: "The <b>ship's</b> certificate.", sub: "Says this particular vessel is being operated in line with the company's approved SMS. Five years, intermediate audit at the midpoint." } },
            { kind: "Tabs", props: { tabs: [
              { label: "What it is", heading: "Issued to the ship", body: "The SMC certifies that the operation of the ship is in accordance with the company's approved Safety Management System." },
              { label: "Validity", heading: "Five years, with intermediate audit", body: "The SMC is valid for up to five years. An intermediate audit between the second and third anniversary confirms that practice on board still matches what is documented." },
              { label: "If it lapses", heading: "The ship cannot legally trade", body: "Without a valid SMC the vessel cannot operate at sea under the Code. Port State Control may detain it; insurers may withdraw cover." },
            ]}},
          ]
        },
        {
          id: "cert-match",
          title: "Quick check: which certificate is which?",
          eyebrow: "Knowledge activity",
          lede: "Drag each statement to the right certificate.",
          blocks: [
            { kind: "Hero", props: { variant: "gradient", art: "checklist", eyebrow: "Quick check", title: "Which is which?", sub: "Drag each statement to the certificate it belongs to." } },
            { kind: "DragDrop", props: {
              instruction: "Match each statement to the certificate it describes. You can drag a chip back to the bank to move it.",
              items: [
                { id: "a", label: "Issued to the company" },
                { id: "b", label: "Issued to the ship" },
                { id: "c", label: "Verified by an annual audit" },
                { id: "d", label: "Verified by an intermediate audit" },
              ],
              targets: [
                { id: "doc", label: "Document of Compliance", accept: "a" },
                { id: "smc", label: "Safety Management Certificate", accept: "b" },
                { id: "doc2", label: "DOC validity", accept: "c" },
                { id: "smc2", label: "SMC validity", accept: "d" },
              ]
            }},
          ]
        }
      ]
    },

    {
      id: "compliance",
      title: "Compliance & SMS",
      lede: "What's in the Code, and what a working Safety Management System looks like in practice on NSRS.",
      icon: "05",
      screens: [
        {
          id: "code-content",
          title: "What's <b>in</b> the Code",
          eyebrow: "Code content",
          lede: "A practical map of the elements every Safety Management System must include.",
          blocks: [
            { kind: "Hero", props: { variant: "paper", art: "smsHandbook", eyebrow: "Section 05 · Compliance", title: "What's <b>in</b> the Code.", sub: "Twelve elements. Each one shows up somewhere in the routines, paperwork and decisions on board." } },
            { kind: "CodeTable", props: {
              headers: ["Element", "What it covers"],
              rows: [
                ["1", "General — definitions, objectives, application"],
                ["2", "Safety and environmental protection policy"],
                ["3", "Company responsibilities and authority"],
                ["4", "Designated Person(s)"],
                ["5", "Master's responsibility and authority"],
                ["6", "Resources and personnel"],
                ["7", "Shipboard operations"],
                ["8", "Emergency preparedness"],
                ["9", "Reports and analysis of non-conformities, accidents and hazardous occurrences"],
                ["10", "Maintenance of the ship and equipment"],
                ["11", "Documentation"],
                ["12", "Company verification, review and evaluation"],
              ]
            }}
          ]
        },
        {
          id: "practical-aboard",
          title: "How the Code works <b>on board</b>",
          eyebrow: "In practice",
          lede: "Day to day, the Code is invisible — until something goes wrong, or an auditor asks. It runs on routines, paperwork and habits.",
          blocks: [
            { kind: "Hero", props: { variant: "photo-bottom", image: "design/assets/workshop.jpg", eyebrow: "In practice", title: "How the Code works <b>on board</b>.", sub: "Routines, records, reviews and people — the four things every audit looks for." } },
            { kind: "Carousel", props: { slides: [
              { eyebrow: "Routines", title: "Pre-dive and post-dive checks", body: "Documented in the Operations Guidance and signed off in the log. Skipping a step is not a saved minute — it's an open finding at the next audit.", imgLabel: "Pre-dive" },
              { eyebrow: "Records", title: "Logs that prove what happened", body: "Logs, records, near-miss reports and Engineering Reports (ERs) form the audit trail that demonstrates the SMS is being lived, not shelved.", imgLabel: "Logs & records" },
              { eyebrow: "Reviews", title: "Management review and audits", body: "Internal ISM audits, the Master's Audit, external Flag State and Port State Control inspections together close the loop.", imgLabel: "Management review" },
              { eyebrow: "People", title: "Top-tier commitment", body: "The Code starts with management. Without visible top-tier commitment, no procedure manual will hold up under audit pressure.", imgLabel: "Crew briefing" },
            ]}}
          ]
        },
        {
          id: "sms-elements",
          title: "Inside our Safety Management System",
          eyebrow: "Compliance",
          lede: "Each ship class must have a working SMS. NSRS's is built from these seven elements.",
          blocks: [
            { kind: "Hero", props: { variant: "blueprint", art: "smsHandbook", eyebrow: "Inside our SMS", title: "<b>Seven elements</b><br/>that have to work together.", sub: "Tap each row to see how NSRS implements it." } },
            { kind: "Accordion", props: { items: [
              { q: "Commitment from top management", a: <>Visible engagement from senior leaders is required by the Code. Without it, every other element falls over at audit. JFD demonstrates this through documented policy, board-level review and the resourcing of safety roles.</> },
              { q: "A Top Tier Policy Manual", a: <>Our top tier comprises the <b>SEMP</b> (Safety and Environmental Management Plan), <b>CMP</b>, <b>MMP</b>, <b>SECR</b>, <b>QMP</b> and the <b>MOSHIP Handbook</b>. Together they set out how we behave.</> },
              { q: "A Procedures Manual", a: <>Documents what is actually done on board, in normal operations and in emergencies — <b>SOPs</b>, <b>EOPs</b>, OP Guidance Volume 2, logs, records, pre-dives, post-dives.</> },
              { q: "Internal and external audits", a: <>Internal ISM audits, the Master's Audit, external Flag State and Port State Control inspections — used to verify that the ship is doing what is documented.</> },
              { q: "A Designated Person Ashore (DP)", a: <>The DP is the link between ships and shore staff and verifies SMS implementation. For NSRS that responsibility is held by <b>Greg Cotton</b>, <b>Rick Smith</b> and <b>Piers Barker</b>.</> },
              { q: "A non-conformity / corrective action system", a: <>Safety Reports, Near Misses, ERs and CARs identify where actual practice diverges from documented practice — and trigger corrective action.</> },
              { q: "Regular management reviews", a: <>The Audit Schedule, H&S Committee, NSRS Management Meetings and PSEC together provide the regular review cycle the Code requires.</> },
            ]}},
            { kind: "Callout", props: { label: "Maintenance", body: <>The Code also requires the ship to be maintained in conformity with the relevant rules and regulations and any additional requirements set by the company. NSRS is classified by <b>Lloyd's Register</b> — Certificate of Class, SAFCON.</> } },
          ]
        },
      ]
    },

    {
      id: "roles",
      title: "Roles & responsibilities",
      lede: "The Master / Pilot in Charge, MOSHIPS and the Designated Person — who does what, and where authority sits.",
      icon: "06",
      screens: [
        {
          id: "master-pic",
          title: "The Master / Pilot in Charge",
          eyebrow: "OP Guide Vol 2 · Section 5",
          lede: "The nominated pilot for the dive — recorded in the authorised pre-dive documentation — is the Pilot in Charge, and is deemed to be the Master of the SRV.",
          blocks: [
            { kind: "Hero", props: { variant: "gradient", art: "compass", eyebrow: "Section 06 · Roles", title: "The <b>Master</b> /<br/>Pilot in Charge.", sub: "Authority at sea is supreme and overriding. The Code is explicit about it — and so is OP Guide Vol 2, Section 5." } },
            { kind: "Tabs", props: { tabs: [
              { label: "Authority", heading: "Supreme and overriding at sea", body: "The Master (Rescue Manager / Pilot in Charge when dived) is in overall command of all personnel and operations aboard NSRS SRV1. Their authority at sea is supreme and overriding. They have the authority and responsibility to make decisions with respect to safety and pollution prevention, and to request assistance from the JFD SERS Division or any other appropriate source." },
              { label: "Responsibilities", body: <ul className="jfs">
                  <li>The safe and efficient day-to-day operation of the vessel</li>
                  <li>Complying with the laws of navigation and the body of statutes that regulate ships and seagoing matters</li>
                  <li>Maintaining the seaworthiness of the vessel and protecting the interests of JFD</li>
                  <li>Accomplishing the objectives of each NSRS deployment</li>
                  <li>Implementing the Safety and Environmental Protection policies of the NSRS SMS</li>
                  <li>Motivating the crew in the observation of those policies</li>
                  <li>Monitoring and reviewing the SMS, reporting any deficiencies to the JFD Head of Capability / JFD Global Head of SERS</li>
                  <li>Preparing the annual Master's review of the SMS</li>
                </ul> },
              { label: "Reading", heading: "OP Guidance Volume 2", body: "The full responsibilities of the Master are set out in OP Guide Vol 2 — required reading. Section 5 of the ISM Code and Regulation 11 of the Code together establish the Master's authority." },
            ]}},
          ]
        },
        {
          id: "moships",
          title: "MOSHIPS",
          eyebrow: "Embarked operations",
          lede: "When NSRS embarks on a host vessel, two systems briefly overlap.",
          blocks: [
            { kind: "Hero", props: { variant: "photo-bottom", image: "design/assets/ships.jpg", eyebrow: "MOSHIPS", title: "Two systems,<br/><b>one bridging document</b>.", sub: "Embarked: combined cover. Launched: NSRS SMS in full. The MOSHIP Handbook makes the handover explicit." } },
            { kind: "ClickReveal", props: { items: [
              { icon: "✓", title: "All MOSHIPS are IMO ISM compliant", reveal: "Every host vessel we work with is itself certified to the same standard, so there's no compliance vacuum when we embark." },
              { icon: "🜉", title: "A bridging document exists", reveal: "NSRS holds a bridging document between our SMS and the host vessel's system — the MOSHIP Handbook. It defines the interface explicitly." },
              { icon: "↧", title: "Embarked: combined cover", reveal: "While embarked, NSRS comes under a combination of the MOSHIP system and our own SMS. Both apply." },
              { icon: "↥", title: "Launched: NSRS SMS", reveal: "Once the SRV is launched, our SMS applies in full. Authority sits with the Pilot in Charge." },
            ]}},
          ]
        },
        {
          id: "dp",
          title: "Designated Person Ashore",
          eyebrow: "DP · the link",
          lede: "The Code requires a Designated Person ashore to act as the link between ships and shore — and to verify SMS implementation.",
          blocks: [
            { kind: "Hero", props: { variant: "blueprint", art: "orgChart", eyebrow: "Designated Person Ashore", title: "<b>The link</b><br/>between ship and shore.", sub: "For NSRS the DP responsibility is shared across three named individuals — always-on coverage, and a route for safety concerns that bypasses normal management channels if it has to." } },
            { kind: "Illus", props: { tone: "paper", art: "orgChart", heading: "Three points of contact", body: "Greg Cotton, Rick Smith and Piers Barker share the DP role across NSRS. Crew can — and should — escalate safety concerns to any of them at any time." } },
            { kind: "Hotspot", props: {
              hint: "Click the markers",
              spots: [
                { x: 24, y: 38, title: "Greg Cotton", body: "Designated Person — first point of contact for SMS verification matters during deployment." },
                { x: 50, y: 50, title: "Rick Smith", body: "Designated Person — secondary contact, often the route for routine SMS queries." },
                { x: 76, y: 42, title: "Piers Barker", body: "Designated Person — third named DP, ensuring continuous coverage at all times." },
              ]
            }},
          ]
        }
      ]
    },

    {
      id: "audit",
      title: "Audit & closing",
      lede: "Your part in the MCGA audit, what 'when it goes wrong' looks like, and where to ask for help.",
      icon: "07",
      screens: [
        {
          id: "audit",
          title: "Your part in the <b>MCGA audit</b>",
          eyebrow: "Audit · preparation",
          lede: "When the MCGA arrives, the question is rarely 'do we have a manual?' — it's 'are you doing what the manual says?'",
          blocks: [
            { kind: "Hero", props: { variant: "paper", art: "checklist", eyebrow: "Section 07 · Audit", title: "Your part in the <b>MCGA audit</b>.", sub: "The auditor isn't there to read the manual. They're there to see whether you live by it." } },
            { kind: "ClickReveal", props: { items: [
              { icon: "1", title: "Read the Code", reveal: "Available in the HQ or online. Knowing what the Code requires is the foundation — auditors will assume you've read it." },
              { icon: "2", title: "Configuration & maintenance", reveal: "Understand your part in the configuration and maintenance of NSRS. If you sign for it, you own it." },
              { icon: "3", title: "Operations", reveal: "Understand your part in the operation of NSRS. Pre-dive, dive, post-dive — the Code lives in those routines." },
              { icon: "4", title: "Stay inside the SMS", reveal: "Understand your part and operate within the boundaries of the JFD/NSRS Safety Management System. If you can't, raise it — don't work around it." },
            ]}},
          ]
        },
        {
          id: "scenario",
          title: "When it goes wrong",
          eyebrow: "Scenario",
          lede: "Imagine an MCGA inspector arrives unannounced, mid-deployment. Walk through how the Code protects you — provided the system has been lived.",
          blocks: [
            { kind: "Hero", props: { variant: "gradient-warm", art: "auditCycle", eyebrow: "Scenario", title: "When it <b>goes wrong</b>.", sub: "An unannounced inspection, mid-deployment. Walk through it step by step." } },
            { kind: "Scenario", props: {
              title: "An unannounced MCGA inspection",
              premise: "The team is mid-deployment when the MCGA inspector arrives quayside. They want to see the SMS in action — not on paper. How does the system hold up?",
              steps: [
                { title: "Documents", body: "Inspector asks to see the DOC and SMC. The Master produces both, current and signed by the Flag State." },
                { title: "Practice", body: "Inspector observes a pre-dive routine. The crew complete it as documented — no shortcuts, no missing entries." },
                { title: "Reporting", body: "Inspector asks how a recent near-miss was handled. The DP receipt is filed; corrective action is logged and closed out." },
                { title: "Review", body: "Inspector sees the Master's annual SMS review and the latest internal audit minutes. The inspection closes with a clean finding." },
              ]
            }},
            { kind: "Modal", props: { trigger: "What if the inspection isn't clean?", title: "When findings are raised", children: <>
              <p>Findings fall into three categories: <b>observations</b> (room for improvement), <b>non-conformities</b> (a clause is not being met) and <b>major non-conformities</b> (an immediate threat to safety).</p>
              <p>Each is logged, assigned an owner, and tracked to closure inside the SMS. A major non-conformity may suspend the SMC until corrective action is verified — which is why catching gaps internally, before a formal audit, is the whole point.</p>
              <p>Speak to your Designated Person early. The Code rewards transparency.</p>
            </> } },
          ]
        },
        {
          id: "questions",
          title: "Any questions?",
          eyebrow: "Closing",
          lede: "If anything in this module isn't clear, come and see me — or speak to your Designated Person ashore.",
          blocks: [
            { kind: "Hero", props: { variant: "photo-bottom", image: "design/assets/horizon-sea.jpg", eyebrow: "Closing", title: "<b>Any questions?</b>", sub: "You've finished the module. Come and see me — or speak to your Designated Person ashore." } },
            { kind: "Illus", props: { tone: "blue", art: "waves", heading: "We're here to help", body: "You can find the full ISM Code in the HQ or online, and your team is the best route into it. Treat this module as the start of the conversation, not the end. Once you've completed the final knowledge check, this module will remain in your library on HowNow — refer back to it whenever needed." } },
            { kind: "Callout", props: { label: "Module complete", body: <>You've finished the NSRS ISM Code module. Visit <b>jfdglobal.com</b> for more.</> } },
          ]
        },
      ]
    },
  ]
};

// Add a knowledge check at the end of every section.
// (One MCQ per section — as requested.)
const QUIZZES = {
  intro: {
    question: "Which best describes the purpose of the ISM Code?",
    options: [
      "To set fuel-efficiency targets for merchant ships",
      "To provide an international standard for safe management and operation of ships, and protection of the environment",
      "To replace national maritime law with a single global rulebook",
      "To certify individual seafarers",
    ],
    correct: 1,
    feedback: "The Code provides an international standard for the safe management and operation of ships — to ensure the safety of life, safer ships, and the protection of the environment.",
  },
  history: {
    question: "Which two events most directly shaped the ISM Code?",
    options: [
      "Titanic (1912) and Torrey Canyon (1967)",
      "Herald of Free Enterprise (1987) and Exxon Valdez (1989)",
      "Amoco Cadiz (1978) and Costa Concordia (2012)",
      "Estonia (1994) and Deepwater Horizon (2010)",
    ],
    correct: 1,
    feedback: "Herald of Free Enterprise (1987) gave the IMO the momentum it needed; Exxon Valdez (1989) was the 'last straw' that locked the Code in as international law.",
  },
  application: {
    question: "Why does the ISM Code apply to NSRS SRV1?",
    options: [
      "Because JFD has voluntarily opted in",
      "Because SRV1 is registered as a Submarine Rescue Submersible Craft and deemed by the Flag State to be a Passenger Carrying Submersible — so the Code applies as for a merchant ship",
      "Because the Royal Navy requires it",
      "Only when the SRV is launched, never when embarked",
    ],
    correct: 1,
    feedback: "Under the Merchant Shipping Act, NSRS SRV1 is registered as a Passenger Carrying Submersible — and the Code (statute) applies to it as a merchant ship.",
  },
  certification: {
    question: "Which combination of certificates does the ISM Code require for NSRS?",
    options: [
      "A Document of Compliance only — held by the company",
      "A Safety Management Certificate only — held by the ship",
      "Both a Document of Compliance (held by the company) and a Safety Management Certificate (held by the ship)",
      "A single, combined ISM certificate covering both",
    ],
    correct: 2,
    feedback: "Both certificates are required — and they cover different things. The DOC certifies the company's SMS; the SMC certifies that the ship is operated in line with that SMS.",
  },
  compliance: {
    question: "Which is NOT one of the elements of an SMS required by the ISM Code?",
    options: [
      "A Top Tier Policy Manual",
      "Internal and external audits",
      "A Designated Person Ashore",
      "A signed crew bonus scheme tied to audit outcomes",
    ],
    correct: 3,
    feedback: "Tying audit outcomes to crew bonuses isn't a Code requirement — and would, in fact, undermine the open reporting the Code depends on. The other three are core elements.",
  },
  roles: {
    question: "Whose authority is described in the Code as 'supreme and overriding' at sea?",
    options: [
      "The shipowner",
      "The Designated Person Ashore",
      "The Master (Rescue Manager / Pilot in Charge when dived)",
      "The Flag State inspector",
    ],
    correct: 2,
    feedback: "The Master / Pilot in Charge is in overall command of personnel and operations on board. Their authority at sea is supreme and overriding — including the authority to request assistance from JFD SERS or any appropriate source.",
  },
  audit: {
    question: "What's your most useful preparation for an MCGA audit?",
    options: [
      "Memorising every clause of the ISM Code",
      "Reading the Code, knowing your part in NSRS configuration, maintenance and operations, and operating inside the SMS",
      "Hiding any near-miss reports from the previous quarter",
      "Waiting for the Master to brief you on the morning of the audit",
    ],
    correct: 1,
    feedback: "Read the Code, understand your part in NSRS, and operate inside the SMS. If you can't comply, raise it — don't work around it.",
  },
};

window.COURSE = COURSE;
window.QUIZZES = QUIZZES;

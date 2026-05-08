# ISM Code eLearning Module — QA Analysis Report

**Prepared by:** Learning Design Architect (Claude AI)
**Date:** 28 April 2026
**Module:** NSRS ISM Code 2025 eLearning
**Source reviewed:** JFD Presentation Template - ISM 2025 Piers.pptx (27 slides)
**Module reviewed:** `course.jsx`, `app.jsx`, `blocks.jsx` (Development folder)

---

## 1. Summary of Findings

The module is a well-constructed, visually polished eLearning experience. The overall architecture is strong: seven logically sequenced sections with a knowledge check at the end of each, a clean sidebar navigation, good interaction variety (flip cards, accordions, tabs, timelines, click-to-reveal, drag-and-drop, scenarios), and consistent JFD brand voice. The module covers all major themes from the source PowerPoint.

However, there are several significant issues that must be resolved before the module goes live:

**Strengths:**
- Logical section structure that improves on the linear slide presentation
- Good interaction variety — no single type dominates
- Knowledge checks are well-written and accurately reflect source content
- The Master/Pilot in Charge content is faithfully and completely reproduced
- The MOSHIPS section accurately captures all four source points
- The SMS compliance accordion correctly lists all seven elements with accurate NSRS-specific document names
- The sword/shield metaphor is well-handled in two different sections

**Issues requiring action (by severity):**

| Priority | Issue |
|---|---|
| HIGH | Slide 6 says "Prior to **1998**" but module correctly says "late 1980s" — however, this discrepancy in the source should be flagged to the client |
| HIGH | Slides 15–16 (DOC/SMC) contain specific regulatory detail from SmartArt that is absent from the module — critical compliance content missing |
| HIGH | Slides 17–19 contain the full functional requirements of the ISM Code and practical implications that are missing from the module |
| HIGH | Slide 23 (Designated Person) contains a specific DP name error: source says "Greg **Cotten**" (and "Chief Engineer") but module says "Greg **Cotton**" — needs client verification |
| HIGH | Slide 25 ("When it goes wrong") contains three specific statements from the source that are absent from the module's scenario |
| MEDIUM | The module introduces a "12-element ISM Code table" (CodeTable block) that has no basis in the source material — the source describes functional requirements, not a numbered 12-element framework |
| MEDIUM | Slide 7 speaker notes contain detailed Herald of Free Enterprise facts (193 lives lost, Zeebrugge, Lord Justice Sheen, Townsend Car Ferries) that are not reflected in the module |
| MEDIUM | Slide 8 speaker notes contain specific Exxon Valdez facts (Prince William Sound, Bligh Reef, 10+ million gallons, 24 March 1989) that are underrepresented |
| LOW | The DP Hotspot interaction is misleading — it uses a decorative world-map dot pattern rather than an org chart image, and the DP role descriptions are fabricated |
| LOW | The video placeholder in `history > ism-origins` has no actual video, and the duration "02:01 / 02:01" is hardcoded — this is a real placeholder UI state that must be resolved |
| LOW | Several image assets appear to be generic stock images (`workshop.jpg`, `ocean.jpg`, `ships.jpg`) that are not NSRS-specific |

---

## 2. Content Accuracy Issues

These are cases where the module contains content that contradicts or is unsupported by the source.

### Issue 1 — "1998" vs "late 1980s" (Source: Slide 6)

**Location:** `course.jsx`, section `history`, screen `ism-origins`, `lede` text.

**Module says:** "Prior to the late 1980s, the IMO had become increasingly concerned..."

**Source says (Slide 6):** "Prior to **1998**, the IMO had become increasingly concerned about the safe operation of shipping on the high seas."

**Assessment:** The source slide itself appears to contain a typo — 1998 makes no sense given the Code was enacted in 1988. The module's correction to "late 1980s" is logically sound and matches the speaker notes. However, this discrepancy should be flagged to the client for confirmation before the module goes live, as the module has silently corrected a source document.

**Action:** Flag to client for sign-off. Do not change the module text unless directed, as "late 1980s" is factually correct.

---

### Issue 2 — 12-element ISM Code table has no source basis

**Location:** `course.jsx`, section `compliance`, screen `code-content`, `CodeTable` block.

**Module says:** A table titled "Twelve elements. Each one shows up somewhere in the routines, paperwork and decisions on board" listing 12 numbered elements (General, Safety and environmental protection policy, Company responsibilities and authority, etc. through to "Company verification, review and evaluation").

**Source says:** The source does not present the ISM Code as a numbered 12-element framework at any point. Slide 17 (SmartArt) lists six **functional requirements** for an SMS:
1. A safety and environmental policy
2. Instructions and procedures for safe operation
3. Defined levels of authority and lines of communication
4. Procedures for reporting accidents and non-conformities
5. Procedures to prepare for and respond to emergency situations
6. Procedures for internal audits and management reviews

**Assessment:** The 12-element table appears to be drawn from the actual ISM Code document itself (which does have 16 elements/clauses), but this content was not presented to learners in the source PowerPoint. It is reasonable additional context, but it is presented as though it came from the source, and the element descriptions and numbering differ from both the source slides and the formal ISM Code. The source presenter chose to use functional requirements — the module should reflect that choice. There is a risk the table contains inaccuracies if it is not drawn directly from the official ISM Code text.

**Action:** Replace the CodeTable with the six functional requirements from Slide 17 of the source. If the 12-element structure is to be retained, it must be reviewed against the actual ISM Code document and clearly attributed.

---

### Issue 3 — DP name spelling discrepancy

**Location:** `course.jsx`, section `roles`, screen `dp`, `Illus` block and `Hotspot` spots.

**Module says:** "Greg **Cotton**"

**Source says (Slide 23 SmartArt):** "Our nominated DPA is Greg **Cotten** – JFD SERS **Chief Engineer**."

**Assessment:** There is a spelling discrepancy in the DP's surname (Cotton vs Cotten). The module also omits the DP's role title (JFD SERS Chief Engineer), which is present in the source. This is a named individual in a safety-critical role — the spelling must be verified with the client and corrected if wrong.

**Action:** Verify the correct spelling of "Greg Cotton/Cotten" with the client. Add the role title "JFD SERS Chief Engineer" to the module where Greg Cotton/Cotten is introduced.

---

### Issue 4 — DP Hotspot descriptions are fabricated

**Location:** `course.jsx`, section `roles`, screen `dp`, `Hotspot` block.

**Module says (Hotspot spot descriptions):**
- Greg Cotton: "first point of contact for SMS verification matters during deployment"
- Rick Smith: "secondary contact, often the route for routine SMS queries"
- Piers Barker: "third named DP, ensuring continuous coverage at all times"

**Source says:** The source (Slide 23 SmartArt) attributes the full DP responsibility definition to the role and identifies "Our nominated DPA is Greg Cotten – JFD SERS Chief Engineer." It does not assign ranked or differentiated roles to each of the three named individuals.

**Assessment:** The hierarchy and descriptions ascribed to Rick Smith and Piers Barker ("secondary," "third," "routine queries") have no basis in the source and could cause confusion or offence. The source treats all three as co-holders of the role.

**Action:** Update all three Hotspot body texts to reflect the source accurately — all three are co-designated DPs providing continuous coverage. Remove the hierarchy implied by "first," "secondary," and "third" contact language.

---

### Issue 5 — SMC audit wording — "intermediate" vs source wording

**Location:** `course.jsx`, section `certification`, screen `smc`, Tabs block (Validity tab).

**Module says:** "An intermediate audit between the second and third anniversary confirms that practice on board still matches what is documented."

**Source says (Slide 16 SmartArt):** "A Safety Management Certificate is valid for a period of five years from the date of issue with an **interim** audit carried out **between the 2nd and 3rd year** by the Flag State."

**Assessment:** The module uses "intermediate" where the source uses "interim." These are not synonymous in a regulatory context — "interim" is the correct ISM Code terminology. The timing is correctly stated.

**Action:** In `course.jsx`, screen `smc`, Validity tab body text: change "intermediate audit" to "interim audit" to match regulatory language from the source.

---

## 3. Missing or Underrepresented Source Content

These are important learning points from the source that are absent or insufficiently covered in the module.

### Missing 1 — DOC regulatory detail (Slide 15)

**Source (Slide 15 SmartArt):**
> "A Document of Compliance is issued to a company which complies with the requirements of the International Safety Management Code. This document is issued by the **Flag State or by an organisation recognised by the Flag State**. A Document of Compliance is valid for a period of five years from the date of issue provided that an **audit is carried out annually by the Flag State or by an organisation recognised by Flag**."

**Module coverage:** The module's DOC section (screen `doc`) covers the five-year validity and annual audit, but does not state that the DOC is issued by the Flag State or an organisation recognised by the Flag State. The issuing authority is regulatory detail that a learner may be asked about in an audit.

**Action:** In `course.jsx`, screen `doc`, Tabs "What it is" tab body: add the sentence "The DOC is issued by the Flag State, or by an organisation recognised by the Flag State." In the "Validity" tab: change to "...subject to an annual audit carried out by the Flag State or an organisation recognised by the Flag State."

---

### Missing 2 — SMC regulatory detail including Flag State issuing authority (Slide 16)

**Source (Slide 16 SmartArt):**
> "A certificate called a Safety Management Certificate, is issued to a ship by the **Flag State or an organisation recognised by the Flag State** once it has been verified that the company and its shipboard management operate in accordance with the **approved** safety management system."
> "A Safety Management Certificate is valid for a period of five years from the date of issue with an **interim** audit carried out between the 2nd and 3rd year **by the Flag State**."

**Module coverage:** The SMC's "What it is" tab body does not state who issues the SMC, and the "Validity" tab does not attribute the interim audit to the Flag State.

**Action:** In `course.jsx`, screen `smc`, Tabs "What it is" tab body: add "The SMC is issued by the Flag State, or by an organisation recognised by the Flag State." Validity tab: append "carried out by the Flag State" to the interim audit sentence.

---

### Missing 3 — Full ISM Code functional requirements (Slide 17)

**Source (Slide 17 SmartArt):**
The ISM Code requires every company to develop, implement and maintain an SMS which includes six functional requirements:
1. A safety and environmental policy
2. Instructions and procedures to ensure the safe operation of ships and protection of the environment, in compliance with relevant international and Flag State legislation
3. Defined levels of authority and lines of communication between and amongst shore and shipboard personnel
4. Procedures for reporting accidents and non-conformities with the provisions of the Code
5. Procedures to prepare and respond to emergency situations
6. Procedures for internal audits and management reviews

**Module coverage:** The `code-content` screen uses a 12-element table that does not reflect this source content. None of these six functional requirements appears in the module with this framing.

**Action:** Replace the CodeTable block in screen `code-content` with a block presenting these six functional requirements as the primary content. The source language ("develop, implement and maintain a safety management system") should be preserved. See Specific Change Instructions (Section 5) for the full replacement content.

---

### Missing 4 — Practical implications of the ISM Code on board (Slides 18–19)

**Source (Slides 18–19 SmartArt):**
The main practical implications of the ISM Code are that vessels:
- Risk assess normal working procedures and, based on the risk assessment, have safe working procedures and practices
- Risk assess emergency responses and have emergency procedures for the vessel
- Have internal and external audits as per the certification requirements
- Implement and operate a **planned maintenance system**
- Have safety meetings
- Have Safety Observation, Accident and non-conformity reports and systems for handling report findings
- Have a Designated Person Ashore
- Have a Safety Management System
- The company should have a good safety culture that is understood and implemented throughout all levels of the company

**Module coverage:** The `practical-aboard` screen (Carousel) covers four of these areas (routines, records, reviews, people) but omits:
- Risk assessment of normal working procedures (explicitly stated in source)
- The planned maintenance system (explicitly stated in source)
- Safety meetings (explicitly stated in source)
- The company-wide safety culture requirement (final point, Slide 19)

**Action:** Expand the Carousel in screen `practical-aboard` or add a ClickReveal block to capture the missing practical implications. Specifically add: risk assessment of working procedures, the planned maintenance system, and safety meetings. The safety culture statement from Slide 19 should appear as a Callout at the end of this screen.

---

### Missing 5 — "When it goes wrong" consequences (Slide 25)

**Source (Slide 25 SmartArt):**
> "The consequences of not operating within the bounds of the SMS are **catastrophic and far reaching at both the individual level and collective**."
> "The resulting investigation by the Flag State authority (MAIB) or HSE will be **painful, with all scrutinised**."
> "Use the Code as a Shield – **See It, Own it, Act on it.**"

**Module coverage:** The scenario screen (`scenario`) describes an MCGA inspection going well, which is the inverse situation. The source's "When it goes wrong" slide explicitly names the consequences: Flag State investigation (MAIB), HSE involvement, and individual/collective impact. None of this appears in the module. The "See It, Own it, Act on it" call-to-action is completely absent.

**Action:** Update the `scenario` screen to either (a) add a second scenario branch covering a failed SMS, incorporating the MAIB/HSE consequence language from Slide 25, or (b) add a dedicated Callout block below the existing scenario with the three statements from Slide 25, including the "See It, Own it, Act on it" phrase verbatim.

---

### Missing 6 — Designated Person formal definition (Slide 23)

**Source (Slide 23 SmartArt):**
> "To ensure the safe operation of each ship and to provide a link between the Company and those on board, every Company, as appropriate, **should designate a person or persons ashore having direct access to the highest level of management**. The responsibility and authority of the designated person or persons should include **monitoring the safety and pollution prevention aspects of the operation of each ship** and ensuring that **adequate resources and shore-based support are applied, as required**."

**Module coverage:** The `dp` screen introduces the DP role and names the three individuals, but does not include the regulatory definition of the role, particularly:
- The requirement for **direct access to the highest level of management**
- The specific responsibility to monitor **safety and pollution prevention** aspects
- The requirement to ensure **adequate resources and shore-based support**

**Action:** In `course.jsx`, screen `dp`, the `Illus` block body text should be replaced or supplemented with the regulatory definition from Slide 23. The phrase "direct access to the highest level of management" is particularly important and should be visible to learners.

---

### Missing 7 — Herald of Free Enterprise detail (Slide 7 speaker notes)

**Source (Slide 7 speaker notes):**
Key facts: 193 lives lost; cross-channel Ro-Ro ferry; left Zeebrugge; bow door left open; assistant boatswain asleep; Lord Justice Sheen inquiry; Townsend Car Ferries Ltd. found equally blameworthy; Sheen Report quote: "From top to bottom the body corporate was infected with the disease of sloppiness."

**Module coverage:** The Timeline block in screen `ism-origins` mentions the capsizing and "systemic failures in how the operating company managed safety" but does not include the casualty figure (193 lives), the specific cause (bow door), or the landmark Sheen Report finding ("disease of sloppiness"). These facts are significant for a learner trying to understand why the Code exists — they are the emotional and factual anchor of the history section.

**Action:** Expand the Herald of Free Enterprise timeline event body in `course.jsx`, screen `ism-origins`, Timeline block, first event, to include: 193 lives lost; the immediate cause (bow door left open, assistant boatswain asleep); the Sheen Report finding that shore management (Townsend Car Ferries) was equally blameworthy; and the quote "infected with the disease of sloppiness."

---

### Missing 8 — Exxon Valdez specific facts (Slide 8 speaker notes)

**Source (Slide 8 speaker notes):**
Key facts: Prince William Sound; Bligh Reef; 24 March 1989; more than 10 million US gallons (37,000 tonnes) of crude oil; bound for Long Beach, California; struck reef at 12:04 a.m.

**Module coverage:** The Exxon Valdez screen (`exxon`) correctly describes fatigue, navigational shortcuts, and the chain of failures, but omits the volume of the spill (10+ million gallons) and the exact date. Given this is used to illustrate what happens when the Code is not followed, the scale of the spill is an important detail.

**Action:** Add the volume of the spill (~11 million US gallons / 37,000 tonnes) and the date (24 March 1989) to the `Illus` block body in screen `exxon`.

---

### Missing 9 — Regulation 11 citation for Master's authority (Slide 21)

**Source (Slide 21):**
> "The Pilot in Charge shall be deemed to be the 'Master' of the SRV in accordance with **Section 5 of the ISM Code and Regulation 11 of the Code**."

**Module coverage:** The `master-pic` screen `eyebrow` references "OP Guide Vol 2 · Section 5" and the Reading tab mentions "Section 5 of the ISM Code and Regulation 11 of the Code." The section eyebrow reference is slightly misleading — it implies Section 5 is from OP Guide Vol 2, when in fact Section 5 and Regulation 11 are ISM Code references. OP Guide Vol 2 is where the Master's full responsibilities are documented.

**Action:** In `course.jsx`, screen `master-pic`, correct the `eyebrow` from "OP Guide Vol 2 · Section 5" to "ISM Code · Section 5 & Regulation 11" to avoid conflating the ISM Code reference with the OP Guidance document. In the Reading tab, maintain the distinction: Section 5 and Regulation 11 are ISM Code references; OP Guide Vol 2 is where the NSRS-specific responsibilities are documented.

---

## 4. eLearning Design Improvements

### Design Issue 1 — Sword/shield content is duplicated across two sections

The sword/shield concept appears twice in the module:
1. In the `exxon` screen (History section) — as FlipCards in a History context
2. In the `sword-shield` screen (Application section) — as a standalone screen

This creates repetition that may confuse learners about where the concept belongs. The source introduces it once, on Slide 11, as part of the "Understand" content — which sits between history and application.

**Recommendation:** Consolidate into one treatment. Remove the FlipCards from the `exxon` screen (they are tonally incongruous with a case study) and retain the dedicated `sword-shield` screen in the Application section, expanded with the missing "standard" flip card (the third card in the `exxon` screen covers "A standard — why it matters," which is also source-backed from Slide 10).

---

### Design Issue 2 — CodeTable interaction is passive and unengaging

The 12-element table (compliance section, `code-content` screen) is the least interactive block in the module. It asks nothing of the learner and presents content that has no basis in the source (see Content Accuracy Issue 2). A table of this length is also inaccessible on mobile screen sizes.

**Recommendation:** Replace with the source's six functional requirements presented as a ClickReveal interaction, one item per card. This makes the content discoverable and memorable, and accurately reflects the source.

---

### Design Issue 3 — The Hotspot interaction in the DP screen is poorly matched to its content

The Hotspot block is designed for spatial/visual content — labelled diagrams, maps, dashboards. Using it to present three colleagues in a dotted-pattern background does not add any spatial meaning and looks like a cosmetic workaround. The three DP individuals do not have a spatial relationship to each other.

**Recommendation:** Replace the Hotspot with a FlipCards interaction (landscape variant), one card per DP. Front face: name and role. Back face: the regulatory context for their role (from Slide 23). This is more honest about the nature of the content and more useful to the learner.

---

### Design Issue 4 — The scenario does not model a failure

The `scenario` screen models a clean, successful MCGA inspection. This is valuable, but the source explicitly presents "When it goes wrong" (Slide 25) as a distinct topic — and the consequences described (MAIB/HSE involvement, catastrophic impact) are not covered anywhere in the module's scenario design.

**Recommendation:** Add a second scenario path or a post-scenario consequence panel that presents the failure case. The existing Modal block ("What if the inspection isn't clean?") partially addresses this, but its findings categories (observations, non-conformities, major non-conformities) go beyond the source content and should be reviewed for accuracy.

---

### Design Issue 5 — Knowledge check for the "audit" section is too easy

The `audit` knowledge check asks: "What's your most useful preparation for an MCGA audit?" with a clearly correct answer ("Reading the Code, knowing your part...") and two obviously wrong distractors ("Memorising every clause" and "Hiding near-miss reports"). The fourth option ("Waiting for the Master to brief you") is the only plausible distractor.

**Recommendation:** Redesign the distractors to be more realistic misconceptions — e.g., "Focus only on the DOC and SMC; the auditor won't go beyond the certificates" or "Prepare a written brief for the auditor explaining how NSRS operates."

---

### Design Issue 6 — No first-use definition of MCGA

The acronym MCGA (Maritime and Coastguard Agency) is used throughout the audit section without ever being defined. This would be an issue for new starters who may not be familiar with the UK regulatory context.

**Recommendation:** On first use of MCGA in the module (screen `audit`, Hero sub-text), expand it to "MCGA (Maritime and Coastguard Agency)" and add it to any glossary or pop-up system if one is implemented.

---

### Design Issue 7 — No first-use definition of MAIB

MAIB (Marine Accident Investigation Branch) is mentioned in the Modal block but never defined. Given this is the body that would investigate a serious incident, learners should know what it is.

**Recommendation:** Define MAIB on first use in the Modal block: "the MAIB (Marine Accident Investigation Branch)."

---

### Design Issue 8 — Video placeholder is unresolved

The `ism-origins` screen contains a Video block with a hardcoded duration of "02:01 / 02:01" and a placeholder label. This is a production-incomplete element.

**Recommendation:** Either (a) supply the actual video asset and update the Video block, or (b) remove the Video block if no video is planned, replacing it with additional interactive content about the history of the Code. The hardcoded duration must not appear in the final published module.

---

### Design Issue 9 — The module has no accessibility considerations for images

The `Hero` blocks with photo variants use `design/assets/` images without alt text meaningful to the content (the `alt=""` attribute is empty or not present in the Hero component). Several images appear to be generic stock photos rather than NSRS-specific photography.

**Recommendation:** Add descriptive alt text to all Hero photo blocks. Replace generic stock images (`workshop.jpg`, `ocean.jpg`) with NSRS or JFD-specific imagery where available, or retain stock images with clear production notes that client photography is required.

---

### Design Issue 10 — No downloadable resource or reference material

The source explicitly directs learners to "Read the Code — available in the HQ or online" (Slide 24). The module does not provide a link to the ISM Code document or any downloadable reference. Given this is compliance content, providing access to the source document is good practice.

**Recommendation:** Add a `Downloadable Resource` or reference link block in the `audit` section (screen `audit`, below the ClickReveal) pointing learners to where they can access the ISM Code. If a direct link cannot be provided, note where a physical copy is available (HQ).

---

## 5. Specific Change Instructions

The following instructions are written for the developer agent. All changes are to `course.jsx` unless otherwise stated.

---

### CHANGE 1 — Correct SMC "interim" audit terminology

**File:** `course.jsx`
**Location:** Section `certification`, screen `smc`, `Tabs` block, tab index 1 (label "Validity")
**Current text:** `"An intermediate audit between the second and third anniversary confirms that practice on board still matches what is documented."`
**Replace with:** `"The SMC is valid for up to five years. An interim audit is carried out between the second and third year by the Flag State to confirm that practice on board still matches what is documented."`

---

### CHANGE 2 — Add Flag State issuing authority to DOC screen

**File:** `course.jsx`
**Location:** Section `certification`, screen `doc`, `Tabs` block
- Tab 0 (label "What it is") — append to the end of the body string:
  `" The DOC is issued by the Flag State, or by an organisation recognised by the Flag State."`
- Tab 1 (label "Validity") — replace the body string with:
  `"The DOC is valid for up to five years. It is subject to an annual verification audit carried out by the Flag State or an organisation recognised by the Flag State — miss the audit window and the certificate lapses."`

---

### CHANGE 3 — Add Flag State issuing authority to SMC screen

**File:** `course.jsx`
**Location:** Section `certification`, screen `smc`, `Tabs` block
- Tab 0 (label "What it is") — replace body with:
  `"The SMC certifies that the operation of the ship is in accordance with the company's approved Safety Management System. It is issued to the ship by the Flag State, or by an organisation recognised by the Flag State, once it has been verified that the company and its shipboard management are operating in accordance with the approved SMS."`

---

### CHANGE 4 — Replace CodeTable with source-accurate functional requirements

**File:** `course.jsx`
**Location:** Section `compliance`, screen `code-content`

Remove the entire `CodeTable` block (the `{ kind: "CodeTable", ... }` object).

Also update the Hero block sub-text from `"Twelve elements. Each one shows up somewhere in the routines, paperwork and decisions on board."` to `"Six functional requirements. Each one shows up somewhere in the routines, paperwork and decisions on board."`

Replace the CodeTable with:
```
{ kind: "ClickReveal", props: { items: [
  { icon: "1", title: "Safety and environmental policy", reveal: "Every SMS must begin with a clear policy — the company's commitment to safety and environmental protection, visible and owned at the highest level." },
  { icon: "2", title: "Instructions and procedures", reveal: "Safe working procedures and practices for the operation of ships, and protection of the environment, in compliance with relevant international and Flag State legislation." },
  { icon: "3", title: "Defined levels of authority and communication", reveal: "Clear lines of authority and communication between shore and shipboard personnel — everyone must know who they report to, and who they can escalate to." },
  { icon: "4", title: "Reporting accidents and non-conformities", reveal: "Procedures for reporting accidents and non-conformities with the provisions of the Code — the near-miss, the ER, the CAR. These reports close the loop." },
  { icon: "5", title: "Emergency preparedness", reveal: "Procedures to prepare for and respond to emergency situations — risk-assessed, documented and practised." },
  { icon: "6", title: "Internal audits and management reviews", reveal: "The Code requires the SMS to audit itself — internal audits, Master's review, management review — to confirm that what is documented is what is done." },
]}}
```

---

### CHANGE 5 — Expand Herald of Free Enterprise timeline event

**File:** `course.jsx`
**Location:** Section `history`, screen `ism-origins`, `Timeline` block, event index 0 (year "1987")
**Current body:** `"The roll-on/roll-off ferry capsized minutes after leaving Zeebrugge. Investigations pointed not just to a faulty bow door but to systemic failures in how the operating company managed safety. The disaster gave the IMO momentum it had been looking for."`
**Replace with:** `"On 6 March 1987, the Ro-Ro ferry Herald of Free Enterprise capsized minutes after leaving Zeebrugge, killing 193 people. The immediate cause was a bow door left open — the assistant boatswain responsible for closing it was asleep. But the public inquiry led by Lord Justice Sheen found that shore management, Townsend Car Ferries Ltd., was equally blameworthy. Memo after memo raising safety concerns had been ignored. Sheen's report concluded that the company was 'infected from top to bottom with the disease of sloppiness.' The case became the catalyst for systemic change."`

---

### CHANGE 6 — Expand Exxon Valdez facts

**File:** `course.jsx`
**Location:** Section `history`, screen `exxon`, `Illus` block
**Current body:** `"The Exxon Valdez was an oil tanker bound from Alaska to California. Shortly after midnight on 24 March 1989 it ran aground on Bligh Reef. The investigation found fatigue, navigational shortcuts, gaps in supervision and training — the kind of latent risk the Code is designed to flush out."`
**Replace with:** `"The Exxon Valdez was an oil supertanker bound from Alaska to Long Beach, California. At 12:04 a.m. on 24 March 1989, it struck Bligh Reef in Prince William Sound, spilling more than 10 million US gallons (37,000 tonnes) of crude oil over the days that followed — one of the most damaging spills in history. The investigation found fatigue, navigational shortcuts, and gaps in supervision and training — the kind of latent risk the Code is designed to surface before an incident, not after."`

---

### CHANGE 7 — Remove duplicate sword/shield FlipCards from Exxon screen

**File:** `course.jsx`
**Location:** Section `history`, screen `exxon`, `FlipCards` block
**Action:** Remove the entire `{ kind: "FlipCards", ... }` block from the `exxon` screen. The sword/shield concept is covered in the dedicated `sword-shield` screen in the Application section. Add the "standard" card (currently only in the `exxon` screen) to the `sword-shield` screen's FlipCards instead:
- Add third card: `{ icon: "iconStandard", front: "A standard", title: "Why it matters", back: "The Code provides an international standard for safe management and operation of ships — the safety of life, of ships, and the protection of the environment." }`

---

### CHANGE 8 — Update Designated Person Ashore screen content

**File:** `course.jsx`
**Location:** Section `roles`, screen `dp`

**8a — Update Illus block body:**
Replace current body text with:
`"To ensure the safe operation of each ship and to provide a link between the Company and those on board, every company should designate a person or persons ashore having direct access to the highest level of management. Their responsibility includes monitoring the safety and pollution prevention aspects of each ship's operation, and ensuring that adequate resources and shore-based support are applied. For NSRS, this responsibility is held jointly by Greg Cotton/Cotten (JFD SERS Chief Engineer), Rick Smith, and Piers Barker — providing continuous coverage at all times."`

**Note:** Verify correct spelling of "Cotton/Cotten" with client before publishing. Verify whether Rick Smith and Piers Barker have role titles that should be listed.

**8b — Update all three Hotspot spot body texts:**
Replace all three Hotspot `body` values with the same text:
- All three: `"Co-Designated Person Ashore for NSRS. Responsible for monitoring safety and pollution prevention aspects of NSRS operations, ensuring adequate resources and shore-based support, and acting as the link between ship and shore. Crew can escalate safety concerns to any of the three DPs at any time."`

**8c — Consider replacing the Hotspot with FlipCards:**
As noted in Design Issue 3, the Hotspot interaction is a poor match for this content. If the developer agrees, replace the `Hotspot` block with a landscape `FlipCards` block with three cards (one per DP), using the correct regulatory content on the back face.

---

### CHANGE 9 — Add practical implications missing from carousel

**File:** `course.jsx`
**Location:** Section `compliance`, screen `practical-aboard`, `Carousel` block

Add two new slides to the Carousel (after the existing four):
```
{ eyebrow: "Risk assessment", title: "Risk-assessing what we do", body: "The Code requires every vessel to risk-assess its normal working procedures and — based on that assessment — have safe working practices in place. Emergency responses must also be risk-assessed, with documented emergency procedures.", imgLabel: "Risk assessment" },
{ eyebrow: "Planned maintenance", title: "Planned maintenance and safety meetings", body: "The ISM Code requires a planned maintenance system for the vessel, and regular safety meetings. These are not administrative box-ticking — they are the Code working in practice.", imgLabel: "Maintenance" },
```

Add a `Callout` block after the Carousel:
```
{ kind: "Callout", props: { label: "Safety culture", body: "The company should have a good safety culture that is understood and implemented throughout all levels of the organisation — from the board to the crew on board." } },
```

---

### CHANGE 10 — Add "When it goes wrong" consequences from Slide 25

**File:** `course.jsx`
**Location:** Section `audit`, screen `scenario`

Add a second `Callout` block after the existing `Modal` block:
```
{ kind: "Callout", props: { label: "When it goes wrong", body: <>The consequences of not operating within the bounds of the SMS are catastrophic and far-reaching at both the individual and collective level. The resulting investigation by the Flag State authority (<b>MAIB — Marine Accident Investigation Branch</b>) or <b>HSE</b> will be rigorous, with all documentation and actions scrutinised. Use the Code as a shield: <b>See It. Own It. Act on It.</b></> } },
```

---

### CHANGE 11 — Correct ISM Code reference in Master/PIC screen eyebrow

**File:** `course.jsx`
**Location:** Section `roles`, screen `master-pic`
**Current eyebrow:** `"OP Guide Vol 2 · Section 5"`
**Replace with:** `"ISM Code · Section 5 & Regulation 11"`

Update the Reading tab body to clarify the distinction:
**Current:** `"The full responsibilities of the Master are set out in OP Guide Vol 2 — required reading. Section 5 of the ISM Code and Regulation 11 of the Code together establish the Master's authority."`
**Replace with:** `"The Pilot in Charge is deemed to be the Master of the SRV in accordance with Section 5 of the ISM Code and Regulation 11 of the Code. The full practical responsibilities of the Master in the NSRS context are set out in OP Guidance Volume 2 — required reading for all qualified personnel."`

---

### CHANGE 12 — Define MCGA and MAIB on first use

**File:** `course.jsx`
**Location 1:** Section `audit`, screen `audit`, `Hero` block `sub` text
Find the first use of "MCGA" and change it to read "MCGA (Maritime and Coastguard Agency)"

**Location 2:** Section `audit`, screen `scenario`, `Modal` block `children` paragraph
On first use of "MAIB" change it to "the MAIB (Marine Accident Investigation Branch)"

---

### CHANGE 13 — Verify and correct Greg Cotton/Cotten spelling

**File:** `course.jsx`
**All occurrences:** Search for "Greg Cotton" (appears in the Accordion, the Illus block, and the Hotspot spots)
**Action:** Confirm with client the correct spelling is "Cotton" or "Cotten" and apply consistently throughout. The source document (Slide 23 SmartArt) spells it "Cotten."

---

### CHANGE 14 — Flag client sign-off requirement: "1998" vs "late 1980s"

**Not a code change.** Bring to client's attention that Slide 6 of the source says "Prior to 1998" — which appears to be a typo in the source presentation — but the module has correctly used "late 1980s." Obtain written confirmation that the module wording is approved before publishing, as the module has silently corrected a source document.

---

### CHANGE 15 — Add reference to ISM Code document

**File:** `course.jsx`
**Location:** Section `audit`, screen `audit`, after the `ClickReveal` block
Add a `Callout` block:
```
{ kind: "Callout", props: { label: "Read the Code", body: "The full ISM Code is available in the JFD HQ and online. Read it — the auditor will assume you have." } },
```

---

*End of QA Report*

**Total issues identified:** 15 content/accuracy issues; 10 design issues; 15 specific change instructions.

**Recommended action before publishing:** All HIGH priority items must be resolved. MEDIUM priority items should be resolved. LOW priority items should be addressed or documented as known limitations. Client sign-off on CHANGE 14 (the "1998" discrepancy) and CHANGE 13 (Greg Cotton/Cotten spelling) is required before final publication.

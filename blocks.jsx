/* global React */
const { useState, useEffect, useRef, useMemo } = React;

// ============= TEXT =============
function Text({ heading, body, points }) {
  return (
    <div className="block b-text">
      {heading && <h2>{heading}</h2>}
      {body && body.map((p, i) => <p key={i}>{p}</p>)}
      {points && (
        <ul className="jfs">
          {points.map((p, i) => <li key={i}>{p}</li>)}
        </ul>
      )}
    </div>
  );
}

// ============= IMAGE + TEXT =============
function ImageText({ image, caption, heading, body, reverse, placeholder }) {
  return (
    <div className={"block b-imagetext" + (reverse ? " is-reverse" : "")}>
      <div className="b-imagetext__media" style={ image ? { background: "#000" } : {} }>
        {image
          ? <img src={image} alt="" />
          : <PlaceholderImage label={placeholder || "Image"} />
        }
        {caption && <div className="b-imagetext__caption">{caption}</div>}
      </div>
      <div className="b-imagetext__body">
        {heading && <h3>{heading}</h3>}
        {body && body.map((p, i) => <p key={i}>{p}</p>)}
      </div>
    </div>
  );
}

// Placeholder image (subtle blue gradient with caption)
function PlaceholderImage({ label, ratio }) {
  return (
    <div style={{
      position:"absolute", inset:0,
      background: "linear-gradient(135deg, #07223a 0%, #0a3a5e 50%, #1b5b87 100%)",
      display:"flex", alignItems:"center", justifyContent:"center",
      flexDirection:"column", gap: 8,
      color: "rgba(255,255,255,.55)"
    }}>
      <svg width="42" height="42" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="3" y="5" width="18" height="14" rx="1" />
        <circle cx="8.5" cy="10.5" r="1.5" />
        <path d="M21 15l-5-5L5 19" />
      </svg>
      <div style={{
        fontSize: 11, letterSpacing: ".12em", textTransform: "uppercase",
        fontWeight: 700, color: "rgba(255,255,255,.7)"
      }}>{label}</div>
    </div>
  );
}

// ============= CALLOUT =============
function Callout({ label, body }) {
  return (
    <div className="block b-callout">
      {label && <div className="b-callout__label">{label}</div>}
      <div className="b-callout__body">{body}</div>
    </div>
  );
}

// ============= ACCORDION =============
function Accordion({ items }) {
  const [open, setOpen] = useState(0);
  return (
    <div className="block b-accord">
      {items.map((it, i) => (
        <div key={i} className={"b-accord__item" + (open === i ? " is-open" : "")}>
          <button className="b-accord__head" onClick={() => setOpen(open === i ? -1 : i)}>
            <span>{it.q}</span>
            <span className="b-accord__icon">+</span>
          </button>
          {open === i && <div className="b-accord__body">{it.a}</div>}
        </div>
      ))}
    </div>
  );
}

// ============= TABS =============
function Tabs({ tabs }) {
  const [active, setActive] = useState(0);
  return (
    <div className="block b-tabs">
      <div className="b-tabs__strip">
        {tabs.map((t, i) => (
          <button key={i} className={"b-tabs__tab" + (i === active ? " is-active" : "")} onClick={() => setActive(i)}>
            {t.label}
          </button>
        ))}
      </div>
      <div className="b-tabs__panel">
        {tabs[active].heading && <h3>{tabs[active].heading}</h3>}
        {typeof tabs[active].body === "string"
          ? <p style={{margin:0}}>{tabs[active].body}</p>
          : tabs[active].body}
      </div>
    </div>
  );
}

// ============= FLIP CARDS =============
// landscape: when true, cards are wide (one column) with icon on the right.
// Each card supports an `icon` (key into Illustrations) for both faces.
function FlipCards({ cards, landscape }) {
  const [flipped, setFlipped] = useState({});
  return (
    <div className={"block b-flips" + (landscape ? " b-flips--landscape" : "")}>
      {cards.map((c, i) => {
        const Icon = c.icon && Illustrations[c.icon];
        return (
          <div key={i}
               className={"b-flip" + (flipped[i] ? " is-flipped" : "") + (landscape ? " b-flip--landscape" : "")}
               onClick={() => setFlipped(f => ({ ...f, [i]: !f[i] }))}>
            <div className="b-flip__inner">
              <div className="b-flip__face b-flip__face--front">
                {Icon && <div className="b-flip__icon">{Icon({ tone: "dark" })}</div>}
                <div className="b-flip__copy">
                  <div className="b-flip__title">{c.front}</div>
                  <div className="b-flip__hint">Tap to reveal</div>
                </div>
              </div>
              <div className="b-flip__face b-flip__face--back">
                {Icon && <div className="b-flip__icon b-flip__icon--back">{Icon({ tone: "light" })}</div>}
                <div className="b-flip__copy">
                  {c.title && <div className="b-flip__title">{c.title}</div>}
                  <div className="b-flip__body">{c.back}</div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

// ============= CLICK TO REVEAL =============
function ClickReveal({ items }) {
  const [revealed, setRevealed] = useState({});
  return (
    <div className="block b-reveal">
      {items.map((it, i) => (
        <button key={i}
                className={"b-reveal__card" + (revealed[i] ? " is-revealed" : "")}
                onClick={() => setRevealed(r => ({ ...r, [i]: !r[i] }))}>
          <div className="b-reveal__icon">{it.icon || (i + 1)}</div>
          <div className="b-reveal__title">{it.title}</div>
          <div className="b-reveal__body">{revealed[i] ? it.reveal : it.hint || "Click to reveal"}</div>
        </button>
      ))}
    </div>
  );
}

// ============= HOTSPOT =============
function Hotspot({ spots, hint }) {
  const [active, setActive] = useState(0);
  return (
    <div className="block b-hotspot">
      <div className="b-hotspot__stage">
        {hint && <div className="b-hotspot__hint">{hint}</div>}
        {/* Decorative world map dots */}
        <svg viewBox="0 0 100 56" preserveAspectRatio="none" style={{ position:"absolute", inset:0, width:"100%", height:"100%", opacity:.18 }}>
          {Array.from({length: 220}).map((_, i) => {
            const x = (i * 7.31) % 100;
            const y = ((i * 3.97) + (Math.sin(i * 0.7) * 8)) % 56;
            return <circle key={i} cx={x} cy={y} r="0.32" fill="#fff" />;
          })}
        </svg>
        <div className="b-hotspot__map">
          {spots.map((s, i) => (
            <button key={i}
                    className={"b-hotspot__marker" + (i === active ? " is-active" : "")}
                    style={{ left: s.x + "%", top: s.y + "%" }}
                    onClick={() => setActive(i)}>
              {i + 1}
            </button>
          ))}
        </div>
      </div>
      <div className="b-hotspot__panel">
        <h4>{spots[active].title}</h4>
        <p>{spots[active].body}</p>
      </div>
    </div>
  );
}

// ============= CAROUSEL =============
function Carousel({ slides }) {
  const [i, setI] = useState(0);
  const total = slides.length;
  return (
    <div className="block b-carousel">
      <div className="b-carousel__viewport">
        <div className="b-carousel__track" style={{ transform: `translateX(-${i*100}%)` }}>
          {slides.map((s, idx) => (
            <div key={idx} className="b-carousel__slide">
              <div className="b-carousel__media">
                <PlaceholderImage label={s.imgLabel || "Image"} />
                <div className="b-carousel__num">{String(idx+1).padStart(2,"0")}</div>
              </div>
              <div className="b-carousel__copy">
                {s.eyebrow && <div className="b-carousel__eyebrow">{s.eyebrow}</div>}
                <h3 className="b-carousel__title">{s.title}</h3>
                <div className="b-carousel__body">{s.body}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="b-carousel__nav">
        <div className="b-carousel__dots">
          {slides.map((_, idx) => (
            <button key={idx} className={"b-carousel__dot" + (idx === i ? " is-active" : "")} onClick={() => setI(idx)} />
          ))}
        </div>
        <div className="b-carousel__arrows">
          <button className="b-carousel__arrow" onClick={() => setI(Math.max(0, i-1))} disabled={i === 0}>‹</button>
          <button className="b-carousel__arrow" onClick={() => setI(Math.min(total-1, i+1))} disabled={i === total-1}>›</button>
        </div>
      </div>
    </div>
  );
}

// ============= MULTIPLE CHOICE =============
function MCQ({ qNum, total, question, options, correct, feedback, onAnswered }) {
  const [sel, setSel] = useState(-1);
  const [submitted, setSubmitted] = useState(false);
  const isCorrect = sel === correct;
  const submit = () => {
    setSubmitted(true);
    onAnswered && onAnswered(isCorrect);
  };
  const reset = () => { setSel(-1); setSubmitted(false); };
  return (
    <div className="block b-mcq">
      <div className="b-mcq__head">
        <div className="b-mcq__qnum">Question {qNum}{total ? ` of ${total}` : ""}</div>
        <div className="b-mcq__instr">Select one answer</div>
      </div>
      <div className="b-mcq__q">{question}</div>
      <div className="b-mcq__options">
        {options.map((o, i) => {
          let cls = "b-mcq__opt";
          if (!submitted && sel === i) cls += " is-selected";
          if (submitted && i === correct) cls += " is-correct";
          if (submitted && sel === i && i !== correct) cls += " is-wrong";
          const mark = submitted ? (i === correct ? "✓" : (sel === i ? "✕" : "")) : "";
          return (
            <button key={i} className={cls} disabled={submitted} onClick={() => setSel(i)}>
              <span className="b-mcq__opt-letter">{String.fromCharCode(65+i)}</span>
              <span>{o}</span>
              <span className="b-mcq__opt-mark">{mark}</span>
            </button>
          );
        })}
      </div>
      {submitted && (
        <div className={"b-mcq__feedback " + (isCorrect ? "is-correct" : "is-wrong")}>
          <b>{isCorrect ? "Correct." : "Not quite."}</b> {feedback}
        </div>
      )}
      <div className="b-mcq__submit">
        {!submitted
          ? <button className="btn" onClick={submit} disabled={sel === -1}>Submit answer</button>
          : <button className="btn btn--ghost" onClick={reset}>Try again</button>
        }
      </div>
    </div>
  );
}

// ============= DRAG & DROP =============
function DragDrop({ items, targets, instruction }) {
  // items: [{id, label}]; targets: [{id, label, accept: id}]
  const [bank, setBank] = useState(() => items.map(i => i.id));
  const [placed, setPlaced] = useState({}); // targetId -> itemId
  const [dragging, setDragging] = useState(null);
  const [over, setOver] = useState(null);
  const [checked, setChecked] = useState(false);

  const onDragStart = (id) => setDragging(id);
  const onDrop = (targetId) => {
    if (!dragging) return;
    setBank(b => b.filter(x => x !== dragging));
    setPlaced(p => {
      const np = { ...p };
      // if existing item in target, return it to bank
      if (np[targetId]) setBank(b => [...b, np[targetId]]);
      np[targetId] = dragging;
      return np;
    });
    setDragging(null); setOver(null);
  };
  const removeFromTarget = (targetId) => {
    if (checked) return;
    const id = placed[targetId];
    if (!id) return;
    setBank(b => [...b, id]);
    setPlaced(p => { const np = { ...p }; delete np[targetId]; return np; });
  };
  const allFilled = targets.every(t => placed[t.id]);
  const score = targets.filter(t => placed[t.id] === t.accept).length;
  return (
    <div className="block b-card">
      {instruction && <p style={{marginTop:0, color:"var(--fg2)", fontSize:14.5}}>{instruction}</p>}
      <div className="b-dnd">
        <div className="b-dnd__col">
          <h4>Drag from here</h4>
          <div className="b-dnd__bank"
               onDragOver={(e) => e.preventDefault()}
               onDrop={() => {
                 if (dragging) {
                   // remove from any target it was in
                   setPlaced(p => {
                     const np = {...p};
                     for (const k of Object.keys(np)) if (np[k] === dragging) delete np[k];
                     return np;
                   });
                   if (!bank.includes(dragging)) setBank(b => [...b, dragging]);
                   setDragging(null);
                 }
               }}
          >
            {bank.map(id => {
              const item = items.find(x => x.id === id);
              return (
                <div key={id}
                     className={"b-dnd__chip" + (dragging === id ? " is-dragging" : "")}
                     draggable={!checked}
                     onDragStart={() => onDragStart(id)}
                     onDragEnd={() => setDragging(null)}>
                  {item.label}
                </div>
              );
            })}
            {bank.length === 0 && <div style={{color:"var(--fg3)", fontSize:13, padding:"8px 4px"}}>All placed</div>}
          </div>
        </div>
        <div className="b-dnd__col">
          <h4>Drop into the right slot</h4>
          <div className="b-dnd__targets">
            {targets.map(t => {
              const placedId = placed[t.id];
              const placedLabel = placedId ? items.find(x => x.id === placedId).label : null;
              const slotState = checked && placedId
                ? (placedId === t.accept ? "is-correct" : "is-wrong")
                : (placedId ? "is-filled" : "");
              return (
                <div key={t.id}
                     className={"b-dnd__target" + (over === t.id ? " is-over" : "")}
                     onDragOver={(e) => { e.preventDefault(); setOver(t.id); }}
                     onDragLeave={() => setOver(null)}
                     onDrop={() => onDrop(t.id)}>
                  <div className="b-dnd__target-label">{t.label}</div>
                  <div className={"b-dnd__target-slot " + slotState}
                       onClick={() => removeFromTarget(t.id)}
                       style={{ cursor: placedId && !checked ? "pointer" : "default" }}>
                    {placedLabel || <span style={{color:"var(--fg3)"}}>Drop here</span>}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div style={{marginTop: 16, display:"flex", gap: 12, alignItems:"center"}}>
        {!checked
          ? <button className="btn" disabled={!allFilled} onClick={() => setChecked(true)}>Check answers</button>
          : <>
              <span style={{fontSize:13, fontWeight:700, color:"var(--jfd-deep)"}}>
                {score} / {targets.length} correct
              </span>
              <button className="btn btn--ghost" onClick={() => {
                setChecked(false); setPlaced({}); setBank(items.map(i => i.id));
              }}>Reset</button>
            </>
        }
      </div>
    </div>
  );
}

// ============= MODAL =============
function Modal({ trigger, title, children }) {
  const [open, setOpen] = useState(false);
  useEffect(() => {
    if (!open) return;
    const onKey = (e) => { if (e.key === "Escape") setOpen(false); };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);
  return (
    <>
      <button className="b-modal-trigger" onClick={() => setOpen(true)}>{trigger}</button>
      {open && (
        <div className="b-modal-scrim" onClick={() => setOpen(false)}>
          <div className="b-modal" onClick={(e) => e.stopPropagation()}>
            <div className="b-modal__head">
              <h3 className="b-modal__title">{title}</h3>
              <button className="b-modal__close" onClick={() => setOpen(false)}>×</button>
            </div>
            <div className="b-modal__body">{children}</div>
          </div>
        </div>
      )}
    </>
  );
}

// ============= VIDEO =============
function Video({ poster, title, sub, duration, placeholderLabel }) {
  return (
    <div className="block b-video">
      <div className="b-video__poster" style={poster ? { backgroundImage: `url(${poster})` } : {}}>
        {!poster && <PlaceholderImage label={placeholderLabel || "Video"} />}
        <button className="b-video__play" aria-label="Play video"></button>
      </div>
      {sub && <div className="b-video__sub">{sub}</div>}
      {title && <div className="b-video__title">{title}</div>}
      <div className="b-video__chrome">
        <div className="b-video__cc">
          <span className="b-video__cc-pill">CC</span>
          <span className="b-video__cc-pill">1080P</span>
        </div>
        <div>{duration || "00:00 / 00:00"}</div>
      </div>
    </div>
  );
}

// ============= TIMELINE =============
function Timeline({ events }) {
  const [active, setActive] = useState(0);
  return (
    <div className="block b-timeline">
      <div className="b-timeline__events" style={{ "--n": events.length }}>
        <div className="b-timeline__rail">
          <div className="b-timeline__rail-fill" style={{ width: `${(active / (events.length - 1)) * 100}%` }}></div>
        </div>
        {events.map((e, i) => (
          <button key={i}
                  className={"b-timeline__event" + (i === active ? " is-active" : "") + (i < active ? " is-passed" : "")}
                  onClick={() => setActive(i)}>
            <div className="b-timeline__year">{e.year}</div>
            <div className="b-timeline__node"></div>
            <div className="b-timeline__caption">{e.caption}</div>
          </button>
        ))}
      </div>
      <div className="b-timeline__detail">
        <h4>{events[active].title}</h4>
        <p>{events[active].body}</p>
      </div>
    </div>
  );
}

// ============= SCENARIO =============
function Scenario({ title, premise, steps }) {
  return (
    <div className="block b-scenario">
      <div className="b-scenario__head">
        <h3>{title}</h3>
        <p>{premise}</p>
      </div>
      <div className="b-scenario__body">
        <div className="b-scenario__steps">
          {steps.map((s, i) => (
            <div key={i} className="b-scenario__step">
              <div className="b-scenario__step-num">Step {String(i+1).padStart(2,"0")}</div>
              <h4>{s.title}</h4>
              <p>{s.body}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// ============= COVER =============
function Cover({ image, eyebrow, title, sub }) {
  return (
    <div className="block b-cover" style={{ backgroundImage: image ? `url(${image})` : undefined, background: image ? undefined : "linear-gradient(135deg, #07223a 0%, #0a3a5e 50%, #1b5b87 100%)" }}>
      <div className="b-cover__inner">
        {eyebrow && <div className="b-cover__eyebrow">{eyebrow}</div>}
        {title && <h2 className="b-cover__title" dangerouslySetInnerHTML={{__html: title}}></h2>}
        {sub && <p className="b-cover__sub">{sub}</p>}
      </div>
    </div>
  );
}

// ============= STATS =============
function Stats({ items }) {
  return (
    <div className="block b-stats">
      {items.map((it, i) => (
        <div key={i} className="b-stat">
          <div className="b-stat__num" dangerouslySetInnerHTML={{__html: it.num}}></div>
          <div className="b-stat__label">{it.label}</div>
        </div>
      ))}
    </div>
  );
}

// ============= TABLE =============
function CodeTable({ headers, rows }) {
  return (
    <div className="block">
      <table className="b-table">
        <thead>
          <tr>{headers.map((h, i) => <th key={i}>{h}</th>)}</tr>
        </thead>
        <tbody>
          {rows.map((r, i) => (
            <tr key={i}>{r.map((c, j) => <td key={j}>{c}</td>)}</tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

// ============= HERO BANNER =============
// variant: "photo" | "photo-bottom" | "gradient" | "gradient-warm" | "blueprint" | "paper"
// art: optional SVG illustration name (string key into Illustrations) — sits to the right
function Hero({ variant = "gradient", image, eyebrow, title, sub, tall, art }) {
  const cls = "block b-hero b-hero--" + variant + (tall ? " b-hero--tall" : "");
  const style = (variant === "photo" || variant === "photo-bottom") && image
    ? { backgroundImage: `url(${image})` }
    : {};
  return (
    <div className={cls} style={style}>
      {variant === "blueprint" && <div className="b-hero__bp" />}
      {art && Illustrations[art] && (
        <div className="b-hero__art">{Illustrations[art]({ tone: variant === "paper" ? "dark" : "light" })}</div>
      )}
      <div className="b-hero__inner">
        {eyebrow && <div className="b-hero__eyebrow">{eyebrow}</div>}
        {title && <h2 className="b-hero__title" dangerouslySetInnerHTML={{__html: title}}></h2>}
        {sub && <p className="b-hero__sub">{sub}</p>}
      </div>
    </div>
  );
}

// ============= PHOTO PANEL =============
function PhotoPanel({ image, caption, ratio }) {
  return (
    <div className="block b-photo-panel"
         style={{ backgroundImage: image ? `url(${image})` : undefined, aspectRatio: ratio || "16/8" }}>
      {!image && <PlaceholderImage label={caption || "Image"} />}
      {caption && <div className="b-photo-panel__caption">{caption}</div>}
    </div>
  );
}

// ============= IMAGE GRID =============
// cells: [{ image?, caption?, span? "wide"|"tall" }]
function ImageGrid({ cells, cols = 3 }) {
  return (
    <div className="block b-imgrid" style={{ "--cols": cols }}>
      {cells.map((c, i) => (
        <div key={i}
             className={"b-imgrid__cell" + (c.span === "tall" ? " b-imgrid__cell--tall" : "") + (c.span === "wide" ? " b-imgrid__cell--wide" : "")}
             style={{ backgroundImage: c.image ? `url(${c.image})` : undefined }}>
          {!c.image && <PlaceholderImage label={c.caption || ""} />}
          {c.caption && <div className="b-imgrid__cell-cap">{c.caption}</div>}
        </div>
      ))}
    </div>
  );
}

// ============= ILLUSTRATED PANEL =============
function Illus({ heading, body, art, tone = "deep" }) {
  const cls = "block b-illus" + (tone === "paper" ? " b-illus--paper" : "") + (tone === "blue" ? " b-illus--blue" : "");
  return (
    <div className={cls}>
      <div className="b-illus__copy">
        {heading && <h3>{heading}</h3>}
        {body && <p>{body}</p>}
      </div>
      <div className="b-illus__art">
        {art && Illustrations[art] && Illustrations[art]({ tone: tone === "paper" ? "dark" : "light" })}
      </div>
    </div>
  );
}

// ============= ILLUSTRATIONS =============
// Inline SVGs — abstract, JFD-ish: deep navy, yellow accent, thin strokes.
const Illustrations = {
  // Stack of three certificates with seal
  certificates({ tone = "light" } = {}) {
    const fg = tone === "dark" ? "#07223a" : "#fff";
    const accent = "#ffdd00";
    return (
      <svg viewBox="0 0 360 240" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
        <rect x="60" y="50" width="220" height="150" rx="2" fill="none" stroke={fg} strokeWidth="1.5" opacity=".4" transform="rotate(-6 170 125)"/>
        <rect x="80" y="40" width="220" height="150" rx="2" fill="none" stroke={fg} strokeWidth="1.5" opacity=".7" transform="rotate(-2 190 115)"/>
        <rect x="70" y="50" width="220" height="150" rx="2" fill={tone === "dark" ? "#fff" : "rgba(255,255,255,.08)"} stroke={fg} strokeWidth="1.5"/>
        <line x1="90" y1="80" x2="240" y2="80" stroke={fg} strokeWidth="1.5"/>
        <line x1="90" y1="100" x2="270" y2="100" stroke={fg} strokeWidth="1" opacity=".6"/>
        <line x1="90" y1="115" x2="260" y2="115" stroke={fg} strokeWidth="1" opacity=".6"/>
        <line x1="90" y1="130" x2="220" y2="130" stroke={fg} strokeWidth="1" opacity=".6"/>
        <line x1="90" y1="150" x2="200" y2="150" stroke={fg} strokeWidth="1" opacity=".4"/>
        <line x1="90" y1="162" x2="240" y2="162" stroke={fg} strokeWidth="1" opacity=".4"/>
        <circle cx="252" cy="172" r="22" fill={accent}/>
        <path d="M242 172 l8 8 l14 -16" stroke="#07223a" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    );
  },
  // Sword & shield (compliance)
  swordShield({ tone = "light" } = {}) {
    const fg = tone === "dark" ? "#07223a" : "#fff";
    const accent = "#ffdd00";
    return (
      <svg viewBox="0 0 360 240" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
        {/* Shield */}
        <path d="M120 60 L210 60 L210 130 Q210 170 165 195 Q120 170 120 130 Z" fill="none" stroke={fg} strokeWidth="1.5"/>
        <path d="M120 60 L210 60 L210 130 Q210 170 165 195 Q120 170 120 130 Z" fill={accent} opacity=".15"/>
        <path d="M165 80 L195 130 L165 180 L135 130 Z" fill="none" stroke={fg} strokeWidth="1" opacity=".7"/>
        {/* Sword behind shield */}
        <line x1="240" y1="50" x2="320" y2="200" stroke={fg} strokeWidth="2"/>
        <line x1="232" y1="62" x2="248" y2="50" stroke={fg} strokeWidth="2"/>
        <line x1="232" y1="62" x2="248" y2="78" stroke={fg} strokeWidth="2"/>
        <circle cx="320" cy="200" r="6" fill={accent}/>
      </svg>
    );
  },
  // Org chart — Designated Persons
  orgChart({ tone = "light" } = {}) {
    const fg = tone === "dark" ? "#07223a" : "#fff";
    const accent = "#ffdd00";
    return (
      <svg viewBox="0 0 360 240" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
        <rect x="140" y="20" width="80" height="44" rx="3" fill="none" stroke={fg} strokeWidth="1.5"/>
        <line x1="180" y1="64" x2="180" y2="92" stroke={fg} strokeWidth="1"/>
        <line x1="80" y1="92" x2="280" y2="92" stroke={fg} strokeWidth="1"/>
        <line x1="80" y1="92" x2="80" y2="120" stroke={fg} strokeWidth="1"/>
        <line x1="180" y1="92" x2="180" y2="120" stroke={fg} strokeWidth="1"/>
        <line x1="280" y1="92" x2="280" y2="120" stroke={fg} strokeWidth="1"/>
        <rect x="40" y="120" width="80" height="44" rx="3" fill={accent} stroke={fg} strokeWidth="1.5"/>
        <rect x="140" y="120" width="80" height="44" rx="3" fill={accent} stroke={fg} strokeWidth="1.5"/>
        <rect x="240" y="120" width="80" height="44" rx="3" fill={accent} stroke={fg} strokeWidth="1.5"/>
        <circle cx="80" cy="142" r="10" fill="#07223a"/>
        <circle cx="180" cy="142" r="10" fill="#07223a"/>
        <circle cx="280" cy="142" r="10" fill="#07223a"/>
        <line x1="40" y1="190" x2="320" y2="190" stroke={fg} strokeWidth="1" opacity=".4" strokeDasharray="3 4"/>
        <text x="180" y="42" textAnchor="middle" fontFamily="Helvetica" fontSize="10" fontWeight="700" fill={fg}>Company</text>
        <text x="180" y="56" textAnchor="middle" fontFamily="Helvetica" fontSize="9" fill={fg} opacity=".7">JFD / NSRS</text>
        <text x="80" y="218" textAnchor="middle" fontFamily="Helvetica" fontSize="9" fontWeight="700" fill={fg}>DPA · 1</text>
        <text x="180" y="218" textAnchor="middle" fontFamily="Helvetica" fontSize="9" fontWeight="700" fill={fg}>DPA · 2</text>
        <text x="280" y="218" textAnchor="middle" fontFamily="Helvetica" fontSize="9" fontWeight="700" fill={fg}>DPA · 3</text>
      </svg>
    );
  },
  // Audit cycle — circular arrows with checkpoints
  auditCycle({ tone = "light" } = {}) {
    const fg = tone === "dark" ? "#07223a" : "#fff";
    const accent = "#ffdd00";
    return (
      <svg viewBox="0 0 360 240" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
        <circle cx="180" cy="120" r="78" fill="none" stroke={fg} strokeWidth="1.2" strokeDasharray="3 5" opacity=".5"/>
        <circle cx="180" cy="120" r="58" fill="none" stroke={fg} strokeWidth="1.5"/>
        {[0, 90, 180, 270].map((a, i) => {
          const x = 180 + 58 * Math.cos((a - 90) * Math.PI / 180);
          const y = 120 + 58 * Math.sin((a - 90) * Math.PI / 180);
          return <circle key={i} cx={x} cy={y} r="8" fill={accent} stroke="#07223a" strokeWidth="1.5"/>;
        })}
        <path d="M180 62 a58 58 0 0 1 50.2 29 l-12 7 a44 44 0 0 0 -38.2 -22 z" fill={fg} opacity=".25"/>
        <text x="180" y="115" textAnchor="middle" fontFamily="Helvetica" fontSize="11" fontWeight="700" fill={fg} letterSpacing="2">AUDIT</text>
        <text x="180" y="133" textAnchor="middle" fontFamily="Helvetica" fontSize="11" fontWeight="700" fill={fg} letterSpacing="2">CYCLE</text>
        <text x="180" y="56" textAnchor="middle" fontFamily="Helvetica" fontSize="9" fontWeight="700" fill={fg} opacity=".8">PLAN</text>
        <text x="248" y="124" textAnchor="middle" fontFamily="Helvetica" fontSize="9" fontWeight="700" fill={fg} opacity=".8">DO</text>
        <text x="180" y="194" textAnchor="middle" fontFamily="Helvetica" fontSize="9" fontWeight="700" fill={fg} opacity=".8">CHECK</text>
        <text x="112" y="124" textAnchor="middle" fontFamily="Helvetica" fontSize="9" fontWeight="700" fill={fg} opacity=".8">ACT</text>
      </svg>
    );
  },
  // Submarine silhouette + sonar lines
  submersible({ tone = "light" } = {}) {
    const fg = tone === "dark" ? "#07223a" : "#fff";
    const accent = "#ffdd00";
    return (
      <svg viewBox="0 0 360 240" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
        <path d="M70 130 Q70 100 110 100 L240 100 Q300 100 310 130 Q300 160 240 160 L110 160 Q70 160 70 130 Z" fill={fg} opacity=".15" stroke={fg} strokeWidth="1.5"/>
        <rect x="160" y="78" width="40" height="22" rx="3" fill={fg} opacity=".25" stroke={fg} strokeWidth="1.2"/>
        <circle cx="120" cy="130" r="6" fill={accent}/>
        <circle cx="170" cy="130" r="4" fill={fg} opacity=".5"/>
        <circle cx="220" cy="130" r="4" fill={fg} opacity=".5"/>
        <line x1="310" y1="130" x2="340" y2="115" stroke={fg} strokeWidth="1.5"/>
        <line x1="310" y1="130" x2="340" y2="145" stroke={fg} strokeWidth="1.5"/>
        {/* Sonar arcs */}
        <path d="M40 130 Q40 90 80 70" stroke={accent} strokeWidth="1" fill="none" opacity=".7"/>
        <path d="M30 130 Q30 75 80 50" stroke={accent} strokeWidth="1" fill="none" opacity=".4"/>
        <path d="M20 130 Q20 60 80 30" stroke={accent} strokeWidth="1" fill="none" opacity=".2"/>
        {/* Bubbles */}
        <circle cx="40" cy="180" r="3" fill={fg} opacity=".4"/>
        <circle cx="60" cy="195" r="2" fill={fg} opacity=".3"/>
        <circle cx="50" cy="210" r="4" fill={fg} opacity=".5"/>
      </svg>
    );
  },
  // Document spread — SMS handbook
  smsHandbook({ tone = "light" } = {}) {
    const fg = tone === "dark" ? "#07223a" : "#fff";
    const accent = "#ffdd00";
    return (
      <svg viewBox="0 0 360 240" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
        <path d="M50 50 L180 60 L180 200 L50 190 Z" fill={tone === "dark" ? "#fff" : "rgba(255,255,255,.1)"} stroke={fg} strokeWidth="1.5"/>
        <path d="M310 50 L180 60 L180 200 L310 190 Z" fill={tone === "dark" ? "#fff" : "rgba(255,255,255,.1)"} stroke={fg} strokeWidth="1.5"/>
        <line x1="180" y1="60" x2="180" y2="200" stroke={fg} strokeWidth="1.2"/>
        {[0, 1, 2, 3, 4].map(i => (
          <g key={i}>
            <line x1="70" y1={85 + i*20} x2="160" y2={85 + i*22*0.95} stroke={fg} strokeWidth="1" opacity=".5"/>
            <line x1="200" y1={85 + i*22*0.95} x2="290" y2={85 + i*20} stroke={fg} strokeWidth="1" opacity=".5"/>
          </g>
        ))}
        <rect x="195" y="78" width="40" height="6" fill={accent}/>
        <rect x="70" y="80" width="50" height="6" fill={accent} opacity=".7"/>
      </svg>
    );
  },
  // Scales of justice — sword/shield alt
  scales({ tone = "light" } = {}) {
    const fg = tone === "dark" ? "#07223a" : "#fff";
    const accent = "#ffdd00";
    return (
      <svg viewBox="0 0 360 240" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
        <line x1="180" y1="40" x2="180" y2="200" stroke={fg} strokeWidth="2"/>
        <line x1="80" y1="80" x2="280" y2="80" stroke={fg} strokeWidth="1.5"/>
        <circle cx="180" cy="40" r="6" fill={accent}/>
        <rect x="160" y="195" width="40" height="8" fill={fg}/>
        {/* left pan */}
        <path d="M50 80 L110 80 L95 130 Q80 150 65 130 Z" fill="none" stroke={fg} strokeWidth="1.5"/>
        <line x1="80" y1="80" x2="80" y2="80" stroke={fg}/>
        {/* right pan */}
        <path d="M250 80 L310 80 L295 130 Q280 150 265 130 Z" fill={accent} opacity=".25" stroke={fg} strokeWidth="1.5"/>
      </svg>
    );
  },
  // Clipboard with ticks (audit checklist)
  checklist({ tone = "light" } = {}) {
    const fg = tone === "dark" ? "#07223a" : "#fff";
    const accent = "#ffdd00";
    return (
      <svg viewBox="0 0 360 240" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
        <rect x="110" y="40" width="160" height="180" rx="4" fill={tone === "dark" ? "#fff" : "rgba(255,255,255,.1)"} stroke={fg} strokeWidth="1.5"/>
        <rect x="155" y="30" width="70" height="20" rx="2" fill={fg}/>
        {[0, 1, 2, 3, 4].map(i => (
          <g key={i}>
            <rect x="128" y={75 + i*28} width="14" height="14" rx="2" fill={i < 3 ? accent : "none"} stroke={fg} strokeWidth="1.2"/>
            {i < 3 && <path d={`M131 ${82 + i*28} l4 4 l8 -8`} stroke="#07223a" strokeWidth="1.8" fill="none" strokeLinecap="round"/>}
            <line x1="152" y1={84 + i*28} x2={232 - i*8} y2={84 + i*28} stroke={fg} strokeWidth="1.2" opacity=".7"/>
          </g>
        ))}
      </svg>
    );
  },
  // Compass / navigation
  compass({ tone = "light" } = {}) {
    const fg = tone === "dark" ? "#07223a" : "#fff";
    const accent = "#ffdd00";
    return (
      <svg viewBox="0 0 360 240" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
        <circle cx="180" cy="120" r="78" fill="none" stroke={fg} strokeWidth="1.5"/>
        <circle cx="180" cy="120" r="60" fill="none" stroke={fg} strokeWidth="1" opacity=".5"/>
        {[0, 45, 90, 135, 180, 225, 270, 315].map(a => {
          const x1 = 180 + 78 * Math.cos((a - 90) * Math.PI / 180);
          const y1 = 120 + 78 * Math.sin((a - 90) * Math.PI / 180);
          const x2 = 180 + 70 * Math.cos((a - 90) * Math.PI / 180);
          const y2 = 120 + 70 * Math.sin((a - 90) * Math.PI / 180);
          return <line key={a} x1={x1} y1={y1} x2={x2} y2={y2} stroke={fg} strokeWidth={a%90===0?"2":"1"}/>;
        })}
        <path d="M180 60 L190 120 L180 130 L170 120 Z" fill={accent} stroke={fg} strokeWidth="1"/>
        <path d="M180 180 L190 120 L180 110 L170 120 Z" fill={fg} opacity=".4"/>
        <circle cx="180" cy="120" r="4" fill={fg}/>
        <text x="180" y="50" textAnchor="middle" fontFamily="Helvetica" fontSize="11" fontWeight="700" fill={fg}>N</text>
      </svg>
    );
  },
  // Anchor — origins / foundations
  anchor({ tone = "light" } = {}) {
    const fg = tone === "dark" ? "#07223a" : "#fff";
    const accent = "#ffdd00";
    return (
      <svg viewBox="0 0 360 240" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
        <circle cx="180" cy="60" r="12" fill="none" stroke={fg} strokeWidth="2"/>
        <line x1="180" y1="72" x2="180" y2="190" stroke={fg} strokeWidth="2"/>
        <line x1="150" y1="100" x2="210" y2="100" stroke={fg} strokeWidth="2"/>
        <path d="M120 160 Q120 200 180 200 Q240 200 240 160" fill="none" stroke={fg} strokeWidth="2"/>
        <line x1="120" y1="160" x2="105" y2="148" stroke={fg} strokeWidth="2"/>
        <line x1="240" y1="160" x2="255" y2="148" stroke={fg} strokeWidth="2"/>
        <circle cx="180" cy="200" r="4" fill={accent}/>
      </svg>
    );
  },
  // Wave lines — ambient
  waves({ tone = "light" } = {}) {
    const fg = tone === "dark" ? "#07223a" : "#fff";
    return (
      <svg viewBox="0 0 360 240" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
        {[0, 1, 2, 3, 4, 5, 6].map(i => (
          <path key={i} d={`M0 ${60 + i*22} Q90 ${40 + i*22} 180 ${60 + i*22} T 360 ${60 + i*22}`}
                stroke={fg} strokeWidth="1" opacity={0.7 - i*0.08} fill="none"/>
        ))}
      </svg>
    );
  },
  // === Compact icons (1:1, designed for flip cards) ===
  iconSword({ tone = "light" } = {}) {
    const fg = tone === "dark" ? "#07223a" : "#fff";
    const accent = "#ffdd00";
    return (
      <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
        <line x1="22" y1="22" x2="78" y2="78" stroke={fg} strokeWidth="3.5" strokeLinecap="round"/>
        <line x1="14" y1="34" x2="34" y2="14" stroke={fg} strokeWidth="3" strokeLinecap="round"/>
        <circle cx="80" cy="80" r="5" fill={accent} stroke={fg} strokeWidth="2"/>
        <line x1="68" y1="78" x2="78" y2="68" stroke={fg} strokeWidth="2.5"/>
      </svg>
    );
  },
  iconShield({ tone = "light" } = {}) {
    const fg = tone === "dark" ? "#07223a" : "#fff";
    const accent = "#ffdd00";
    return (
      <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
        <path d="M50 14 L82 24 L82 54 Q82 80 50 90 Q18 80 18 54 L18 24 Z" fill={accent} fillOpacity=".25" stroke={fg} strokeWidth="3" strokeLinejoin="round"/>
        <path d="M36 50 L46 60 L66 38" stroke={fg} strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
      </svg>
    );
  },
  iconStandard({ tone = "light" } = {}) {
    const fg = tone === "dark" ? "#07223a" : "#fff";
    const accent = "#ffdd00";
    return (
      <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
        <circle cx="50" cy="50" r="34" fill="none" stroke={fg} strokeWidth="3"/>
        <circle cx="50" cy="50" r="24" fill="none" stroke={fg} strokeWidth="1.5" strokeDasharray="3 4"/>
        <path d="M50 28 L57 46 L76 46 L61 56 L67 74 L50 64 L33 74 L39 56 L24 46 L43 46 Z" fill={accent} stroke={fg} strokeWidth="1.5" strokeLinejoin="round"/>
      </svg>
    );
  },
  iconDoc({ tone = "light" } = {}) {
    const fg = tone === "dark" ? "#07223a" : "#fff";
    const accent = "#ffdd00";
    return (
      <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
        <rect x="22" y="14" width="48" height="62" rx="2" fill={tone === "dark" ? "#fff" : "rgba(255,255,255,.08)"} stroke={fg} strokeWidth="2.5"/>
        <line x1="30" y1="30" x2="62" y2="30" stroke={fg} strokeWidth="2"/>
        <line x1="30" y1="40" x2="62" y2="40" stroke={fg} strokeWidth="1.5" opacity=".7"/>
        <line x1="30" y1="48" x2="56" y2="48" stroke={fg} strokeWidth="1.5" opacity=".7"/>
        <line x1="30" y1="56" x2="58" y2="56" stroke={fg} strokeWidth="1.5" opacity=".7"/>
        <circle cx="74" cy="78" r="14" fill={accent}/>
        <path d="M68 78 l4 4 l8 -8" stroke="#07223a" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    );
  },
  iconSmc({ tone = "light" } = {}) {
    const fg = tone === "dark" ? "#07223a" : "#fff";
    const accent = "#ffdd00";
    return (
      <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
        {/* Ship hull silhouette inside a certificate frame */}
        <rect x="14" y="22" width="72" height="50" rx="2" fill={tone === "dark" ? "#fff" : "rgba(255,255,255,.08)"} stroke={fg} strokeWidth="2.5"/>
        <path d="M28 56 L72 56 L66 64 L34 64 Z" fill={fg} opacity=".25" stroke={fg} strokeWidth="1.8"/>
        <rect x="44" y="40" width="14" height="16" fill={fg} opacity=".4" stroke={fg} strokeWidth="1.5"/>
        <line x1="50" y1="32" x2="50" y2="40" stroke={fg} strokeWidth="1.5"/>
        <circle cx="78" cy="78" r="12" fill={accent}/>
        <path d="M73 78 l3.5 3.5 l7 -7" stroke="#07223a" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    );
  },
};

Object.assign(window, {
  Text, ImageText, Callout, Accordion, Tabs, FlipCards, ClickReveal,
  Hotspot, Carousel, MCQ, DragDrop, Modal, Video, Timeline, Scenario,
  Cover, Stats, CodeTable, PlaceholderImage,
  Hero, PhotoPanel, ImageGrid, Illus
});

/* global React, ReactDOM, COURSE, QUIZZES */
const { useState, useEffect, useMemo, useRef } = React;

// ============= TWEAK DEFAULTS (host-editable) =============
const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "accent": "blue",
  "radius": "square",
  "showProgress": true
}/*EDITMODE-END*/;

// ============= APP =============
function App() {
  const [t, setTweak] = useTweaks(TWEAK_DEFAULTS);

  // Apply tweak CSS vars to root
  useEffect(() => {
    const root = document.documentElement;
    if (t.accent === "yellow") {
      root.style.setProperty("--tw-accent", "#ffdd00");
      root.style.setProperty("--tw-accent-on", "#07223a");
    } else {
      root.style.setProperty("--tw-accent", "#0065a4");
      root.style.setProperty("--tw-accent-on", "#ffffff");
    }
    if (t.radius === "soft") {
      root.style.setProperty("--tw-radius", "8px");
      root.style.setProperty("--tw-radius-lg", "16px");
    } else {
      root.style.setProperty("--tw-radius", "4px");
      root.style.setProperty("--tw-radius-lg", "8px");
    }
  }, [t.accent, t.radius]);

  // Build flat screen list with section refs
  const allScreens = useMemo(() => {
    const list = [];
    COURSE.sections.forEach((sec, si) => {
      sec.screens.forEach((sc, sci) => {
        list.push({ ...sc, sectionId: sec.id, sectionTitle: sec.title, sectionIdx: si, screenIdx: sci, key: sec.id + "." + sc.id });
      });
      // Each section ends with a knowledge check
      const q = QUIZZES[sec.id];
      if (q) {
        list.push({
          id: "check-" + sec.id,
          sectionId: sec.id,
          sectionTitle: sec.title,
          sectionIdx: si,
          screenIdx: sec.screens.length,
          key: sec.id + ".check",
          isQuiz: true,
          title: "Knowledge check",
          eyebrow: sec.title + " · check",
          quiz: q,
        });
      }
    });
    return list;
  }, []);

  const [activeKey, setActiveKey] = useState(allScreens[0].key);
  const activeIdx = allScreens.findIndex(s => s.key === activeKey);
  const active = allScreens[activeIdx];

  // visited tracking
  const [visited, setVisited] = useState(() => ({ [allScreens[0].key]: true }));
  useEffect(() => {
    setVisited(v => ({ ...v, [activeKey]: true }));
    document.querySelector(".content")?.scrollTo({ top: 0, behavior: "smooth" });
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [activeKey]);

  const [openSections, setOpenSections] = useState(() => ({ [allScreens[0].sectionId]: true }));
  const toggleSection = (id) => setOpenSections(s => ({ ...s, [id]: !s[id] }));

  // mobile drawer
  const [drawerOpen, setDrawerOpen] = useState(false);
  // desktop collapsed rail
  const [collapsed, setCollapsed] = useState(() => {
    try { return localStorage.getItem("ism_drawer_collapsed") === "1"; } catch (e) { return false; }
  });
  useEffect(() => {
    try { localStorage.setItem("ism_drawer_collapsed", collapsed ? "1" : "0"); } catch (e) {}
  }, [collapsed]);
  const goToScreen = (key) => {
    setActiveKey(key);
    setDrawerOpen(false);
    // open the section containing it
    const sc = allScreens.find(s => s.key === key);
    if (sc) setOpenSections(o => ({ ...o, [sc.sectionId]: true }));
  };

  // progress
  const totalScreens = allScreens.length;
  const visitedCount = Object.keys(visited).length;
  const progressPct = Math.round((visitedCount / totalScreens) * 100);

  const sectionStats = COURSE.sections.map(sec => {
    const screens = allScreens.filter(s => s.sectionId === sec.id);
    const v = screens.filter(s => visited[s.key]).length;
    return { id: sec.id, total: screens.length, visited: v, pct: Math.round((v / screens.length) * 100) };
  });

  const goPrev = () => activeIdx > 0 && setActiveKey(allScreens[activeIdx - 1].key);
  const goNext = () => activeIdx < allScreens.length - 1 && setActiveKey(allScreens[activeIdx + 1].key);

  return (
    <div className={"app" + (collapsed ? " is-collapsed" : "")}>
      <div className={"drawer-scrim" + (drawerOpen ? " is-open" : "")} onClick={() => setDrawerOpen(false)}></div>
      <Drawer
        open={drawerOpen}
        collapsed={collapsed}
        onCollapseToggle={() => setCollapsed(c => !c)}
        onClose={() => setDrawerOpen(false)}
        sections={COURSE.sections}
        sectionStats={sectionStats}
        activeKey={activeKey}
        activeSectionId={active.sectionId}
        openSections={openSections}
        toggleSection={toggleSection}
        onGo={goToScreen}
        allScreens={allScreens}
        visited={visited}
        progressPct={progressPct}
        showProgress={t.showProgress}
      />

      <div className="main">
        <div className="topbar">
          <button className="topbar__hamburger"
                  onClick={() => {
                    if (window.innerWidth <= 880) setDrawerOpen(o => !o);
                    else setCollapsed(c => !c);
                  }}
                  aria-label={collapsed ? "Open menu" : "Close menu"}
                  title={collapsed ? "Open menu" : "Close menu"}>
            <svg width="18" height="14" viewBox="0 0 18 14" fill="none" stroke="currentColor" strokeWidth="2"><path d="M1 1h16M1 7h16M1 13h16"/></svg>
          </button>
          <div className="topbar__crumb">
            <span>NSRS · ISM 2025</span>
            <span className="topbar__crumb-sep">/</span>
            <span><b>{active.sectionTitle}</b></span>
            <span className="topbar__crumb-sep">/</span>
            <span style={{textTransform:"none", letterSpacing: 0, color: "var(--fg2)"}}>
              Screen {active.screenIdx + 1} of {COURSE.sections[active.sectionIdx].screens.length + 1}
            </span>
          </div>
          <div className="topbar__time">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>
            <span>~{COURSE.durationMin} min</span>
          </div>
        </div>

        <div className="content">
          {active.isQuiz
            ? <QuizScreen screen={active} onNext={goNext} />
            : <RegularScreen screen={active} />
          }
        </div>

        <div className="navbar">
          {t.showProgress && (
            <div className="navbar__progress">
              <span className="navbar__progress-meta">{visitedCount}/{totalScreens} · {progressPct}%</span>
              <div className="navbar__progress-bar">
                <div className="navbar__progress-fill" style={{ width: progressPct + "%" }}></div>
              </div>
            </div>
          )}
          {!t.showProgress && <div style={{flex: 1}}></div>}
          <div className="navbar__btns">
            <button className="navbar__btn" onClick={() => goToScreen(allScreens[0].key)}>Restart</button>
            <button className="navbar__btn" onClick={goPrev} disabled={activeIdx === 0}>‹ Previous</button>
            <button className="navbar__btn navbar__btn--primary" onClick={goNext} disabled={activeIdx === allScreens.length - 1}>
              {activeIdx === allScreens.length - 1 ? "Finished" : "Next ›"}
            </button>
          </div>
        </div>
      </div>

      <TweaksPanel>
        <TweakSection label="Appearance" />
        <TweakRadio label="Accent colour" value={t.accent} options={["blue", "yellow"]} onChange={(v) => setTweak("accent", v)} />
        <TweakRadio label="Card radius" value={t.radius} options={["square", "soft"]} onChange={(v) => setTweak("radius", v)} />
        <TweakSection label="Course" />
        <TweakToggle label="Show progress %" value={t.showProgress} onChange={(v) => setTweak("showProgress", v)} />
      </TweaksPanel>
    </div>
  );
}

// ============= DRAWER =============
function Drawer({ open, collapsed, onCollapseToggle, sections, sectionStats, activeKey, activeSectionId, openSections, toggleSection, onGo, allScreens, visited, progressPct, showProgress }) {
  return (
    <aside className={"drawer" + (open ? " is-open" : "") + (collapsed ? " is-collapsed" : "")}>
      <div className="drawer__brand">
        <div className="drawer__badge">
          <img src="design/assets/JF-logo.png" alt="JF" />
        </div>
        <div className="drawer__brand-text">
          <div className="drawer__title">NSRS · ISM 2025</div>
          <div className="drawer__course">ISM Code</div>
        </div>
        <button className="drawer__collapse-btn" onClick={onCollapseToggle} aria-label={collapsed ? "Expand menu" : "Collapse menu"} title={collapsed ? "Expand" : "Collapse"}>
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="2">
            {collapsed ? <path d="M1 7h12M8 2l5 5-5 5"/> : <path d="M13 7H1M6 2L1 7l5 5"/>}
          </svg>
        </button>
      </div>

      {showProgress && (
        <div className="drawer__progress">
          <div className="drawer__progress-row">
            <span>Course progress</span>
            <span className="drawer__progress-pct">{progressPct}%</span>
          </div>
          <div className="drawer__progress-bar">
            <div className="drawer__progress-fill" style={{ width: progressPct + "%" }}></div>
          </div>
        </div>
      )}

      <div className="drawer__sections">
        {sections.map((sec, si) => {
          const stat = sectionStats[si];
          const sectionScreens = allScreens.filter(s => s.sectionId === sec.id);
          const isOpen = openSections[sec.id];
          const isActive = sec.id === activeSectionId;
          const isDone = stat.visited === stat.total;
          return (
            <div key={sec.id} className="drawer__section">
              <button className={"drawer__section-btn" + (isOpen ? " is-open" : "")} onClick={() => toggleSection(sec.id)} title={sec.title}>
                <span className={"drawer__section-num" + (isDone ? " is-done" : "") + (isActive ? " is-active" : "")}>
                  {isDone ? "✓" : String(si + 1).padStart(2, "0")}
                </span>
                <span className="drawer__section-meta">
                  <div className="drawer__section-name">{sec.title}</div>
                  <div className="drawer__section-sub">
                    <span className="drawer__section-sub-bar">
                      <span className="drawer__section-sub-fill" style={{ width: stat.pct + "%" }}></span>
                    </span>
                    <span>{stat.visited}/{stat.total}</span>
                  </div>
                </span>
                <span className="drawer__section-chev">›</span>
              </button>
              {isOpen && (
                <div className="drawer__screens">
                  {sectionScreens.map(sc => (
                    <button key={sc.key}
                            className={"drawer__screen-btn" + (sc.key === activeKey ? " is-active" : "")}
                            onClick={() => onGo(sc.key)}>
                      <span className={"drawer__screen-dot" + (visited[sc.key] && sc.key !== activeKey ? " is-done" : "")}></span>
                      <span>{sc.isQuiz ? "Knowledge check" : sc.title.replace(/<[^>]+>/g, "")}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>
          );
        })}
      </div>

      <div className="drawer__foot">
        <a href="https://jfdglobal.com" className="drawer__foot-link" target="_blank" rel="noreferrer">jfdglobal.com</a>
        <span>v1.0</span>
      </div>
    </aside>
  );
}

// ============= SCREENS =============
function RegularScreen({ screen }) {
  return (
    <>
      {/* <div className="screen-head">
        {screen.eyebrow && <div className="screen-head__eyebrow">{screen.eyebrow}</div>}
        <h1 className="screen-head__title" dangerouslySetInnerHTML={{__html: screen.title}}></h1>
        {screen.lede && <p className="screen-head__lede">{screen.lede}</p>}
      </div> */}
      {screen.blocks && screen.blocks.map((b, i) => {
        const Comp = window[b.kind];
        if (!Comp) return <div key={i}>Unknown block: {b.kind}</div>;
        return <Comp key={i} {...b.props} />;
      })}
    </>
  );
}

function QuizScreen({ screen, onNext }) {
  const q = screen.quiz;
  const [answered, setAnswered] = useState(false);
  return (
    <>
      <div className="screen-head">
        <div className="screen-head__eyebrow">{screen.eyebrow}</div>
        <h1 className="screen-head__title">Knowledge check</h1>
        <p className="screen-head__lede">A quick check to make sure the key idea has landed before you move on. There's no pass mark — feedback is instant.</p>
      </div>
      <MCQ
        qNum={1}
        question={q.question}
        options={q.options}
        correct={q.correct}
        feedback={q.feedback}
        onAnswered={() => setAnswered(true)}
      />
      {answered && (
        <div style={{marginTop: 24, display:"flex", gap: 12, alignItems:"center"}}>
          <button className="btn" onClick={onNext}>Continue</button>
          <span style={{fontSize:13, color:"var(--fg3)"}}>You can revisit this check from the menu any time.</span>
        </div>
      )}
    </>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);

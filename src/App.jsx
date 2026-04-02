// App.jsx — Main Application Component
// Electrical Engineering Interview Q&A System
// Converts the C++ terminal app to a React web app

import { useState, useMemo } from "react";
import {
  qaDatabase,
  allTopics,
  topicCounts,
  searchQA,
  filterByTopic,
} from "./data.js";
import {
  Banner,
  SearchBar,
  StatsBar,
  TopicSidebar,
  QACard,
  EmptyState,
} from "./components.jsx";

// ─── Global styles injected once ─────────────────────────────────────────────
const globalStyle = `
  * { box-sizing: border-box; margin: 0; padding: 0; }
  body {
    background: #0a0d12;
    color: #e8ecf0;
    font-family: 'Segoe UI', system-ui, sans-serif;
    min-height: 100vh;
  }
  ::-webkit-scrollbar { width: 6px; height: 6px; }
  ::-webkit-scrollbar-track { background: #111418; }
  ::-webkit-scrollbar-thumb { background: #2a2e36; border-radius: 3px; }
  ::-webkit-scrollbar-thumb:hover { background: #3a3e46; }
`;

// ─── Main App ─────────────────────────────────────────────────────────────────
export default function App() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeTopic, setActiveTopic] = useState("All");
  const [expandAll, setExpandAll] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false); // mobile sidebar

  // ── Derived filtered list ────────────────────────────────────────────────
  const filteredQA = useMemo(() => {
    let result = searchQuery.trim()
      ? searchQA(searchQuery)
      : filterByTopic(activeTopic);

    // If searching, also filter by topic unless "All"
    if (searchQuery.trim() && activeTopic !== "All") {
      result = result.filter((q) => q.topic === activeTopic);
    }

    return result;
  }, [searchQuery, activeTopic]);

  // ── Handlers ─────────────────────────────────────────────────────────────
  function handleTopicSelect(topic) {
    setActiveTopic(topic);
    setSearchQuery("");
    setSidebarOpen(false);
    setExpandAll(false);
  }

  function handleSearch(q) {
    setSearchQuery(q);
    if (q.trim()) setActiveTopic("All");
    setExpandAll(false);
  }

  // ── Layout ───────────────────────────────────────────────────────────────
  return (
    <>
      {/* Inject global styles */}
      <style>{globalStyle}</style>

      <div style={{ minHeight: "100vh", background: "#0a0d12" }}>
        {/* ── TOP HEADER ─────────────────────────────────────────────────── */}
        <header
          style={{
            background: "#0d1117",
            borderBottom: "1px solid #1e2530",
            padding: "12px 20px",
            position: "sticky",
            top: 0,
            zIndex: 100,
            backdropFilter: "blur(8px)",
          }}
        >
          <div
            style={{
              maxWidth: "1400px",
              margin: "0 auto",
              display: "flex",
              alignItems: "center",
              gap: "20px",
              flexWrap: "wrap",
            }}
          >
            <Banner />

            <div style={{ flex: 1, minWidth: "240px" }}>
              <SearchBar
                value={searchQuery}
                onChange={handleSearch}
                resultCount={filteredQA.length}
                total={qaDatabase.length}
              />
            </div>

            {/* Mobile sidebar toggle */}
            <button
              onClick={() => setSidebarOpen((v) => !v)}
              style={{
                display: "none",
                background: "#1a1f28",
                border: "1px solid #2a2e36",
                borderRadius: "6px",
                color: "#e8ecf0",
                padding: "8px 14px",
                cursor: "pointer",
                fontSize: "0.8rem",
                fontFamily: "'Courier New', monospace",
              }}
              className="mobile-menu-btn"
            >
              ☰ Topics
            </button>
          </div>
        </header>

        {/* Responsive style for mobile */}
        <style>{`
          @media (max-width: 720px) {
            .mobile-menu-btn { display: block !important; }
            .sidebar-panel { display: ${sidebarOpen ? "block" : "none"} !important; }
            .main-layout { flex-direction: column !important; }
          }
        `}</style>

        {/* ── MAIN LAYOUT ────────────────────────────────────────────────── */}
        <div
          className="main-layout"
          style={{
            maxWidth: "1400px",
            margin: "0 auto",
            display: "flex",
            gap: "0",
            minHeight: "calc(100vh - 70px)",
          }}
        >
          {/* ── SIDEBAR ──────────────────────────────────────────────────── */}
          <aside
            className="sidebar-panel"
            style={{
              width: "240px",
              minWidth: "240px",
              borderRight: "1px solid #1e2530",
              padding: "16px 12px",
              overflowY: "auto",
              position: "sticky",
              top: "70px",
              height: "calc(100vh - 70px)",
              background: "#0d1117",
            }}
          >
            <div
              style={{
                fontSize: "0.6rem",
                color: "#4a5568",
                textTransform: "uppercase",
                letterSpacing: "0.2em",
                marginBottom: "8px",
                paddingLeft: "14px",
              }}
            >
              Browse Topics
            </div>
            <TopicSidebar
              topics={allTopics}
              topicCounts={topicCounts}
              activeTopic={activeTopic}
              onSelect={handleTopicSelect}
            />
          </aside>

          {/* ── CONTENT AREA ─────────────────────────────────────────────── */}
          <main style={{ flex: 1, padding: "20px 24px", minWidth: 0 }}>
            {/* Stats + controls row */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                marginBottom: "20px",
                gap: "16px",
                flexWrap: "wrap",
              }}
            >
              <StatsBar
                totalQuestions={qaDatabase.length}
                totalTopics={allTopics.length}
                shownCount={filteredQA.length}
              />

              <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
                {/* Active topic chip */}
                {activeTopic !== "All" && (
                  <button
                    onClick={() => handleTopicSelect("All")}
                    style={{
                      background: "#1e2530",
                      border: "1px solid #2a2e36",
                      borderRadius: "20px",
                      color: "#8892a4",
                      padding: "5px 12px",
                      fontSize: "0.75rem",
                      cursor: "pointer",
                      fontFamily: "'Courier New', monospace",
                      display: "flex",
                      alignItems: "center",
                      gap: "6px",
                    }}
                  >
                    {activeTopic} ✕
                  </button>
                )}

                {/* Expand/Collapse all */}
                <button
                  onClick={() => setExpandAll((v) => !v)}
                  style={{
                    background: expandAll ? "#00c8ff22" : "#1a1f28",
                    border: `1px solid ${expandAll ? "#00c8ff44" : "#2a2e36"}`,
                    borderRadius: "6px",
                    color: expandAll ? "#00c8ff" : "#8892a4",
                    padding: "6px 14px",
                    fontSize: "0.75rem",
                    cursor: "pointer",
                    fontFamily: "'Courier New', monospace",
                    transition: "all 0.15s",
                  }}
                >
                  {expandAll ? "▴ Collapse All" : "▾ Expand All"}
                </button>
              </div>
            </div>

            {/* Breadcrumb / context line */}
            <div
              style={{
                fontFamily: "'Courier New', monospace",
                fontSize: "0.7rem",
                color: "#4a5568",
                marginBottom: "14px",
              }}
            >
              {searchQuery
                ? `Search: "${searchQuery}" — ${filteredQA.length} result${filteredQA.length !== 1 ? "s" : ""}`
                : `${activeTopic === "All" ? "All Topics" : activeTopic} — ${filteredQA.length} question${filteredQA.length !== 1 ? "s" : ""}`}
            </div>

            {/* ── Q&A LIST ─────────────────────────────────────────────── */}
            {filteredQA.length === 0 ? (
              <EmptyState query={searchQuery} />
            ) : (
              (() => {
                // Group by topic for visual separation
                const groups = [];
                let currentTopic = null;
                let currentItems = [];
                for (const qa of filteredQA) {
                  if (qa.topic !== currentTopic) {
                    if (currentItems.length > 0) {
                      groups.push({ topic: currentTopic, items: currentItems });
                    }
                    currentTopic = qa.topic;
                    currentItems = [qa];
                  } else {
                    currentItems.push(qa);
                  }
                }
                if (currentItems.length > 0) {
                  groups.push({ topic: currentTopic, items: currentItems });
                }

                return groups.map(({ topic, items }) => (
                  <div key={topic} style={{ marginBottom: "28px" }}>
                    {/* Topic group header (show only in "All" or search mode) */}
                    {(activeTopic === "All" || searchQuery) && (
                      <TopicGroupHeader
                        topic={topic}
                        count={items.length}
                        onSelect={() => handleTopicSelect(topic)}
                      />
                    )}

                    {items.map((qa, i) => {
                      // Compute global index
                      const globalIdx =
                        filteredQA.indexOf(qa) + 1;
                      return (
                        <QACard
                          key={qa.question}
                          qa={qa}
                          index={globalIdx}
                          defaultExpanded={expandAll}
                        />
                      );
                    })}
                  </div>
                ));
              })()
            )}
          </main>
        </div>

        {/* Footer */}
        <footer
          style={{
            borderTop: "1px solid #1e2530",
            padding: "14px 24px",
            textAlign: "center",
            fontFamily: "'Courier New', monospace",
            fontSize: "0.65rem",
            color: "#2a3040",
          }}
        >
          ⚡ ELECTRICAL ENGINEERING Q&A SYSTEM — {qaDatabase.length} Questions
          across {allTopics.length} Topics — Built for Interview Preparation
        </footer>
      </div>
    </>
  );
}

// ─── TopicGroupHeader ─────────────────────────────────────────────────────────
function TopicGroupHeader({ topic, count, onSelect }) {
  const color = { accent: "#00c8ff" }; // default teal

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: "10px",
        marginBottom: "10px",
        marginTop: "4px",
      }}
    >
      <span
        style={{
          height: "1px",
          width: "18px",
          background: "#2a2e36",
          flexShrink: 0,
        }}
      />
      <button
        onClick={onSelect}
        style={{
          background: "none",
          border: "none",
          cursor: "pointer",
          fontFamily: "'Courier New', monospace",
          fontSize: "0.72rem",
          fontWeight: "700",
          color: "#4a5568",
          letterSpacing: "0.15em",
          textTransform: "uppercase",
          whiteSpace: "nowrap",
          padding: 0,
          transition: "color 0.15s",
        }}
        onMouseEnter={(e) => (e.currentTarget.style.color = "#8892a4")}
        onMouseLeave={(e) => (e.currentTarget.style.color = "#4a5568")}
      >
        {topic}
      </button>
      <span
        style={{
          fontFamily: "'Courier New', monospace",
          fontSize: "0.65rem",
          color: "#2a3040",
        }}
      >
        ({count})
      </span>
      <span
        style={{
          flex: 1,
          height: "1px",
          background: "#1e2530",
        }}
      />
    </div>
  );
}
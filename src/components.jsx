// components.jsx — Reusable UI Components for Electrical Q&A App

import { useState } from "react";

// ─── Banner Component ──────────────────────────────────────────────────────
export function Banner() {
  return (
    <div
      style={{
        background: "linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%)",
        color: "white",
        padding: "20px",
        textAlign: "center",
        borderRadius: "8px",
        marginBottom: "20px",
        boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
      }}
    >
      <h1 style={{ fontSize: "2rem", marginBottom: "10px" }}>
        Electrical Engineering Q&A
      </h1>
      <p style={{ fontSize: "1.1rem", opacity: 0.9 }}>
        Master electrical concepts with interactive Q&A
      </p>
    </div>
  );
}

// ─── SearchBar Component ───────────────────────────────────────────────────
export function SearchBar({ value, onChange, resultCount, total }) {
  return (
    <div style={{ marginBottom: "20px" }}>
      <input
        type="text"
        placeholder="Search questions..."
        value={value}
        onChange={(e) => onChange(e.target.value)}
        style={{
          width: "100%",
          padding: "12px 16px",
          border: "1px solid #2a2e36",
          borderRadius: "6px",
          background: "#111418",
          color: "#e8ecf0",
          fontSize: "16px",
          outline: "none",
        }}
      />
      {value && (
        <div style={{ marginTop: "8px", fontSize: "14px", color: "#6b7280" }}>
          Found {resultCount} of {total} questions
        </div>
      )}
    </div>
  );
}

// ─── StatsBar Component ────────────────────────────────────────────────────
export function StatsBar({ totalQuestions, totalTopics, shownCount }) {
  return (
    <div
      style={{
        background: "#111418",
        padding: "12px 16px",
        borderRadius: "6px",
        marginBottom: "20px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        flexWrap: "wrap",
        gap: "10px",
      }}
    >
      <span style={{ color: "#e8ecf0" }}>
        Showing {shownCount} question{shownCount !== 1 ? "s" : ""}
      </span>
      <span style={{ color: "#6b7280", fontSize: "14px" }}>
        Total: {totalQuestions} questions across {totalTopics} topics
      </span>
    </div>
  );
}

// ─── TopicSidebar Component ────────────────────────────────────────────────
export function TopicSidebar({ topics, activeTopic, onSelect, topicCounts }) {
  return (
    <div
      style={{
        background: "#111418",
        borderRadius: "8px",
        padding: "16px",
        marginBottom: "20px",
      }}
    >
      <h3 style={{ color: "#e8ecf0", marginBottom: "12px" }}>Topics</h3>
      <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
        {topics.map((topic) => (
          <button
            key={topic}
            onClick={() => onSelect(topic)}
            style={{
              background: activeTopic === topic ? "#1e3a8a" : "#1e2530",
              color: "#e8ecf0",
              border: "none",
              padding: "8px 12px",
              borderRadius: "4px",
              cursor: "pointer",
              textAlign: "left",
              transition: "background 0.2s",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <span>{topic}</span>
            <span style={{ color: "#6b7280", fontSize: "12px" }}>
              {topicCounts[topic] || 0}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
}

// ─── QACard Component ──────────────────────────────────────────────────────
export function QACard({ qa, index, defaultExpanded }) {
  const [isExpanded, setIsExpanded] = useState(defaultExpanded);

  const toggle = () => setIsExpanded(!isExpanded);

  return (
    <div
      style={{
        background: "#111418",
        border: "1px solid #1e2530",
        borderRadius: "8px",
        marginBottom: "12px",
        overflow: "hidden",
      }}
    >
      <button
        onClick={toggle}
        style={{
          width: "100%",
          background: "none",
          border: "none",
          padding: "16px",
          textAlign: "left",
          cursor: "pointer",
          color: "#e8ecf0",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <div>
          <span
            style={{
              display: "inline-block",
              background: "#1e3a8a",
              color: "white",
              padding: "2px 8px",
              borderRadius: "12px",
              fontSize: "12px",
              marginRight: "8px",
            }}
          >
            {qa.topic}
          </span>
          <span style={{ fontWeight: "500" }}>{qa.question}</span>
        </div>
        <span style={{ color: "#6b7280" }}>{isExpanded ? "−" : "+"}</span>
      </button>

      {isExpanded && (
        <div
          style={{
            padding: "0 16px 16px 16px",
            borderTop: "1px solid #1e2530",
            color: "#d1d5db",
            lineHeight: "1.6",
          }}
        >
          {qa.answer}
        </div>
      )}
    </div>
  );
}

// ─── EmptyState Component ──────────────────────────────────────────────────
export function EmptyState({ query }) {
  const message = query
    ? `No questions found for "${query}". Try a different search term.`
    : "No questions available.";

  return (
    <div
      style={{
        textAlign: "center",
        padding: "40px 20px",
        color: "#6b7280",
      }}
    >
      <div style={{ fontSize: "3rem", marginBottom: "16px" }}>🔍</div>
      <p style={{ fontSize: "18px", marginBottom: "8px" }}>No results found</p>
      <p>{message}</p>
    </div>
  );
}

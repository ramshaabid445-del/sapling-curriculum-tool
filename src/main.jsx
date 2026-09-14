import React, { Component, StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { error: null };
  }

  static getDerivedStateFromError(error) {
    return { error };
  }

  render() {
    if (this.state.error) {
      return <pre style={{ margin: 24, color: "#8A3A2C", whiteSpace: "pre-wrap" }}>
        {`Sapling could not start: ${this.state.error.message}`}
      </pre>;
    }
    return this.props.children;
  }
}

createRoot(document.getElementById("root")).render(
  <StrictMode><ErrorBoundary><App /></ErrorBoundary></StrictMode>,
);

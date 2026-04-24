"use client";

import { useEffect, useRef } from "react";

function baseLayout(title: string) {
  return {
    title: { text: title, font: { color: "#FFFFFF", size: 18 } },
    paper_bgcolor: "rgba(0,0,0,0)",
    plot_bgcolor: "rgba(0,0,0,0)",
    font: { color: "#A1A1AA" },
    margin: { l: 40, r: 20, t: 40, b: 40 },
    xaxis: { gridcolor: "#1F1F1F", zerolinecolor: "#1F1F1F" },
    yaxis: { gridcolor: "#1F1F1F", zerolinecolor: "#1F1F1F" },
  } as const;
}

export function EfficiencyChart() {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!ref.current) return;
    let active = true;
    import("plotly.js-dist-min").then((mod) => {
      if (!active || !ref.current) return;
      const Plotly = mod.default as any;
      Plotly.newPlot(
        ref.current,
        [
        {
          type: "scatter",
          mode: "lines+markers",
          x: ["Month 1", "Month 2", "Month 3", "Month 4", "Month 5", "Month 6"],
          y: [100, 85, 70, 55, 45, 35],
          line: { color: "#623CEA", width: 4 },
          marker: { color: "#623CEA", size: 6 },
          fill: "tozeroy",
          fillcolor: "rgba(98,60,234,0.1)",
        },
        ],
        baseLayout("Operational Efficiency Boost"),
        { displayModeBar: false, responsive: true }
      );
    });
    return () => {
      active = false;
      import("plotly.js-dist-min").then((mod) => {
        if (ref.current) {
          const Plotly = mod.default as any;
          Plotly.purge(ref.current);
        }
      });
    };
  }, []);

  return <div ref={ref} className="h-full w-full" />;
}

export function OutcomeChart() {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!ref.current) return;
    let active = true;
    import("plotly.js-dist-min").then((mod) => {
      if (!active || !ref.current) return;
      const Plotly = mod.default as any;
      Plotly.newPlot(
        ref.current,
        [
        {
          type: "scatter",
          mode: "lines+markers",
          name: "Operational Cost",
          x: ["Month 1", "Month 2", "Month 3", "Month 4", "Month 5", "Month 6"],
          y: [80, 65, 50, 35, 25, 15],
          line: { color: "#623CEA", width: 4 },
          marker: { color: "#623CEA", size: 6 },
        },
        {
          type: "scatter",
          mode: "lines+markers",
          name: "Team Output",
          x: ["Month 1", "Month 2", "Month 3", "Month 4", "Month 5", "Month 6"],
          y: [20, 35, 50, 65, 75, 85],
          line: { color: "#A1A1AA", width: 4 },
          marker: { color: "#A1A1AA", size: 6 },
        },
        ],
        baseLayout("Efficiency Impact Over Time (%)"),
        { displayModeBar: false, responsive: true }
      );
    });
    return () => {
      active = false;
      import("plotly.js-dist-min").then((mod) => {
        if (ref.current) {
          const Plotly = mod.default as any;
          Plotly.purge(ref.current);
        }
      });
    };
  }, []);

  return <div ref={ref} className="h-full w-full" />;
}


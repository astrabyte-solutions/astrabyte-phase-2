"use client";

import { useEffect, useRef } from "react";

export default function ServiceHeroChart() {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!ref.current) return;
    let active = true;

    import("plotly.js-dist-min").then((mod) => {
      if (!active || !ref.current) return;
      const Plotly = mod.default as any;

      const data = [
        {
          type: "scatter",
          mode: "lines",
          x: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
          y: [30, 45, 40, 60, 75, 85],
          line: { color: "#623CEA", width: 3, shape: "spline" },
          fill: "tozeroy",
          fillcolor: "rgba(98,60,234,0.12)",
        },
      ];

      const layout = {
        paper_bgcolor: "rgba(0,0,0,0)",
        plot_bgcolor: "#0A0A0A",
        margin: { l: 40, r: 20, t: 20, b: 30 },
        xaxis: {
          color: "#A1A1AA",
          gridcolor: "#1F1F1F",
          zerolinecolor: "#1F1F1F",
        },
        yaxis: {
          color: "#A1A1AA",
          gridcolor: "#1F1F1F",
          zerolinecolor: "#1F1F1F",
          range: [0, 100],
        },
        showlegend: false,
      };

      Plotly.newPlot(ref.current, data, layout, {
        displayModeBar: false,
        responsive: true,
      });
    });

    return () => {
      active = false;
      import("plotly.js-dist-min").then((mod) => {
        const Plotly = mod.default as any;
        if (ref.current) Plotly.purge(ref.current);
      });
    };
  }, []);

  return <div ref={ref} className="h-full w-full" />;
}

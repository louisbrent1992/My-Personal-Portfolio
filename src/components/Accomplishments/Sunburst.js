import React from "react";
import * as d3 from "d3";
import data from "../../constants/sunburst.json";

// Copyright 2021 Observable, Inc.
// Released under the ISC license.
// https://observablehq.com/@d3/sunburst
export default function Sunburst() {
  const sunRef = React.useRef(null);

  React.useEffect(() => {
    const drawSunburst = () => {
      const sunEl = d3.select(sunRef.current);
      sunEl.selectAll("*").remove(); // Clear svg content before adding new elements

      const dimensions = {
        width: 932,
        get radius() {
          return this.width / 6;
        },
      };

      const color = d3.scaleOrdinal(
        d3.quantize(d3.interpolateRainbow, data.children.length + 1)
      );

      const format = d3.format(",d");

      const arc = d3
        .arc()
        .startAngle((d) => d.x0)
        .endAngle((d) => d.x1)
        .padAngle((d) => Math.min((d.x1 - d.x0) / 2, 0.005))
        .padRadius(dimensions.radius * 1.5)
        .innerRadius((d) => d.y0 * dimensions.radius)
        .outerRadius((d) =>
          Math.max(d.y0 * dimensions.radius, d.y1 * dimensions.radius - 1)
        );

      const root = partition(data);

      root.each((d) => (d.current = d));

      const svg = sunEl
        .attr("viewBox", [0, 0, dimensions.width, dimensions.width])
        .style("font", "10px sans-serif");

      const g = svg
        .append("g")
        .attr(
          "transform",
          `translate(${dimensions.width / 2},${dimensions.width / 2})`
        );

      const path = g
        .append("g")
        .selectAll("path")
        .data(root.descendants().slice(1))
        .join("path")
        .attr("fill", (d) => {
          while (d.depth > 1) d = d.parent;
          return color(d.data.name);
        })
        .attr("fill-opacity", (d) =>
          arcVisible(d.current) ? (d.children ? 0.6 : 0.4) : 0
        )
        .attr("pointer-events", (d) =>
          arcVisible(d.current) ? "auto" : "none"
        )

        .attr("d", (d) => arc(d.current));

      path
        .filter((d) => d.children)
        .style("cursor", "pointer")
        .on("click", clicked);

      path.append("title").text(
        (d) =>
          `${d
            .ancestors()
            .map((d) => d.data.name)
            .reverse()
            .join("/")}\n${format(d.value)}`
      );

      const label = g
        .append("g")
        .attr("pointer-events", "none")
        .attr("text-anchor", "middle")
        .style("user-select", "none")
        .selectAll("text")
        .data(root.descendants().slice(1))
        .join("text")
        .attr("dy", "0.35em")
        .attr("fill-opacity", (d) => +labelVisible(d.current))
        .attr("transform", (d) => labelTransform(d.current))
        .text((d) => d.data.name);

      const parent = g
        .append("circle")
        .datum(root)
        .attr("r", dimensions.radius)
        .attr("fill", "none")
        .attr("pointer-events", "all")
        .on("click", clicked);

      function clicked(event, p) {
        parent.datum(p.parent || root);

        root.each(
          (d) =>
            (d.target = {
              x0:
                Math.max(0, Math.min(1, (d.x0 - p.x0) / (p.x1 - p.x0))) *
                2 *
                Math.PI,
              x1:
                Math.max(0, Math.min(1, (d.x1 - p.x0) / (p.x1 - p.x0))) *
                2 *
                Math.PI,
              y0: Math.max(0, d.y0 - p.depth),
              y1: Math.max(0, d.y1 - p.depth),
            })
        );

        const t = g.transition().duration(750);

        // Transition the data on all arcs, even the ones that aren’t visible,
        // so that if this transition is interrupted, entering arcs will start
        // the next transition from the desired position.
        path
          .transition(t)
          .tween("data", (d) => {
            const i = d3.interpolate(d.current, d.target);
            return (t) => (d.current = i(t));
          })
          .filter(function (d) {
            return +this.getAttribute("fill-opacity") || arcVisible(d.target);
          })
          .attr("fill-opacity", (d) =>
            arcVisible(d.target) ? (d.children ? 0.6 : 0.4) : 0
          )
          .attr("pointer-events", (d) =>
            arcVisible(d.target) ? "auto" : "none"
          )

          .attrTween("d", (d) => () => arc(d.current));

        label
          .filter(function (d) {
            return +this.getAttribute("fill-opacity") || labelVisible(d.target);
          })
          .transition(t)
          .attr("fill-opacity", (d) => +labelVisible(d.target))
          .attrTween("transform", (d) => () => labelTransform(d.current));
      }

      function arcVisible(d) {
        return d.y1 <= 3 && d.y0 >= 1 && d.x1 > d.x0;
      }

      function labelVisible(d) {
        return d.y1 <= 3 && d.y0 >= 1 && (d.y1 - d.y0) * (d.x1 - d.x0) > 0.03;
      }

      function labelTransform(d) {
        const x = (((d.x0 + d.x1) / 2) * 180) / Math.PI;
        const y = ((d.y0 + d.y1) / 2) * dimensions.radius;
        return `rotate(${x - 90}) translate(${y},0) rotate(${
          x < 180 ? 0 : 180
        })`;
      }

      function partition(data) {
        const root = d3
          .hierarchy(data)
          .sum((d) => d.value)
          .sort((a, b) => b.value - a.value);

        return d3.partition().size([2 * Math.PI, root.height + 1])(root);
      }
      return svg.node();
    };

    drawSunburst();
  }, []);

  return <svg ref={sunRef} />;
}

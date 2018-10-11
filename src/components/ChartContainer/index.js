import React from "react";
import "./ChartContainer.scss";

const Title = props => (
  <h3 className="chart__title">
    {props.title.split("@").map((s, i) => {
      if (i === 0) {
        return <span>{s}</span>;
      } else {
        return (
          <sup style={{ paddingLeft: "0.25rem", fontWeight: "normal" }}>
            {s}
          </sup>
        );
      }
    })}
  </h3>
);
const Subtitle = props => <h4 className="chart__subtitle">{props.subtitle}</h4>;
const Source = props => (
  <div
    className="chart__source"
    style={{ paddingTop: "0.5rem", fontSize: "14px" }}
  >
    {Object.keys(props.source).map(key => {
      console.log(props.source);
      if (key.includes("source") && props.source[key]) {
        return (
          <div style={{ paddingBottom: "0.5rem" }}>
            {props.source[key] &&
              props.source[key].split("@").map((s, i) => {
                if (i === 0) {
                  return <sup style={{ paddingRight: "0.25rem" }}>{s}</sup>;
                } else {
                  return <span>{s}</span>;
                }
              })}
          </div>
        );
      }
    })}
  </div>
);
const ChartContainer = props => (
  <div className="chart">
    <div className="chart__meta-container">
      {props.title ? <Title title={props.title} /> : null}
      {props.subtitle ? <Subtitle subtitle={props.subtitle} /> : null}
    </div>
    <div
      className="chart__figure"
      style={{ height: props.height, maxWidth: props.width, margin: "auto" }}
    >
      {props.children}
    </div>
    <div className="chart__meta-container">
      {props.source ? <Source source={props.source} /> : null}
    </div>
  </div>
);

export default ChartContainer;

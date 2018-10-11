import "./index.scss";
import { DataTable } from "./charts/DataTable";

let queue = [];
let data = null;

const CheckMark = props => (
  <svg
    className="passfailcheck"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 17.33 13.75"
    style={{
      ...props.style,
      fill: "none",
      stroke: "#2dbbb3",
      strokeLinecap: "square",
      strokeWidth: "4px",
      width: "auto",
      height: "14px"
    }}
  >
    <title>check-mark</title>
    <g id="Layer_2" data-name="Layer 2">
      <g id="Layer_1-2" data-name="Layer 1">
        <polyline
          className="check-mark"
          points="3.53 6.9 7.07 10.26 13.79 3.54"
        />
      </g>
    </g>
  </svg>
);

const CellRenderer = row => {
  let split;
  if (row.value) split = row.value.split("@");
  console.log(row);
  return (
    <div>
      <span>
        {row.column.Header.key === "Company" ? (
          <a href={row.original["Link"]} target="_blank" rel="noopener">
            {split[0]}
          </a>
        ) : split && split[0] === "check" ? (
          <CheckMark />
        ) : split ? (
          split[0]
        ) : null}
      </span>
      {split && split.length > 1
        ? split.map((note, i) => {
            if (i !== 0) {
              return <sup style={{ paddingLeft: "0.25rem" }}>{split[1]}</sup>;
            } else {
              return null;
            }
          })
        : null}
    </div>
  );
};

const HeaderWrapper = cell => {
  return (
    <span key={cell}>
      {cell.split("@").map((s, i) => {
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
    </span>
  );
};

const columnCreator = d => {
  const columns = Object.keys(d[0]).map(d => {
    return {
      Header: HeaderWrapper(d),
      accessor: d,
      Cell: CellRenderer,
      show: d === "Link" ? false : d === "Company Type" ? false : true,
      width: 150,
      sortable: false
    };
  });
  return columns;
};

const settings = {
  viz__1a: el => {
    const d = data.viz__1a;
    const columns = columnCreator(d);
    ReactDOM.render(
      <DataTable
        data={d}
        columns={columns}
        showPagination={false}
        defaultPageSize={d.length}
        title={data.meta.filter(d => d.chart === "viz__1a")[0].title}
        source={data.meta.filter(d => d.chart === "viz__1a")[0]}
      />,
      el
    );
  },
  viz__1b: el => {
    const d = data.viz__1b;
    const columns = columnCreator(d);
    ReactDOM.render(
      <DataTable
        data={d}
        columns={columns}
        showPagination={false}
        defaultPageSize={d.length}
        title={data.meta.filter(d => d.chart === "viz__1b")[0].title}
        source={data.meta.filter(d => d.chart === "viz__1b")[0]}
      />,
      el
    );
  },
  viz__2a: el => {
    const d = data.viz__2a;
    const columns = columnCreator(d);
    ReactDOM.render(
      <DataTable
        data={d}
        columns={columns}
        showPagination={false}
        defaultPageSize={d.length}
        title={data.meta.filter(d => d.chart === "viz__2a")[0].title}
        title={data.meta.filter(d => d.chart === "viz__2a")[0].title}
        source={data.meta.filter(d => d.chart === "viz__2a")[0]}
      />,
      el
    );
  },
  viz__2b: el => {
    const d = data.viz__2b;
    const columns = columnCreator(d);
    ReactDOM.render(
      <DataTable
        data={d}
        columns={columns}
        showPagination={false}
        defaultPageSize={d.length}
        title={data.meta.filter(d => d.chart === "viz__2b")[0].title}
        source={data.meta.filter(d => d.chart === "viz__2b")[0]}
      />,
      el
    );
  },
  viz__3a: el => {
    const d = data.viz__3a;
    const columns = columnCreator(d);
    ReactDOM.render(
      <DataTable
        data={d}
        columns={columns}
        showPagination={false}
        defaultPageSize={d.length}
        title={data.meta.filter(d => d.chart === "viz__3a")[0].title}
        source={data.meta.filter(d => d.chart === "viz__3a")[0]}
      />,
      el
    );
  },
  viz__3b: el => {
    const d = data.viz__3b;
    const columns = columnCreator(d);
    ReactDOM.render(
      <DataTable
        data={d}
        columns={columns}
        showPagination={false}
        defaultPageSize={d.length}
        title={data.meta.filter(d => d.chart === "viz__3b")[0].title}
        source={data.meta.filter(d => d.chart === "viz__3b")[0]}
      />,
      el
    );
  },
  viz__4a: el => {
    const d = data.viz__4a;
    const columns = columnCreator(d);
    ReactDOM.render(
      <DataTable
        data={d}
        columns={columns}
        showPagination={false}
        defaultPageSize={d.length}
        title={data.meta.filter(d => d.chart === "viz__4a")[0].title}
        source={data.meta.filter(d => d.chart === "viz__4a")[0]}
      />,
      el
    );
  },
  viz__4b: el => {
    const d = data.viz__4b;
    const columns = columnCreator(d);
    ReactDOM.render(
      <DataTable
        data={d}
        columns={columns}
        showPagination={false}
        defaultPageSize={d.length}
        title={data.meta.filter(d => d.chart === "viz__4b")[0].title}
        source={data.meta.filter(d => d.chart === "viz__4b")[0]}
      />,
      el
    );
  },
  viz__5a: el => {
    const d = data.viz__5a;
    const columns = columnCreator(d);
    ReactDOM.render(
      <DataTable
        data={d}
        columns={columns}
        showPagination={false}
        defaultPageSize={d.length}
        title={data.meta.filter(d => d.chart === "viz__5a")[0].title}
        source={data.meta.filter(d => d.chart === "viz__5a")[0]}
      />,
      el
    );
  },
  viz__5b: el => {
    const d = data.viz__5b;
    const columns = columnCreator(d);
    ReactDOM.render(
      <DataTable
        data={d}
        columns={columns}
        showPagination={false}
        defaultPageSize={d.length}
        title={data.meta.filter(d => d.chart === "viz__5b")[0].title}
        source={data.meta.filter(d => d.chart === "viz__5b")[0]}
      />,
      el
    );
  },
  viz__6a: el => {
    const d = data.viz__6a;
    const columns = columnCreator(d);
    ReactDOM.render(
      <DataTable
        data={d}
        columns={columns}
        showPagination={false}
        defaultPageSize={d.length}
        title={data.meta.filter(d => d.chart === "viz__6a")[0].title}
        source={data.meta.filter(d => d.chart === "viz__6a")[0]}
      />,
      el
    );
  }
};

fetch(
  "https://na-data-projects.s3.amazonaws.com/data/oti/transparency_toolkit.json"
)
  .then(response => response.json())
  .then(_data => {
    data = _data;
    for (let i = 0; i < queue.length; i++) queue[i]();
  });

window.renderDataViz = function(el) {
  let id = el.getAttribute("id");
  let chart = settings[id];
  if (!chart) return;

  if (data) {
    chart(el);
  } else {
    queue.push(() => chart(el));
  }
};

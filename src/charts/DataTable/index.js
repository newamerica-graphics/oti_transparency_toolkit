import React from "react";
import ChartContainer from "../../components/ChartContainer";
import ReactTable from "react-table";
import Pagination from "./Pagination";
import withSearch from "./WithSearch";
import Select from "../../components/Select";
import "react-table/react-table.css";
import "./DataTable.scss";

class DataTable extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {
      data,
      columns,
      title,
      subtitle,
      source,
      showPagination,
      defaultPageSize
    } = this.props;

    return (
      <ChartContainer
        title={title}
        subtitle={subtitle}
        source={source}
        width={1200}
        height="100%"
      >
        {this.props.children}
        <ReactTable
          data={data}
          columns={columns}
          className="-striped"
          showPagination={showPagination ? showPagination : false}
          showPageSizeOptions={false}
          PaginationComponent={Pagination}
          defaultPageSize={defaultPageSize || 20}
        />
      </ChartContainer>
    );
  }
}
const DataTableWithSearch = withSearch(DataTable);
export { DataTable, DataTableWithSearch };

import React from 'react';
import PropTypes from 'prop-types';
import ReactPaginate from 'react-paginate';

class Pagination extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      numOfPages: 0,
      pageNeighbours: 2,
      currentPage: 1
    }
    this.handlePageClick = this.handlePageClick.bind(this);
  }


  componentDidMount () {
    this.setState({
      numOfPages: this.props.pages
    })
  }

  handlePageClick (event) {
    this.setState({
      currentPage: event.selected
    })
    this.props.renderEvents(event);
  }

  render () {

    return (
      <div>
        <ReactPaginate
          previousLabel={"previous"}
          nextLabel={"next"}
          breakLabel={"..."}
          pageRangeDisplayed={5}
          pageCount={this.props.pages}
          nextLinkClassName={"next"}
          previousLinkClassName={"previous"}
          disabledClassName={"next"}
          onPageChange={this.handlePageClick}
          />
      </div>
    )
  }
}

export default Pagination;
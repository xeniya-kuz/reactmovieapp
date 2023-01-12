import React from 'react';
//import PropTypes from 'prop-types';
import GenresContainer from './GenresContainer';
import Pagination from './Pagination';
import PrimaryReleaseYear from './PrimaryReleaseYear';
import Reset from './Reset';
import SortBy from './SortBy';
import { withMovies } from '../HOC/withMovies';

class Filters extends React.PureComponent {
  // static propTypes = {
  //   onChangePage: PropTypes.func.isRequired,
  //   page: PropTypes.number.isRequired,
  //   total_pages: PropTypes.number.isRequired,
  //   onChangeFilters: PropTypes.func.isRequired,
  //   filters: PropTypes.object.isRequired,
  // };

  onChangeFilters = (event) => {
    this.props.moviesActions.updateFilters(event.target);
  };

  render() {
    const { moviesObj, getFavoritesIsClicked } = this.props;
    const { filters, search } = moviesObj;
    const { sort_by, primary_release_year, with_genres } = filters;

    return (
      <form className="mb-3">
        {/* {!search && ( */}
        <SortBy
          sort_by={sort_by}
          onChangeFilters={this.onChangeFilters}
          filters={filters}
          disabled={search}
        />
        <React.Fragment>
          <PrimaryReleaseYear
            primary_release_year={primary_release_year}
            onChangeFilters={this.onChangeFilters}
            disabled={getFavoritesIsClicked || search}
          />
          <GenresContainer
            with_genres={with_genres}
            onChangeFilters={this.onChangeFilters}
            disabled={getFavoritesIsClicked || search}
          />
          <Reset disabled={getFavoritesIsClicked || search} />
        </React.Fragment>
        <Pagination />
      </form>
    );
  }
}

export default withMovies(Filters);

import React from 'react';
//import PropTypes from 'prop-types';
import Select from '../UI/Select';
import { withMovies } from '../HOC/withMovies';

//! поиграть с выборкой годов
function years(begin, finish) {
  const array = [];
  for (let i = begin; i < finish + 1; i++) {
    array.unshift(i);
  }
  return array;
}

// из-за PureComponent (=shouldComponentUpdate) лишние рендеры компонента при взаимодействии с другими частями фильтра не происходят
class PrimaryReleaseYear extends React.PureComponent {
  // static propTypes = {
  //   onChangeFilters: PropTypes.func.isRequired,
  //   primary_release_year: PropTypes.string.isRequired,
  // };

  // статические объекты или массивы загоняем в defaultProps, чтобы при каждом рендере не создавалась новая ссылка на хардкод
  static defaultProps = {
    options: years(1950, 2025),
  };

  render() {
    const { primary_release_year, onChangeFilters, options, disabled } =
      this.props;

    return (
      <Select
        id="primary_release_year"
        name="primary_release_year"
        value={primary_release_year}
        onChange={onChangeFilters}
        labelText="Год релиза:"
        disabled={disabled}
      >
        {options.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </Select>
    );
  }
}

export default withMovies(PrimaryReleaseYear);

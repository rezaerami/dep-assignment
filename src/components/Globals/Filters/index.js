import React, { useState } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import { useDidUpdateEffect } from 'hooks';

import {
  StyledFiltersWrapper,
  StyledSelectWrapper,
  StyledSelectTitle,
  StyledSelect,
} from './styles';

const Filters = ({ className, filters, onChangeFilters }) => {
  const [selectedFilters, setSelectedFilters] = useState({});

  useDidUpdateEffect(() => {
    onChangeFilters(selectedFilters);
  }, [selectedFilters]);

  const handleSelectFilter = (name) => (e) => {
    setSelectedFilters({
      ...selectedFilters,
      [name]: e.target.value,
    });
  };

  const filtersLookup = {
    select: ({ label, name, children }) => (
      <StyledSelectWrapper>
        <StyledSelectTitle>{label}</StyledSelectTitle>
        <StyledSelect
          onChange={handleSelectFilter(name)}
          value={selectedFilters[name]}
          key={name}
        >
          {children.map(({ title, value }) => (
            <option key={`${name}-${value}`} value={value}>
              {title}
            </option>
          ))}
        </StyledSelect>
      </StyledSelectWrapper>
    ),
  };

  if (!filters.length) return null;

  return (
    <StyledFiltersWrapper className={classNames(className)}>
      {filters.map((filter) =>
        filtersLookup[filter.type]
          ? filtersLookup[filter.type.toLowerCase()](filter)
          : '',
      )}
    </StyledFiltersWrapper>
  );
};

Filters.propTypes = {
  className: PropTypes.string,
  filters: PropTypes.array,
  onChangeFilters: PropTypes.func.isRequired,
};
Filters.defaultProps = {
  className: '',
  filters: [],
};

export default Filters;

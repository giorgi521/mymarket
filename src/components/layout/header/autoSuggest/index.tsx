'use client';
//

import React, { useState } from 'react';
import Autosuggest from 'react-autosuggest';

interface suggestions {
  name: string;
  year: number;
}

const languages = [
  {
    name: 'C',
    year: 1972,
  },
  {
    name: 'Elm',
    year: 2012,
  },
];

// Teach Autosuggest how to calculate suggestions for any given input value.
const getSuggestions = (value: string) => {
  const inputValue = value.trim().toLowerCase();
  const inputLength = inputValue.length;

  const filteredValue =
    inputLength === 0
      ? []
      : languages.filter((lang) => lang.name.toLowerCase().slice(0, inputLength) === inputValue);
  console.log(filteredValue);

  return filteredValue;
};

// When suggestion is clicked, Autosuggest needs to populate the input
// based on the clicked suggestion. Teach Autosuggest how to calculate the
// input value for every given suggestion.
const getSuggestionValue = (suggestion: { name: string }) => suggestion.name;

const renderSuggestion = (suggestion: { year: number }) => (
  <div className="font-bold">{suggestion.year}</div>
);

export default function FielterInput() {
  const [value, setValue] = useState('');
  const [suggestions, setSuggestions] = useState<suggestions[]>([]);

  const onChange = (
    event: any,
    {
      newValue,
    }: {
      newValue: string;
    },
  ) => {
    setValue(newValue);
  };

  const onSuggestionsFetchRequested = ({ value }: { value: string }) => {
    setSuggestions(getSuggestions(value));
  };

  const onSuggestionsClearRequested = () => {
    setSuggestions([]);
  };

  // Autosuggest will pass through all these props to the input.
  const inputProps = {
    placeholder: 'Type a programming language',
    value,
    onChange,
  };

  const renderInputComponent = (inputProps: any) => (
    <div>
      <input
        className="w-[500px] h-[40px] bg-gray-200 rounded-md"
        id="outlined-adornment-password"
        type="text"
        variant="filled"
        {...inputProps}
      />
    </div>
  );

  return (
    <Autosuggest
      suggestions={suggestions}
      onSuggestionsFetchRequested={onSuggestionsFetchRequested}
      onSuggestionsClearRequested={onSuggestionsClearRequested}
      getSuggestionValue={getSuggestionValue}
      renderSuggestion={renderSuggestion}
      renderInputComponent={renderInputComponent}
      inputProps={inputProps}
    />
  );
}

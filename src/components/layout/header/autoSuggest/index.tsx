'use client';

import React, { useState } from 'react';
import Autosuggest from 'react-autosuggest';
import { CustomInput } from '@/src/components/ui/input';
import { Camera, Search } from 'lucide-react';

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

  const onSuggestionsFetchRequested = ({ value }: { value: string }) => {
    setSuggestions(getSuggestions(value));
  };

  const onSuggestionsClearRequested = () => {
    setSuggestions([]);
  };

  // Autosuggest will pass through all these props to the input.
  const inputProps = {
    value,
    onChange: (
      _event: any,
      {
        newValue,
      }: {
        newValue: string;
      },
    ) => {
      setValue(newValue);
    },
  };

  const renderInputComponent = (inputProps: any) => (
    <div className="flex items-center justify-between h-10 rounded-[28px] border px-[14px] py-4 w-[461px]">
      <CustomInput
        id="search"
        placeholder="დაიწყე ძიება"
        type="text"
        variant="outlined"
        {...inputProps}
      />
      <div className="flex items-center">
        <div className="w-8 h-8 rounded-full flex items-center justify-center hover:bg-white cursor-pointer">
          <Camera color="#272a37" size={18} className="stroke-[3px]" />
        </div>
        <span className="h-6 w-[1px] bg-white mx-4" />
        <div className="w-8 h-8 rounded-full flex items-center justify-center hover:bg-white cursor-pointer">
          <Search color="#272a37" size={18} className="stroke-[3px]" />
        </div>
      </div>
    </div>
  );

  return (
    <div className="autoSuggest">
      <Autosuggest
        suggestions={suggestions}
        onSuggestionsFetchRequested={onSuggestionsFetchRequested}
        onSuggestionsClearRequested={onSuggestionsClearRequested}
        getSuggestionValue={getSuggestionValue}
        renderSuggestion={renderSuggestion}
        renderInputComponent={renderInputComponent}
        inputProps={inputProps}
      />
    </div>
  );
}

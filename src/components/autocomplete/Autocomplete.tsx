import * as React from 'react';
// import { useDispatch } from 'react-redux';
import { Autocomplete as MuiAutocomplete, TextField } from '@mui/material';
import { useAppSelector } from '../../store/store';
import { PostModel } from '../../models/PostModel';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

interface Props {}

const Autocomplete: React.FC<Props> = () => {
  const { posts } = useAppSelector((state) => state.postReducer);
  const [value, setValue] = useState<PostModel | null>();
  const [inputValue, setInputValue] = useState('');
  const navigation = useNavigate();

  useEffect(() => {
    if (!value) return;
    navigation(`/${value.id}`);
  }, [value]);

  return (
    <MuiAutocomplete
      sx={{ width: '500px' }}
      options={posts}
      onChange={(event: any, newValue: PostModel | null) => {
        setValue(newValue);
      }}
      inputValue={inputValue}
      onInputChange={(event, newInputValue) => {
        setInputValue(newInputValue);
      }}
      renderInput={(params) => (
        <TextField {...params} label="Search by post title" />
      )}
    />
  );
};

export default Autocomplete;

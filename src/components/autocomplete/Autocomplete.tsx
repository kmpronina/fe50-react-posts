import * as React from 'react';
// import { useDispatch } from 'react-redux';
import { Autocomplete as MuiAutocomplete, TextField } from '@mui/material';
import { useAppDispatch, useAppSelector } from '#store/store';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { setSelectedPostById } from '#store/reducers/postReducer/actions';
import { PostModel } from '#models/PostModel';

const Autocomplete: React.FC = () => {
  const { posts } = useAppSelector((state) => state.postReducer);
  const [value, setValue] = useState<PostModel | null>();
  const [inputValue, setInputValue] = useState('');
  const navigation = useNavigate();
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (!value) return;
    dispatch(setSelectedPostById(value.id));
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

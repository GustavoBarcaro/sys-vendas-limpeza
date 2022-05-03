import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import CircularProgress from '@mui/material/CircularProgress';
import { Button, Box } from '@mui/material';
import { AddIcon } from '../../assets';
import { Product } from '../../domains/sales';
import { formatNumberBRL } from '../../config/function';

function sleep(delay = 0) {
  return new Promise((resolve) => {
    setTimeout(resolve, delay);
  });
}

interface SearchProductsProps {
  products: Product[];
  // eslint-disable-next-line no-unused-vars
  handleAddProductInCart: (product: Product) => void;
}

function SearchProducts({
  products,
  handleAddProductInCart,
}: SearchProductsProps): JSX.Element {
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState<Product | null>(null);
  const [options, setOptions] = React.useState<readonly Product[]>([]);
  const loading = open && options.length === 0;

  React.useEffect(() => {
    let active = true;

    if (!loading) {
      return undefined;
    }

    (async () => {
      await sleep(1e3);

      if (active) {
        setOptions([...products]);
      }
    })();

    return () => {
      active = false;
    };
  }, [loading, products]);

  React.useEffect(() => {
    if (!open) {
      setOptions([]);
    }
  }, [open]);

  return (
    <>
      <Autocomplete
        id="products-autocomplete"
        sx={{ width: '80%' }}
        open={open}
        onOpen={() => {
          setOpen(true);
        }}
        onClose={() => {
          setOpen(false);
        }}
        isOptionEqualToValue={(option, newValue) => option.id === newValue.id}
        getOptionLabel={(option) => option.name}
        renderOption={(props, option) => (
          <Box
            component="li"
            style={{
              display: 'flex',
              justifyContent: 'space-between',
            }}
            sx={{ fontSize: '23px', fontWeight: '300' }}
            // eslint-disable-next-line react/jsx-props-no-spreading
            {...props}
          >
            <span>{option.name}</span>
            <span>{formatNumberBRL(option.value)}</span>
          </Box>
        )}
        options={options}
        loading={loading}
        onChange={(_, valueChanged) => {
          setValue(valueChanged || null);
        }}
        onEmptied={() => {
          setValue(null);
        }}
        renderInput={(params) => (
          <TextField
            // eslint-disable-next-line react/jsx-props-no-spreading
            {...params}
            InputProps={{
              ...params.InputProps,
              endAdornment: (
                <>
                  {loading ? (
                    <CircularProgress color="inherit" size={20} />
                  ) : null}
                  {params.InputProps.endAdornment}
                </>
              ),
            }}
          />
        )}
      />
      <Button
        className="registerButton"
        onClick={() => {
          if (value) handleAddProductInCart(value);
        }}
      >
        <AddIcon />
      </Button>
    </>
  );
}

export default SearchProducts;

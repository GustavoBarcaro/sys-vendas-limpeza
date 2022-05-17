import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import styles from './checkout.module.scss';
import CheckoutOptions from '../../layout/checkoutOptions';
import SearchProducts from '../../layout/searchProducts';
import { SERVICE_BASE_URI } from '../../config/services';
import { Product, Cart } from '../../domains/sales';
import CheckoutTable from '../../layout/checkoutTable';

function Checkout(): JSX.Element {
  const [products, setProducts] = useState<Product[]>([]);
  const [cart, setCart] = useState<Cart>([]);

  useEffect(() => {
    axios
      .get(`${SERVICE_BASE_URI}/api/products`)
      .then(({ data }) => {
        setProducts(data);
      })
      .catch(() => {
        // eslint-disable-next-line no-console
        toast.error('Erro ao recuperar os produtos cadastrados!');
      });
  }, []);

  const handleSaveSales = () => {
    axios
      .post(`${SERVICE_BASE_URI}/api/sales`, {
        items: cart,
      })
      .then(() => {
        toast.success('Venda cadastrada com sucesso!');
        setCart([]);
      })
      .catch(() => {
        toast.error('Falha ao cadastrar venda!');
      });
  };

  const handleAddProductInCart = (value: Product) => {
    const updatedCart = [...cart];
    const foundItemIndex = updatedCart.findIndex(
      (item) => item.id === value.id,
    );
    if (foundItemIndex !== -1) {
      updatedCart[foundItemIndex] = {
        ...updatedCart[foundItemIndex],
        qtd: updatedCart[foundItemIndex].qtd + 1,
      };
      setCart(updatedCart);
    } else {
      setCart([...updatedCart, { ...value, qtd: 1 }]);
    }
  };

  const handleDeleteFromCart = (id: number) => {
    const updatedCart = [...cart];
    const filteredCart = updatedCart.filter((each) => each.id !== id);
    setCart(filteredCart);
  };

  const handleChangeCartItemQtd = (id: number, qtd: number) => {
    const updatedCart = [...cart];
    const foundItemIndex = updatedCart.findIndex((item) => item.id === id);
    if (foundItemIndex !== -1) {
      if (qtd > 0) {
        updatedCart[foundItemIndex] = {
          ...updatedCart[foundItemIndex],
          qtd,
        };
        setCart(updatedCart);
      } else {
        handleDeleteFromCart(id);
      }
    }
  };

  return (
    <main className={styles.checkout}>
      <section className={styles.searchProductsContainer}>
        <SearchProducts
          products={products}
          handleAddProductInCart={handleAddProductInCart}
        />
      </section>

      <section className={styles.checkoutTableContainer}>
        <CheckoutTable
          cart={cart}
          handleChangeCartItemQtd={handleChangeCartItemQtd}
          handleDeleteFromCart={handleDeleteFromCart}
        />
      </section>

      <CheckoutOptions
        handleSaveSale={handleSaveSales}
        disableConfirm={cart.length === 0}
      />
    </main>
  );
}

export default Checkout;

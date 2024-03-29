/* eslint-disable react/prop-types */
import useQuery from '../../hooks/useQuery';
import { useEffect, useState } from 'react';
import CartItemList from './CartItemList';
import minusIcon from '../../assets/minus.svg';
import tagIcon from '../../assets/tag.svg';
import { useTranslation } from 'react-i18next';
import baseUrl from '../../../baseUrl';
import Cookies from 'js-cookie';

function CartList(props) {
  const response = useQuery('/cart');
  const [total, setTotal] = useState(0);
  const [t, i18n] = useTranslation();

  useEffect(() => {
    {
      if (response && response.data.total) {
        setTotal(response.data.total);
      }
    }
  }, [total, setTotal, response]);

  return (
    <div className=' bg-neutral-800 text-white h-screen fixed w-1/4 right-0 z-50 flex flex-col animate-slide-r  lg:w-full'>
      <div className='flex justify-between items-center border-b-2 p-5'>
        <div className='flex  text-2xl items-center'>
          {t('cart.cart')}&nbsp;<img src={tagIcon}></img>
        </div>
        <button
          className='aspect-square h-10 cursor-pointer'
          onClick={() => {
            props.onClick(false);
          }}
        >
          <img src={minusIcon}></img>
        </button>
      </div>
      {(response && response.data.empty) || !Cookies.get('user') ? (
        <div className='flex items-center justify-center h-full '>
          {t('cart.cartEmpty')}
        </div>
      ) : (
        <CartItemList data={response} total={total} setTotal={setTotal} />
      )}
      <div className='flex items-center justify-between border-t-2 p-5'>
        <p className=' text-2xl'>Total: $ {parseFloat(total).toFixed(2)}</p>
        <form action={`${baseUrl}/checkout`} method='POST'>
          <button
            className='bg-yellow-500 rounded-lg p-2 px-10 text-xl'
            type='submit'
          >
            {t('cart.checkout')}
          </button>
        </form>
      </div>
    </div>
  );
}

export default CartList;

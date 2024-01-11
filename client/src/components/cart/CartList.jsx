/* eslint-disable react/prop-types */
import useQuery from '../../hooks/useQuery';
import CartItemList from './CartItemList';
import minusIcon from '../../assets/minus.svg';
import tagIcon from '../../assets/tag.svg';

function CartList(props) {
  const response = useQuery('/cart');
  return (
    <div className=' bg-neutral-800 h-screen fixed w-1/4 right-0 z-50 flex flex-col animate-slide-r'>
      <div className='flex justify-between items-center border-b-2 p-5'>
        <div className='flex text-white text-2xl items-center'>
          Cart&nbsp;<img src={tagIcon}></img>
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
      <CartItemList data={response} />
    </div>
  );
}

export default CartList;

import useQuery from '../../hooks/useQuery';
import CartItemList from './CartItemList';

function CartList(props) {
  const response = useQuery('http://localhost:5050/cart/');
  return (
    <div className=' bg-neutral-800 h-screen fixed w-1/4 right-0 z-50 flex flex-col animate-slide-r'>
      <div className='flex justify-between items-center border-b-2 p-5'>
        <div className='flex text-white text-2xl items-center'>
          Cart&nbsp;<img src='/public/tag.svg'></img>
        </div>
        <button
          className='aspect-square h-10 cursor-pointer'
          onClick={() => {
            props.onClick(false);
          }}
        >
          <img src='/public/minus.svg'></img>
        </button>
      </div>
      <CartItemList data={response} />
    </div>
  );
}

export default CartList;

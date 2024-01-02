function CartList(props) {
  return (
    <div className="absolute bg-neutral-800 h-screen w-1/4 right-0 z-50 flex flex-col animate-slide-r">
      <div className="flex justify-between items-center border-b-2 p-5">
        <div className="flex text-white text-2xl items-center">
          Cart&nbsp;<img src="/public/tag.svg"></img>
        </div>
        <button
          onClick={() => {
            props.onClick(false);
          }}
        >
          <img src="/public/minus.svg"></img>
        </button>
      </div>
    </div>
  );
}

export default CartList;

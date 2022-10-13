export const Stocks = () => {
  return (
    <div className="main__dashboard">
      <div className="product__post__form">
        <input className="post__data" type="text" placeholder="title" />
        <input className="post__data" type="text" placeholder="description" />
        <input className="post__data" type="text" placeholder="amount" />
        <input className="post__data" type="text" placeholder="price" />
        <div className="btn__add_new-prop">
          <button>Create new prop</button>
          <button>Post</button>
        </div>
      </div>
    </div>
  );
};

import { MyInput } from "../assets/icons/MyInput";

export const ProductFrom = () => {
  return (
    <div className="product__post__form">
      <input className="post__data" type="text" placeholder="title" />
      <input className="post__data" type="text" placeholder="description" />
      <input className="post__data" type="text" placeholder="amount" />
      <input className="post__data" type="text" placeholder="price" />
      <div className="btn__add_new-prop">
        <button>Create new prop</button>
        <button>Post</button>
      </div>
      <MyInput />
    </div>
  );
};

import classes from "./MyInput.module.css";

export const MyInput = () => {
  return (
    <div className="main">
      <div className={classes.form}>
        <input className={classes.search__input} type="text" required />
        <div className={classes.placeholder__search}>search</div>
      </div>
    </div>
  );
};
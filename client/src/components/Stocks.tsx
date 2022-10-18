export const Stocks = () => {
  return (
    <div className="stocks__main">
      <table className="stocks__table">
        <tr>
          <td>date</td>
          <td>id</td>
          <td>title</td>
          <td>description</td>
          <td>category</td>
          <td>purchase</td>
          <td>margin</td>
          <td>amount</td>
          <td>price</td>
        </tr>
        <tr>
          <td>DD-MM-YYYY</td>
          <td>1</td>
          <td>-/--/-</td>
          <td>-/--/-</td>
          <td>A</td>
          <td>100$</td>
          <td>50%</td>
          <td>5</td>
          <td>150$</td>
        </tr>
        <tr>
          <td>DD-MM-YYYY</td>
          <td>2</td>
          <td>-/--/-</td>
          <td>-/--/-</td>
          <td>C</td>
          <td>200$</td>
          <td>50%</td>
          <td>10</td>
          <td>300$</td>
        </tr>
        <tr>
          <td>DD-MM-YYYY</td>
          <td>3</td>
          <td>-/--/-</td>
          <td>-/--/-</td>
          <td>B</td>
          <td>500$</td>
          <td>50%</td>
          <td>15</td>
          <td>750$</td>
        </tr>
      </table>
    </div>
  );
};

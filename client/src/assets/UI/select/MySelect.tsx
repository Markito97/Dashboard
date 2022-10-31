export const MySelect = () => {
  const months = [
    "Январь",
    "Февраль",
    "Март",
    "Апрель",
    "Май",
    "Июнь",
    "Июль",
    "Август",
    "Сентябрь",
    "Октябрь",
    "Ноябрь",
    "Декабрь",
  ];
  return (
    <select>
      {months.map((option, index) => (
        <option key={index + 1}>{option}</option>
      ))}
    </select>
  );
};

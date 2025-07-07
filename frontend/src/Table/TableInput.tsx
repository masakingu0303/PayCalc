import { useState } from "react";

type TableData = {
    date: string;
    item: string;
    unitPrice: number;
    quantity: number;
    back: number;
    amount: number;
  };

type TableInputProps = {
  handleAdd: (newRow: TableData) => void;
};

const TableInput: React.FC<TableInputProps> = ({ handleAdd }) => {
  const [formData, setFormData] = useState<TableData>({
    date: "",
    item: "写メ",
    unitPrice: 2000,
    quantity: 0,
    back: 666,
    amount: 0,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: ["unitPrice", "quantity", "back", "amount"].includes(name)
        ? Number(value)
        : value,
    }));
  };

  const handleClick = () => {
    handleAdd(formData);
    setFormData({
      date: "",
      item: "写メ",
      unitPrice: 2000,
      quantity: 0,
      back: 666,
      amount: 0,
    });
  };

  return (
    <tr>
      <td>
        <input
          type="text"
          name="date"
          value={formData.date}
          onChange={handleChange}
        />
      </td>
      <td>
        <input
          type="text"
          name="item"
          value={formData.item}
          onChange={handleChange}
        />
      </td>
      <td>
        <input
          type="number"
          name="unitPrice"
          value={formData.unitPrice}
          onChange={handleChange}
        />
      </td>
      <td>
        <input
          type="number"
          name="quantity"
          value={formData.quantity}
          onChange={handleChange}
        />
      </td>
      <td>
        <input
          type="number"
          name="back"
          value={formData.back}
          onChange={handleChange}
        />
      </td>
      <td>
        <input type="button" value="追加" onClick={handleClick} />
      </td>
    </tr>
  );
};

export default TableInput;

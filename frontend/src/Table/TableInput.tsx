import { useState } from "react";

type TableInputProps = {
    handleAdd:  ()=> void;
}

type TableDate = {
    date: string;    // 日付（文字列）
    item: string;    // 品目
    unitPrice: number; // 単価
    quantity: number;  // 数量
    back: number;      // バック
    amount: number;    // 金額
  };

const TableInput:React.FC<TableInputProps> = ({handleAdd}) => {
  const [formData, setFormData] = useState<TableDate>({
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
      [name]: name === "unitPrice" || name === "quantity" || name === "back" || name === "amount"
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
          placeholder="Date"
          name="date"
          value={formData.date}
          onChange={handleChange}
        />
      </td>
      <td>
        <input
          type="text"
          placeholder="Item"
          name="item"
          value={formData.item}
          onChange={handleChange}
        />
      </td>
      <td>
        <input
          type="text"
          placeholder="Unit Price"
          name="unitPrice"
          value={formData.unitPrice}
          onChange={handleChange}
        />
      </td>
      <td>
        <input
          type="text"
          placeholder="Quantity"
          name="quantity"
          value={formData.quantity}
          onChange={handleChange}
        />
      </td>
      <td>
        <input
          type="text"
          placeholder="Back"
          name="back"
          value={formData.back}
          onChange={handleChange}
        />
      </td>
      <td>
        <input
          className="data-input"
          type="button"
          value="追加"
          onClick={handleClick}
        />
      </td>
    </tr>
  );
};

export default TableInput;

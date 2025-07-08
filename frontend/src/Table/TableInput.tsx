import { useState } from "react";

type TableData = {
    id?: number;
    date: string;
    item: string;
    unitPrice: number;
    quantity: number;
    back: number;
    amount: number;
    income: number;
};

type TableInputProps = {
    handleAdd: (newRow: TableData) => void;
    thisYear: number;
    thisMonth: number;
};

const TableInput: React.FC<TableInputProps> = ({handleAdd,  thisYear, thisMonth }) => {

    const [formData, setFormData] = useState({
        day: 1,
        item: "写メ",
        unitPrice: 2000,
        quantity: 0,
        back: 666,
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {

        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: ["day","unitPrice", "quantity", "back"].includes(name)
                ? Number(value)
                : value,
        }));
    };

    const handleClick = () => {
        const paddedYear = String(thisYear).padStart(4, "0");
        const paddedMonth = String(thisMonth).padStart(2, "0");
        const paddedDay = String(formData.day).padStart(2, "0");
        const newDate = `${paddedYear}-${paddedMonth}-${paddedDay}`

        const newAmount = formData.unitPrice * formData.quantity;
        const newIncome = formData.quantity * formData.back;

        const newRow: TableData = {
            date: newDate,
            item: formData.item,
            unitPrice: formData.unitPrice,
            quantity: formData.quantity,
            back: formData.back,
            amount: newAmount,
            income: newIncome,
        };
        handleAdd(newRow);

      
        setFormData({
            day: 1,
            item: "写メ",
            unitPrice: 2000,
            quantity: 0,
            back: 666,
        });
    };

    return (
        <tr>
            <td>
                <input
                    type="text"
                    name="day"
                    value={formData.day}
                    onChange={handleChange}
                    placeholder="日"
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
                    type="text"
                    name="unitPrice"
                    value={formData.unitPrice}
                    onChange={handleChange}
                />
            </td>
            <td>
                <input
                    type="text"
                    name="quantity"
                    value={formData.quantity}
                    onChange={handleChange}
                />
            </td>
            <td>
                <input
                    type="text"
                    name="back"
                    value={formData.back}
                    onChange={handleChange}
                />
            </td>
            <td>{(formData.unitPrice * formData.quantity).toLocaleString()}</td>
            <td>{(formData.quantity * formData.back).toLocaleString()}</td>
            <td>
                <input type="button" value="追加" onClick={handleClick} />
            </td>
        </tr>
    );
};

export default TableInput;

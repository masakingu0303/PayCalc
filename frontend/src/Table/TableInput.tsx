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
            [name]: ["unitPrice", "quantity", "back", "day"].includes(name)
                ? Number(value)
                : value,
        }));

        // console.log(formData);
    };

    const handleClick = () => {
        const paddedYear = String(thisYear).padStart(4, "0");
        const paddedMonth = String(thisMonth).padStart(2, "0");
        const paddedDay = String(formData.day).padStart(2, "0");
        const newDate = `${paddedYear}-${paddedMonth}-${paddedDay}`

        const newAmount = formData.unitPrice * formData.quantity;

        const newRow: TableData = {
            date: newDate,
            item: formData.item,
            unitPrice: formData.unitPrice,
            quantity: formData.quantity,
            back: formData.back,
            amount: newAmount,
        };

        console.log(newRow);
        

        handleAdd(newRow);

        // 初期化
        // setFormData({
        //     day: 1,
        //     item: "写メ",
        //     unitPrice: 2000,
        //     quantity: 0,
        //     back: 666,
        // });
    };

    return (
        <tr>
            <td>
                <input
                    type="number"
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
            <td>{formData.unitPrice * formData.quantity}</td>
            <td>
                <input type="button" value="追加" onClick={handleClick} />
            </td>
        </tr>
    );
};

export default TableInput;

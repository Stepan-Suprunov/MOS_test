import {IDataCell, IHeadCell} from "../types";

export const head: IHeadCell[] = [
    {
        id: 1,
        key: "name",
        label: 'Продукт'
    },
    {
        id: 2,
        key: "productCode",
        label: 'Код продукта'
    },
    {
        id: 3,
        key: "status",
        label: 'Статус'
    },
    {
        id: 4,
        key: "description",
        label: 'Описание'
    },
];

export const data: IDataCell[] = Array.from({ length: 20 }, (_, i) => i + 1).map((id) => ({
    id: 3,
    name: `Продукт ${id}`,
    productCode: `Код продукта ${id}`,
    status: id % 2 === 0 ? "CLOSE" : "AT_WORK",
    description: 'Описание Описание Описание'
}));
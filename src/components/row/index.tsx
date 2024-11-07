import React from 'react';
import styles from './style.module.scss'
import {IDataCell} from '../../types';

type RowPropsType = {
    row: IDataCell,
    id: number,
    onNameChange: (value: string, key: number) => void,
    onProductCodeChange: (value: string, key: number) => void,
    onStatusChange: (value: string, key: number) => void,
    onDescriptionChange: (value: string, key: number) => void
};

export function Row(props: RowPropsType) {
    const {
        row,
        id,
        onNameChange,
        onProductCodeChange,
        onStatusChange,
        onDescriptionChange
    } = props;

    const [rowData, setRowData] = React.useState(row);

    function nameChangeHandler(e: React.ChangeEvent<HTMLInputElement>) {
        const newRow = {...rowData};
        newRow.name = e.target.value;
        onNameChange(newRow.name, id);
        setRowData(newRow);
    };

    function productCodeChangeHandler(e: React.ChangeEvent<HTMLInputElement>) {
        const newRow = {...rowData};
        newRow.productCode = e.target.value;
        onProductCodeChange(newRow.productCode, id);
        setRowData(newRow);
    };

    function statusChangeHandler(e: React.ChangeEvent<HTMLSelectElement>) {
        const newRow = {...rowData};
        newRow.status = e.target.value;
        onStatusChange(newRow.status, id);
        setRowData(newRow);
    };

    function descriptionChangeHandler(e: React.ChangeEvent<HTMLTextAreaElement>) {
        const newRow = {...rowData};
        newRow.description = e.target.value;
        onDescriptionChange(newRow.description, id);
        setRowData(newRow);
    };

    return (
        <div className={styles.row}>
            <input className={styles.cell}
                   value={row.name}
                   name='name'
                   onChange={nameChangeHandler}
                   required={true}
            />
            <input className={styles.cell}
                   value={row.productCode}
                   name='productCode'
                   onChange={productCodeChangeHandler}
                   required={true}
            />
            <select className={styles.cell}
                    value={row.status}
                    name='status'
                    onChange={statusChangeHandler}
                    required={true}
            >
                <option value='POSTPONED'>POSTPONED</option>
                <option value='AT_WORK'>AT_WORK</option>
                <option value='CLOSE'>CLOSE</option>
            </select>
            <textarea className={styles.textArea}
                      value={row.description}
                      name='description'
                      onChange={descriptionChangeHandler}
                      required={true}
            />
        </div>
    );
};
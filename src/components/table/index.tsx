import React from 'react';
import styles from './style.module.scss'
import {Head, Row} from '../index'
import {IDataCell, IHeadCell} from '../../types';
import {v1} from 'uuid';

type TablePropsType = {
    head: IHeadCell[],
    data: IDataCell[]
};

export function Table(props: TablePropsType) {
    const {head, data} = props;

    const [rows, setRows] = React.useState(data);

    function onNameChange(value: string, key: number) {
        const newRows = rows;
        newRows[key].name = value;
        setRows(newRows);
    };

    function onProductCodeChange(value: string, key: number) {
        const newRows = rows;
        newRows[key].productCode = value;
        setRows(newRows);
    };

    function onStatusChange(value: string, key: number) {
        const newRows = rows;
        newRows[key].status = value;
        setRows(newRows);
    };

    function onDescriptionChange(value: string, key: number) {
        const newRows = rows;
        newRows[key].description = value;
        setRows(newRows);
    };

    function onRowAdd() {
        const newRow: IDataCell = {
            id: 3,
            name: '',
            productCode: '',
            status: '',
            description: ''
        };
        setRows([...rows, newRow])
    };

    return (
        <div className={styles.table}>
            <Head headArray={head}/>
            {rows.map((row, i) =>
                <Row row={row}
                     id={i}
                     key={v1()}
                     onNameChange={onNameChange}
                     onProductCodeChange={onProductCodeChange}
                     onStatusChange={onStatusChange}
                     onDescriptionChange={onDescriptionChange}
                />)}
            <button onClick={onRowAdd}>
                AddRow
            </button>
        </div>
    );
};
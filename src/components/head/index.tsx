import React from "react";
import styles from "./style.module.scss"
import {IHeadCell} from "../../types";

type HeadPropsType = {
    headArray: IHeadCell[]
};

export function Head(props: HeadPropsType) {
    const {headArray} = props;

    return (
        <div className={styles.head}>
            {headArray.map((cell) =>
                <div key={cell.key} className={styles.cell}>
                    {cell.label}
                </div>
            )}
        </div>
    );
};
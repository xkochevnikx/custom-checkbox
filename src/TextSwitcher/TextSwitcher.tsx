import cls from './TextSwitcher.module.css';
import { InputHTMLAttributes, useRef, useState } from 'react';

export interface TextSwitchProps extends InputHTMLAttributes<HTMLInputElement> {
    label1?: string;
    label2?: string;
    key1?: string;
    key2?: string;
    initialState?: boolean;
}

export const TextSwitch = (props: TextSwitchProps) => {
    //
    const { label1, label2, key1, key2, initialState = false } = props;

    let [checked, setChecked] = useState(initialState);

    let myRef = useRef<HTMLInputElement | null>(null);

    return (
        <div className={cls.switch}>
            <input
                type="radio"
                id="switchFirst"
                name="radio"
                className={cls.switchFirst}
            />
            <label htmlFor="switchFirst">FrontEnd</label>

            <input
                type="radio"
                id="switchSecond"
                name="radio"
                className={cls.switchSecond}
            />
            <label htmlFor="switchSecond">BackEnd</label>

            <input
                type="radio"
                id="switchThird"
                name="radio"
                className={cls.switchThird}
            />
            <label htmlFor="switchThird">FullStack</label>
        </div>
    );
};

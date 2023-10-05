import { classNames } from '../helpers/classnames';
import cls from './TextCheckbox.module.css';

export const TextCheckbox = () => {
    return (
        <fieldset className={classNames(cls.radioSwitch, {}, [])}>
            <input
                type="radio"
                name="switch"
                id="item1"
                className={cls.item1}
            />
            <label htmlFor="item1">Label 1</label>
            <input
                type="radio"
                name="switch"
                id="item2"
                className={cls.item2}
            />
            <label htmlFor="item2">Label 2</label>
            <input
                type="radio"
                name="switch"
                id="item3"
                className={cls.item3}
            />
            <label htmlFor="item3">Label 3</label>
            <div className={cls.highlight}></div>
        </fieldset>
    );
};

import { Fragment } from 'react';
import { classNames } from '../helpers/classnames';
import cls from './TextCheckbox.module.css';

type itemRadio = {
    label: string;
    value: string;
};

interface ITextCheckboxProps {
    items: itemRadio[];
}

export const TextCheckbox = (props: ITextCheckboxProps) => {
    const { items } = props;

    return (
        <fieldset className={classNames(cls.radioSwitch, {}, [])}>
            {items
                ? items.map(({ label, value }) => (
                      <Fragment key={value}>
                          <input
                              type="radio"
                              name="switch"
                              id={value}
                              value={value}
                          />
                          <label htmlFor={value}>{label}</label>
                      </Fragment>
                  ))
                : null}

            <div className={cls.highlight}></div>
        </fieldset>
    );
};

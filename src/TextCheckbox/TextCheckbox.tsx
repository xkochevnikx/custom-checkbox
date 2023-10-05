import { Fragment, InputHTMLAttributes } from 'react';
import { classNames } from '../helpers/classnames';
import cls from './TextCheckbox.module.css';
import { FieldValues, UseFormRegister, useForm } from 'react-hook-form';

type itemRadio = {
    label: string;
    value: string;
};

interface ITextCheckboxProps extends InputHTMLAttributes<HTMLInputElement> {
    items: itemRadio[];
    register: UseFormRegister<FieldValues>;
}

export const TextCheckbox = (props: ITextCheckboxProps) => {
    const { items, register } = props;

    return (
        <fieldset className={classNames(cls.radioSwitch, {}, [])}>
            {items
                ? items.map(({ label, value }) => (
                      <Fragment key={value}>
                          <input
                              {...register('string')}
                              type="radio"
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

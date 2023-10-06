import { FormHTMLAttributes, ReactNode } from 'react';
import cls from './Form.module.css';
import { classNames } from '../helpers/classnames';

export interface IForm extends FormHTMLAttributes<HTMLFormElement> {
    children: ReactNode;
}

/**
 * @Form - компонент формы
 * @onSubmit - обработчик событий
 *
 */

export const Form = (props: IForm) => {
    const { children, onSubmit, ...otherProps } = props;

    return (
        <form
            onSubmit={onSubmit}
            className={classNames(cls.Form, {}, [])}
            {...otherProps}
            noValidate
        >
            {children}
        </form>
    );
};

import { FormHTMLAttributes, ReactNode } from 'react';
import cls from './MyForm.module.css';
import { classNames } from '../helpers/classnames';

export interface IMyForm extends FormHTMLAttributes<HTMLFormElement> {
    children: ReactNode;
}

/**
 * @Form - компонент формы
 * @onSubmit - обработчик событий
 *
 */

export const MyForm = (props: IMyForm) => {
    const { children, onSubmit, ...otherProps } = props;

    return (
        <form
            onSubmit={onSubmit}
            className={classNames(cls.MyForm, {}, [])}
            {...otherProps}
            noValidate
        >
            {children}
        </form>
    );
};

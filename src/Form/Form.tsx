import { FormHTMLAttributes, ReactNode } from 'react';
import cls from './Form.module.css';
import { classNames } from '../helpers/classnames';

export interface IForm extends FormHTMLAttributes<HTMLFormElement> {
    children: ReactNode;
}
export const Form = (props: IForm) => {
    const { children, ...otherProps } = props;

    return (
        <form
            className={classNames(cls.Form, {}, [])}
            {...otherProps}
            noValidate
        >
            {children}
        </form>
    );
};

import { ButtonHTMLAttributes, ReactNode } from 'react';
import cls from './MyButton.module.css';
import { Mode, classNames } from '../helpers/classnames';

export enum ThemeButton {
    CLEAR = 'clear',
    OUTLINE = 'outline',
    BACKGROUND = 'background',
}

export enum ButtonSize {
    M = 'size_m',
    L = 'size_l',
}

interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string;
    theme?: ThemeButton;
    square?: boolean;
    size?: ButtonSize;
    disabled?: boolean;
    children?: ReactNode;
    fullWidth?: boolean;
}

/**
 * @MyButton - компонент кнопки
 *
 */

export const MyButton = (props: IButtonProps) => {
    const {
        className,
        size = ButtonSize.M,
        children,
        theme = ThemeButton.OUTLINE,
        disabled,
        fullWidth,
        ...otherProps
    } = props;

    const mods: Mode = {
        [cls[theme]]: true,
        [cls[size]]: true,
        [cls.disabled]: disabled,
        [cls.fullWidth]: fullWidth,
    };

    return (
        <button
            disabled={disabled}
            type="button"
            {...otherProps}
            className={classNames(cls.MyButton, mods, [className])}
        >
            {children}
        </button>
    );
};

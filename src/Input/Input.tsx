import { UseFormRegisterReturn } from 'react-hook-form';

/**
 * @Input - компонент инпут)
 * @UseFormRegisterReturn - тип для обработчика от react hook form
 */

export const Input = (
    props: Partial<UseFormRegisterReturn> & { type?: string }
) => {
    return <input {...props} />;
};

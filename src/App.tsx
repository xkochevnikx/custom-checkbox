import { MyButton, ThemeButton } from './MyButton/MyButton';
import { classNames } from './helpers/classnames';
import { Form } from './Form/Form';
import { useForm } from 'react-hook-form';
import { TextCheckbox } from './TextCheckbox/TextCheckbox';

export type FormValues = {
    string?: string;
};

export function App() {
    const { handleSubmit, register } = useForm();

    const onSubmit = handleSubmit((data) => console.log(data));

    const items = [
        {
            label: 'string1',
            value: 'string1',
        },
        {
            label: 'string2',
            value: 'string2',
        },
        {
            label: 'string3',
            value: 'string3',
        },
        {
            label: 'string4',
            value: 'string4',
        },
        {
            label: 'string5',
            value: 'string5',
        },
    ];

    return (
        <>
            <div className={classNames('container', {}, [])}>
                <h1>Hello Form!</h1>
                <Form onSubmit={onSubmit}>
                    <TextCheckbox items={items} register={register} />
                    <MyButton type="submit" theme={ThemeButton.OUTLINE}>
                        Test
                    </MyButton>
                </Form>
            </div>
        </>
    );
}

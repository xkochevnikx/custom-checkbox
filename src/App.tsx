import { MyButton, ThemeButton } from './MyButton/MyButton';
import { classNames } from './helpers/classnames';
import { Form } from './Form/Form';
import { useForm } from 'react-hook-form';
import { TextRadio } from './TextRadio/TextRadio';
import { useState } from 'react';

export function App() {
    const { handleSubmit, register } = useForm();

    const [selected, setSelected] = useState<string>('');

    const onSubmit = handleSubmit((e) => setSelected(e.string));

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
                <h1>input radio for Igor</h1>
                <h3>value of the radio input selected {selected} </h3>
                <Form onSubmit={onSubmit}>
                    <TextRadio items={items} register={register} />
                    <MyButton type="submit" theme={ThemeButton.OUTLINE}>
                        Test
                    </MyButton>
                </Form>
            </div>
        </>
    );
}

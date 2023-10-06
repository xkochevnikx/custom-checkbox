import { MyButton, ThemeButton } from './MyButton/MyButton';
import { classNames } from './helpers/classnames';
import { Form } from './Form/Form';
import { useForm } from 'react-hook-form';
import { TextRadio } from './TextRadio/TextRadio';
import { useState } from 'react';
import { items, label } from './consts/consts';

/**
 * @App - корневой компонент
 *
 */

export function App() {
    const { handleSubmit, register } = useForm();

    const [selected, setSelected] = useState<string>('');

    const onSubmit = handleSubmit((e) => setSelected(e[label]));

    return (
        <div className={classNames('container', {}, [])}>
            <h1>input radio for Igor</h1>
            <h3>value of the radio input selected {selected} </h3>
            <Form onSubmit={onSubmit}>
                <TextRadio
                    items={items}
                    register={register}
                    labelDesc={label}
                />
                <MyButton type="submit" theme={ThemeButton.OUTLINE}>
                    Test
                </MyButton>
            </Form>
        </div>
    );
}

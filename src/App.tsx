import { MyButton, ThemeButton } from './MyButton/MyButton';
import { classNames } from './helpers/classnames';
import { Form } from './Form/Form';
import { SubmitHandler, useForm } from 'react-hook-form';
import { TextCheckbox } from './TextCheckbox/TextCheckbox';

type FormValues = {
    radio?: string;
};

export function App() {
    const { register, handleSubmit, reset } = useForm();

    const onSubmit: SubmitHandler<FormValues> = (data) => {
        console.log(data);
        reset();
    };

    return (
        <>
            <div className={classNames('container', {}, [])}>
                <h1>Hello Form!</h1>
                <Form onSubmit={handleSubmit(onSubmit)}>
                    <TextCheckbox />
                    <MyButton type="submit" theme={ThemeButton.OUTLINE}>
                        Test
                    </MyButton>
                </Form>
            </div>
        </>
    );
}

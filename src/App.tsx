import { useRef } from 'react';
import { TextSwitch } from './TextSwitcher/TextSwitcher';
import { MyButton, ThemeButton } from './MyButton/MyButton';
import { classNames } from './helpers/classnames';

export function App() {
    let textRef = useRef();
    return (
        <div className={classNames('container', {}, [])}>
            <h1>Hello world!</h1>
            <MyButton theme={ThemeButton.OUTLINE}>Test</MyButton>
            <TextSwitch />
        </div>
    );
}

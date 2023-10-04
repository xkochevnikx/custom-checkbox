import './textswitch.css';
import {
    HTMLAttributes,
    forwardRef,
    useEffect,
    useImperativeHandle,
    useRef,
    useState,
} from 'react';
import classnames from 'classnames';

export interface TextSwitchProps extends HTMLAttributes<HTMLButtonElement> {
    label1?: string;
    label2?: string;
    key1?: string;
    key2?: string;
    initialState?: boolean;
}

const TextSwitch = forwardRef((props: TextSwitchProps, ref) => {
    //
    const { label1, label2, key1, key2, initialState = false } = props;

    let [checked, setChecked] = useState(initialState);

    let sw = classnames({
        switch: true,
    });

    let inp = classnames({
        input: true,
        'input:checked': true,
        'input:focus': true,
    });

    let slider = classnames({
        slider: true,
        round: true,
    });

    let myRef = useRef<HTMLInputElement | null>(null);

    useEffect(() => {
        if (myRef.current) {
            myRef.current.onclick = (e) => {
                setChecked((e.target as HTMLInputElement).checked);
            };
        }
    }, [myRef]);

    useImperativeHandle(
        ref,
        () => ({
            value: () => (myRef.current?.checked ? label2 : label1),
            onChange: (lambda: () => void) =>
                (myRef.current!.onchange = lambda),
            key: () => (myRef.current?.checked ? key2 : key1),
        }),
        [myRef, key1, key2, label1, label2]
    );

    return (
        <label className={sw}>
            <input
                className={inp}
                checked={checked}
                type="checkbox"
                ref={myRef}
            />
            <span
                className={slider}
                placeholder={label2 || 'Buy'}
                data-value={label1 || 'Sell'}
            >
                <div>{label1 || 'Sell'}</div>
                <div>{label2 || 'Buy'}</div>
            </span>
        </label>
    );
});

TextSwitch.displayName = 'TextSwitch';

export default TextSwitch;

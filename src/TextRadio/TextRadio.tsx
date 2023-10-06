import {
    Fragment,
    InputHTMLAttributes,
    useEffect,
    useRef,
    useState,
} from 'react';
import { classNames } from '../helpers/classnames';
import cls from './TextRadio.module.css';
import { FieldValues, UseFormRegister } from 'react-hook-form';
import { useMoveSlide } from '../helpers/useMoveSlide';

type itemRadio = {
    label: string;
    value: string;
};

interface ITextCheckboxProps extends InputHTMLAttributes<HTMLInputElement> {
    items: itemRadio[];
    register: UseFormRegister<FieldValues>;
    labelDesc?: string;
    initialState?: number;
}

export const TextRadio = (props: ITextCheckboxProps) => {
    const { items, register, labelDesc = 'radio', initialState = 0 } = props;

    const [selectItem, setSelectItem] = useState(initialState);

    //! Генерируем массив ссылок на основе количества меток
    const refsMap = (labels: itemRadio[]) =>
        labels.map(() => useRef<HTMLLabelElement>(null));

    //! ссылка на контейнер
    const sliderRef = useRef<HTMLFieldSetElement>(null);

    //! ссылка на слайдер
    const selectedSlideRef = useRef<HTMLDivElement>(null);

    //! Генерируем ссылки для каждой метки на основе длинны items и вешаю на каждый label
    const textRefs = refsMap(items);

    //! получаю индекс выбранного элемента
    const handleClick = (index: number) => {
        setSelectItem(index);
    };

    useEffect(() => {
        useMoveSlide({
            selectedSlideRef,
            textRefs,
            selectItem,
        });
    }, [sliderRef, selectItem, selectedSlideRef, textRefs]);

    return (
        <fieldset
            ref={sliderRef}
            className={classNames(cls.radioSwitch, {}, [])}
        >
            {items
                ? items.map(({ label, value }, index) => (
                      <Fragment key={value}>
                          <input
                              {...register(labelDesc)}
                              type="radio"
                              id={value}
                              value={value}
                              onClick={() => handleClick(index)}
                          />
                          <label ref={textRefs[index]} htmlFor={value}>
                              {label}
                          </label>
                      </Fragment>
                  ))
                : null}

            <div
                style={{ width: textRefs[selectItem].current?.clientWidth }}
                className={cls.highlight}
                ref={selectedSlideRef}
            ></div>
        </fieldset>
    );
};

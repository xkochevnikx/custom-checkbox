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
        //! получаю ссылку на слайдер
        const slider = selectedSlideRef.current;
        //! при каждом изменении выбранного элемента получаю его координаты относительно контейнера и размер и после эти значения присваиваю слайдеру
        const selectedLabel = textRefs[selectItem].current;
        if (selectedLabel && slider) {
            const { offsetLeft } = selectedLabel;
            const { width } = selectedLabel.getBoundingClientRect();
            slider.style.left = `${offsetLeft}px`;
            slider.style.width = `${width}px`;
        }
    }, [sliderRef, selectItem]);

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

import { RefObject } from 'react';
import { items } from '../consts/consts';

interface IuseMoveSlideProps {
    selectedSlideRef: RefObject<HTMLDivElement>;
    textRefs: RefObject<HTMLLabelElement>[];
    selectItem: number;
}

export const useMoveSlide = (props: IuseMoveSlideProps) => {
    const { selectedSlideRef, textRefs, selectItem } = props;
    //! получаю ссылку на слайдер
    const slider = selectedSlideRef.current;
    //! при каждом изменении выбранного элемента получаю его координаты относительно контейнера и размер и после эти значения присваиваю слайдеру
    const selectedLabel = textRefs[selectItem].current;
    if (selectedLabel && slider) {
        const { offsetLeft } = selectedLabel;
        const { width } = selectedLabel.getBoundingClientRect();

        if (selectItem === 0) {
            const left = offsetLeft + 2;
            slider.style.left = `${left}px`;
            slider.style.width = `${width}px`;
        } else if (selectItem === items.length - 1) {
            const left = offsetLeft - 2;
            slider.style.left = `${left}px`;
            slider.style.width = `${width}px`;
        } else {
            slider.style.left = `${offsetLeft}px`;
            slider.style.width = `${width}px`;
        }
    }
};

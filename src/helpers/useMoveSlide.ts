import { RefObject } from 'react';

interface IuseMoveSlideProps {
    selectedSlideRef: RefObject<HTMLDivElement>;
    label: RefObject<HTMLLabelElement>;
}

/**
 * @useMoveSlider - функция перерасчета стилей слайдера
 * @selectedSlideRef - ссылка на слайдер
 * @label - ссылка на выбранный элемент
 */

export const useMoveSlide = (props: IuseMoveSlideProps) => {
    const { selectedSlideRef, label } = props;

    //! получаю ссылку на слайдер что бы задавать ему динамические стили
    const slider = selectedSlideRef.current;

    //! при каждом изменении выбранного элемента получаю его координаты относительно контейнера и размер и после эти значения присваиваю слайдеру
    if (label && slider) {
        const { width, height } = label.current!.getBoundingClientRect();
        const { offsetLeft, offsetTop } = label.current!;
        slider.style.left = `${offsetLeft}px`;
        slider.style.top = `${offsetTop}px`;
        slider.style.width = `${width}px`;
        slider.style.height = `${height}px`;
    }
};

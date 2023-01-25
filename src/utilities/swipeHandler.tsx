import { RefObject } from "react";

let clickCounter = 0;
export const swipeHandler = (event: React.MouseEvent<HTMLButtonElement>, cardsRef: RefObject<HTMLDivElement>, cardClass: string) => {
    const container = cardsRef.current!;
    const cards = container.querySelectorAll(`.${cardClass}`);
    const target = event.currentTarget!;

    if (target.id === 'next') {
        clickCounter++;
        container.style.transform = `translateX(calc(-100% * ${clickCounter}))`;
        if (clickCounter === 1)
            target.nextElementSibling?.classList.remove("d-none");
        else if (clickCounter === cards.length - 1)
            target.classList.add("d-none");
    }
    else if (target.id === 'prev') {
        if (clickCounter === 1)
        target.classList.add("d-none");
        else if (clickCounter === cards.length-1)
        target.previousElementSibling?.classList.remove("d-none");
        clickCounter--;
        container.style.transform = `translateX(calc(-100% * ${clickCounter}))`;
    }
}

import { RefObject } from "react";

export const swipeHandler = (event: React.MouseEvent<HTMLButtonElement>, cardsRef: RefObject<HTMLDivElement>, cardClass: string) => {
    const container = cardsRef.current!;
    const cards = Array.from(container.querySelectorAll(`.${cardClass}`));
    const target = event.currentTarget!;
    if (target.id === 'next') {
        for (const card of cards) {
            if (card.classList.contains('active')) {
                const index = cards.indexOf(card);
                container.style.transform = `translateX(calc(-100% * ${index + 1}))`;
                if (index === 0)
                    target.nextElementSibling?.classList.remove("d-none");
                else if (index === cards.length - 2)
                    target.classList.add("d-none");
                card.classList.remove('active');
                card.nextElementSibling?.classList.add('active');
                return;
            }
        }
    }
    else if (target.id === 'prev') {
        for (const card of cards) {
            if (card.classList.contains('active')) {
                const index = cards.indexOf(card);
                if (index === 1)
                    target.classList.add("d-none");
                else if (index === cards.length - 1)
                    target.previousElementSibling?.classList.remove("d-none");
                container.style.transform = `translateX(calc(-100% * ${index - 1}))`;
                card.classList.remove('active');
                card.previousElementSibling?.classList.add('active');
                return;
            }
        }
    }
}


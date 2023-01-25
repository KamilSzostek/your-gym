import React from 'react';
import { pricing } from '../../../utilities/pricing';
import PricingCard from '../../../components/PricingCard/PricingCard';



const Membership: React.FunctionComponent = () => {
    const pricingCards = pricing.map(card => (
        <PricingCard
            key={Math.random() * 100}
            type={card.type}
            icon={card.icon}
            periods={card.periods}
        />
    ))


    return (
        <div className="offer__membership">
            <h3>Karnety</h3>
            <div className="container">
                {pricingCards}
            </div>
            <p>
                * Karnet premium nadaje nielimitowany dostęp do saun i wszystkich
                zajęć dodatkowych. Opłata +50zł/msc niezależnie od rodzaju karnetu.
            </p>
            <p>* Wszystkie podane w tabeli ceny są opłatami miesięcznymi.</p>
        </div>
    );
};

export default Membership;

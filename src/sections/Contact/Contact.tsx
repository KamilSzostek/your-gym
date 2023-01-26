import React from 'react';
import DataContainer from '../../components/DataContainer/DataContainer';
import SectionTitle from '../../components/SectionTitle/SectionTitle';
import ContactForm from './subcomponents/ContactForm';
import './Contact.scss';

interface IContactProps {
}

const Contact: React.FunctionComponent<IContactProps> = (props) => {
    return (
        <section id='contact' className='contact'>
            <h2 className='section-title'>Kont<span>akt</span></h2>
            <div className="contact__content">
                <div className='contact__content__container'>
                    <DataContainer
                        title="Dane kontaktowe"
                        firstLine="Tel.stacjonarny: 77 444 222"
                        secondLine="Tel.komórkowy: 777 444 222"
                    />
                    <DataContainer
                        title="Dane adresowe"
                        firstLine="ul.Chrząszczowa 47 Szczebrzeszyn"
                        secondLine="12-123 Szczebrzeszyn"
                    />
                    <ContactForm />
                </div>
                <div className="contact__content__map" >
                    <iframe
                        className="map"
                        title="map"
                        width="100%"
                        height="400"
                        frameBorder={0}
                        scrolling="no"
                        src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=Szczebrzeszyn+(PowerGym)&amp;t=p&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
                    ></iframe>
                </div>
            </div>
        </section>
    );
};

export default Contact;

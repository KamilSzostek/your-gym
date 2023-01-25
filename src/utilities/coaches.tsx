import { generateId } from './generateId';
import Bodybuilding from '../assets/coaches/powerlifting-icon.png';
import Zumba from '../assets/coaches/zumba-icon.png';
import Boxing from '../assets/coaches/boxing-icon.png';
import Joga from '../assets/coaches/joga-icon.png';
import Coach1 from '../assets/coaches/carlos.jpg';
import Coach2 from '../assets/coaches/marie.jpg';
import Coach3 from '../assets/coaches/marcus.jpg';
import Coach4 from '../assets/coaches/kler.jpg';
import Coach5 from '../assets/coaches/john.jpg';
import Coach6 from '../assets/coaches/dave.jpg';

export const coaches = [
    {
        id: 1,
        name: 'Carlos',
        image: Coach1,
        icon: Bodybuilding,
        type: 'bodybuilding',
        description: "Carlos  to osoba, która dba o każdy szczegół i pomaga osiągnąć spektakularne efekty. Jego zajęcia to połączenie skutecznych ćwiczeń z odpowiednią dietą i suplementacją. Dołącz do nas i odkryj w sobie nowe możliwości dzięki regularnym treningom bodybuildingu."
    },
    {
        id: 2,
        name: 'Marie',
        image: Coach2,
        icon: Zumba,
        type: 'zumba',
        description: "Marie nasza trenerka zumby to osoba pełna energii i pozytywnej wibracji, która zaraża nią wszystkich wokół siebie. Jej zajęcia to połączenie skutecznego treningu z elementami zabawy i radości, dzięki czemu zawsze wychodzisz z sali z uśmiechem na twarzy i pełnym pozytywnych emocji. "
    },
    {
        id: 3,
        name: 'Marcus',
        image: Coach3,
        icon: Bodybuilding,
        type: 'bodybuilding',
        description: "Marcus to prawdziwy specjalista w dziedzinie budowy masy mięśniowej i poprawy sylwetki. Jego zajęcia to połączenie skutecznych ćwiczeń z indywidualnym doborem planu treningowego dostosowanego do Twoich potrzeb i możliwości. "
    },
    {
        id: 4,
        name: 'Kler',
        image: Coach4,
        icon: Joga,
        type: 'joga',
        description: "Kler to nie tylko profesjonalistka, ale przede wszystkim osoba, która kocha to, co robi i chce się dzielić swoją pasją z innymi. Jej zajęcia to połączenie skutecznego treningu z elementami relaksu i medytacji, dzięki czemu zawsze wychodzisz z sali zrelaksowany i zregenerowany."
    },
    {
        id: 5,
        name: 'John',
        image: Coach5,
        icon: Boxing,
        type: 'boxing',
        description: "John to prawdziwy profesjonalista, który kocha to, co robi i chce się dzielić swoją wiedzą i doświadczeniem z innymi. Jego zajęcia to połączenie skutecznego treningu z elementami taktyki i techniki, dzięki czemu możesz rozwijać swoje umiejętności i poprawiać kondycję"
    },
    {
        id: 6,
        name: 'Dave',
        image: Coach6,
        icon: Bodybuilding,
        type: 'bodybuilding',
        description: "Dave to osoba, która nie tylko dba o formę fizyczną, ale również o dobre samopoczucie i zdrowie. Jego zajęcia to połączenie skutecznych ćwiczeń z elementami relaksu i medytacji, dzięki czemu zawsze wychodzisz z sali zrelaksowany i zregenerowany. "
    }

]
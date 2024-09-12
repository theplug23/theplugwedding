import vid1 from '/public/images/videos/Alice&Dirk.jpg'
import vid2 from '/public/images/videos/Philippe&Marie.jpeg'
import vid3 from '/public/images/videos/Maxime&Maria.jpeg'
import vid5 from '/public/images/videos/Lisa&Charles.jpg'
import vid6 from '/public/images/videos/vladi-&-sarah.jpg'
import vid7 from '/public/images/videos/Stephane.png'
import vid8 from '/public/images/videos/Julia&Eric.jpg'
import vid9 from '/public/images/event/WifOR/Bild-127.jpg'
import vid10 from '/public/images/videos/Joel&Glwadys.jpg'
import vid11 from '/public/images/videos/Hena&Oliver.jpg'
import vid13 from '/public/images/videos/Alena-Peter.png'
const videos = [
    {
        id: 1,
        persons: 'Charles & Lisa-Marie Hochzeitsvideo (Wedding film) 2023',
        date: '12.15.2023',
        bgImg: vid5,
        // description: 'Jura ist ein großartiger Karriereweg, wenn man ein breites Spektrum an Fähigkeiten erwerben möchte, das von kritischem Denken und strategischer Planung bis hin zur Kommunikation reicht. Wenn man gerne Herausforderungen annimmt.',
        link: 'https://www.youtube.com/embed/nKuE7ynd6X0?si=zXKl2TbfF2L6Ql9t',
        place: 'Allemagne'
    },
    {
        id: 2,
        persons: 'Julia & Eric Wedding Video in Germany',
        date: '22 September 2022',
        bgImg: vid8,
        // description: 'Jura ist ein großartiger Karriereweg, wenn man ein breites Spektrum an Fähigkeiten erwerben möchte, das von kritischem Denken und strategischer Planung bis hin zur Kommunikation reicht. Wenn man gerne Herausforderungen annimmt.',
        link: 'https://www.youtube.com/embed/4a_-hAaDnGU?si=okUAiHNrd5Q3dRHC',
        place: 'Allemagne'
    },
    {
        id: 3,
        persons: 'Hochzeitsfilm im Dippelshof Mühltal - 09.08.2024 | Alena & Peter',
        date: '09 August 2024',
        bgImg: vid13,
        // description: 'Jura ist ein großartiger Karriereweg, wenn man ein breites Spektrum an Fähigkeiten erwerben möchte, das von kritischem Denken und strategischer Planung bis hin zur Kommunikation reicht. Wenn man gerne Herausforderungen annimmt.',
        link: 'https://www.youtube.com/embed/Jq2zWXXbRzs',
        place: 'Mühltal - Allemagne'
    },
    {
        id:4,
        persons: 'WifOR Institute GmbH feiert 15-jähriges Jubiläum im Merck-Stadion am Böllenfalltor(Darmstadt)',
        date: '12 Mars 2024',
        bgImg: vid9,
        // description: 'Jura ist ein großartiger Karriereweg, wenn man ein breites Spektrum an Fähigkeiten erwerben möchte, das von kritischem Denken und strategischer Planung bis hin zur Kommunikation reicht. Wenn man gerne Herausforderungen annimmt.',
        link: 'https://www.youtube.com/embed/SzNp8ED68uM',
        place: 'Darmstadt - Allemagne'
    },
    {
        id: 5,
        persons: 'Hochzeitsfilm in Mathildenhöhe Darmstadt - 19.07.2024 | Hena & Oliver',
        date: '19 July 2024',
        bgImg: vid11,
        // description: 'Jura ist ein großartiger Karriereweg, wenn man ein breites Spektrum an Fähigkeiten erwerben möchte, das von kritischem Denken und strategischer Planung bis hin zur Kommunikation reicht. Wenn man gerne Herausforderungen annimmt.',
        link: 'https://www.youtube.com/embed/qkUczp9-0jo',
        place: 'Darmstadt - Allemagne'
    },
    {
        id: 6,
        persons: 'Joel & Glawdys - Wedding Film in Paderborn Germany',
        date: '31 May 2024',
        bgImg: vid10,
        // description: 'Jura ist ein großartiger Karriereweg, wenn man ein breites Spektrum an Fähigkeiten erwerben möchte, das von kritischem Denken und strategischer Planung bis hin zur Kommunikation reicht. Wenn man gerne Herausforderungen annimmt.',
        link: 'https://www.youtube.com/embed/UCexQAz54MY',
        place: 'Paderborn - Allemagne'
    },
    {
        id: 7,
        persons: 'ALICE & DIRK WEDDING Film - 06.05.2023',
        date: '06.05.2023',
        bgImg: vid1,
        // description: 'Jura ist ein großartiger Karriereweg, wenn man ein breites Spektrum an Fähigkeiten erwerben möchte, das von kritischem Denken und strategischer Planung bis hin zur Kommunikation reicht. Wenn man gerne Herausforderungen annimmt.',
        link: 'https://www.youtube.com/embed/IrrQsBKKpuE?si=rLe5IIr12Cn4Cslc',
        place: 'Allemagne'
    },
    {
        id: 8,
        persons: 'Pregnancy Announcement Film - Maria & Maxime',
        date: '21 April 2021',
        bgImg: vid3,
        // description: 'Jura ist ein großartiger Karriereweg, wenn man ein breites Spektrum an Fähigkeiten erwerben möchte, das von kritischem Denken und strategischer Planung bis hin zur Kommunikation reicht. Wenn man gerne Herausforderungen annimmt.',
        link: 'https://www.youtube.com/embed/fTmzfNYPsdU?si=53nqKKHdVGEMXFlJ',
        place: 'Allemagne'
    },
    {
        id: 9,
        persons: 'HOCHZEITSVIDEO 12 08 2023 Vladi&Sarah THEPLUG-WEDDING in Darmstadt und GroßZimmer',
        date: '08 12 2023',
        bgImg: vid6,
        // description: 'Jura ist ein großartiger Karriereweg, wenn man ein breites Spektrum an Fähigkeiten erwerben möchte, das von kritischem Denken und strategischer Planung bis hin zur Kommunikation reicht. Wenn man gerne Herausforderungen annimmt.',
        link: 'https://www.youtube.com/embed/XxfjT8NCkrU',
        place: 'Allemagne'
    },
    {
        id: 10,
        persons: 'Pregnancy Announcement Film - Audrey & Stephane',
        date: '08 12 2023',
        bgImg: vid7,
        // description: 'Jura ist ein großartiger Karriereweg, wenn man ein breites Spektrum an Fähigkeiten erwerben möchte, das von kritischem Denken und strategischer Planung bis hin zur Kommunikation reicht. Wenn man gerne Herausforderungen annimmt.',
        link: 'https://www.youtube.com/embed/rzEP767qF-E',
        place: 'Allemagne'
    },
    {
        id: 11,
        persons: 'Phillipe & Marie Wedding Video in Germany',
        date: '21 August 2021',
        bgImg: vid2,
        // description: 'Jura ist ein großartiger Karriereweg, wenn man ein breites Spektrum an Fähigkeiten erwerben möchte, das von kritischem Denken und strategischer Planung bis hin zur Kommunikation reicht. Wenn man gerne Herausforderungen annimmt.',
        link: 'https://www.youtube.com/embed/Ep4m-aOeK_0?si=vbdWPVGGmx6zrCTj',
        place: 'Allemagne'
    },
]

export default videos;
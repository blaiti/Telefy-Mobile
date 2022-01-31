const categories = [
    {
        id: 1,
        name: 'Sports',
        icon: 'sports-soccer'
    },
    {
        id: 2,
        name: 'Social',
        icon: 'people'
    },
    {
        id: 3,
        name: 'Loisir',
        icon: 'emoji-emotions'
    },
    {
        id: 4,
        name: 'Politique',
        icon: 'gavel'
    },
    {
        id: 5,
        name: 'Séries',
        icon: 'movie'
    },
    {
        id: 6,
        name: 'Comédie',
        icon: 'theater-comedy'
    },
    {
        id: 7,
        name: 'Clips',
        icon: 'radio'
    },
    {
        id: 8,
        name: 'Films',
        icon: 'live-tv'
    },
]

const channels = [
    {
        id: 1,
        name: 'France TV'
    },
    {
        id: 2,
        name: 'Canal+'
    },
    {
        id: 3,
        name: 'TF1'
    },
    {
        id: 4,
        name: 'TV5'
    },
    {
        id: 5,
        name: 'M6'
    },
]

const programs = [
    {
        id: 1,
        channels: 1,
        category: 3,
        categoryName: 'Loisirs',
        name: 'Echappées belles',
        datetime: 'Samedi, 20h55 - 22h25',
        description: 'Lorem ipsum dolor sit amet, consectetur adipscin sed do eiusmod tempor incididu...',
        picture: 'https://img.over-blog-kiwi.com/0/87/49/59/20200402/ob_de6eb3_ob-546f9e-ob-e0a48c-ob-a6e7d3-ob-49b1d.jpg'
    },
    {
        id: 1,
        channels: 1,
        category: 3,
        categoryName: 'Loisirs',
        name: 'La grande librairie',
        datetime: 'Mercredi, 20h00 - 21h00',
        description: 'Lorem ipsum dolor sit amet, consectetur adipscin sed do eiusmod tempor incididu...',
        picture: 'https://file1.telestar.fr/var/telestar/storage/images/3/4/2/3/3423030/la-grande-librairie-mercredi-mars-sur-france-5.jpeg'
    },
    {
        id: 1,
        channels: 1,
        category: 3,
        categoryName: 'Loisirs',
        name: 'Faut pas rêver',
        datetime: 'Mercredi, 21h05 - 23h00',
        description: 'Lorem ipsum dolor sit amet, consectetur adipscin sed do eiusmod tempor incididu...',
        picture: 'https://s.isogossip.com/blg/isp/2015/10/faut-pas-rever-replay-b.jpg'
    },
    {
        id: 1,
        channels: 1,
        category: 3,
        categoryName: 'Loisirs',
        name: 'Deux fils',
        datetime: 'Mercredi, 23h20 - 01h40',
        description: 'Lorem ipsum dolor sit amet, consectetur adipscin sed do eiusmod tempor incididu...',
        picture: 'https://www.lequotidienducinema.com/wp-content/uploads/2019/01/critique-deux-fils.jpg'
    },
]

const messages = [
    
    {
        id: "1",
        sender: true,
        message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
        id: "2",
        sender: false,
        message: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium 😍",
    },
    {
        id: "3",
        sender: false,
        message: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit 🎉",
    },
    {
        id: "4",
        sender: true,
        message: "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit.",
    },
]

export {
    categories,
    channels,
    programs,
    messages
}
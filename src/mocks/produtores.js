import green from "../assets/produtores/green.png";
import salad from "../assets/produtores/salad.png"
import jennyjack from "../assets/produtores/jenny-jack.png";
import grow from "../assets/produtores/grow.png";
import potager from "../assets/produtores/potager.png";


const createNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

const produtores = {
    title: 'Produtores',
    list: [
        {
            name: 'Green',
            image: green,
            distance: `${createNumber(1,500)}m`,
            stars: createNumber(1,5),
        },
        {
            name: 'Salad',
            image: salad,
            distance: `${createNumber(1,500)}m`,
            stars: createNumber(1,5),
        },
        {
            name: 'Jenny-Jack',
            image: jennyjack,
            distance: `${createNumber(1,500)}m`,
            stars: createNumber(1,5),
        },
        {
            name: 'Grow',
            image: grow,
            distance: `${createNumber(1,500)}m`,
            stars: createNumber(1,5),
        },
        {
            name: 'Potager',
            image: potager,
            distance: `${createNumber(1,500)}m`,
            stars: createNumber(1,5),
        },
    ]
}

export default produtores;
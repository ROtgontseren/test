import { writable } from "svelte/store";


import Image1 from "../lib/images/1.png";
import Image2 from "../lib/images/7.png";
import Image3 from "../lib/images/8.png";



export const musicList = writable([
    {
        image: Image2,
        audio: "2",
        name: "Ганган цагаан",
        artist: "Gangbay"
    },
    {
        image: Image3,
        audio: "3",
        name: "Тэмээчин ээж",
        artist: "Отгонжаргал"
    },
    {
        image: Image1,
        audio: "1",
        name: "Бороо",
        artist: "Бат-оч"
    },
])
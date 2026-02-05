// src/constants/products.ts

import { Product } from "../types";

export const PRODUCTS: Product[] = [
  {
    id: "1",
    name: "Spider-Man 2",
    price: 2999,
    image: require("../../assets/spiderman2.avif"),
    description:
      "Be Greater. Together. - Experience two Spider-Men in one epic adventure",
    longDescription:
      "The incredible power of the symbiote forces Peter and Miles to face the ultimate test of strength, both inside and outside the mask. As they balance their lives, friendships, and their duty to protect those in need, they must confront the consequences of their choices. Swing through Marvel's New York and experience an original story featuring both Spider-Men.",
    stock: 15,
  },
  {
    id: "2",
    name: "God of War Ragnarök",
    price: 2799,
    image: require("../../assets/godofwar.jpg"),
    description: "Embark on an epic journey with Kratos and Atreus",
    longDescription:
      "Kratos and Atreus embark on a mythic journey for answers before Ragnarök arrives. Together they must explore stunning, mythical landscapes, gather allies from across the Nine Realms and prepare for the climactic battle that will decide the fate of the realms. As Asgardian forces prepare for war, Kratos and Atreus venture deep into the Nine Realms in search of answers.",
    stock: 12,
  },
  {
    id: "3",
    name: "Horizon Forbidden West",
    price: 2499,
    image: require("../../assets/horizon.avif"),
    description: "Explore a vibrant and dangerous frontier",
    longDescription:
      "Join Aloy as she braves the Forbidden West – a deadly frontier that conceals mysterious new threats. Explore distant lands, fight bigger and more awe-inspiring machines, and encounter astonishing new tribes as you return to the far-future, post-apocalyptic world of Horizon. The land is dying and only Aloy can uncover the secrets behind these threats.",
    stock: 20,
  },
  {
    id: "4",
    name: "Gran Turismo 7",
    price: 2699,
    image: require("../../assets/granturismo.webp"),
    description: "The Real Driving Simulator - Over 400 cars",
    longDescription:
      "Whether you're a competitive racer, collector, fine-tuning tuner, livery designer or photographer – ignite your own unique spark in Gran Turismo 7. With over 400 cars available from day one, race on iconic tracks from around the world. GT Campaign mode returns with a focus on the evolution of cars and motorsport. Master the perfect racing line with the help of the driving school.",
    stock: 8,
  },
  {
    id: "5",
    name: "Resident Evil 4 Remake",
    price: 2599,
    image: require("../../assets/re4.avif"),
    description: "Survival is just the beginning",
    longDescription:
      "Six years after the biological disaster in Raccoon City, agent Leon S. Kennedy tracks the president's kidnapped daughter to a remote European village, where something terribly wrong is happening. Featuring modernized gameplay, a reimagined storyline, and vividly detailed graphics, this is a reimagining of the original game that set the standard for survival horror.",
    stock: 10,
  },
  {
    id: "6",
    name: "It Takes Two",
    price: 2999,
    image: require("../../assets/ittakes2.webp"),
    description: "A co-op adventure about love, divorce, and family",
    longDescription:
      "Embark on the craziest journey of your life in It Takes Two, a genre-bending platform adventure created purely for co-op. Play as the clashing couple Cody and May, two humans turned into dolls by a magic spell. Together, trapped in a fantastical world, they're reluctantly challenged with saving their fractured relationship by the suave love guru Dr. Hakim.",
    stock: 18,
  },
  {
    id: "7",
    name: "The Last of Us Part I",
    price: 2399,
    image: require("../../assets/tlou1.webp"),
    description: "Experience the emotional journey of Joel and Ellie",
    longDescription:
      "In a ravaged civilization, where infected and hardened survivors run rampant, Joel, a weary protagonist, is hired to smuggle 14-year-old Ellie out of a military quarantine zone. However, what starts as a small job soon transforms into a brutal cross-country journey. This rebuilt from the ground up version brings Joel and Ellie's story to life with improved visuals and gameplay.",
    stock: 14,
  },
  {
    id: "8",
    name: "The Last of Us Part II",
    price: 2199,
    image: require("../../assets/tlou2.webp"),
    description: "Experience Ellie's gripping journey of survival and revenge",
    longDescription:
      "Five years after their dangerous journey across the post-pandemic United States, Ellie and Joel have settled down in Jackson, Wyoming. Living amongst a thriving community gives them stability, despite the constant threat of the infected and desperate survivors. When a violent event disrupts that peace, Ellie embarks on a relentless journey to carry out justice and find closure.",
    stock: 16,
  },
];

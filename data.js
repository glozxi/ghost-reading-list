const data = [
  {
    title: "Iron Man Vol 1 #219",
    recommended: 2,
    comments: "First appearance",
    tags: ["Major role"],
  },
  {
    title: "Iron Man Vol 1 #220",
    recommended: 2,
    comments: "",
    tags: ["Major role"],
  },
  {
    title: "Iron Man Vol 1 #221",
    recommended: 2,
    comments: "",
    tags: ["Major role"],
  },
  {
    title: "Iron Man Vol 1 #238",
    recommended: 0,
    comments: "",
    tags: [],
  },
  {
    title: "Iron Man Vol 1 #239",
    recommended: 0,
    comments: "First meeting with Boomerang",
    tags: ["Major role"],
  },
  {
    title: "Iron Man Vol 1 #240",
    recommended: 0,
    comments: "",
    tags: ["Major role"],
  },
  {
    title: "Amazing Spider-Man Vol 1 Annual 25 (1st story)",
    recommended: 0,
    comments: "First fight against Spider-Man",
    tags: ["Major role"],
  },
  {
    title: "Spectacular Spider-Man Annual Vol 1 11 (1st story)",
    recommended: 0,
    comments: "",
    tags: ["Major role"],
  },
  {
    title: "Amazing Spider-Man Vol 2 16",
    recommended: 0,
    comments: "",
    tags: [],
  },
  {
    title: "Iron Man Vol 3 42",
    recommended: 0,
    comments: "",
    tags: ["Not on-page", "Part of story arc"],
  },
  {
    title: "Iron Man Vol 3 43",
    recommended: 0,
    comments: "",
    tags: ["Not on-page", "Part of story arc"],
  },
  {
    title: "Iron Man Vol 3 44",
    recommended: 0,
    comments: "",
    tags: ["Not on-page", "Part of story arc"],
  },
  {
    title: "Iron Man Vol 3 45",
    recommended: 1,
    comments: "",
    tags: ["Major role"],
  },
  {
    title: "Iron Man: Inevitable Vol 1 1",
    recommended: 1,
    comments: "Updated design",
    tags: ["Major role"],
  },
  {
    title: "Iron Man: Inevitable Vol 1 2",
    recommended: 1,
    comments: "",
    tags: ["Major role"],
  },
  {
    title: "Iron Man: Inevitable Vol 1 3",
    recommended: 1,
    comments: "",
    tags: ["Major role"],
  },
  {
    title: "Iron Man: Inevitable Vol 1 4",
    recommended: 1,
    comments: "",
    tags: ["Major role"],
  },
  {
    title: "Iron Man: Inevitable Vol 1 5",
    recommended: 1,
    comments: "",
    tags: ["Not on-page", "Part of story arc"],
  },
  {
    title: "Iron Man: Inevitable Vol 1 6",
    recommended: 1,
    comments: "",
    tags: ["Not on-page", "Part of story arc"],
  },
  {
    title: "Dark Avengers Vol 1 1",
    recommended: 0,
    comments:
      "First Thunderbolts era appearance, updated design, first meeting with Moonstone",
    tags: [],
  },
  {
    title: "Thunderbolts 128",
    recommended: 2,
    comments: "",
    tags: ["Major role"],
  },
  {
    title: "Thunderbolts 129",
    recommended: 2,
    comments: "",
    tags: ["Major role"],
  },
  {
    title: "Thunderbolts 130",
    recommended: 2,
    comments: "",
    tags: ["Major role"],
  },
  {
    title: "Deadpool Vol 3 9",
    recommended: 0,
    comments: "Other Deadpool issues can be ignored",
    tags: ["Part of story arc"],
  },
  {
    title: "Thunderbolts 131",
    recommended: 2,
    comments: "",
    tags: ["Major role"],
  },
  {
    title: "Thunderbolts 132",
    recommended: 2,
    comments: "",
    tags: ["Major role"],
  },
  {
    title: "Thunderbolts 133",
    recommended: 2,
    comments: "",
    tags: ["Major role"],
  },
  {
    title: "Thunderbolts 134",
    recommended: 2,
    comments: "",
    tags: [],
  },
  {
    title: "Thunderbolts 135",
    recommended: 2,
    comments: "First meeting with Songbird",
    tags: ["Major role"],
  },
  {
    title: "Captain America: Reborn Vol 1 3",
    recommended: 0,
    comments: "First meeting with Bucky",
    tags: [],
  },
  {
    title: "Thunderbolts 136",
    recommended: 2,
    comments: "",
    tags: ["Major role"],
  },
  {
    title: "Thunderbolts 137",
    recommended: 0,
    comments: "",
    tags: ["Major role"],
  },
  {
    title: "Thunderbolts 138",
    recommended: 2,
    comments: "",
    tags: ["Major role"],
  },
  {
    title: "Thunderbolts 139",
    recommended: 2,
    comments: "",
    tags: ["Major role"],
  },
  {
    title: "Thunderbolts 140",
    recommended: 2,
    comments: "",
    tags: ["Major role"],
  },
  {
    title: "Captain America Vol 5 606",
    recommended: 0,
    comments: "First meeting with Zemo",
    tags: [],
  },
  {
    title: "Invincible Iron Man Vol 2 20",
    recommended: 2,
    comments: "",
    tags: [],
  },
  {
    title: "Invincible Iron Man Vol 2 21",
    recommended: 2,
    comments: "",
    tags: ["Major role"],
  },
  {
    title: "Invincible Iron Man Vol 2 22",
    recommended: 2,
    comments: "",
    tags: ["Major role"],
  },
  {
    title: "Invincible Iron Man Vol 2 23",
    recommended: 2,
    comments: "",
    tags: ["Major role"],
  },
  {
    title: "Invincible Iron Man Vol 2 24",
    recommended: 2,
    comments: "",
    tags: ["Major role"],
  },
  {
    title: "Spider-Woman Vol 4 6",
    recommended: 0,
    comments: "",
    tags: [],
  },
  {
    title: "Thunderbolts 141",
    recommended: 2,
    comments: "",
    tags: ["Major role"],
  },
  {
    title: "Thunderbolts 142",
    recommended: 2,
    comments: "",
    tags: ["Part of story arc"],
  },
  {
    title: "Thunderbolts 143",
    recommended: 2,
    comments: "",
    tags: ["Major role"],
  },

  {
    title: "Enter the Heroic Age Vol 1 1 (5th story)",
    recommended: 1,
    comments: "",
    tags: ["Part of story arc"],
  },

  {
    title: "Thunderbolts 144",
    recommended: 2,
    comments: "",
    tags: ["Major role"],
  },
  {
    title: "Thunderbolts 145",
    recommended: 2,
    comments: "",
    tags: ["Major role"],
  },
  {
    title: "Thunderbolts 146",
    recommended: 2,
    comments: "",
    tags: ["Major role"],
  },
  {
    title: "Avengers Academy Vol 1 3",
    recommended: 1,
    comments: "Small part but funny",
    tags: [],
  },
  {
    title: "Thunderbolts 147",
    recommended: 2,
    comments: "",
    tags: ["Major role"],
  },

  {
    title: "Thunderbolts 148",
    recommended: 2,
    comments: "",
    tags: ["Major role"],
  },

  {
    title: "Thunderbolts 149",
    recommended: 2,
    comments: "",
    tags: ["Major role"],
  },

  {
    title: "Thunderbolts 150",
    recommended: 2,
    comments: "",
    tags: ["Major role"],
  },

  {
    title: "Thunderbolts 151",
    recommended: 2,
    comments: "Reveals backstory",
    tags: ["Major role"],
  },

  {
    title: "Thunderbolts 152",
    recommended: 2,
    comments: "",
    tags: ["Major role"],
  },

  {
    title: "Thunderbolts 153",
    recommended: 2,
    comments: "",
    tags: ["Major role"],
  },

  {
    title: "Thunderbolts 154",
    recommended: 2,
    comments: "",
    tags: ["Not on-page", "Part of story arc"],
  },

  {
    title: "Thunderbolts 155",
    recommended: 2,
    comments: "",
    tags: ["Part of story arc"],
  },

  {
    title: "Thunderbolts 156",
    recommended: 2,
    comments: "",
    tags: ["Major role"],
  },

  {
    title: "Thunderbolts 157",
    recommended: 2,
    comments: "",
    tags: ["Major role"],
  },

  {
    title: "Thunderbolts 158",
    recommended: 2,
    comments: "",
    tags: ["Major role"],
  },

  {
    title: "Thunderbolts 159",
    recommended: 2,
    comments: "",
    tags: ["Major role"],
  },

  {
    title: "Thunderbolts 160",
    recommended: 2,
    comments: "",
    tags: ["Major role"],
  },

  {
    title: "Thunderbolts 161",
    recommended: 2,
    comments: "",
    tags: ["Major role"],
  },

  {
    title: "Thunderbolts 162",
    recommended: 2,
    comments: "",
    tags: ["Major role"],
  },

  {
    title: "Thunderbolts 163",
    recommended: 2,
    comments: "",
    tags: ["Not on-page", "Part of story arc"],
  },
  {
    title: "Thunderbolts 163.1",
    recommended: 2,
    comments: "",
    tags: ["Part of story arc"],
  },

  {
    title: "Thunderbolts 164",
    recommended: 2,
    comments: "",
    tags: ["Not on-page", "Part of story arc"],
  },

  {
    title: "Thunderbolts 165",
    recommended: 2,
    comments: "",
    tags: ["Not on-page", "Part of story arc"],
  },

  {
    title: "Thunderbolts 166",
    recommended: 2,
    comments: "",
    tags: ["Part of story arc"],
  },

  {
    title: "Thunderbolts 167",
    recommended: 2,
    comments: "",
    tags: ["Major role"],
  },

  {
    title: "Thunderbolts 168",
    recommended: 2,
    comments: "Appears as hallucination",
    tags: ["Not on-page", "Part of story arc"],
  },

  {
    title: "Thunderbolts 169",
    recommended: 2,
    comments: "",
    tags: ["Not on-page", "Part of story arc"],
  },

  {
    title: "Thunderbolts 170",
    recommended: 2,
    comments: "",
    tags: ["Major role"],
  },

  {
    title: "Thunderbolts 171",
    recommended: 2,
    comments: "",
    tags: ["Not on-page", "Part of story arc"],
  },

  {
    title: "Thunderbolts 172",
    recommended: 2,
    comments: "",
    tags: ["Major role"],
  },

  {
    title: "Thunderbolts 173",
    recommended: 2,
    comments: "",
    tags: ["Major role"],
  },

  {
    title: "Thunderbolts 174",
    recommended: 2,
    comments: "",
    tags: ["Major role"],
  },
  {
    title: "Dark Avengers Vol 1 175",
    recommended: 2,
    comments: "",
    tags: ["Part of story arc"],
  },

  {
    title: "Dark Avengers Vol 1 176",
    recommended: 2,
    comments: "",
    tags: ["Major role"],
  },

  {
    title: "Dark Avengers Vol 1 177",
    recommended: 2,
    comments: "",
    tags: ["Major role"],
  },

  {
    title: "Dark Avengers Vol 1 178",
    recommended: 2,
    comments: "",
    tags: ["Major role"],
  },

  {
    title: "Dark Avengers Vol 1 179",
    recommended: 2,
    comments: "",
    tags: ["Major role"],
  },

  {
    title: "Dark Avengers Vol 1 180",
    recommended: 2,
    comments: "",
    tags: ["Major role"],
  },

  {
    title: "Dark Avengers Vol 1 181",
    recommended: 2,
    comments: "",
    tags: ["Major role"],
  },

  {
    title: "Dark Avengers Vol 1 182",
    recommended: 2,
    comments: "",
    tags: ["Part of story arc"],
  },

  {
    title: "Dark Avengers Vol 1 183",
    recommended: 2,
    comments: "",
    tags: ["Major role"],
  },
  {
    title: "Avengers: Cutting Edge Vol 1 1",
    recommended: 0,
    comments: "",
    tags: ["Major role"],
  },
  {
    title: "Amazing Spider-Man Vol 3 16 (1st story)",
    recommended: 0,
    comments: "",
    tags: [],
  },
  {
    title: "Amazing Spider-Man Vol 3 17 (1st story)",
    recommended: 1,
    comments: "",
    tags: ["Major role"],
  },
  {
    title: "Amazing Spider-Man Vol 3 18 (1st story)",
    recommended: 1,
    comments: "",
    tags: ["Major role"],
  },
  {
    title: "Amazing Spider-Man Vol 4 12",
    recommended: 0,
    comments: "",
    tags: ["Major role"],
  },
  {
    title: "Invincible Iron Man Vol 3 11",
    recommended: 0,
    comments: "",
    tags: [],
  },
  {
    title: "Thunderbolts Vol 4 12",
    recommended: 0,
    comments: "",
    tags: [],
  },
  {
    title: "Punisher Vol 11 226",
    recommended: 0,
    comments: "",
    tags: ["Major role"],
  },
  {
    title: "Punisher Vol 11 228",
    recommended: 0,
    comments: "",
    tags: ["Major role"],
  },
  {
    title: "Punisher Vol 12 13",
    recommended: 0,
    comments: "",
    tags: [],
  },

  {
    title: "Punisher Vol 12 14",
    recommended: 0,
    comments: "",
    tags: [],
  },

  {
    title: "Punisher Vol 12 15",
    recommended: 0,
    comments: "",
    tags: [],
  },
  {
    title: "Punisher Vol 12 16",
    recommended: 0,
    comments: "",
    tags: ["Major role"],
  },
  {
    title: "Strikeforce Vol 1 5",
    recommended: 1,
    comments: "",
    tags: ["Major role"],
  },
  {
    title: "Strikeforce Vol 1 6",
    recommended: 1,
    comments: "",
    tags: ["Major role"],
  },
  {
    title: "Avengers Unlimited Infinity Comic Vol 1 1",
    recommended: 1,
    comments: "",
    tags: ["Major role"],
  },
  {
    title: "Avengers Unlimited Infinity Comic Vol 1 4",
    recommended: 0,
    comments: "",
    tags: [],
  },
  {
    title: "Venom: Separation Anxiety Vol 2 3",
    recommended: 1,
    comments: "Set pre-Thunderbolts",
    tags: ["Major role"],
  },
  {
    title: "Iron Man Vol 7 6",
    recommended: 1,
    comments: "",
    tags: ["Major role"],
  },
];

export default data;

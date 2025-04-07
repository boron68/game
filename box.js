// Конфігурація нагород
const starrDropItems = [
    {
        imagePath: "img/gold_coin.png",
        rarity: "common",
        dropChance: 35, // Зменшено шанс для нового common предмета
        displayName: "Золоті монети",
        color: "#FFD700"
    },
    {
        imagePath: "img/gems_icon.png",
        rarity: "rare",
        dropChance: 30,
        displayName: "Гемси",
        color: "#0099ff"
    },
    {
        imagePath: "img/emoji_penny_bunny.png",
        rarity: "epic",
        dropChance: 5,
        displayName: "Епічний Пін: Пенні Банні",
        color: "#c300ff"
    },
    {
        imagePath: "img/classic_box_mega_pin.png",
        rarity: "legendary",
        dropChance: 15,
        displayName: "Мега пін",
        color: "#ff9900"
    },
    {
        imagePath: "img/el_primo_hypercharge_pin.png",
        rarity: "hypercharge",
        dropChance: 10,
        displayName: "Гіперзаряд: Ель Прімо",
        color: "#ff0000"
    },
    {
        imagePath: "img/gale_hypercharge_pin.png",
        rarity: "hypercharge",
        dropChance: 10,
        displayName: "Гіперзаряд: Ґейл",
        color: "#ff0000"
    },
    {
        imagePath: "img/bibi_hypercharge_pin.png",
        rarity: "hypercharge",
        dropChance: 10,
        displayName: "Гіперзаряд: Бібі",
        color: "#ff0000"
    }
];

// Функція для отримання випадкового предмета
function getRandomStarrDrop() {
    const random = Math.random() * 100;
    let cumulativeChance = 0;
    
    // Перевіряємо, чи сума шансів дорівнює 100%
    const totalChance = starrDropItems.reduce((sum, item) => sum + item.dropChance, 0);
    if (totalChance !== 100) {
        console.warn(`Увага: Сума шансів становить ${totalChance}%. Має бути 100%`);
    }
    
    for (const item of starrDropItems) {
        cumulativeChance += item.dropChance;
        if (random <= cumulativeChance) {
            return item;
        }
    }
    
    return starrDropItems[0];
}

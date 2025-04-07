// Файл box.js

// Масив із предметами, їх рідкістю та шансами на випадіння
const items = [
    { name: "gold_coin.png", rarity: "common", chance: 50 }, // 50% шанс
    { name: "gems_icon.png", rarity: "common", chance: 30 }, // 30% шанс
    { name: "emoji_penny_bunny.png", rarity: "rare", chance: 10 }, // 10% шанс
    { name: "classic_box_mega_pin.png", rarity: "epic", chance: 5 }, // 5% шанс
    { name: "el_primo_hypercharge_pin.png", rarity: "hypercharge", chance: 2 }, // 2% шанс
    { name: "gale_hypercharge_pin.png", rarity: "hypercharge", chance: 2 }, // 2% шанс
    { name: "bibi_hypercharge_pin.png", rarity: "hypercharge", chance: 1 } // 1% шанс
];

// Функція для вибору випадкового предмета на основі шансів
function getRandomItem() {
    const totalChance = items.reduce((sum, item) => sum + item.chance, 0);
    const random = Math.random() * totalChance;
    let cumulativeChance = 0;

    for (const item of items) {
        cumulativeChance += item.chance;
        if (random <= cumulativeChance) {
            return item;
        }
    }
}

// Приклад використання
const randomItem = getRandomItem();
console.log(`Випав предмет: ${randomItem.name}, Рідкість: ${randomItem.rarity}`);

// Експорт, якщо потрібно підключити до інших файлів
export { items, getRandomItem };

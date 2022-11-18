export function createRules(rules) {
return rules.map((text) => `<li class="promo-rules__item"><p align="justify">${text}</p></li>`).join("")
}
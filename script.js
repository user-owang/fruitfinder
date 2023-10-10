const input = document.querySelector("#fruit");
const suggestions = document.querySelector(".suggestions ul");

const fruits = [
  "Apple",
  "Apricot",
  "Avocado 🥑",
  "Banana",
  "Bilberry",
  "Blackberry",
  "Blackcurrant",
  "Blueberry",
  "Boysenberry",
  "Currant",
  "Cherry",
  "Coconut",
  "Cranberry",
  "Cucumber",
  "Custard apple",
  "Damson",
  "Date",
  "Dragonfruit",
  "Durian",
  "Elderberry",
  "Feijoa",
  "Fig",
  "Gooseberry",
  "Grape",
  "Raisin",
  "Grapefruit",
  "Guava",
  "Honeyberry",
  "Huckleberry",
  "Jabuticaba",
  "Jackfruit",
  "Jambul",
  "Juniper berry",
  "Kiwifruit",
  "Kumquat",
  "Lemon",
  "Lime",
  "Loquat",
  "Longan",
  "Lychee",
  "Mango",
  "Mangosteen",
  "Marionberry",
  "Melon",
  "Cantaloupe",
  "Honeydew",
  "Watermelon",
  "Miracle fruit",
  "Mulberry",
  "Nectarine",
  "Nance",
  "Olive",
  "Orange",
  "Clementine",
  "Mandarine",
  "Tangerine",
  "Papaya",
  "Passionfruit",
  "Peach",
  "Pear",
  "Persimmon",
  "Plantain",
  "Plum",
  "Pineapple",
  "Pomegranate",
  "Pomelo",
  "Quince",
  "Raspberry",
  "Salmonberry",
  "Rambutan",
  "Redcurrant",
  "Salak",
  "Satsuma",
  "Soursop",
  "Star fruit",
  "Strawberry",
  "Tamarillo",
  "Tamarind",
  "Yuzu",
];

function search(str) {
  return fruits.filter((fruit) => fruit.toLowerCase().includes(str));
}

function searchHandler(e) {
  suggestions.innerHTML = "";
  if (input.value !== "") {
    search(input.value.toLowerCase()).forEach((element) =>
      showSuggestions(element)
    );
    boldSearchTerm(input.value);
  }
}

function showSuggestions(element) {
  let acItem = document.createElement("li");
  acItem.innerText = element;
  suggestions.append(acItem);
}

function boldSearchTerm(term) {
  for (let bullet of document.querySelectorAll("li")) {
    let text = bullet.innerText;
    if (text.toLowerCase().indexOf(term) > 0) {
      bullet.innerHTML = text.replace(term, term.bold());
    } else if (text.toLowerCase().indexOf(term) === 0) {
      bullet.innerHTML = text
        .toLocaleLowerCase()
        .replace(term, capFirst(term).bold());
    }
  }
}

function capFirst(str) {
  return str.replace(str.charAt(0), str.charAt(0).toUpperCase());
}

function useSuggestion(e) {
  if (e.target.parentElement === suggestions) {
    input.value = e.target.innerText;
    searchHandler();
  } else {
    return;
  }
}

input.addEventListener("keyup", searchHandler);
suggestions.addEventListener("click", useSuggestion);

function choice1() {
  document.getElementById("story").innerText = "Ти звертаєшся до Джессі Пінкмана. Варите першу партію у фургоні. Вас ледь не ловить поліція. Що робити далі?";
  updateButtons(
    "Змінити локацію і продовжити",
    "Припинити варіння і сховатися",
    level2MethA,
    level2MethB
  );
}

function choice2() {
  document.getElementById("story").innerText = "Родина шокована, але підтримує. Лікування дороге. Грей Матер пропонує допомогу. Твій вибір?";
  updateButtons(
    "Прийняти допомогу",
    "Відмовитись і шукати гроші сам",
    level2FamilyA,
    level2FamilyB
  );
}

function level2MethA() {
  document.getElementById("story").innerText = "Ти змінюєш місце, починаєш масове виробництво. Починаєш конфлікт із Гусом Фрінгом.";
  updateButtons("Погодитись працювати з ним", "Відмовитись і ризикувати", finalGusYes, finalGusNo);
}

function level2MethB() {
  document.getElementById("story").innerText = "Ти ховаєшся, але Джессі продовжує без тебе. Усе виходить з-під контролю.";
  updateButtons("Повернутись до Джессі", "Залишити все назавжди", finalJesseBack, finalRunAway);
}

function level2FamilyA() {
  document.getElementById("story").innerText = "Ти приймаєш допомогу, проходиш лікування. Але відчуваєш себе приниженим.";
  updateButtons("Подякувати і жити далі", "Почати власний бізнес", finalPeaceful, finalBusiness);
}

function level2FamilyB() {
  document.getElementById("story").innerText = "Ти береш другу роботу в автомийці, втома зростає, відносини з родиною псуються.";
  updateButtons("Звільнитися і ризикнути", "Терпіти і боротися", finalQuitWork, finalBurnOut);
}

function finalGusYes() {
  document.getElementById("story").innerText = "Ти працюєш на Гуса. Все йде гладко... до зради. Тебе підривають разом із ним. Кінець.";
  hideButtons();
}

function finalGusNo() {
  document.getElementById("story").innerText = "Ти знищив Гуса, став головним. Але Майк не згоден з твоїми методами. Він ставить тебе перед вибором. Що робити?";
  updateButtons("Залишити Майка в живих і продовжити", "Вбити Майка, щоб утримати контроль", finalMikeLive, finalMikeKill);
}

function finalMikeLive() {
  document.getElementById("story").innerText = "Майк погоджується працювати з тобою, але тепер є проблема: влада Хенка зростає. Як діяти?";
  updateButtons("Почати війну з Хенком", "Залишити все і тікати", finalWarWithHank, finalRunAway);
}

function finalMikeKill() {
  document.getElementById("story").innerText = "Ти вбиваєш Майка. Але тепер у тебе є нові вороги — поліція. Хенк викриває тебе.";
  updateButtons("Сховатися в іншій країні", "Справжній фінал: здатись поліції", finalEscape, finalSurrender);
}

function finalWarWithHank() {
  document.getElementById("story").innerText = "Війна з Хенком триває. Хімія, зрада і кровопролиття. Це призводить до твоєї поразки. Кінець.";
  hideButtons();
}

function finalEscape() {
  document.getElementById("story").innerText = "Ти тікаєш до Нової Зеландії, залишивши все позаду. Але втікачем ніколи не буваєш насправді. Кінець.";
  hideButtons();
}

function finalSurrender() {
  document.getElementById("story").innerText = "Ти здаєшся поліції. Родина відчуває полегшення. Але ти проводиш решту життя за ґратами. Кінець.";
  hideButtons();
}

function finalGrandFinale() {
  document.getElementById("story").innerText = "Вибір за тобою: стати великим хіміком, або віддати все і жити спокійно?";
  updateButtons("Стати хіміком і контролювати світ", "Залишити бізнес і стати звичайною людиною", finalScientist, finalNormalLife);
}

function finalScientist() {
  document.getElementById("story").innerText = "Ти вирішуєш стати хіміком і залишити світ у своєму контролі. Але ти не можеш контролювати все. Ти втрачаєш себе. Кінець.";
  hideButtons();
}

function finalNormalLife() {
  document.getElementById("story").innerText = "Ти залишаєш все і починаєш нове життя. Твоя історія закінчується спокоєм. Кінець.";
  hideButtons();
}

function finalJesseBack() {
  document.getElementById("story").innerText = "Ти знову з Джессі. Разом створюєте мережу. Але DEA вже близько. Кінець.";
  hideButtons();
}

function finalRunAway() {
  document.getElementById("story").innerText = "Ти починаєш нове життя. Без грошей, без слави, але вільний. Кінець.";
  hideButtons();
}

function finalPeaceful() {
  document.getElementById("story").innerText = "Ти вдячно приймаєш допомогу. Живеш спокійно, виховуєш доньку. Кінець.";
  hideButtons();
}

function finalBusiness() {
  document.getElementById("story").innerText = "Ти відкриваєш хімічну компанію. Досягаєш успіху, чесно. Але не швидко. Кінець.";
  hideButtons();
}

function finalQuitWork() {
  document.getElementById("story").innerText = "Ти звільняєшся і вкладаєш останні гроші в лікування. Випадково виграєш в лотерею. Кінець.";
  hideButtons();
}

function finalBurnOut() {
  document.getElementById("story").innerText = "Ти працюєш до останнього. Хвороба перемагає. Родина тебе пам’ятає як героя. Кінець.";
  hideButtons();
}

function updateButtons(text1, text2, func1, func2) {
  let buttons = document.querySelectorAll(".btn");
  buttons[0].innerText = text1;
  buttons[1].innerText = text2;
  buttons[0].onclick = func1;
  buttons[1].onclick = func2;
}

function hideButtons() {
  let buttons = document.querySelectorAll(".btn");
  buttons.forEach(btn => btn.style.display = "none");
}

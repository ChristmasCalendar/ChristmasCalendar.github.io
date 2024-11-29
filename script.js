// Script for login (index.html)
function checkPassword() {
    const correctPassword = "minälskling"; // Change this to your desired password
    const userInput = document.getElementById("password").value;
    const errorMessage = document.getElementById("error");

    if (userInput === correctPassword) {
        // Redirect to the advent calendar
        window.location.href = "content.html";
    } else {
        errorMessage.style.display = "block";
    }
}

// Script for advent calendar (content.html)
if (window.location.pathname.includes("content.html")) {
    const messages = {
        1: "Ett starkt minne från när vi började plugga tillsammans i Oodi var det du gjorde när vi skulle äta. Vi gick till någon restaurang i citycenter och när maten kom till bordet så hade du redan färdigt satt håret upp och sedan gjorde du en liten happy dance. Du lyfte händerna upp till axelhöjd och gjorde en wiggle :) Jag tyckte det var cute och amusing, du var så hyped med att få matis. I love this memory <3",
        2: "En annan early sak som jag fell in love with var ditt hår och det har varit en reoccuring thing sedan vi började plugga. Vi har talat om dethär tidigare också och det var när du lyfte håret sådär åt sidan när du pluggade. Men det är så mycke mer än bara endast håret åt sidan. Det är hur ditt hår faller ner över dina axlar, det är när du ligger i sängen, det är känslan när jag för mina fingrar genom ditt hår. Det sista förstod jag även bättre när du skaffade förlängningar i sverige. Förlängningarna var sträva och jag kunde inte föra handen genom håret utan att känna fästet. Det känndes inte likadant eller lika bra som förr. I love ditt hår <3",
        3: "Något jag alltid har admireat med dig är din självdisciplin med att plugga påp egen hand! Väldigt få skulle kunna sätta sig ner och plugga i flera timmar i streck och verkligen fokusera på det dom gör. Jag minns att jag tänkt back in the day att inte skulle jag själv heller klara av det... Ditt självdisciplin kommer säkert från en kombination av flera saker och experiences du har som tex med att putta effort consistently när du har tränat eller din eager to learn new things. I love and admire this about you <3",
        4: "Jag är lite stuck med när vi började plugga tillsammans, men det är ju då vi spenderade tid tillsammans för första gången so no wonder att jag har saker jag blev attrakted till. Då vi pluggade kollade jag naturligt på vad du höll på o skriva och samtidigt på dina händer. Dom är lena, dom är fina, dom är händerna jag vill hålla då vi går på gatan. Jag minns när vi testade hur stor skillnad det är på våra händer och satte dem emot varandra. Det är också så skönt då du för dina händer längs med min kropp och på senaste tid när jag har varit utan skjorta så är det extra skönt då du har så varma händer. När du för dom fram och tillbaka på mitt bröst och för dem ner till min mage... Jag bara känner pirrighet när jag tänker på att du för dem ner... I love your hands <3",
        5: "Jag har alltid haft det väldigt lätt och tala med dig. Jag är en ganska reserved person, jag har gamla vänner sedan högstadiet och några nya efter det. Jag kan tala med vem som hellst men det är inte alltid lätt eller intressant. Men det problemet har jag aldrig haft med dig. Det var så enkelt och tala, höpöttää, om vad som hellst. Minns du när vi började använda ordet höpöttää? Jag blir emotional av att tänka på det och back in the days när vi talade med varann <3 Det verkligen är så att vi kan tala om vad som hellst, det blir inte tråkigt, det känns som att den andra alltid lyssnar och bryr sig. Dethär är en så liten men så viktig sak som man kanske inte tänker på. Jag hoppas att vi alltid kan hitta tid till att tala med varandra varje dag, det är verkligen viktigt för mig. I love talking with you <3",
        6: "Day 6: I love you more than Christmas cookies! 🍪",
        7: "Day 7: Being with you is the best Christmas present. 🎄",
        8: "Day 8: My love for you grows brighter every day. ✨",
        9: "Day 9: You’re my favorite holiday tradition. 🎅",
        10: "Day 10: You make my world magical, just like Christmas. 🎇",
        11: "Day 11: You’re the sweetest candy cane in my life. 🍭",
        12: "Day 12: I’m so lucky to have you, my love. 💝",
        13: "Day 13: You are my home, my love, my everything. 🏡",
        14: "Day 14: Every moment with you feels like Christmas morning. 🌅",
        15: "Day 15: You’re my Christmas miracle. 🎅",
        16: "Day 16: Let’s make every day merry and bright together. 🎉",
        17: "Day 17: You have my heart, now and always. 💖",
        18: "Day 18: You’re my winter wonderland. ❄️",
        19: "Day 19: Life is better with you by my side. 🎁",
        20: "Day 20: You make my heart skip like snowflakes falling. ⛄",
        21: "Day 21: My love for you is endless, like the snow. 🌨️",
        22: "Day 22: Thank you for being my everything. 💞",
        23: "Day 23: Being with you makes every day Christmas. 🎄",
        24: "Day 24: Merry Christmas, my love! You are my world. 🌎❤️",
    };

    // Get the current date (month and day)
const today = new Date();

// Get the current day of the month
const currentDay = today.getDate();

// Get the current month (0-indexed, so November is 10)
const currentMonth = today.getMonth();

// Set the year for comparison if needed (but in this case, we're focusing on month and day)
const currentYear = today.getFullYear();

// Lock and unlock the calendar boxes based on the current day
document.querySelectorAll(".box").forEach((box) => {
    const day = parseInt(box.dataset.day, 10); // Get the day from the box data attribute

    // Lock boxes if the current month is not December or if the box is a future day
    //if (currentMonth < 11 || (currentMonth === 11 && day > currentDay)) {
    //    box.classList.add("locked");
    //}

    // Add event listener for unlocked boxes
    box.addEventListener("click", () => {
        if (!box.classList.contains("locked")) {
            const messageText = messages[day]; // Fetch the message for the clicked day
            document.getElementById("messageText").textContent = messageText;
            document.getElementById("message").style.display = "block";
        }
    });
});


    document.getElementById("closeMessage").addEventListener("click", () => {
        document.getElementById("message").style.display = "none";
    });
}

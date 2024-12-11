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
        2: "En annan early sak som jag fell in love with var ditt hår och det har varit en reoccuring thing sedan vi började plugga. Vi har talat om dethär tidigare också och det var när du lyfte håret sådär åt sidan när du pluggade. Men det är så mycke mer än bara endast håret åt sidan. Det är hur ditt hår faller ner över dina axlar, det är när du ligger i sängen, det är känslan när jag för mina fingrar genom ditt hår. Det sista av domhär exemplen förstod jag även bättre när du skaffade förlängningar i sverige. Förlängningarna var sträva och jag kunde inte föra handen genom håret utan att känna fästet. Det känndes inte likadant eller lika bra som förr. I love ditt hår <3",
        3: "Något jag alltid har admireat med dig är din självdisciplin med att plugga på egen hand! Väldigt få skulle kunna sätta sig ner och plugga i flera timmar i streck och verkligen fokusera på det dom gör. Redan då vi började plugga tillsammans i Oodi tänkte jag att jag kunde inte själv orka lika bra som du, vilket motiverade mig att studera mera. Ditt självdisciplin kommer säkert från en kombination av flera saker och experiences du har som tex med att consistently lägga effort när du har tränat eller din eager to learn new things. I love and admire this about you <3",
        4: "Jag är lite stuck med när vi började plugga tillsammans, men det är ju då vi spenderade tid tillsammans för första gången so no wonder att jag har saker jag blev attrakted till. Då vi pluggade kollade jag naturligt på vad du höll på o skriva och samtidigt på dina händer. Dom är lena, dom är fina, dom är händerna jag vill hålla då vi går på gatan. Jag minns när vi testade hur stor skillnad det är på våra händer och satte dem emot varandra. Det är också så skönt då du för dina händer längs med min kropp och på senaste tid när jag har varit utan skjorta så är det extra skönt då du har så varma händer. När du för dom fram och tillbaka på mitt bröst och för dem ner till min mage... Jag bara känner pirrighet när jag tänker på att du för dem ner... I love your hands <3",
        5: "Jag har alltid haft det väldigt lätt och tala med dig. Jag är en ganska reserved person, jag har gamla vänner sedan högstadiet och några nya efter det. Jag kan tala med vem som hellst men det är inte alltid lätt eller intressant. Men det problemet har jag aldrig haft med dig. Det var så enkelt och tala, höpöttää, om vad som hellst. Minns du när vi började använda ordet höpöttää? Jag blir emotional av att tänka på det och back in the days när vi talade med varann <3 Det verkligen är så att vi kan tala om vad som hellst, det blir inte tråkigt, det känns som att den andra alltid lyssnar och bryr sig. Dethär är en så liten men så viktig sak som man kanske inte tänker på. Jag hoppas att vi alltid kan hitta tid till att tala med varandra varje dag, det är verkligen viktigt för mig. I love talking with you <3",
        6: "Fysisk attraction kan vara svårt och lägga fingret på, det är enskilda saker som tex hår och händer men det är också mycke mer än det. Man kan vara attracted till enskilda saker men in the end räcker det int med fint hår eller vackra händer, det är en helhet. Allting från topp till tå, allting. Därför skriver jag nu att jag älskar din kropp, din hela kropp. Jag älskar och ha den nära mig, känna dens värme. Jag älskar och känna den, föra min hand längs den, dra den närmare mig. Jag älskar och tänka på den, se på den. Jag älskar den just så som den är. It is as simple as that. I love your body <3",
        7: "Någonting jag har alltid tyckt att har varit super cool är att du har haft en egen business. Inte bara att du sminkat kompisar, men du har faktiskt haft kunder som BETALADE för att du sminka dem. That is insanely cool!! Jag tror det var när du flyttade till drumsö så flyttade vi dina smink produkter o du bara sade, 'yeah ja fick dendär' och 'joo nån gav den ti mig'. Alltså du fick dem gratis när du sminkka!? Influencer hello!? No but seriously, det är inte många som förverkligar sina ambitions om eget företag men du gjorde det. Det är väldigt modigt. I love att du har pursue din egen business <3",
        8: "En memory från våra early days e en massage, not any massage, THE massage. Okej, lite background. Då i början var ju pretty much allting nytt till mig och en stor grej var intimacy o fysisk intimacy. Obviously hade jag aldrig fått en massage eller något sånt. Som jag skrev ett par dagar sen så är det såå skönt när du för dina händer längs min kropp. This is it AND att man gör en favour till den andra. De e som dubbel love things. Jag var ju och är lite shy ännu också och fråga efter massage etc. Men ja minns denhär ena massagen väldigt bra. Ja minns int själva orsaken, troligen ont i ryggen efter sovit. Men de som ja minns solklart är hur jag lade mig ner och du kom och sitta på min rygg och du var NAKEN!!! Vanligen borde ju en massage vara någonting relaxing och skönt. Well, jag kunde nog int vara relaxed, men de va definitivt skönt. Jag tänkte på det i flera dagar och tänker på det då och då ännu 1.5 år efteråt. I love these memories from our early days <3",
        9: "En sak som jag aldrig kan missa är hur vackra dina ögon och ögonfransar är. Ja tror det var senast idag jag gav dig en komplimang om hur fina dina ögonfransar var. Du svarade att du har ju barely någå sminkki på, endast foundation och något annat. Men det är ju int bara sminket, jo det också, din mascara är alltid ON POINT. Men det är också hur dina ögon pop när du har sminkat, hur långa och fina dina ögonfransar är. Jag älskar glimtet du har i ögonen då du berättar om något du är väldigt intresserad eller ambitious about. Jag skulle kunna se dig i ögonen hela dagen. I love your eyes <3",
        10: "Jag älskar och cuddla och bara mysa tillsammans i sängen, soffan, i mean vart som hellst. De finns många bra och sköna positioner men en "move" är definitivt up there, vilke e när du lägger ditt ben över mig. It is soooo nice när du är i min famn och sedan sätter ditt en ben över mig. Jag vet int hur ja ska beskriva känslan, man är som närmare varann, de blir mer tryggt, de blir mer exciting. It is the best. I love när du sätter benet över mig <3",
        11: "En HUGE green flag är hur bra du e på att sminkka. Bra är nog en understatement, du är professional (literally)! Du är alltid så fin när du har fixat dig för våra dates. What else can I want than a super super gorgeous date? I love how good you are at doing makeup <3",
        12: "Nånting du har tyckt att jag är attractive för är mina läppar och jag kan säga att känslan är mutual. Jag catchar mig själv och blicka mellan dina ögon och läppar alltid nu och då (hela tiden). Jag älskar de mjuka pussisarna vi ger varann, hejdå pusuna, pusuna när vi träffas, godnatt pusuna, alla pusuna. Oftast blir jag också excited och vill ha mer av dina pussisar... Du säger att dina läppar är små men jag tycker dom är perfekta. De är läpparna jag vill kyssa varje gång. I love your lips and pusun <3",
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
    if (currentMonth < 11 || (currentMonth === 11 && day > currentDay)) {
        box.classList.add("locked");
    }

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

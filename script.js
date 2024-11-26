// Script for login (index.html)
function checkPassword() {
    const correctPassword = "mypassword123"; // Change this to your desired password
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
        1: "Day 1: You light up my life like Christmas lights. 🌟",
        2: "Day 2: I can't wait to spend the holidays with you. ❤️",
        3: "Day 3: Every day with you feels like a gift. 🎁",
        4: "Day 4: You warm my heart like a cup of hot cocoa. ☕",
        5: "Day 5: You’re the star on my Christmas tree. ⭐",
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

    const today = new Date().getDate();

    document.querySelectorAll(".box").forEach((box) => {
        const day = parseInt(box.dataset.day);

        if (day > today) {
            box.classList.add("locked");
        }

        box.addEventListener("click", () => {
            if (!box.classList.contains("locked")) {
                const messageText = messages[day];
                document.getElementById("messageText").textContent = messageText;
                document.getElementById("message").style.display = "block";
            }
        });
    });

    document.getElementById("closeMessage").addEventListener("click", () => {
        document.getElementById("message").style.display = "none";
    });
}

/* =====================================================
   Page Navigation
===================================================== */

const homePage = document.getElementById("homePage");
const questionPage = document.getElementById("questionPage");
const surprisePage = document.getElementById("surprisePage");
const privatePage = document.getElementById("privatePage");
const yesPage = document.getElementById("yesPage");
const letterPage = document.getElementById("letterPage");
const promisePage = document.getElementById("promisePage");
const reasonsPage = document.getElementById("reasonsPage");
const momentsPage = document.getElementById("momentsPage");
const wishPage = document.getElementById("wishPage");
const letterHearts = document.getElementById("letterHearts");
const yesCard = yesPage.querySelector(".yes-card");

const surpriseBtn = document.getElementById("surpriseBtn");
const dateBtn = document.getElementById("dateBtn");
const letterBtn = document.getElementById("letterBtn");
const promiseBtn = document.getElementById("promiseBtn");
const reasonsBtn = document.getElementById("reasonsBtn");
const momentsBtn = document.getElementById("momentsBtn");
const wishBtn = document.getElementById("wishBtn");
const archiveBtn = document.getElementById("archiveBtn");
const archiveMenu = document.getElementById("archiveMenu");
const gameBtn = document.getElementById("gameBtn");
const gamePage = document.getElementById("gamePage");
const memoryGrid = document.getElementById("memoryGrid");
const gameMoves = document.getElementById("gameMoves");
const gamePairs = document.getElementById("gamePairs");
const gameMessage = document.getElementById("gameMessage");
const gameReset = document.getElementById("gameReset");
const backFromGame = document.getElementById("backFromGame");
const mondayBtn = document.getElementById("mondayBtn");
const mondayPage = document.getElementById("mondayPage");
const mondayStops = document.querySelectorAll(".route-stop");
const mondayMessage = document.getElementById("mondayMessage");
const backFromMonday = document.getElementById("backFromMonday");
const fridayBtn = document.getElementById("fridayBtn");
const fridayPage = document.getElementById("fridayPage");
const fridayChoices = document.querySelectorAll(".friday-choice");
const fridayMessage = document.getElementById("fridayMessage");
const backFromFriday = document.getElementById("backFromFriday");
const makeWishBtn = document.getElementById("makeWishBtn");
const wishText = document.getElementById("wishText");
const repairChoices = document.querySelectorAll(".repair-choice");
const repairAction = document.getElementById("repairAction");
const repairMessage = document.getElementById("repairMessage");
const surpriseLocks = document.querySelectorAll(".surprise-lock");
const surpriseMessage = document.getElementById("surpriseMessage");
const surpriseProgress = document.getElementById("surpriseProgress");
const surpriseReveal = document.getElementById("surpriseReveal");
const privateBtn = document.getElementById("privateBtn");
const privateGate = document.getElementById("privateGate");
const privateRoom = document.getElementById("privateRoom");
const passwordForm = document.getElementById("passwordForm");
const privatePassword = document.getElementById("privatePassword");
const passwordMessage = document.getElementById("passwordMessage");
const secretDoors = document.querySelectorAll(".secret-door");
const secretMessage = document.getElementById("secretMessage");
const secretFinal = document.getElementById("secretFinal");
const secretReplay = document.getElementById("secretReplay");
const backFromPrivate = document.getElementById("backFromPrivate");
const backFromPrivateRoom = document.getElementById("backFromPrivateRoom");


const backFromQuestion =
    document.getElementById("backFromQuestion");

const backFromSurprise =
    document.getElementById("backFromSurprise");

const backFromLetter =
    document.getElementById("backFromLetter");

const backFromPromise =
    document.getElementById("backFromPromise");

const backFromReasons =
    document.getElementById("backFromReasons");

const backFromMoments =
    document.getElementById("backFromMoments");

const backFromWish =
    document.getElementById("backFromWish");

const backFromYes =
    document.getElementById("backFromYes");

function showPage(page) {

    if (!page) {
        return;
    }

    page.scrollTop = 0;

    document
        .querySelectorAll(".page")
        .forEach(p => p.classList.remove("active"));

    page.classList.add("active");
}


/* =====================================================
   Home → Surprise
===================================================== */

surpriseBtn.addEventListener("click", () => {

    showPage(surprisePage);

    surpriseLocks.forEach(lock => lock.classList.remove("opened"));
    surpriseMessage.textContent = "هنوز هیچ مهری باز نشده...";
    surpriseProgress.textContent = "۰ از ۳ مهر باز شده";
    surpriseReveal.hidden = true;
});


surpriseLocks.forEach(lock => {

    lock.addEventListener("click", () => {

        lock.classList.add("opened");

        const openedCount = document.querySelectorAll(
            ".surprise-lock.opened"
        ).length;

        surpriseProgress.textContent = `${openedCount} از ۳ مهر باز شده`;
        surpriseMessage.textContent = openedCount === surpriseLocks.length
            ? "هر سه مهر باز شد؛ این یکی برای توئه ❤️"
            : `${lock.dataset.message} (${openedCount} از ۳ مهر باز شد)`;

        surpriseReveal.hidden = openedCount !== surpriseLocks.length;
    });
});


/* =====================================================
   Home → Question
===================================================== */

dateBtn.addEventListener("click", () => {

    showPage(questionPage);

    repairChoices.forEach(choice => choice.classList.remove("selected"));
    repairAction.disabled = true;
    repairAction.textContent = "اولین قدم آشتی ✨";
    repairMessage.textContent = "هنوز هیچ تکه‌ای انتخاب نشده...";
});


/* =====================================================
   Private Room
===================================================== */

const privatePasscode = "010584";

function resetPrivateRoom() {

    privateGate.hidden = false;
    privateRoom.hidden = true;
    privatePassword.value = "";
    passwordMessage.textContent = "شش رقم مخصوص خودت رو وارد کن.";
    passwordMessage.className = "password-message";
    secretDoors.forEach(door => door.classList.remove("opened"));
    secretMessage.textContent = "یکی از درها رو باز کن؛ این اتاق با عجله قشنگ نمی‌شه.";
    secretFinal.hidden = true;
}


privateBtn.addEventListener("click", () => {

    resetPrivateRoom();
    showPage(privatePage);
    privatePage.scrollTop = 0;
    requestAnimationFrame(() => privatePassword.focus());
});


passwordForm.addEventListener("submit", event => {

    event.preventDefault();

    if (privatePassword.value !== privatePasscode) {
        passwordMessage.textContent = "این رمز درست نیست؛ دوباره با حوصله امتحان کن.";
        passwordMessage.className = "password-message is-error";
        privatePassword.select();
        return;
    }

    privateGate.hidden = true;
    privateRoom.hidden = false;
    passwordMessage.className = "password-message is-success";
});


secretDoors.forEach(door => {

    door.addEventListener("click", () => {

        door.classList.add("opened");
        const openedCount = document.querySelectorAll(".secret-door.opened").length;
        secretMessage.textContent = `${door.dataset.secret} (${openedCount} از ۳ در باز شد)`;
        secretFinal.hidden = openedCount !== secretDoors.length;
    });
});


secretReplay.addEventListener("click", () => {

    secretDoors.forEach(door => door.classList.remove("opened"));
    secretMessage.textContent = "یکی از درها رو باز کن؛ این اتاق با عجله قشنگ نمی‌شه.";
    secretFinal.hidden = true;
});


archiveBtn.addEventListener("click", () => {

    const isOpen = !archiveMenu.hidden;

    archiveMenu.hidden = isOpen;
    archiveBtn.setAttribute("aria-expanded", String(!isOpen));
    archiveBtn.textContent = isOpen
        ? "📚 بخش‌های قبلی"
        : "✕ بستن بخش‌های قبلی";
});


letterBtn.addEventListener("click", () => {

    showPage(letterPage);
    letterPage.classList.remove("letter-active");
    letterHearts.replaceChildren();

    requestAnimationFrame(() => {
        createLetterHearts();
        letterPage.classList.add("letter-active");
    });
});


promiseBtn.addEventListener("click", () => {

    showPage(promisePage);
});


reasonsBtn.addEventListener("click", () => {

    showPage(reasonsPage);
    reasonsPage.classList.remove("reasons-active");

    requestAnimationFrame(() => {
        reasonsPage.classList.add("reasons-active");
    });
});


momentsBtn.addEventListener("click", () => {

    showPage(momentsPage);
    momentsPage.classList.remove("moments-active");

    requestAnimationFrame(() => {
        momentsPage.classList.add("moments-active");
    });
});


wishBtn.addEventListener("click", () => {

    showPage(wishPage);
    wishPage.classList.remove("wish-active");
    wishText.classList.remove("wish-visible");

    requestAnimationFrame(() => {
        wishPage.classList.add("wish-active");
    });
});


const wishes = [
    "آرزو می‌کنم همیشه کنار هم راحت بخندیم ❤️",
    "آرزو می‌کنم هر بار دیدنت، از بار قبل قشنگ‌تر باشه.",
    "آرزو می‌کنم قصه‌ی ما پر از لحظه‌های ساده و دوست‌داشتنی بشه."
];

let wishIndex = 0;


makeWishBtn.addEventListener("click", () => {

    wishText.classList.remove("wish-visible");
    wishIndex = (wishIndex + 1) % wishes.length;

    setTimeout(() => {
        wishText.textContent = wishes[wishIndex];
        wishText.classList.add("wish-visible");
    }, 180);
});


const romanticPairs = [
    { symbol: "♡", text: "لبخند" },
    { symbol: "✦", text: "آرزو" },
    { symbol: "♥", text: "تا ابد" }
];

let firstCard = null;
let secondCard = null;
let gameLocked = false;
let moves = 0;
let matchedPairs = 0;


function shuffleCards(cards) {

    return cards.sort(() => Math.random() - 0.5);
}


function createGameBoard() {

    const cards = shuffleCards(
        romanticPairs.flatMap(pair => [pair, pair])
    );

    firstCard = null;
    secondCard = null;
    gameLocked = false;
    moves = 0;
    matchedPairs = 0;
    gameMoves.textContent = "حرکت‌ها: ۰";
    gamePairs.textContent = "جفت‌ها: ۰ از ۳";
    gameMessage.textContent = "دو کارت رو انتخاب کن ✨";
    memoryGrid.replaceChildren();

    cards.forEach((card, index) => {

        const button = document.createElement("button");

        button.className = "memory-card";
        button.type = "button";
        button.dataset.pair = card.text;
        button.innerHTML = `
            <span class="memory-card-inner">
                <span class="memory-card-front">✦</span>
                <span class="memory-card-back">
                    <strong>${card.symbol}</strong>
                    <small>${card.text}</small>
                </span>
            </span>
        `;
        button.setAttribute("aria-label", `کارت شماره ${index + 1}`);
        button.addEventListener("click", () => revealCard(button));
        memoryGrid.appendChild(button);
    });
}


function revealCard(card) {

    if (
        gameLocked ||
        card.classList.contains("flipped") ||
        card.classList.contains("matched")
    ) {
        return;
    }

    card.classList.add("flipped");

    if (!firstCard) {
        firstCard = card;
        return;
    }

    secondCard = card;
    moves++;
    gameMoves.textContent = `حرکت‌ها: ${moves}`;

    if (firstCard.dataset.pair === secondCard.dataset.pair) {
        firstCard.classList.add("matched");
        secondCard.classList.add("matched");
        matchedPairs++;
        gamePairs.textContent = `جفت‌ها: ${matchedPairs} از ۳`;
        gameMessage.textContent = matchedPairs === 3
            ? "همه‌ی جفت‌ها پیدا شد؛ قلبت برنده شد ❤️"
            : "این جفت مال قصه‌ی ما بود ✨";
        firstCard = null;
        secondCard = null;
        return;
    }

    gameLocked = true;
    gameMessage.textContent = "این دوتا هنوز جفت نشدن؛ دوباره امتحان کن :)";

    setTimeout(() => {
        firstCard.classList.remove("flipped");
        secondCard.classList.remove("flipped");
        firstCard = null;
        secondCard = null;
        gameLocked = false;
    }, 750);
}


gameBtn.addEventListener("click", () => {

    showPage(gamePage);
    createGameBoard();
});


gameReset.addEventListener("click", createGameBoard);


backFromGame.addEventListener("click", () => {

    showPage(homePage);
});


mondayBtn.addEventListener("click", () => {

    showPage(mondayPage);
    mondayStops.forEach(stop => stop.classList.remove("visited"));
    mondayMessage.textContent = "هر مرحله رو لمس کن تا خاطره باز بشه.";
});


mondayStops.forEach(stop => {

    stop.addEventListener("click", () => {

        stop.classList.add("visited");
        mondayMessage.textContent = stop.dataset.memory;
        mondayMessage.scrollIntoView({ block: "nearest", behavior: "smooth" });
    });
});


fridayBtn.addEventListener("click", () => {

    showPage(fridayPage);
    fridayChoices.forEach(choice => choice.classList.remove("chosen"));
    fridayMessage.textContent = "یکی رو انتخاب کن تا پیام جمعه باز بشه ✨";
});


fridayChoices.forEach(choice => {

    choice.addEventListener("click", () => {

        fridayChoices.forEach(item => item.classList.remove("chosen"));
        choice.classList.add("chosen");
        fridayMessage.textContent = choice.dataset.memory;
        fridayMessage.scrollIntoView({ block: "nearest", behavior: "smooth" });
    });
});


backFromMonday.addEventListener("click", () => {

    showPage(homePage);
});


backFromFriday.addEventListener("click", () => {

    showPage(homePage);
});


repairChoices.forEach(choice => {

    choice.addEventListener("click", () => {

        choice.classList.toggle("selected");

        const selectedCount = document.querySelectorAll(
            ".repair-choice.selected"
        ).length;

        repairAction.disabled = selectedCount === 0;
        repairAction.textContent = selectedCount === repairChoices.length
            ? "آشتی کامل شد، بزن بریم ❤️"
            : `${selectedCount} قدم از ۳ قدم آماده‌ست ✨`;

        repairMessage.textContent = selectedCount === 0
            ? "هنوز هیچ تکه‌ای انتخاب نشده..."
            : `✓ ${choice.dataset.repair}`;
    });
});


repairAction.addEventListener("click", () => {

    if (repairAction.disabled) {
        return;
    }

    showPage(yesPage);

    yesCard.classList.remove("revealed");

    requestAnimationFrame(() => {
        yesCard.classList.add("revealed");
    });

    createHeartExplosion();
});


backFromQuestion.addEventListener("click", () => {

    showPage(homePage);
});


backFromSurprise.addEventListener("click", () => {

    showPage(homePage);
});


backFromPrivate.addEventListener("click", () => {

    showPage(homePage);
});


backFromPrivateRoom.addEventListener("click", () => {

    showPage(homePage);
});


backFromLetter.addEventListener("click", () => {

    showPage(homePage);
    letterPage.classList.remove("letter-active");
    letterHearts.replaceChildren();
});


backFromReasons.addEventListener("click", () => {

    showPage(homePage);
    reasonsPage.classList.remove("reasons-active");
});


backFromMoments.addEventListener("click", () => {

    showPage(homePage);
    momentsPage.classList.remove("moments-active");
});


backFromWish.addEventListener("click", () => {

    showPage(homePage);
    wishPage.classList.remove("wish-active");
});


backFromYes.addEventListener("click", () => {

    showPage(homePage);
    yesCard.classList.remove("revealed");
});


function createLetterHearts() {

    const heartCount = 10;

    for (let index = 0; index < heartCount; index++) {

        const heart = document.createElement("span");

        heart.className = "letter-heart";
        heart.textContent = Math.random() > 0.25 ? "♥" : "♡";

        heart.style.setProperty("--heart-x", `${Math.random() * 76 - 38}vw`);
        heart.style.setProperty("--heart-size", `${22 + Math.random() * 27}px`);
        heart.style.setProperty("--heart-delay", `${2.4 + Math.random() * 1.8}s`);
        heart.style.setProperty("--heart-duration", `${5.8 + Math.random() * 2.8}s`);
        heart.style.setProperty("--heart-drift-a", `${-34 + Math.random() * 20}px`);
        heart.style.setProperty("--heart-drift-b", `${8 + Math.random() * 45}px`);
        heart.style.setProperty("--heart-drift-c", `${-20 + Math.random() * 40}px`);

        letterHearts.appendChild(heart);
    }
}

backFromPromise.addEventListener("click", () => {

    showPage(homePage);
});


/* =====================================================
   HEART CANVAS
===================================================== */

const canvas =
    document.getElementById("heartCanvas");

const ctx =
    canvas.getContext("2d");

let animationFrame = null;
let heartbeatFrame = null;
let heartAnimationRunning = false;


/*
   تنظیم اندازه Canvas
*/

function resizeCanvas() {

    const rect =
        canvas.getBoundingClientRect();

    const dpr =
        window.devicePixelRatio || 1;

    canvas.width =
        rect.width * dpr;

    canvas.height =
        rect.height * dpr;

    ctx.setTransform(
        dpr,
        0,
        0,
        dpr,
        0,
        0
    );
}

window.addEventListener(
    "resize",
    resizeCanvas
);


/* =====================================================
   Heart Formula
===================================================== */

function heartX(t) {

    return 16 * Math.pow(
        Math.sin(t),
        3
    );
}


function heartY(t) {

    return (
        13 * Math.cos(t)
        - 5 * Math.cos(2 * t)
        - 2 * Math.cos(3 * t)
        - Math.cos(4 * t)
    );
}


/* =====================================================
   Gradient Color
===================================================== */

function interpolateColor(
    outer,
    inner,
    amount
) {

    const r =
        outer[0] +
        (inner[0] - outer[0]) *
        amount;

    const g =
        outer[1] +
        (inner[1] - outer[1]) *
        amount;

    const b =
        outer[2] +
        (inner[2] - outer[2]) *
        amount;

    return `rgb(${r}, ${g}, ${b})`;
}


/* =====================================================
   Heart Animation
===================================================== */

function startHeartAnimation() {

    resizeCanvas();

    cancelAnimationFrame(animationFrame);
    cancelAnimationFrame(heartbeatFrame);

    heartAnimationRunning = true;

    const rect =
        canvas.getBoundingClientRect();

    const width = rect.width;
    const height = rect.height;

    const centerX =
        width / 2;

    const centerY =
        height / 2;

    /*
       Scale مناسب برای موبایل و دسکتاپ
    */

    const scale =
        Math.min(width, height) / 38;


    /*
       رنگ‌ها شبیه نسخه Python
    */

    const outerColor = [
        204,
        0,
        77
    ];

    const innerColor = [
        255,
        204,
        230
    ];


    /*
       تعداد نقاط
       کمتر از Python است تا
       روی موبایل سریع‌تر اجرا شود.
    */

    const totalPoints = 200;


    /*
       سرعت رسم قلب

       اگر خواستی سریع‌تر شود:
       0.12

       اگر خواستی آرام‌تر شود:
       0.06
    */

    let progress = 0;

    const speed = 2.4;
    let drawnPoints = 0;


    function draw() {

        if (!heartAnimationRunning) {
            return;
        }

        /*
           تعداد نقاطی که تا الان رسم شده
        */

        const pointsToDraw =
            Math.floor(progress);


        /*
           Glow بسیار ظریف
        */

        ctx.shadowBlur = 8;
        ctx.shadowColor = "rgba(255, 30, 100, 0.38)";

        for (let i = drawnPoints; i < pointsToDraw; i++) {

            const angle =
                i *
                (2 * Math.PI) /
                totalPoints;


            /*
               نقطه بیرونی
            */

            const xOut =
                heartX(angle) *
                scale *
                1.0;

            const yOut =
                heartY(angle) *
                scale *
                1.0;


            drawHeartPoint(
                ctx,
                centerX,
                centerY,
                scale,
                angle,
                outerColor,
                innerColor
            );
        }

        drawnPoints = pointsToDraw;


        ctx.shadowBlur = 0;


        /*
           پیشرفت انیمیشن
        */

        progress += speed;


        if (progress >= totalPoints) {

            progress = totalPoints;

            heartAnimationRunning = false;

            showLoveText();

            heartbeatCanvas(
                centerX,
                centerY,
                scale,
                outerColor,
                innerColor
            );

            return;
        }


        animationFrame =
            requestAnimationFrame(draw);
    }


    draw();
}


/* =====================================================
   Stop Heart
===================================================== */

function stopHeartAnimation() {

    heartAnimationRunning = false;

    cancelAnimationFrame(animationFrame);

    ctx.clearRect(
        0,
        0,
        canvas.width,
        canvas.height
    );

    cancelAnimationFrame(heartbeatFrame);

    document
        .getElementById("loveText")
        .classList.remove("visible");
}


/* =====================================================
   Love Text
===================================================== */

function showLoveText() {

    setTimeout(() => {

        document
            .getElementById("loveText")
            .classList.add("visible");

    }, 400);
}


/* =====================================================
   Heartbeat
===================================================== */

function heartbeatCanvas(
    centerX,
    centerY,
    scale,
    outerColor,
    innerColor
) {

    let beat = 0;

    const duration = 900;

    const start =
        performance.now();


    function animateBeat(now) {

        const elapsed =
            now - start;

        const progress =
            Math.min(
                elapsed / duration,
                1
            );


        /*
           دو ضربان کوچک
        */

        const pulse =
            Math.sin(
                progress * Math.PI * 4
            ) * 0.045;


        const scaleMultiplier =
            1 + pulse;


        drawCompleteHeart(
            centerX,
            centerY,
            scale *
                scaleMultiplier,
            outerColor,
            innerColor
        );


        if (progress < 1) {

            heartbeatFrame = requestAnimationFrame(animateBeat);

        } else {

            drawCompleteHeart(
                centerX,
                centerY,
                scale,
                outerColor,
                innerColor
            );
        }
    }


    requestAnimationFrame(
        animateBeat
    );
}


/* =====================================================
   Complete Heart
===================================================== */

function drawCompleteHeart(
    centerX,
    centerY,
    scale,
    outerColor,
    innerColor
) {

    const totalPoints = 200;

    ctx.clearRect(
        0,
        0,
        canvas.clientWidth,
        canvas.clientHeight
    );


    ctx.shadowBlur = 12;

    ctx.shadowColor =
        "rgba(255, 30, 100, 0.45)";


    for (
        let i = 0;
        i < totalPoints;
        i++
    ) {

        const angle =
            i *
            (2 * Math.PI) /
            totalPoints;


        const xOut =
            heartX(angle) *
            scale;

        const yOut =
            heartY(angle) *
            scale;


        const xIn =
            heartX(angle) *
            scale *
            0.28;

        const yIn =
            heartY(angle) *
            scale *
            0.28;


        const steps = 16;


        for (
            let f = 0;
            f < steps;
            f++
        ) {

            const f1 =
                f / steps;

            const f2 =
                (f + 1) / steps;


            const x1 =
                centerX +
                xOut +
                f1 *
                (xIn - xOut);

            const y1 =
                centerY -
                yOut -
                f1 *
                (yIn - yOut);


            const x2 =
                centerX +
                xOut +
                f2 *
                (xIn - xOut);

            const y2 =
                centerY -
                yOut -
                f2 *
                (yIn - yOut);


            const color =
                interpolateColor(
                    outerColor,
                    innerColor,
                    f1
                );


            ctx.beginPath();

            ctx.moveTo(x1, y1);

            ctx.lineTo(x2, y2);

            ctx.strokeStyle = color;

            ctx.lineWidth =
                2.1 -
                1.5 * f1;

            ctx.lineCap = "round";

            ctx.stroke();
        }
    }


    ctx.shadowBlur = 0;
}


function drawHeartPoint(
    drawingContext,
    centerX,
    centerY,
    scale,
    angle,
    outerColor,
    innerColor
) {

    const xOut = heartX(angle) * scale;
    const yOut = heartY(angle) * scale;
    const xIn = xOut * 0.28;
    const yIn = yOut * 0.28;
    const steps = 16;

    for (let f = 0; f < steps; f++) {

        const f1 = f / steps;
        const f2 = (f + 1) / steps;

        drawingContext.beginPath();
        drawingContext.moveTo(
            centerX + xOut + f1 * (xIn - xOut),
            centerY - yOut - f1 * (yIn - yOut)
        );
        drawingContext.lineTo(
            centerX + xOut + f2 * (xIn - xOut),
            centerY - yOut - f2 * (yIn - yOut)
        );
        drawingContext.strokeStyle = interpolateColor(
            outerColor,
            innerColor,
            f1
        );
        drawingContext.lineWidth = 2.1 - 1.5 * f1;
        drawingContext.lineCap = "round";
        drawingContext.stroke();
    }
}


/* =====================================================
   Heart Explosion
===================================================== */

function createHeartExplosion() {

    for (let i = 0; i < 18; i++) {

        const heart =
            document.createElement("div");

        heart.textContent =
            Math.random() > 0.5
                ? "❤️"
                : "♡";

        heart.style.position =
            "fixed";

        heart.style.left =
            "50%";

        heart.style.top =
            "50%";

        heart.style.fontSize =
            `${14 + Math.random() * 20}px`;

        heart.style.pointerEvents =
            "none";

        heart.style.zIndex =
            "9999";

        heart.style.transition =
            "all 1.2s ease-out";

        document.body.appendChild(
            heart
        );


        const angle =
            Math.random() *
            Math.PI *
            2;

        const distance =
            100 +
            Math.random() *
            250;


        requestAnimationFrame(() => {

            heart.style.transform =
                `translate(
                    ${Math.cos(angle) * distance}px,
                    ${Math.sin(angle) * distance}px
                ) scale(0.5)`;

            heart.style.opacity = "0";
        });


        setTimeout(() => {

            heart.remove();

        }, 1300);
    }
}


/* =====================================================
   Initial
===================================================== */

resizeCanvas();
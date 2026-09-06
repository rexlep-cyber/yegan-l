/* =====================================================
   Page Navigation
===================================================== */

const homePage = document.getElementById("homePage");
const questionPage = document.getElementById("questionPage");
const surprisePage = document.getElementById("surprisePage");
const yesPage = document.getElementById("yesPage");
const letterPage = document.getElementById("letterPage");
const promisePage = document.getElementById("promisePage");
const reasonsPage = document.getElementById("reasonsPage");
const momentsPage = document.getElementById("momentsPage");
const letterHearts = document.getElementById("letterHearts");
const yesCard = yesPage.querySelector(".yes-card");

const surpriseBtn = document.getElementById("surpriseBtn");
const dateBtn = document.getElementById("dateBtn");
const letterBtn = document.getElementById("letterBtn");
const promiseBtn = document.getElementById("promiseBtn");
const reasonsBtn = document.getElementById("reasonsBtn");
const momentsBtn = document.getElementById("momentsBtn");

const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");

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

const backFromYes =
    document.getElementById("backFromYes");

const noMessage =
    document.getElementById("noMessage");


function showPage(page) {

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

    startHeartAnimation();
});


/* =====================================================
   Home → Question
===================================================== */

dateBtn.addEventListener("click", () => {

    showPage(questionPage);

    resetNoButton();
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


/* =====================================================
   Back
===================================================== */

backFromQuestion.addEventListener("click", () => {

    showPage(homePage);
});


backFromSurprise.addEventListener("click", () => {

    showPage(homePage);

    stopHeartAnimation();
});


backFromLetter.addEventListener("click", () => {

    showPage(homePage);

    letterPage.classList.remove("letter-active");
    letterHearts.replaceChildren();
});


backFromYes.addEventListener("click", () => {

    showPage(homePage);

    yesCard.classList.remove("revealed");
});


backFromReasons.addEventListener("click", () => {

    showPage(homePage);

    reasonsPage.classList.remove("reasons-active");
});


backFromMoments.addEventListener("click", () => {

    showPage(homePage);

    momentsPage.classList.remove("moments-active");
});


function createLetterHearts() {

    const heartCount = 10;

    for (let index = 0; index < heartCount; index++) {

        const heart = document.createElement("span");

        heart.className = "letter-heart";
        heart.textContent = Math.random() > 0.25 ? "♥" : "♡";

        heart.style.setProperty(
            "--heart-x",
            `${Math.random() * 76 - 38}vw`
        );

        heart.style.setProperty(
            "--heart-size",
            `${22 + Math.random() * 27}px`
        );

        heart.style.setProperty(
            "--heart-delay",
            `${2.4 + Math.random() * 1.8}s`
        );

        heart.style.setProperty(
            "--heart-duration",
            `${5.8 + Math.random() * 2.8}s`
        );

        heart.style.setProperty(
            "--heart-drift-a",
            `${-34 + Math.random() * 20}px`
        );

        heart.style.setProperty(
            "--heart-drift-b",
            `${8 + Math.random() * 45}px`
        );

        heart.style.setProperty(
            "--heart-drift-c",
            `${-20 + Math.random() * 40}px`
        );

        letterHearts.appendChild(heart);
    }
}


backFromPromise.addEventListener("click", () => {

    showPage(homePage);
});


/* =====================================================
   YES
===================================================== */

yesBtn.addEventListener("click", () => {

    showPage(yesPage);

    yesCard.classList.remove("revealed");

    requestAnimationFrame(() => {
        yesCard.classList.add("revealed");
    });

    createHeartExplosion();
});


/* =====================================================
   NO BUTTON
===================================================== */

let noAttempts = 0;

const messages = [
    "مطمئنی؟ 🥺",
    "یه بار دیگه فکر کن...",
    "واقعاً نه؟ 😭",
    "این جواب رو قبول ندارم 😂",
    "دوباره امتحان کن :)",
    "نه که نمیشه 😌",
    "این دکمه امروز کار نمی‌کنه ❤️"
];


function moveNoButton() {

    noAttempts++;

    const buttonWidth = noBtn.offsetWidth;
    const buttonHeight = noBtn.offsetHeight;

    const isMobile = window.matchMedia("(max-width: 600px)").matches;
    const margin = isMobile ? 16 : 24;

    const minX = isMobile
        ? Math.max(margin, window.innerWidth * 0.12)
        : margin;

    const maxX = isMobile
        ? Math.min(
            window.innerWidth - buttonWidth - margin,
            window.innerWidth * 0.88 - buttonWidth
        )
        : window.innerWidth - buttonWidth - margin;

    const minY = isMobile
        ? Math.min(150, window.innerHeight * 0.22)
        : margin;

    const maxY = isMobile
        ? Math.max(
            minY,
            Math.min(
                window.innerHeight - buttonHeight - margin,
                window.innerHeight * 0.72
            )
        )
        : window.innerHeight - buttonHeight - margin;

    let x =
        Math.random() *
        (maxX - minX) +
        minX;

    let y =
        Math.random() *
        (maxY - minY) +
        minY;


    /*
       روی موبایل مطمئن می‌شویم
       دکمه از صفحه خارج نشود.
    */

    x = Math.max(
        minX,
        Math.min(x, maxX)
    );

    y = Math.max(
        minY,
        Math.min(y, maxY)
    );


    noBtn.style.position = "fixed";

    noBtn.style.left = `${x}px`;
    noBtn.style.top = `${y}px`;

    noBtn.style.zIndex = "1000";

    noMessage.textContent =
        messages[
            Math.min(
                noAttempts - 1,
                messages.length - 1
            )
        ];
}


/*
   روی کامپیوتر:
   وقتی موس نزدیک می‌شود فرار می‌کند.
*/

noBtn.addEventListener("mouseenter", () => {

    moveNoButton();
});


/*
   روی موبایل:
   وقتی انگشت می‌خواهد آن را لمس کند،
   جابه‌جا می‌شود.
*/

noBtn.addEventListener(
    "touchstart",
    (event) => {

        event.preventDefault();

        moveNoButton();
    },
    {
        passive: false
    }
);


/*
   اگر somehow روی دکمه کلیک شد،
   باز هم فرار کند.
*/

noBtn.addEventListener("click", (event) => {

    event.preventDefault();

    moveNoButton();
});


function resetNoButton() {

    noAttempts = 0;

    noBtn.style.position = "";
    noBtn.style.left = "";
    noBtn.style.top = "";

    noMessage.textContent = "";
}


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
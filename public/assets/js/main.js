/*==================== CLOCK ====================*/
const hour = document.getElementById('clock-hour'),
    minutes = document.getElementById('clock-minutes'),
    seconds = document.getElementById('clock-seconds');

const clock = () => {
    let date = new Date();

    let hh = date.getHours() * 30,
        mm = date.getMinutes() * 6,
        ss = date.getSeconds() * 6;

    // We add a rotation to the elements
    hour.style.transform = `rotateZ(${hh + mm / 12}deg)`;
    minutes.style.transform = `rotateZ(${mm}deg)`;
    seconds.style.transform = `rotateZ(${ss}deg)`;
};
setInterval(clock, 1000); // 1000 = 1s

/*==================== CLOCK & DATE TEXT ====================*/
const textHour = document.getElementById('text-hour'),
    textMinutes = document.getElementById('text-minutes'),
    textAmPm = document.getElementById('text-ampm'),
    dateWeek = document.getElementById('date-day-week'),
    dateDay = document.getElementById('date-day'),
    dateMonth = document.getElementById('date-month'),
    dateYear = document.getElementById('date-year');

const clockText = () => {
    let date = new Date();

    let hh = date.getHours(),
        ampm,
        mm = date.getMinutes(),
        day = date.getDate(),
        dayweek = date.getDay(),
        month = date.getMonth(),
        year = date.getFullYear();

    // We change the hours from 24 to 12 hours and establish whether it is AM or PM
    if (hh >= 12) {
        hh = hh - 12;
        ampm = 'PM';
    } else {
        ampm = 'AM';
    }

    // We detect when it's 0 AM and transform to 12 AM
    if (hh == 0) {
        hh = 12;
    }

    // Show a zero before hours
    // if (hh < 10) {
    //     hh = `0${hh}`;
    // }

    // Show time
    textHour.innerHTML = hh < 10 ? `0${hh}:`: `${hh}:`;

    // Show a zero before the minutes
    // if (mm < 10) {
    //     mm = `0${mm}`;
    // }

    // Show minutes
    textMinutes.innerHTML = mm < 10 ? `0${mm}` : mm + '';

    // Show am or pm
    textAmPm.innerHTML = ampm;

    // If you want to show the name of the day of the week
    let week = ['Sun', 'Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat'];

    // We get the months of the year and show it
    let months = [
        'Jan',
        'Feb',
        'Mar',
        'Apr',
        'May',
        'Jun',
        'Jul',
        'Aug',
        'Sep',
        'Oct',
        'Nov',
        'Dec',
    ];

    // We show the day, the month and the year
    dateDay.innerHTML = day + '';
    dateWeek.innerHTML = `${week[dayweek]}`;
    dateMonth.innerHTML = `${months[month]},`;
    dateYear.innerHTML = year + '';
};
setInterval(clockText, 1000); // 1000 = 1s

/*==================== DARK/LIGHT THEME ====================*/
const themeButton = document.getElementById('theme-button');
const darkTheme = 'dark-theme';
const iconTheme = 'bxs-sun';

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem('selected-theme');
const selectedIcon = localStorage.getItem('selected-icon');

// We obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () =>
    document.body.classList.contains(darkTheme) ? 'dark' : 'light';
const getCurrentIcon = () =>
    themeButton.classList.contains(iconTheme) ? 'bxs-moon' : 'bxs-sun';

// We validate if the user previously chose a topic
if (selectedTheme) {
    // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
    document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](
        darkTheme
    );
    themeButton.classList[selectedIcon === 'bxs-moon' ? 'add' : 'remove'](
        iconTheme
    );
}

// Activate / deactivate the theme manually with the button
themeButton.addEventListener('click', () => {
    // Add or remove the dark / icon theme
    document.body.classList.toggle(darkTheme);
    themeButton.classList.toggle(iconTheme);
    // We save the theme and the current icon that the user chose
    localStorage.setItem('selected-theme', getCurrentTheme());
    localStorage.setItem('selected-icon', getCurrentIcon());
});

let saids = [
    'Hãy cảm ơn những lúc bạn gặp khó khăn, bởi nếu không có khó khăn, bạn sẽ không có cơ hội để hiểu mình và trải nghiệm cuộc sống.',
    'Hạnh phúc lớn nhất đơn giản chỉ là thời khắc hiện tại bạn thực sự hài lòng với chính những gì bạn có.',
    'Mạnh mẽ là tốt nhưng không từ bỏ thì tốt hơn và nếu mạnh mẽ cộng không dễ dàng từ bỏ thì tuyệt vời.',
    'Hãy giữ khuôn mặt bạn luôn hướng về ánh mặt trời, và bóng tối sẽ ngả phía sau bạn.',
    'Bạn sẽ tìm thấy niềm vui khi giúp đỡ người khác bằng tất cả tấm lòng.',
];

/* random said after 15s */
setInterval(()=>{
    let ranIndex = Math.floor(Math.random() * saids.length);  // start 0
    document.getElementById("said").innerHTML = saids[ranIndex];
}, 1000 * 15);

let images = [
    // './public/assets/img/background_1.jpg',

    './public/assets/img/merry_christmas_1.png',
    './public/assets/img/merry_christmas_2.png',
    './public/assets/img/merry_christmas_3.png',
    './public/assets/img/merry_christmas_4.png',
    './public/assets/img/merry_christmas_5.png',
    './public/assets/img/merry_christmas_6.png',

    // './public/assets/img/happy_new_year.png'
];

// bỏ background thì cmt đoạn này
function randomImg(){
    let ranIndex = Math.floor(Math.random() * images.length); // start 0
    let imgUrl = `url('${images[ranIndex]}')`;
    document.body.style.background = imgUrl;
    //document.body.style.backgroundSize = '100vw';
}

/* random background after 10s */
setInterval(()=>{
    randomImg();
}, 1000 * 15);

randomImg();

const snkrBot = {
    name: "SNKRS Canada Bot",
    description: `A fully automated sneaker bot for purchasing exclusive sneakers on the Nike Canada SNKR's site. The script utlizes Puppeteer to mimic a user completing a transaction.`,
    tech_stack: ["Puppeteer", "Node Cron"],
    img: "snkrs",
    github: "https://github.com/mosuswalks/snkrs-bot",
    liveSite: false,
    siteLink: null,
}

const covidWatch = {
    name: "Covid Watch",
    description: `This project was buit to help visualise the impact of covid-19.  
                The App fetches real time data from John Hopskins University through an API and displays the results using ChartJS.`,
    tech_stack: ["Gatsby", "ChartJS"],
    img: "virus",
    github: "https://github.com/mosuswalks/covid-watch",
    liveSite: true,
    siteLink: "https://covid-watch.ca",
}

const JSin30 = {
    name: "JS in 30",
    description: `A byte sized way to digest and comprehend the fundamental and advanced topics of Javascript. Each topic is explained within 30 words or less.`,
    tech_stack: ["React", "Ant Design"],
    img: "JS30",
    github: "https://github.com/mosuswalks/30wordsofJS",
    liveSite: false,
    siteLink: null,
}

export default { JSin30, covidWatch, snkrBot }

#!/usr/bin/env node

import chalk from "chalk";
import boxen from "boxen";

const options = {
    padding: 1,
    width: 60,
    title: "Hello there! I am Mainak",
    titleAlignment: "center",
    borderStyle: "single",
    borderColor: "#008080",
};

const data = {
    intro: chalk.white.bold("Skilled in Angular and Java Spring Boot development, with experience in databases, Linux systems, DevOps tools, and applications of Generative AI and Agentic AI. For projects, visit my GitHub. With a B.Tech in Computer Science and Engineering degree , I bring a strong foundation in Software development, Data Engineering , and a proven track record of impactful projects and internships, including leading a winning hackathon project and hosting corporate websites."),
    twitter: chalk.cyan("https://callmainak.vercel.app/"),
    github: chalk.gray("https://github.com/") + chalk.green("mainak0907"),
    linkedin: chalk.gray("https://linkedin.com/in/") + chalk.blue("mainakc"),
    labelTwitter: chalk.bgWhite.black.bold("    Portfolio"),
    labelGitHub: chalk.bgWhite.black.bold("     GitHub"),
    labelLinkedIn: chalk.bgWhite.black.bold("   LinkedIn"),
};

const newline = "\n";
const introduction = `${data.intro}`;
const twittering = `${data.labelTwitter}  ${data.twitter}`;
const githubing = `${data.labelGitHub}  ${data.github}`;
const linkedining = `${data.labelLinkedIn}  ${data.linkedin}`;

const output =
    introduction + newline + newline + newline +
    githubing + newline +
    linkedining + newline +
    twittering + newline ;

console.log(chalk.white(boxen(output, options)));
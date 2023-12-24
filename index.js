#!/usr/bin/env node

import chalk from "chalk";
import boxen from "boxen";

const options = {
    padding: 1,
    width: 60,
    title: "Hello there!",
    titleAlignment: "center",
    borderStyle: "single",
    borderColor: "#008080",
};

const data = {
    intro: chalk.white.bold("I am Mainak, your friendly neighborhood coder, focused on providing Solutions"),
    work: chalk.white("Interned at") + chalk.blue(" EVE Healthcare , TeachForIndia , HMT Architects"),
    twitter: chalk.gray("https://twitter.com/") + chalk.cyan("MainakC81591663"),
    github: chalk.gray("https://github.com/") + chalk.green("mainak0907"),
    linkedin: chalk.gray("https://linkedin.com/in/") + chalk.blue("mainakc"),
    web: chalk.cyan.underline("https://shorturl.at/dehyK"),
    labelWork: chalk.bgWhite.black.bold("       Work"),
    labelTwitter: chalk.bgWhite.black.bold("    Twitter"),
    labelGitHub: chalk.bgWhite.black.bold("     GitHub"),
    labelLinkedIn: chalk.bgWhite.black.bold("   LinkedIn"),
    labelWeb: chalk.bgWhite.black.bold("        Resume"),
};

const newline = "\n";
const introduction = `${data.intro}`;
const working = `${data.labelWork}  ${data.work}`;
const twittering = `${data.labelTwitter}  ${data.twitter}`;
const githubing = `${data.labelGitHub}  ${data.github}`;
const linkedining = `${data.labelLinkedIn}  ${data.linkedin}`;
const webing = `${data.labelWeb}  ${data.web}`;

const output =
    introduction + newline + newline + newline +
    working + newline +
    githubing + newline +
    linkedining + newline +
    twittering + newline +
    webing ;

console.log(chalk.white(boxen(output, options)));
#!/usr/bin/env node

import { program } from "commander";
import { prompt } from "inquirer";
import open from "open";
import packageJSON from "./package.json";

program
  .name(packageJSON.name)
  .version(packageJSON.version)
  .description(packageJSON.description)
  .action(async () => {
    console.log("Hi π Iβm Reda, if you havenβt noticed already π, and I really like to build software!");
    console.log("Creative problem solver, Technology Advocate, and Evangelist in both fields of Software Development and Machine Learning.");
    console.log("");

    const stackoverflow = "π¬ StackOverflow";
    const linkedin = "π LinkedIn";
    const twitter = "π¦ Twitter";
    const blog = "π Blog"

    const { choice } = await prompt({
      type: "list",
      name: "choice",
      message: "Find me in the browser",
      choices: [stackoverflow, linkedin, twitter, blog],
    });

    switch (choice) {
      case stackoverflow:
        await open("https://stackoverflow.com/users/1726318/niklaus-wirth");
        break;
      case linkedin:
        await open("https://www.linkedin.com/in/morika/");
        break;
      case twitter:
        await open("https://twitter.com/morikapt");
        break;
      case blog:
          await open("https://softwarewins.wordpress.com/");
          break;
    }
  })
  .parse(process.argv);
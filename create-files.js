import fs from "fs";
import path from "path";

// set the number of files to create
const numberOfFiles = 20000;

// set the directory where the files will be created
const directory = "./src/content/collection";

// create the directory if it doesn't exist
if (!fs.existsSync(directory)) {
  fs.mkdirSync(directory, { recursive: true });
  console.log(`Directory ${directory} created successfully!`);
}

const frontmatter = `---
title: "title"
date: "2021-01-01"
description: "description"
herp: "derp"
id: "id"
stuff: "things"
---
`;

// loop through and create the specified number of files
for (let i = 1; i <= numberOfFiles; i++) {
  const filename = `file-${i}.md`;

  const filePath = path.join(directory, filename);
  fs.writeFileSync(filePath, frontmatter, (err) => {
    if (err) throw err;
    console.log(`${filename} created successfully!`);
  });
}

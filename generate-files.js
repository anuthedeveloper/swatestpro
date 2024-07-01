const fs = require("fs");
const path = require("path");

const generateFiles = (dir, count) => {
  for (let i = 0; i < count; i++) {
    const filePath = path.join(dir, `file${i}.txt`);
    fs.writeFileSync(filePath, `This is file number ${i}`);
  }
};

const createDirectoriesAndFiles = () => {
  const baseDir = path.join(__dirname, "public", "large_files");

  if (!fs.existsSync(baseDir)) {
    fs.mkdirSync(baseDir, { recursive: true });
  }

  generateFiles(baseDir, 9000);
};

createDirectoriesAndFiles();
console.log("Files generated successfully.");

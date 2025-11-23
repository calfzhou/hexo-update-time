import fs from "node:fs/promises";

export const getFileModifiedTime = async (filepath) => {
  const stats = await fs.stat(filepath);
  return stats.mtime;
};

export const readFile = async (filepath) => {
  const data = await fs.readFile(filepath, {
    encoding: "utf-8",
  });
  return data;
};

export const writeFile = async (filepath, data) => {
  await fs.writeFile(filepath, data);
};

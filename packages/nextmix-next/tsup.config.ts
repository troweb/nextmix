import { defineConfig } from 'tsup'
import fs from 'fs'
import path from 'path'

const fsPromises = fs.promises

function readFilesRecursively(directory: string) {
  const files: string[] = [];

  function read(directory: string) {
    const entries = fs.readdirSync(directory);

    entries.forEach((entry) => {
      const fullPath = path.join(directory, entry);
      const stat = fs.statSync(fullPath);

      if (stat.isDirectory()) {
        read(fullPath);
      } else {
        files.push(fullPath);
      }
    });
  }

  read(directory);
  return files;
}

async function addDirectivesToChunkFiles(distPath = 'dist'): Promise<void> {
  try {
    const files = readFilesRecursively(distPath);

    for (const file of files) {
      if (!file.includes('/clients/')) {
        continue;
      }

      const filePath = path.join('', file);

      const data = await fsPromises.readFile(filePath, 'utf8');

      const updatedContent = `"use client";\n\n${data}`;

      await fsPromises.writeFile(filePath, updatedContent, 'utf8');
    }
  } catch (err) {
    // eslint-disable-next-line no-console -- We need to log the error
    console.error('⚠️ Something error:', err);
  }
}

export default defineConfig([{
  entry: ['src/**/*.{ts,tsx}'],
  dts: true,
  splitting: true,
  clean: true,
  treeshake: false, // this will remove 'use client' so we don't use it
  bundle: false, // we cannot bundle because we want to preseve 'use client'
  platform: 'browser',
  format: 'esm', // as we don't bundle using esm and cjs is buggy
  onSuccess: async () => {
    await addDirectivesToChunkFiles();
  },
}])

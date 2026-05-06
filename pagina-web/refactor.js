import fs from 'fs';
import path from 'path';

function walkDir(dir, callback) {
  fs.readdirSync(dir).forEach(f => {
    let dirPath = path.join(dir, f);
    let isDirectory = fs.statSync(dirPath).isDirectory();
    isDirectory ? walkDir(dirPath, callback) : callback(path.join(dir, f));
  });
}

walkDir('./src', (filePath) => {
  if (filePath.endsWith('.tsx') || filePath.endsWith('.ts')) {
    let content = fs.readFileSync(filePath, 'utf8');
    let original = content;

    // 1. Next Image
    content = content.replace(/import Image from "next\/image";?\n?/g, '');
    content = content.replace(/<Image(\s)/g, '<img$1');
    content = content.replace(/<Image\n/g, '<img\n');
    
    // Remove unsupported props from img (priority, unoptimized)
    content = content.replace(/\spriority(\=\{false\}|\=\{true\})?/g, '');
    content = content.replace(/\sunoptimized(\=\{false\}|\=\{true\})?/g, '');

    // 2. Next Link
    content = content.replace(/import Link from "next\/link";?\n?/g, 'import { Link } from "react-router-dom";\n');
    content = content.replace(/<Link\s+href=/g, '<Link to=');
    content = content.replace(/<Link\s+className=(["'{].*?["'}])\s+href=/g, '<Link className=$1 to=');
    // some links might have href before className or other props
    content = content.replace(/(\s)href=/g, (match, p1) => {
      // only replace if it's inside <Link ...> or <a> ... we'll just replace it globally if it's Link, wait.
      return match;
    });
    // better regex for Link href
    // Since we know it's <Link ..., we can just replace href= with to= inside Link tags.
    // Actually, `<Link href=` handles most simple cases.
    content = content.replace(/<Link([^>]*)href=/g, '<Link$1to=');

    // 3. Metadata
    content = content.replace(/import type \{ Metadata \} from "next";?\n?/g, '');
    content = content.replace(/export const metadata: Metadata =/g, 'export const metadata =');

    if (content !== original) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`Updated ${filePath}`);
    }
  }
});

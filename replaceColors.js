const fs = require('fs');
const path = require('path');

const replacements = {
  '#0A0A0A': '#151239', 
  '#F9FAFB': '#F5F3FF', 
  '#2563EB': '#5A42FF', 
  '#EFF6FF': '#EFEAFF', 
  '#BFDBFE': '#C4B5FD', 
  '#E5E7EB': '#E2DDF5', 
  '#6B7280': '#605D84', 
  '#374151': '#312D5A', 
  '#111827': '#1B1745', 
  '#F3F4F6': '#EDE9FE', 
  '#111111': '#120F36', 
  '#0B1E6D': '#18154B', 
  '#1E3A8A': '#2A2578', 
};

function processDir(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    if (file === 'node_modules' || file === '.next' || file === '.git' || file === 'public') continue;
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      processDir(fullPath);
    } else if (fullPath.endsWith('.tsx') || fullPath.endsWith('.ts') || fullPath.endsWith('.css')) {
      let content = fs.readFileSync(fullPath, 'utf8');
      let changed = false;
      for (const [search, replace] of Object.entries(replacements)) {
        const regex = new RegExp(search, 'gi');
        if (regex.test(content)) {
          content = content.replace(regex, replace);
          changed = true;
        }
      }
      if (changed) {
        fs.writeFileSync(fullPath, content);
        console.log('Updated:', fullPath);
      }
    }
  }
}

processDir(process.cwd());

import fs from 'fs';
import path from 'path';

const logPath = `C:\\Users\\himan\\.gemini\\antigravity\\brain\\ff7e2ebd-2103-4bf7-b400-e07223b96074\\.system_generated\\logs\\transcript.jsonl`;

if (fs.existsSync(logPath)) {
  const content = fs.readFileSync(logPath, 'utf8');
  const lines = content.split('\n');
  let matchCount = 0;
  for (let i = 0; i < lines.length; i++) {
    if (lines[i].toLowerCase().includes('introducing')) {
      console.log(`Line ${i}:`, lines[i].substring(0, 300));
      matchCount++;
    }
  }
  console.log(`Total matches: ${matchCount}`);
} else {
  console.log('Log file does not exist');
}

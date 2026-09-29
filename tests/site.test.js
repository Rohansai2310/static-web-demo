const fs = require('fs');
const assert = require('assert');

console.log("🔍 Running CI test suite...");

const requiredTabs = [
  { label: 'PES University', id: 'pes' },
  { label: 'About me', id: 'se' },
  { label: 'CI/CD Pipeline', id: 'cicd' },
  { label: 'Instructable', id: 'instructable' },
  { label: 'About', id: 'About' }
];

// 1. Verify critical files exist
assert(fs.existsSync('src/index.html'), "❌ Error: src/index.html is missing!");
assert(fs.existsSync('src/style.css'), "❌ Error: src/style.css is missing!");

const html = fs.readFileSync('src/index.html', 'utf8');

// 2. Check each navigation tab points to an existing content panel
for (const tab of requiredTabs) {
  const buttonRegex = new RegExp(
    `<button[^>]*class=[\"'][^\"']*tab-btn[^\"']*[\"'][^>]*>\\s*${tab.label}\\s*</button>`,
    'i'
  );
  const button = buttonRegex.exec(html);

  assert(button, `❌ Test Failed: Mandatory tab \"${tab.label}\" was not found in navigation!`);

  const targetRegex = new RegExp(
    `onclick=[\"']showTab\\([\"']${tab.id}[\"']\\)[\"']`,
    'i'
  );
  assert(targetRegex.test(button[0]), `❌ Test Failed: Tab \"${tab.label}\" does not target \"${tab.id}\"!`);

  const panelRegex = new RegExp(
    `<div[^>]*id=[\"']${tab.id}[\"'][^>]*class=[\"'][^\"']*\\btab-content\\b[^\"']*[\"']`,
    'i'
  );
  assert(panelRegex.test(html), `❌ Test Failed: Content panel \"${tab.id}\" was not found!`);
}

// 3. Verify the page loads its stylesheet
assert(
  /<link\b(?=[^>]*\brel=["']stylesheet["'])(?=[^>]*\bhref=["']style\.css["'])[^>]*>/i.test(html),
  '❌ Test Failed: src/index.html does not link to style.css!'
);


console.log("[PASSED] All static tab content checks passed successfully!");

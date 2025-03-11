#!/usr/bin/node

if (isNaN(process.argv[2])) { console.log('Missing size'); } else { for (let j = 0; j < process.argv[2]; j++) { console.log('X'.repeat(process.argv[2])); } }

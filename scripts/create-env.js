const fs = require('fs');
const envContent = `
RM_API=${process.env.RM_API}\n
`;

fs.writeFileSync('./.env', envContent.trim());
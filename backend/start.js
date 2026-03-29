#!/usr/bin/env node
import { spawnSync } from "child_process";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// First, generate Prisma Client
console.log("🔨 Ensuring Prisma Client is generated...");
const generateResult = spawnSync("npx", ["prisma", "generate"], {
	stdio: "inherit",
	cwd: __dirname,
});

if (generateResult.error || generateResult.status !== 0) {
	console.error("❌ Failed to generate Prisma Client");
	process.exit(1);
}

console.log("✅ Prisma Client ready!");
console.log("🚀 Starting server...\n");

// Then start the server
const serverResult = spawnSync("node", ["server.js"], {
	stdio: "inherit",
	cwd: __dirname,
});

process.exit(serverResult.status || 0);

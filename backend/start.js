#!/usr/bin/env node
import { spawnSync } from "child_process";
import path from "path";
import { fileURLToPath } from "url";
import fs from "fs";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

console.log("📦 Backend Startup Process\n");
console.log(`📁 Working directory: ${__dirname}\n`);

// Check if node_modules exists
console.log("🔍 Checking dependencies...");
if (!fs.existsSync(path.join(__dirname, "node_modules"))) {
	console.error("❌ node_modules not found. Please run 'npm install' first.");
	process.exit(1);
}
console.log("✅ Dependencies found\n");

// Check if prisma folder exists
console.log("� Checking Prisma schema...");
const prismaSchemaPath = path.join(__dirname, "prisma", "schema.prisma");
if (!fs.existsSync(prismaSchemaPath)) {
	console.error(`❌ Prisma schema not found at: ${prismaSchemaPath}`);
	process.exit(1);
}
console.log(`✅ Prisma schema found at: ${prismaSchemaPath}\n`);

// Generate Prisma Client
console.log("🔨 Generating Prisma Client...");
try {
	const generateResult = spawnSync("npx", ["prisma", "generate"], {
		stdio: "inherit",
		cwd: __dirname,
		shell: true,
	});

	if (generateResult.error) {
		console.error("\n❌ Error spawning prisma generate process:");
		console.error(`   Error: ${generateResult.error.message}`);
		console.error(`   Code: ${generateResult.error.code}`);
		process.exit(1);
	}

	if (generateResult.status !== 0) {
		console.error(
			"\n❌ Prisma generate failed with exit code:",
			generateResult.status,
		);
		console.error("   Possible causes:");
		console.error("   - Database connection issue");
		console.error("   - Invalid Prisma schema");
		console.error("   - Permission issues");
		process.exit(1);
	}

	console.log("\n✅ Prisma Client generated successfully!\n");
} catch (error) {
	console.error("\n❌ Exception during Prisma generation:");
	console.error(`   Message: ${error.message}`);
	console.error(`   Stack: ${error.stack}`);
	process.exit(1);
}

// Check if Prisma Client files were created
console.log("� Verifying Prisma Client files...");
const prismaClientPath = path.join(
	__dirname,
	"node_modules",
	".prisma",
	"client",
);
if (!fs.existsSync(prismaClientPath)) {
	console.error(`❌ Prisma Client files not created at: ${prismaClientPath}`);
	console.error("   Try running: npx prisma generate --skip-engine-check");
	process.exit(1);
}
console.log(`✅ Prisma Client verified at: ${prismaClientPath}\n`);

// Start the server
console.log("🚀 Starting Express server...\n");
try {
	const serverResult = spawnSync("node", ["server.js"], {
		stdio: "inherit",
		cwd: __dirname,
	});

	if (serverResult.error) {
		console.error("\n❌ Error starting server:");
		console.error(`   Error: ${serverResult.error.message}`);
		console.error(`   Code: ${serverResult.error.code}`);
		process.exit(1);
	}

	process.exit(serverResult.status || 0);
} catch (error) {
	console.error("\n❌ Exception while starting server:");
	console.error(`   Message: ${error.message}`);
	console.error(`   Stack: ${error.stack}`);
	process.exit(1);
}

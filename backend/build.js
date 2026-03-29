import { execSync } from "child_process";

console.log("🔨 Building Prisma Client...");
try {
	execSync("npx prisma generate", { stdio: "inherit" });
	console.log("✅ Prisma Client generated successfully!");
} catch (error) {
	console.error("❌ Failed to generate Prisma Client:", error);
	process.exit(1);
}

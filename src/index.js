import app from "./app";

async function main() {
  await app.listen(3000);
  console.log("server en 3000");
}

main();

import app from "./app";
import "@babel/polyfill";

var PORT = process.env.PORT || 3000;
async function main() {
  await app.listen(PORT);
  console.log("server en 3000");
}

main();

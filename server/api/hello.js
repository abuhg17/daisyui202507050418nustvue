export default defineEventHandler((event) => {
  setHeader(event, "Content-Type", "application/json; charset=utf-8");
  return {
    message: "Hello World.",
    message2: "こんにちは、世界。",
    message3: "世界，你好!",
  };
});

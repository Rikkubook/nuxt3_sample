export default defineEventHandler((event) => {
  console.log('servermiddleware',event.node.req.url);
});
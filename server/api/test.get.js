export default defineEventHandler((event, context)=>{
  console.log(event.req.url); ///api/test?page=1&list=20

  const data = {
    name: "mike",
    age: 12,
  };
  return { data }
})
export default defineAppConfig({
  ui: {
    primary: 'cream',
    button: {
      rounded: "rounded-2xl",
      variant: { 
        solid: "bg-{color}-500 inline-block max-h-10 min-w-98px md:min-w-135px justify-center p-2  md:p-3 text-xs tracking-12% text-gray-dark hover:bg-white rounded-[20px]"},
      default: {
        color: 'cream'
      }
    }
  }
})


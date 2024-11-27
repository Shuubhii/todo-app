const zod = require("zod")

const createtodos = zod.object({
    title: zod.string(),
    description : zod.string()

})

const updatetodos = zod.object({
    id : zod.string()
})

module.exports({
    createtodos: createtodos,
    updatetodos: updatetodos
})
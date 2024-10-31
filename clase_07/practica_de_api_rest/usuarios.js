const users = [
    {
        id: 1,
        firstName: "Juan",
        lastName: "Pérez",
        age: 20,
        email: "juan@gmail.com",
        country: "ARG"
    },
    {
        id: 2,
        firstName: "Lorena",
        lastName: "Medina",
        age: 30,
        email: "lore@hotmail.com",
        country: "URU"
    },
    {
        id: 3,
        firstName: "Maria",
        lastName: "Molinero",
        age: 25,
        email: "mary2024@gmail.com",
        country: "ARG"
    }
];

const generateId = () => {
    let maxId = 0;

    users.forEach((user) => {
        if (user.id > maxId) {
            maxId = user.id;
        }
    });

    return maxId + 1;
};

export { users, generateId };
const user ={
    name: 'Tomate',
    lastName: 'Feliz'
};
function getUserWithFullName(user){
    return{
        ...user,
        fullName: `${user.name} ${user.lastName}`
    }
}

const UserWithFullName = getUserWithFullName(user);

console.log(UserWithFullName);
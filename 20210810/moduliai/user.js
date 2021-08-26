const getUserName=(name, surname) => {
    return "Vardas: "+name+", Pavardė: "+surname;
};

const getUserSurname=(name, surname) => {
    return "Pavardė: "+surname;
};

//export default getUserName;

module.exports={ getUserName, getUserSurname };


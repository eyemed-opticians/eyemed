function nameSplit(name){

    const firstName = name.split(' ').slice(0, -2).join(' ');
    const lastName = name.split(' ').slice(-1).join(' ');

    return {
        firstName,
        lastName
    }

}

module.exports = nameSplit;
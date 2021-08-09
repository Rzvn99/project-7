//Promise-style
async function getUsers(numberOfUsers) {
    //nimeni nu stie timpul
    const data = await fetch(`https:/randomuser.me/api?results=${numberOfUsers}`)

    return await data.json();
}

async function showUsers(numberOfUsers) {
    const users = await getUsers(numberOfUsers);

    users.results.forEach((user) => {
        console.log(`Salut eu sunt  ${user.name.first}-${user.name.last} si locuiesc in ${user.location.city} si ma aflu la urmatoarele coordonate : latitudine: ${user.location.coordinates.latitude} longitudine: ${user.location.coordinates.longitude} `);
    })
}

showUsers(1)

async function getContries() {
    //nimeni nu stie timpul
    const data = await fetch(`https://restcountries.eu/rest/v2/all`)
    return await data.json();
}


async function getCapital(count) {
    const countries = await getContries();
    return countries.filter(country => country.name == count );
}


getCapital(1);


function getDistanceFromLatLonInKm(lat1, lon1, lat2, lon2) {
    var R = 6371; // Radius of the earth in km
    var dLat = deg2rad(lat2-lat1);  // deg2rad below
    var dLon = deg2rad(lon2-lon1);
    var a =
        Math.sin(dLat/2) * Math.sin(dLat/2) +
        Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) *
        Math.sin(dLon/2) * Math.sin(dLon/2)
    ;
    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
    var d = R * c; // Distance in km
    return d;
}

function deg2rad(deg) {
    return deg * (Math.PI/180)
}


//axios / redis-client / mongoose typeorm
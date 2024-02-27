var admin = ['Ahmed', 'Usman', 'Zahid', 'Yasir', 'Bilal', 'admin'];
for (var i = 0; i < admin.length; i++) {
    if (admin[i] === 'admin') {
        console.log("Hello ".concat(admin[i], ", would you like to see a status report?"));
    }
    else {
        console.log("welcom to sign in ".concat(admin[i], "."));
    }
}

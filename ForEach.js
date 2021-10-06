
const dupontd = [
    { name: "Dupont", sex: "m" },
    { name: "DUPONT", sex: "m" },
    { name: "duPont", sex: "f" },
    { name: "dupond", sex: "f" }
];

//--------------------------------------- A compléter ----------------------------//

function forEach(t, fx) {
    for (let i=0;i<t.length;i++){
      fx(t[i]);
    }
}

function trans(t, fx) {
    const t3 =[];
    for(let i=0;i<t.length;i++){
    t[i].name = fx(t[i]);
    t3.push(t[i]);
    
} 
    return t3;//renvoie un autre tableau qui contient l'élément qu'on a modifié dans le tableau de départ//
   
}

function filter(t, fx) {
    const t2 = [];
    for (let i=0;i<t.length;i++){
        if (fx(t[i])){
            t2.push(t[i]);
        }
    }
   return t2;
}
//-----------------------------   les callbacks        ------------------------------//

function upperCase(pers) {
    pers.name = pers.name.toUpperCase();
}

function isDupont(pers) {
    return pers.name == "DUPONT"
}

function civilite({ name, sex }) {
    sex == 'm' ? name = `Monsieur ${name}` : name = `Madame ${name}`
    return { name }
}
//----------------------------------- APPELS -------------------------------------//

forEach(dupontd, upperCase);
const dupontFamily = filter(dupontd, isDupont)
const tid = trans(dupontFamily, civilite)



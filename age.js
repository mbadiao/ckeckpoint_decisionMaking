function getPrixTicket(age) {
  if (age <= 12) {
    prix = 10.0;
  } else if (age >= 13 && age <= 17) {
    prix = 15.0;
  } else {
    prix = 20.0;
  }
  return prix;
}

function main() {
  const age = parseInt(prompt("Entrez votre âge : "));
  const prixTicket = getPrixTicket(age);

  if (age <= 0) {
    alert("Âge invalide. Veuillez entrer un âge positif.");
  } else {
    alert(`Prix du billet pour ${age} ans : ${prixTicket.toFixed(2)} €`);
  }
}

main();

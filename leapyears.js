function estAnneeBissextile(annee) { 
    if (annee % 4 !== 0) {
      return false;
    } else if (annee % 100 === 0 && annee % 400 !== 0) {
      return false;
    } else {
      return true;
    }
  }
  
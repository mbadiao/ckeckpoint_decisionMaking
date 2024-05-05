function puissance(base, exposant) {
  if (exposant === 0) {
    return 1;  // Cas de base : la puissance de 0 est 1
  }

  if (exposant === 1) {
    return base;  // Cas de base : la puissance de 1 est la base elle-même
  }

  return base * puissance(base, exposant - 1);  // Appel récursif
}

function estPalindrome(texte) {
    return texte.toLowerCase() == texte.toLowerCase().split('').reverse().join('')
}

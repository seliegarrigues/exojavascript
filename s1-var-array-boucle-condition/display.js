
/*    Créez une fonction nommée displayArray(tab) qui prend un tableau de chaînes de caractères en paramètre.
    La fonction doit retourner une chaîne de caractères où chaque élément du tableau est séparé par un espace.
     */

// Affichera : "Pomme Banane Abricot Cerise"
function displayArray(tab) {
    return tab.join(' ');
}

console.log(displayArray(['Pomme', 'Banane', 'Abricot', 'Cerise']))

/* Créez une fonction nommée displayArray2(tab) qui prend un tableau de chaînes de caractères en paramètre.
La fonction doit retourner une chaîne de caractères où chaque élément est séparé par un espace, mais le dernier élément doit être précédé de " et ". */
/* nous déclarons une fonction nommée displayArray2 qui prend un paramètre tab. Ce paramètre est censé être un tableau (array).
 */function displayArray2(tab) {
/*     La méthode slice est utilisée pour créer une copie d'une partie du tableau. tab.slice(0, -1) crée une copie du tableau tab en excluant le dernier élément. Par exemple, si tab est ['Pomme', 'Banane', 'Abricot', 'Cerise'], tab.slice(0, -1) renverra ['Pomme', 'Banane', 'Abricot'].
 */
/* La méthode join est utilisée pour concaténer les éléments d'un tableau en une seule chaîne de caractères, en utilisant le séparateur spécifié. Ici, ' ' est utilisé comme séparateur, donc ['Pomme', 'Banane', 'Abricot'].join(' ') renverra "Pomme Banane Abricot".
 */
/* concaténons la chaîne obtenue avec " et " et le dernier élément du tableau original (tab[tab.length - 1]). Si tab est ['Pomme', 'Banane', 'Abricot', 'Cerise'], tab[tab.length - 1] est 'Cerise'.
 */ 
/* La fonction retourne la chaîne finale, qui est "Pomme Banane Abricot et Cerise".
 */   return tab.slice(0, -1).join(' ') + " et " + tab[tab.length - 1];
}
console.log(displayArray2(['Pomme', 'Banane', 'Abricot', 'Cerise']))
// Appel de la fonction et affichage dans la console de "Pomme Banane Abricot et Cerise"

/* * Créez une fonction nommée displayArray3(tab, useAnd) qui prend deux arguments :
/
    tab : un tableau de chaînes de caractères.
    useAnd : un booléen indiquant si " et " doit être utilisé avant le dernier élément. */ 

    function displayArray3(tab, useAnd) {
        if (useAnd) {
/* La fonction utilise la méthode slice pour créer une copie du tableau tab en excluant le dernier élément. Si tab est ['Pomme', 'Banane', 'Abricot', 'Cerise'], tab.slice(0, -1) renverra ['Pomme', 'Banane', 'Abricot'].*/
return tab.slice(0, -1).join(', ') + " et " + tab[tab.length - 1];

    } else {
        return tab.slice(0, -1).join(', ') + " , " + tab[tab.length - 1];
    }
}
console.log(displayArray3(['Pomme', 'Banane', 'Abricot', 'Cerise'], false))

console.log(displayArray3(['Pomme', 'Banane', 'Abricot', 'Cerise'], true))


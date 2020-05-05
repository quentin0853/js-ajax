Aujourd'hui vous allez devoir découvrir l'Ajax.

# Un peu de lecture dans un premier temps 

[MDN : Ajax premier pas](https://developer.mozilla.org/fr/docs/Web/Guide/AJAX/Premiers_pas).

# Prendre en main un outil tel que postman

Comme vous avez pu le lire sur le site précédent, l'ajax vous permets de réaliser une requête sur un serveur externe.
Tout simplement nous faisons un appel. Que ce soit pour de la lecture de données mais pourquoi pas pour un envoi de données également.
A noter qu'il faut encore que ce serveur vous autorise à le faire. 

Prenons par exemple cette url :

https://data.rennesmetropole.fr/api/records/1.0/search/?dataset=prenoms-a-rennes&facet=annaiss&facet=sexe&facet=prn

Il s'agit de rennes métropole qui nous partage la liste des prénoms donnés à la naissance d'un enfant. 

Découvrez comment faire un appel via postman pour interroger la base de données de rennes.

La donnée retournée est une structure JSON contenant les données.

Je vous invite à installer postman et à réaliser la dite requête.

# Exercice du jour

Très souvent nous réalisons de l'Ajax pour appeler un serveur distant d'où l'appropriation d'un outil tel que postman pour débugger.
La pratique s'étant démocratisée. De nombreuses instances d'open data existent dans le monde. La ville de rennes en est un très bel exemple avec [Data Rennes Metropole](https://data.rennesmetropole.fr)
Mais vous n'avez pas tous une super connection internet en ce moment. Nous allons donc éviter de réaliser un exercice interrogeant un serveur distant lors de vos développements ;)

Nous allons travailler sur de la lecture d'un fichier. 
Vous avez au sein de ce dépot un fichier **./app/docs/laposte_hexasmal.csv** listant les communes de frances. [Issu de données gouvernementales](https://www.data.gouv.fr/fr/datasets/base-officielle-des-codes-postaux/#)

Ce fichier, écrit au format CSV contient l'ensemble des communes avec leurs code postal. Vous pouvez remarquer que ce fichier est assez gros alors qu'il ne contient que du texte. 

Réalisez un formulaire de saisie permettant à un utilisateur de saisir son code postal. 
Dynamiquement, un filtre doit être appliqué et une liste des communes associés listé dans la section **results**. 

vous pouvez remarquer que ce fichier est plutôt gros. Je vous invite donc à le lire une seule fois . Et de le parcourir que lorsque l'utilisateur aura saisi plusieurs caractères dans son champ input.

## Bonus
Une fois que vous êtes parvenu.e.s à le faire, vous avez également accès à des coordonnées GPS :) pourquoi pas nous rajouter une section contenant un iframe contenant une mini map d'openstreetmap de la commune sélectionnée. 

Bon courage !


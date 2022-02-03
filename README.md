# Projet GameOn

GameOn est une PME spécialisée dans les conférences et l'organisation de concours de jeux.

A partir des maquettes et des fichiers de mise-en-pages fournis,
ce projet vise à corriger en javascript les "issues" rencontrées sur la modale du formulaire.
Des corrections sur la mise en page HTML/CSS ont négalement été effectuées afin de fournir un rendu du projet conforme aux conditions énumérées.

# Consignes de base

1. Forkez ce repo ;
2. Il est conseillé d'utiliser VisualStudio Code et vous pouvez utiliser Docker, mais ce n'est pas obligatoire ;
3. Il n'y a aucune dépendance ;
4. Vous ne devez utiliser que du CSS personnalisé et du JavaScript pur, sans jQuery, Bootstrap ou autre librairie.

# Issues

## Tests manuels

1. Visualiser et tester l'interface utilisateur dans les dernières versions de Chrome et de Firefox, ainsi que dans les versions mobile et desktop. Corriger les erreurs d'affichage existantes.

2. Tester toutes les fonctionnalités des boutons et des entrées de formulaire (tester les valeurs correctes et incorrectes)

## Ajouter confirmation quand envoie réussi

1. Après une validation réussie, inclure un message de confirmation de la soumission réussie pour l'utilisateur (ex. "Merci ! Votre réservation a été reçue.")

## Ajouter validation ou messages d'erreur

1. Des messages d'erreur spécifiques doivent apparaître sous l'entrée qui n'est pas correcte. Les messages d'erreur doivent s'afficher sous le champ de saisie associé.

Exemples :

    - "Veuillez entrer 2 caractères ou plus pour le champ du nom."
    - "Vous devez choisir une option."
    - "Vous devez vérifier que vous acceptez les termes et conditions."
    - "Vous devez entrer votre date de naissance."

## Implémenter entrées du formulaire

1. Lier les labels aux entrées dans le HTML en utilisant les attributs "for" et "id" dans le code existant. Corriger le code HTML quand nécessaire.
2. Utiliser du JavaScript pur (pas de jQuery) pour terminer le formulaire :

   Le formulaire doit être valide quand l'utilisateur clique sur "Submit"
   Les données doivent être saisies correctement :
   (1) Le champ Prénom a un minimum de 2 caractères / n'est pas vide.
   (2) Le champ du nom de famille a un minimum de 2 caractères / n'est pas vide.
   (3) L'adresse électronique est valide.
   (4) Pour le nombre de concours, une valeur numérique est saisie.
   (5) Un bouton radio est sélectionné.
   (6) La case des conditions générales est cochée, l'autre case est facultative / peut être laissée décochée.
   Conserver les données du formulaire (ne pas effacer le formulaire) lorsqu'il ne passe pas la validation.

## Fermer la modale

1. Ajouter la fonctionnalité au bouton (x)

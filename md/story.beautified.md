# Test
## Conditions
| variable   | function   | value   |
|:-----------|:-----------|:--------|
| @action    | eq         | start   |

## Choices
### Démarrer
| variable   | function   | value   |
|:-----------|:-----------|:--------|
| lang       | eq         | fr      |
| @action    | eq         | begin   |

******

# Test2
## Conditions
| variable   | function   | value   |
|:-----------|:-----------|:--------|
| @action    | eq         | begin   |

## Image
bois.jpg
## Text
bonjour
## Audio
bg
## Choices
### Suite
| variable   | function   | value   |
|:-----------|:-----------|:--------|
| @action    | eq         | Scene1  |

******

# Test3
## Conditions
| variable   | function   | value   |
|:-----------|:-----------|:--------|
| @action    | eq         | begin   |

## Image
bois.jpg
## Text
bonjour bis
## Choices
### Suite
| variable   | function   | value   |
|:-----------|:-----------|:--------|
| @action    | eq         | Scene1  |

******

# Scene1
## Conditions
| variable   | function   | value   |
|:-----------|:-----------|:--------|
| @action    | eq         | Scene1  |

## Text
Ils peuvent arriver et me trouver ici d'une minute à l'autre.

Je devrais quitter les lieux **au plus vite**.

Toutefois je n'y reviendrai pas avant longtemps, alors...

...c'est le moment de savoir ce qui compte vraiment.

Savoir quoi laisser ou ne pas laisser.
## Choices
### Continuer
| variable   | function   | value   |
|:-----------|:-----------|:--------|
| @action    | eq         | Scene2  |

******

# Scene2
## Conditions
| variable   | function   | value   |
|:-----------|:-----------|:--------|
| @action    | eq         | Scene2  |

## Text

## Choices
### Faire un rapide tour des lieux.
| variable   | function   | value              |
|:-----------|:-----------|:-------------------|
| @action    | eq         | RapideTourDesLieux |

******

# SceneLookAround
## Conditions
| variable   | function   | value              |
|:-----------|:-----------|:-------------------|
| @action    | eq         | RapideTourDesLieux |

## Text
L'appartement est plongé dans la pénombre.
Je me tiens debout devant la porte d'entrée.

J'y verrais sensiblement mieux avec un peu de lumière.
## Choices
### Chercher l'interrupteur près de la porte d'entrée.
| variable   | function   | value     |
|:-----------|:-----------|:----------|
| @action    | eq         | tryswitch |

******

# SceneTrySwitch
## Conditions
| variable   | function   | value     |
|:-----------|:-----------|:----------|
| @action    | eq         | tryswitch |

## Text
En tâtonnant à gauche de la porte je parviens à trouver l'interrupteur.

Je l'actionne sans aucun effet et la pièce reste telle qu'elle est dans l'obscurité.
## Choices
### Utiliser la lampe du téléphone portable
| variable   | function   | value      |
|:-----------|:-----------|:-----------|
| @action    | eq         | ScenePhone |

******

# ScenePhone
## Conditions
| variable   | function   | value      |
|:-----------|:-----------|:-----------|
| @action    | eq         | ScenePhone |

## Text
La lumière du téléphone éclaire à courte distance.

Je distingue le bureau sous la fenêtre avec les volets fermés.
## Choices
### Remonter les volets
| variable   | function   | value               |
|:-----------|:-----------|:--------------------|
| @action    | eq         | SceneRemonterVolets |
### Explorer le reste de la pièce
| variable   | function   | value        |
|:-----------|:-----------|:-------------|
| @action    | eq         | ExplorePhone |

******

# SceneExplorePhoneLight
## Conditions
| variable   | function   | value        |
|:-----------|:-----------|:-------------|
| @action    | eq         | ExplorePhone |

## Text
Je m'avance dans l'appartement à la lumière du téléphone.

C'est sans se préoccuper de la batterie de ce dernier qui se consomme à vue d'oeil.
A ce rythme il sera bientôt totalement déchargé.

S'il n'y a pas de courant dans l'appartement, alors vaudrait-il sans doute mieux chercher à l'économiser.
## Choices
### Retourner près de la fenêtre et remonter les volets.
| variable   | function   | value               |
|:-----------|:-----------|:--------------------|
| @action    | eq         | SceneRemonterVolets |

******

# SceneRemonterVolets
## Conditions
| variable   | function   | value               |
|:-----------|:-----------|:--------------------|
| @action    | eq         | SceneRemonterVolets |

## Text
J'actionne non sans difficulté la manivelle à droite de la fenêtre et les volets remontent.

Les rayons du crépuscule pénètrent dans l'appartement, laissant voir le reste de la pièce à travers la poussière en suspension.
## Choices
### Explorer la pièce
| variable   | function   | value       |
|:-----------|:-----------|:------------|
| @action    | eq         | exploreroom |

******

# ExplorerAvecVoletsRemontés
## Conditions
| variable   | function   | value       |
|:-----------|:-----------|:------------|
| @action    | eq         | exploreroom |

## Text
Je suis à présent dans la pièce à vivre. On y distingue le coin cuisine, un coin salon avec un canapé, une table basse, une table à manger, et le coin bureau sous la fenêtre.
## Choices
### Explorer d'autres pièces
| variable          | function   | value                |
|:------------------|:-----------|:---------------------|
| exam_autrespieces | eq         | true                 |
| @action           | eq         | ExplorerAutresPieces |
### S'approcher du coin cuisine
| variable     | function   | value            |
|:-------------|:-----------|:-----------------|
| exam_cuisine | eq         | true             |
| @action      | eq         | ApprocherCuisine |
### S'approcher du coin bureau
| variable    | function   | value           |
|:------------|:-----------|:----------------|
| exam_bureau | eq         | true            |
| @action     | eq         | ApprocherBureau |
### S'approcher du coin salon
| variable   | function   | value          |
|:-----------|:-----------|:---------------|
| exam_salon | eq         | true           |
| @action    | eq         | ApprocherSalon |
### Inspecter les assiettes

@if

| variable   | function   | value   |
|:-----------|:-----------|:--------|
| exam_salon | eq         | true    |
### Aller dans la salle de bains

@if

| variable          | function   | value   |
|:------------------|:-----------|:--------|
| exam_autrespieces | eq         | true    |
### Aller dans la chambre

@if

| variable          | function   | value   |
|:------------------|:-----------|:--------|
| exam_autrespieces | eq         | true    |

******

# ApprocherSalon
## Conditions
| variable   | function   | value          |
|:-----------|:-----------|:---------------|
| @action    | eq         | ApprocherSalon |

## Text
Salon.
## Choices
### Continuer
| variable   | function   | value       |
|:-----------|:-----------|:------------|
| @action    | eq         | exploreroom |

******

# ApprocherCuisine
## Conditions
| variable   | function   | value            |
|:-----------|:-----------|:-----------------|
| @action    | eq         | ApprocherCuisine |

## Text
Cuisine
## Choices
### Continuer
| variable   | function   | value       |
|:-----------|:-----------|:------------|
| @action    | eq         | exploreroom |

******

# ApprocherBureau
## Conditions
| variable   | function   | value           |
|:-----------|:-----------|:----------------|
| @action    | eq         | ApprocherBureau |

## Text
Bureau
## Choices
### Continuer
| variable   | function   | value       |
|:-----------|:-----------|:------------|
| @action    | eq         | exploreroom |

******

# ApprocherAutresPièces
## Conditions
| variable   | function   | value                |
|:-----------|:-----------|:---------------------|
| @action    | eq         | ExplorerAutresPieces |

## Text
Autres Pièces.
## Choices
### Continuer
| variable   | function   | value       |
|:-----------|:-----------|:------------|
| @action    | eq         | exploreroom |

******


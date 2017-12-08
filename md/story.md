# Test
## Action
start
## Choices
### Démarrer
lang:fr
@action:begin

**************
# Test2
## Action
begin
## Image
bois.jpg
## Text
bonjour
## Audio
bg
## Choices
### Suite
@action:Scene1
**************
# Test3
## Action
begin
## Image
bois.jpg
## Text
bonjour bis
## Choices
### Suite
@action:Scene1
***************************
# Scene1
## Conditions
@action:Scene1
## Text
Ils peuvent arriver et me trouver ici d'une minute à l'autre.

Je devrais quitter les lieux **au plus vite**.

Toutefois je n'y reviendrai pas avant longtemps, alors...

...c'est le moment de savoir ce qui compte vraiment.

Savoir quoi laisser ou ne pas laisser.

## Choices
### Continuer
@action:Scene2
********************************
# Scene2
## Conditions
@action:Scene2

## Text

## Choices
### Faire un rapide tour des lieux.
@action:RapideTourDesLieux

***************
# SceneLookAround
## Conditions
@action:RapideTourDesLieux

## Text
L'appartement est plongé dans la pénombre.
Je me tiens debout devant la porte d'entrée.

J'y verrais sensiblement mieux avec un peu de lumière.

## Choices
### Chercher l'interrupteur près de la porte d'entrée.
@action:tryswitch

*******
# SceneTrySwitch
## Conditions
@action:tryswitch

## Text
En tâtonnant à gauche de la porte je parviens à trouver l'interrupteur.

Je l'actionne sans aucun effet et la pièce reste telle qu'elle est dans l'obscurité.

## Choices
### Utiliser la lampe du téléphone portable
@action:ScenePhone
*******
# ScenePhone
## Conditions
@action:ScenePhone

## Text
La lumière du téléphone éclaire à courte distance.

Je distingue le bureau sous la fenêtre avec les volets fermés.

## Choices
### Remonter les volets
@action:SceneRemonterVolets

### Explorer le reste de la pièce
@action:ExplorePhone

*********
# SceneExplorePhoneLight
## Conditions
@action:ExplorePhone

## Text
Je m'avance dans l'appartement à la lumière du téléphone.

C'est sans se préoccuper de la batterie de ce dernier qui se consomme à vue d'oeil.
A ce rythme il sera bientôt totalement déchargé.

S'il n'y a pas de courant dans l'appartement, alors vaudrait-il sans doute mieux chercher à l'économiser.

## Choices
### Retourner près de la fenêtre et remonter les volets.
@action:SceneRemonterVolets

************************
# SceneRemonterVolets
## Conditions
@action:SceneRemonterVolets

## Text

J'actionne non sans difficulté la manivelle à droite de la fenêtre et les volets remontent.

Les rayons du crépuscule pénètrent dans l'appartement, laissant voir le reste de la pièce à travers la poussière en suspension.
## Choices
### Explorer la pièce
@action:exploreroom

****
# ExplorerAvecVoletsRemontés
## Conditions
@action:exploreroom

## Text
Je suis à présent dans la pièce à vivre. On y distingue le coin cuisine, un coin salon avec un canapé, une table basse, une table à manger, et le coin bureau sous la fenêtre.

## Choices
### Explorer d'autres pièces
exam_autrespieces:true
@action:ExplorerAutresPieces
### S'approcher du coin cuisine
exam_cuisine:true
@action:ApprocherCuisine
### S'approcher du coin bureau
exam_bureau:true
@action:ApprocherBureau
### S'approcher du coin salon
exam_salon:true
@action:ApprocherSalon
### Inspecter les assiettes
@if
exam_salon:true
### Aller dans la salle de bains
@if
exam_autrespieces:true
### Aller dans la chambre
@if
exam_autrespieces:true

*****
# ApprocherSalon
## Conditions
@action:ApprocherSalon
## Text

Salon.

## Choices
### Continuer
@action:exploreroom
*****
# ApprocherSalon
## Conditions
@action:ApprocherSalon
## Text

Salon.

## Choices
### Continuer
@action:exploreroom

*****
# ApprocherCuisine
## Conditions
@action:ApprocherCuisine
## Text

Cuisine

## Choices
### Continuer
@action:exploreroom

*****
# ApprocherBureau
## Conditions
@action:ApprocherBureau
## Text

Bureau

## Choices
### Continuer
@action:exploreroom

*****
# ApprocherAutresPièces
## Conditions
@action:ExplorerAutresPieces
## Text

Autres Pièces.

## Choices
### Continuer
@action:exploreroom

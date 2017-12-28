Extensions:story-fr.md,story-ca.md,menton.md
# Début
## Conditions
@action:eq:"start"
## Choices
### Démarrer
@action:eq:"begin"
### Rendre visite à Antoine
imprevus:eq:91
@action:eq:"visite-antoine"

# SceneChoixLangues
## Conditions
@action:eq:"begin"

## Audio
bg.mp3
## Text

> Choisissez une langue.

> Tria una llengua.

## Choices
### Français
lang:eq:"fr"
sc:eq:0
@if
@time:eq:10

### Catalan
lang:eq:"ca"
sc:eq:0


# SceneChoixLangues2
## Conditions
@action:eq:"begin"

## Audio
bg.mp3
## Text

Autre texte !!!
Youpi !

## Choices
### Français
lang:eq:"fr"
sc:eq:0

### Català
lang:eq:"ca"
sc:eq:0

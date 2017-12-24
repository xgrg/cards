Extensions:story-fr.md,story-ca.md
# Début
## Action
start
## Choices
### Démarrer
@action:begin

# SceneChoixLangues
## Conditions
@action:begin

## Audio
bg
## Text

> Choisissez une langue.

> Tria una llengua.

## Choices
### Français
lang:eq:fr
sc:eq:0
@if
@time:eq:10

### Catalan
lang:eq:ca
sc:eq:0


# SceneChoixLangues2
## Conditions
@action:begin

## Audio
bg
## Text

Autre texte !!!
Youpi !

## Choices
### Français
lang:eq:fr
sc:eq:0

### Catalan
lang:eq:ca
sc:eq:0

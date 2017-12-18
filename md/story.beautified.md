Extensions:story-fr.md,story-ca.md

*****

# Début
## Conditions
| variable   | function   | value   |
|:-----------|:-----------|:--------|
| @action    | eq         | start   |

## Choices
### Démarrer
| variable   | function   | value   |
|:-----------|:-----------|:--------|
| @action    | eq         | begin   |

******

# SceneChoixLangues
## Conditions
| variable   | function   | value   |
|:-----------|:-----------|:--------|
| @action    | eq         | begin   |

## Audio
bg
## Text
> Choisissez une langue.
> 
> Tria una llengua.
## Choices
### Français
| variable   | function   | value   |
|:-----------|:-----------|:--------|
| lang       | eq         | fr      |
| sc         | eq         | 0       |
### Catalan
| variable   | function   | value   |
|:-----------|:-----------|:--------|
| lang       | eq         | ca      |
| sc         | eq         | 0       |

******

# SceneChoixLangues2
## Conditions
| variable   | function   | value   |
|:-----------|:-----------|:--------|
| @action    | eq         | begin   |

## Audio
bg
## Text
> Autre texte !!!
> Youpi !
## Choices
### Français
| variable   | function   | value   |
|:-----------|:-----------|:--------|
| lang       | eq         | fr      |
| sc         | eq         | 0       |
### Catalan
| variable   | function   | value   |
|:-----------|:-----------|:--------|
| lang       | eq         | ca      |
| sc         | eq         | 0       |

******


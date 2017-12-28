Extensions:story-fr.md,story-ca.md,menton.md

*****

# Début
## Conditions
| variable   | function   | value   |
|:-----------|:-----------|:--------|
| @action    | eq         | "start" |

## Choices
### Démarrer
| variable   | function   | value   |
|:-----------|:-----------|:--------|
| @action    | eq         | "begin" |
### Rendre visite à Antoine
| variable   | function   | value            |
|:-----------|:-----------|:-----------------|
| imprevus   | eq         | 91               |
| @action    | eq         | "visite-antoine" |

******

# SceneChoixLangues
## Conditions
| variable   | function   | value   |
|:-----------|:-----------|:--------|
| @action    | eq         | "begin" |

## Audio
bg.mp3
## Text
> Choisissez une langue.
> 
> Tria una llengua.
## Choices
### Français
| variable   | function   | value   |
|:-----------|:-----------|:--------|
| lang       | eq         | "fr"    |
| sc         | eq         | 0       |

@if

| variable   | function   |   value |
|:-----------|:-----------|--------:|
| @time      | eq         |      10 |
### Catalan
| variable   | function   | value   |
|:-----------|:-----------|:--------|
| lang       | eq         | "ca"    |
| sc         | eq         | 0       |

******

# SceneChoixLangues2
## Conditions
| variable   | function   | value   |
|:-----------|:-----------|:--------|
| @action    | eq         | "begin" |

## Audio
bg.mp3
## Text
> Autre texte !!!
> Youpi !
## Choices
### Français
| variable   | function   | value   |
|:-----------|:-----------|:--------|
| lang       | eq         | "fr"    |
| sc         | eq         | 0       |
### Catalan
| variable   | function   | value   |
|:-----------|:-----------|:--------|
| lang       | eq         | "ca"    |
| sc         | eq         | 0       |

******


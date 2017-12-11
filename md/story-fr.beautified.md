Conditions:

| variable   | function   | value   |
|:-----------|:-----------|:--------|
| lang       | eq         | fr      |

*****

# FrScene1
## Conditions
| variable   | function   |   value |
|:-----------|:-----------|--------:|
| sc         | eq         |       0 |

## Image
vallter.jpg
## Text
> _13 heures 30, route de Vallter, Pyrénées Catalanes_
> 
> Les degrés fondent à mesure que s’enchaînent les virages. A l’approche du parking quasi-vide de la station de Vallter 2000, le compteur indique 4 timides degrés.
> 
> Le temps d’enfiler quelques couches supplémentaires, d’une dernière vérification du sac et d’un rapide casse-croûte et je serai prêt(e) à partir.
## Choices
### J’enfile mon coupe-vent.
| variable   | function   | value     |
|:-----------|:-----------|:----------|
| equip      | eq         | coupevent |
| sc         | eq         | 1         |
### J’enfile polaire, doudoune et coupe-vent.
| variable   | function   | value   |
|:-----------|:-----------|:--------|
| equip      | eq         | polaire |
| sc         | eq         | 1       |
### Réflexion faite, je pars en t-shirt.
| variable   | function   | value   |
|:-----------|:-----------|:--------|
| equip      | eq         | tshirt  |
| sc         | eq         | 1       |

******

# FrScene2
## Conditions
| variable   | function   |   value |
|:-----------|:-----------|--------:|
| sc         | eq         |       1 |

## Image
vallter2.jpg
## Text
> _14 heures, départ de la station de Vallter_
> 
> Le chemin débute en montée suivant le tracé du GR10.
> La station s’éloigne progressivement dans le dos.
> 
> Bien que les télésièges soient à l’arrêt, quelques tâches de neige semblent signaler que la saison de ski est en phase d’approche.
> La montée s’effectue sans encombres.
## Choices
### La montée donne chaud. Je retire ma polaire.
| variable   | function   | value                  |
|:-----------|:-----------|:-----------------------|
| sc         | eq         | scene_croise_marcheurs |

@if

| variable   | function   | value   |
|:-----------|:-----------|:--------|
| equip      | eq         | polaire |
### Continuer
| variable   | function   | value                  |
|:-----------|:-----------|:-----------------------|
| sc         | eq         | scene_croise_marcheurs |

******

# FrScene_croise_marcheurs
## Conditions
| variable   | function   | value                  |
|:-----------|:-----------|:-----------------------|
| sc         | eq         | scene_croise_marcheurs |

## Text
> Je salue quelques marcheurs en les croisant dans leur descente.. C’est en effet davantage une heure de fin de parcours que de début...
> 
> L’un d’entre eux, vêtu d’un combinaison de secouriste rouge, s’adresse à moi :
> 
> _\"- Bon dia, on vas ?  Cap al pic de la Dona ?\"_
## Choices
### Si, puja i baixa (mensonge)
| variable   | function   | value    |
|:-----------|:-----------|:---------|
| sc         | eq         | mensonge |
### No, cap al refugi del Alemany (vérité)
| variable   | function   | value   |
|:-----------|:-----------|:--------|
| sc         | eq         | verite  |
### Ne pas répondre et poursuivre sa route.
| variable   | function   | value         |
|:-----------|:-----------|:--------------|
| sc         | eq         | nepasrepondre |

******

# FrScene_mensonge
## Conditions
| variable   | function   | value    |
|:-----------|:-----------|:---------|
| sc         | eq         | mensonge |

## Text
> L'homme me lance un regard sceptique et poursuit sa descente.
> 
> Je poursuis la montée.
## Choices
### Continuer
| variable   | function   |   value |
|:-----------|:-----------|--------:|
| sc         | eq         |       2 |

******

# FrScene_nepasrepondre
## Conditions
| variable   | function   | value         |
|:-----------|:-----------|:--------------|
| sc         | eq         | nepasrepondre |

## Text
> Segueixo amb la pujada ni sense respondre al home, que no pot impedir una reacció de sorpresa.
## Choices
### Continuer
| variable   | function   |   value |
|:-----------|:-----------|--------:|
| sc         | eq         |       2 |

******

# FrScene_verite
## Conditions
| variable   | function   | value   |
|:-----------|:-----------|:--------|
| sc         | eq         | verite  |

## Text
> _\"- Que tinguis bona ruta.\"_
> 
> Je poursuis la montée.
## Choices
### Continuer
| variable   | function   |   value |
|:-----------|:-----------|--------:|
| sc         | eq         |       2 |

******

# FrScene3
## Conditions
| variable   | function   |   value |
|:-----------|:-----------|--------:|
| sc         | eq         |       2 |

## Image
borne.jpg
## Text
> A l’arrivée à la Porteille de Mantet, une borne indique la frontière avec la France. La montre indique 15 heures.
## Choices
### Il est tard pour passer au Nord. Je redescends vers Vallter.
| variable   | function   | value           |
|:-----------|:-----------|:----------------|
| sc         | eq         | back-to-vallter |
### Je continue.
| variable   | function   |   value |
|:-----------|:-----------|--------:|
| sc         | eq         |       3 |
### Le vent souffle au col. J'enfile mon coupe-vent pour poursuivre la route.
| variable   | function   |   value |
|:-----------|:-----------|--------:|
| sc         | eq         |       3 |

@if

| variable   | function   | value   |
|:-----------|:-----------|:--------|
| equip      | eq         | tshirt  |

******

# FrScene3b
## Conditions
| variable   | function   | value           |
|:-----------|:-----------|:----------------|
| sc         | eq         | back-to-vallter |

## Text
> La sécurité avant tout. Je redescends vers Vallter et suis de retour à la voiture avant même le coucher du soleil.
> 
> Mais une chose est sûre : je reviendrai.
> 
> Fin.
## Choices
### Recommencer
| variable   | function   |   value |
|:-----------|:-----------|--------:|
| sc         | eq         |       0 |

******

# FrScene4
## Conditions
| variable   | function   |   value |
|:-----------|:-----------|--------:|
| sc         | eq         |       3 |

## Image
vallee.jpg
## Text
> Le passage du col laisse entrevoir du côté Nord une vallée boisée tirant droit vers le petit village de Mantet.
> 
> A mesure que l’ombre la recouvre, la température se fait de plus en plus fraîche.
> Les taches éparses de neige sont à présent de fiers névés.
> La descente est sans difficulté, le pas est sûr jusqu’à atteindre l’orée du bois.
## Choices
### Continuer
| variable   | function   |   value |
|:-----------|:-----------|--------:|
| sc         | eq         |       4 |

******

# FrScene5
## Conditions
| variable   | function   |   value |
|:-----------|:-----------|--------:|
| sc         | eq         |       4 |

## Image
bois.jpg
## Text
> Le chemin longe sagement un ruisseau portant également les premières marques de l’hiver approchant.
> 
> Les balises se suivent le long du sentier.
## Choices
### Continuer
| variable   | function   |   value |
|:-----------|:-----------|--------:|
| sc         | eq         |       5 |

******

# FrScene6
## Conditions
| variable   | function   |   value |
|:-----------|:-----------|--------:|
| sc         | eq         |       4 |

## Image
berger.jpg
## Text
> Une cabane apparaît au fond sur la gauche.
## Choices
### C’est hors du sentier. Je poursuis ma route sans y prêter attention.
| variable   | function   |   value |
|:-----------|:-----------|--------:|
| sc         | eq         |       7 |
### Je me rapproche.
| variable   | function   |   value |
|:-----------|:-----------|--------:|
| sc         | eq         |       6 |

******

# FrScene7
## Conditions
| variable   | function   |   value |
|:-----------|:-----------|--------:|
| sc         | eq         |       6 |

## Image
berger2.jpg
## Text
> Les volets sont fermés.
> La cheminée ne fume pas.
> 
> Seul un crâne de vache accueille les randonneurs de passage.
> 
> Une serrure sur la porte.
> Ce doit être la cabane du berger.
> Fermée, sans surprise.
> 
> Quelques beaux morceaux de bois jonchent le sol devant la cabane.
> 
> A proximité, sur une large pierre plate, se lit l’inscription gravée _“Refuge à 250 m”_.
## Choices
### Je reprends ma route
| variable   | function   |   value |
|:-----------|:-----------|--------:|
| sc         | eq         |       7 |
### Je ramasse un morceau de bois avant de poursuivre mon chemin
| variable   | function   |   value |
|:-----------|:-----------|--------:|
| sc         | eq         |       7 |

******

# FrScene8
## Conditions
| variable   | function   |   value |
|:-----------|:-----------|--------:|
| sc         | eq         |       7 |

## Image
alemany.jpg
## Text
> Je tombe sur une nouvelle cabane, ouverte. C’est le _refuge de l’Alemany_.
## Choices
### Continuer
| variable   | function   |   value |
|:-----------|:-----------|--------:|
| sc         | eq         |       8 |

******

# FrScene9
## Conditions
| variable   | function   |   value |
|:-----------|:-----------|--------:|
| sc         | eq         |       8 |

## Image
interieur.jpg
## Text
> A l’intérieur, tout le confort d’un refuge libre.
> Cheminée, table, bancs, scie, balai, pelle, et couchages superposés.
> Dans un coin de la cabane repose un tas de branches de pins aux aiguilles encore vertes.
> 
> Il n’est pas encore 17 heures mais la vallée est déjà plongée dans l’ombre.
## Choices
### J’ouvre les volets
| variable   | function   |   value |
|:-----------|:-----------|--------:|
| sc         | eq         |       9 |
### Pas de temps à perdre. Il faut couper du bois avant que la nuit ne tombe.
| variable   | function   |   value |
|:-----------|:-----------|--------:|
| sc         | eq         |       9 |

******

# FrScene10
## Conditions
| variable   | function   |   value |
|:-----------|:-----------|--------:|
| sc         | eq         |       9 |

## Text
> Pas de bois sec à proximité et la plupart des arbres aux alentours de la cabane présentent déjà des marques de prélèvement.
> Ne restent que d’énormes troncs au sol.
> 
> J’entreprends de scier l’un d’entre eux à son extrémité.
> 
> La pièce est lourde et demandera certainement à être débitée de nouveau à l’intérieur de la cabane.
## Choices
### Continuer
| variable   | function   |   value |
|:-----------|:-----------|--------:|
| sc         | eq         |      10 |

******

# FrScene11
## Conditions
| variable   | function   |   value |
|:-----------|:-----------|--------:|
| sc         | eq         |      10 |

## Text
> A 18 heures, il fait déjà nuit et le thermomètre à l’intérieur du refuge ne dépasse guère 0°C.
> 
> Je démarre un feu avec des pommes de pins et quelques branches. Le bois est vert et peine à prendre feu.
> 
> J’allume une bougie que je place au coeur du foyer. Les aiguilles crépitent, résistent...
## Choices
### Continuer
| variable   | function   |   value |
|:-----------|:-----------|--------:|
| sc         | eq         |      11 |

******

# FrScene12
## Conditions
| variable   | function   |   value |
|:-----------|:-----------|--------:|
| sc         | eq         |      11 |

## Image
feu.jpg
## Text
> Le feu finit par démarrer.
> 
> J’insère le premier morceau de bûche et place le second à proximité, dans l’espoir de le faire sécher le plus possible.
> Le poêle dispense une chaleur agréable mais qui chute très rapidement dès lors qu’on s’en écarte.
## Choices
### Continuer
| variable   | function   |   value |
|:-----------|:-----------|--------:|
| sc         | eq         |      12 |

******

# FrScene13
## Conditions
| variable   | function   |   value |
|:-----------|:-----------|--------:|
| sc         | eq         |      12 |

## Image
tisane.jpg
## Text
> Une fois le dîner terminé, il n’est pas encore 21 heures mais je m’apprête à enfiler mon sac de couchage.
> 
> Avant cela, je prends soin de ranger les affaires, en prévision d’éventuels visiteurs nocturnes.
## Choices
### Je cache le sac-à-dos sous un banc.
| variable   | function   | value   |
|:-----------|:-----------|:--------|
| sc         | eq         | 13      |
| sac        | eq         | banc    |
### J’accroche le sac à l’un des clous plantés aux murs de la cabane
| variable   | function   | value   |
|:-----------|:-----------|:--------|
| sc         | eq         | 13      |
| sac        | eq         | clou    |
### Je retire la nourriture du sac et la suspends à l’un des fils traversant la pièce.
| variable   | function   | value      |
|:-----------|:-----------|:-----------|
| sc         | eq         | 13         |
| sac        | eq         | nourriture |

******

# FrScene14nourrit
## Conditions
| variable   | function   | value      |
|:-----------|:-----------|:-----------|
| sc         | eq         | 13         |
| sac        | eq         | nourriture |

## Text
> Avec le feu se consumant tranquillement, et les quelques couvertures du refuge en supplément, la nuit passera en étant protégé du froid.
## Choices
### Continuer
| variable   | function   |   value |
|:-----------|:-----------|--------:|
| sc         | eq         |      14 |

******

# FrScene14clou
## Conditions
| variable   | function   | value   |
|:-----------|:-----------|:--------|
| sc         | eq         | 14      |
| sac        | eq         | clou    |

## Text
> Au milieu de la nuit, de petits bruits perturbent mon sommeil.
> 
> J'ouvre l'oeil et inspecte les lieux.
> Une souris est affairée autour de mon sac pendu et grignote une de mes barres énergétiques à travers l'une des poches !
> 
> Je chasse la voleuse et entreprends de suspendre la nourriture hors du sac au bout d'un fil.
> 
> Le reste de la nuit sera d'une tranquilité absolue.
## Choices
### Continuer
| variable   | function   |   value |
|:-----------|:-----------|--------:|
| sc         | eq         |      14 |

******

# FrScene14banc
## Conditions
| variable   | function   | value   |
|:-----------|:-----------|:--------|
| sc         | eq         | 13      |
| sac        | eq         | banc    |

## Text
> Le lendemain, le feu est éteint, il fait 4 degrés à l’intérieur et il neige au dehors.
> 
> J'entreprends de rassembler mes affaires et... HORREUR !
> 
> Les poches de mon sac ont été rongées de toutes parts par des visiteurs nocturnes !
> 
> Une bonne partie de mes réserves en nourriture est bonne à être jetée.
> 
> Tout en pestant contre cette mésaventure, je finis de me préparer pour le départ.
## Choices
### Continuer
| variable   | function   |   value |
|:-----------|:-----------|--------:|
| sc         | eq         |      15 |

******

# FrScene15
## Conditions
| variable   | function   | value   |
|:-----------|:-----------|:--------|
| sc         | eq         | 14      |
| sac        | neq        | banc    |

## Image
neige.jpg
## Text
> Le lendemain, le feu est éteint, il fait 4 degrés à l’intérieur et il neige au dehors.
> 
> Je rallume le feu et y place le dernier morceau de bûche, le temps du petit-déjeuner.
> 
> J’éteins le feu avec de la neige, léguant la dernière bûche aux prochains occupants, rassemble les affaires et me prépare pour le départ.
## Choices
### Continuer
| variable   | function   |   value |
|:-----------|:-----------|--------:|
| sc         | eq         |      15 |

******

# FrScene16
## Conditions
| variable   | function   |   value |
|:-----------|:-----------|--------:|
| sc         | eq         |      15 |

## Image
presque-mantet.jpg
## Text
> La neige fait place au grand ciel bleu.
> 
> En contrebas se devinent quelques maisons.
## Choices
### Continuer
| variable   | function   |   value |
|:-----------|:-----------|--------:|
| sc         | eq         |      16 |

******

# FrScene17
## Conditions
| variable   | function   |   value |
|:-----------|:-----------|--------:|
| sc         | eq         |      16 |

## Image
vue-mantet.jpg
## Text
> Il s’agit du village de Mantet, baigné par la lumière du soleil automnal.
## Choices
### Continuer
| variable   | function   |   value |
|:-----------|:-----------|--------:|
| sc         | eq         |      17 |

******

# FrScene18
## Conditions
| variable   | function   |   value |
|:-----------|:-----------|--------:|
| sc         | eq         |      17 |

## Image
panneau.jpg
## Text
> Je poursuis la descente et parviens au village.
> 
> Il est 12 heures 30.
## Choices
### Continuer
| variable   | function   |   value |
|:-----------|:-----------|--------:|
| sc         | eq         |      18 |

******

# FrScene19
## Conditions
| variable   | function   |   value |
|:-----------|:-----------|--------:|
| sc         | eq         |      18 |

## Image
mantet.jpg
## Text
> A suivre.
## Choices
### Recommencer
| variable   | function   |   value |
|:-----------|:-----------|--------:|
| sc         | eq         |       0 |

******


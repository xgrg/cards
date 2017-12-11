Conditions:
lang:eq:ca

#####
# CaScene1
## Conditions
sc:eq:0

## Image
vallter.jpg
## Text
_Dos quarts de un, carretera de Vallter, Pirineus Catalans_

Els graus devallen a mesura que es segueixin les corbes. A prop del parquing casi buit de la estació de Vallter 2000, el termometre indica 4 petits graus.

Desprès de que em posés unes capes més, que fes una ultima verificació de la motxilla i un ràpid entrepà, i estaré llest per sortir.
## Choices
### Portaré la meva jaqueta tallavent.

sc:eq:1
equip:eq:coupevent

### Portaré el forro polar, abric i jaqueta tallavent.

sc:eq:1
equip:eq:polaire

### Ho he pensat, i finalment surto amb la samarreta.

sc:eq:1
equip:eq:tshirt

#####
# CaScene2
## Conditions

sc:eq:1

## Image
vallter2.jpg
## Text
_Son les dues de la tarda, hora de la sortida de Vallter._

El camí comença amb una pujada seguint el GR10.
L'estació s’allunya poc a poc darrere.

Encara que les remuntades mecàniques fossin apagades, unes manxes de neu semblen avisar que la temporada de esqui s’està apropant.
La pujada es fa sense cap dificultat.
## Choices
### La pujada dona calor. Trec el meu forro polar.
sc:eq:scene_croise_marcheurs

@if
equip:eq:polaire

### Endavant
sc:eq:scene_croise_marcheurs

#####
# CaScene_croise_marcheurs
## Conditions

sc:eq:scene_croise_marcheurs

## Text
Saludo a uns excursionistes que ja estan baixant. Efectivament sembla més una hora per baixar que per pujar.

Un d’ells, que portava un vestit vermell de socorrista, es dirigeix a mi:

_\"- Bon dia, on vas ?  Cap al pic de la Dona ?\"_
## Choices
### Si, puja i baixa (mentida)
sc:eq:mensonge

### No, cap al refugi del Alemany (veritat)
sc:eq:verite

### No respondre i seguir el camí.
sc:eq:nepasrepondre


#####
# CaScene_mensonge
## Conditions

sc:eq:mensonge

## Text
L’home em dirigeix una mirada escèptica i continua la seva baixada.

Continuo la pujada.
## Choices
### Endavant

sc:eq:2

#####
# CaScene_nepasrepondre
## Conditions

sc:eq:nepasrepondre

## Text
Segueixo amb la pujada ni sense respondre al home, que no pot impedir una reacció de sorpresa.
## Choices
### Endavant

sc:eq:2

#####
# CaScene_verite
## Conditions

sc:eq:verite

## Text
_\"- Que tinguis bona ruta.\"_

Segueixo amb la pujada.
## Choices
### Endavant

sc:eq:2

#####
# CaScene3
## Conditions

sc:eq:2
## Image
borne.jpg
## Text
Arribant a la Porteille de Mentet, una fita senyala la frontera amb França. El rellotge marca les 3.
## Choices
### Es massa tard per passar al Nord. Torno cap a Vallter.
sc:eq:back-to-vallter

### Segueixo.

sc:eq:3

### El vent bufa al coll. Em poso la meva jaqueta talla-vent per seguir el camí.

sc:eq:3
@if
equip:eq:tshirt


#####
# CaScene3b
## Conditions

sc:eq:back-to-vallter

## Text
Seguretat abans de tot. Baixo cap a Vallter i torno al cotxe fins i tot abans la posta del sol.

Però sé una cosa : ja hi tornaré.

Fi.
## Choices
### Tornar al inici

sc:eq:0

#####
# CaScene4
## Conditions

sc:eq:3

## Image
vallee.jpg
## Text
Al passar el coll es pot veure pel canto Nord un vall amb bosc tirant recta cap al poble de Mentet.

A mesura que l’ombra l’invadeixi, la temperatura es fa més fresca.
Les poques manxes de neu ara son geleres orgulloses.
La baixada es fa sense dificultat, els passos es segueixen amb seguretat fins l’entrada del bosc.
## Choices
### Endavant

sc:eq:4

#####
# CaScene5
## Conditions

sc:eq:4

## Image
bois.jpg
## Text
El camí segueix tranquil·lament una riera que porta igualment les primeres marques del proper invern.

Les marques es segueixen al llarg del sender.
## Choices
### Endavant

sc:eq:5

#####
# CaScene6
## Conditions

sc:eq:5

## Image
berger.jpg
## Text
Una cabana apareix al fons a ma esquerra.
## Choices
### Esta fora del sender. Segueixo el meu camí sense hi fer cas.

sc:eq:7

### M’hi apropo.

sc:eq:6

#####
# CaScene7
## Conditions

sc:eq:6

## Image
berger2.jpg
## Text
Les persianes estan tancades.
La xemeneia no fa fum.

Només un crani de vaca aculleix els senderistes que passen.

Una serradura sobre la porta.
Sembla la cabana del pastor.
Tancada, que no fa sorpresa.

Uns trossos bonics de llenya estan per la terra davant la cabana.

A prop, sobre una gran pedra plana, es llegeix l’inscripciò gravada “Refugi a 250 m”
## Choices
### Segueixo amb la meva ruta.

sc:eq:7

### Recullo un tros de fusta abans d’anar mes endavant.

sc:eq:7


#####
# CaScene8
## Conditions

sc:eq:7

## Image
alemany.jpg
## Text
Trobo una nova cabana, oberta. Es el refugi de l’Alemany.
## Choices
### Endavant

sc:eq:8

#####
# CaScene9
## Conditions

sc:eq:8

## Image
interieur.jpg
## Text
A dins, tota la comoditat d’un refugi lliure.
Xemeneia, taula, bancs, serra, escombra, pala, i lliteres.
En un racó de la cabana es troben rams de pins amb agulles encara verdes.

Encara no son les 5 de la tarda, però el vall ja esta totalment en l’ombra.
## Choices
### Obro les persianes.

sc:eq:9

### Cal no perdre temps. Cal tallar fusta abans de que la nit caigui.

sc:eq:9


#####
# CaScene10
## Conditions

sc:eq:9

## Text
Cap fusta seca a prop, i la majoria dels arbres al voltant de la cabana ja mostren marques de destral.
Només queden troncs enormes per la terra.

Començo a serrar un d’ells.

Aquest tros es pesat i necessitara segurament ser tallat de nou a dins la cabana.
## Choices
### Endavant

sc:eq:10


#####
# CaScene11
## Conditions

sc:eq:10

## Text
A les 6 de la tarda, ja es fa fosc i et termòmetre a dins el refugi ronda els 0°C.

Començo un foc amb pinyes i unes branques. La fusta esta verda i té dificultat per encendre’s.

Encenc una espelma que poso en mig de la llar del foc. Les agulles de pins crepiten, resisteixen...
## Choices
### Endavant

sc:eq:11

#####
# CaScene12
## Conditions

sc:eq:11

## Image
feu.jpg
## Text
El foc finalment s’ha encès.

Introdueixo el primer tros de fusta i poso el segon a prop, amb l’esperança de fer-ho secar el mes aviat possible.
La llar del foc distribueix una calor agradable però que devalla molt ràpid a mesura que t’en allunyes.
## Choices
### Endavant

sc:eq:12

#####
# CaScene13
## Conditions

sc:eq:12

## Image
tisane.jpg
## Text
Un cop el sopar ha acabat, encara no son les 9 del vespre però em preparo per entrar en el sac de dormir

Abans d’això, tinc cura d’arreglar les coses, en previsió de possibles visitants nocturns.
## Choices
### Amago la motxilla sota el banc.

sc:eq:13
sac:eq:banc

### Penjo la motxilla a un dels claus clavats dels murs de la cabana.

sc:eq:13
sac:eq:clou

### Trec el menjar de la motxilla i el penjo d’un dels fils que creua la sala.

sc:eq:13
sac:eq:nourriture


#####
# CaScene14nourrit
## Conditions


sc:eq:13
sac:eq:nourriture

## Text
Amb el foc que es va consumint poc a poc, i unes mantes del refugi de sobres, la nit tindrà lloc sense cap problema de fred.
## Choices
### Endavant

sc:eq:14

#####
# CaScene14clou
## Conditions

sc:eq:13
sac:eq:clou

## Text
En mig de la nit, uns sorollets es posen a molestar el meu son.

Obro un ull i vigilo el lloc.
Un ratolí esta al voltant de la meva motxilla penjada i esta rosegant una de les meves barretes energètiques a traves d’una butxaca !

Persegueixo la lladra i començo a penjar el menjar fora de la motxilla amb un fil.

La resta de la nit serà amb una tranquil·litat perfecta.
## Choices
### Endavant

sc:eq:14

#####
# CaScene14banc
## Conditions

sc:eq:13
sac:eq:banc

## Text
Al dia següent, el foc esta apagat, fan 4 graus a dintre i neva fora.

Començo per recollir les meves coses i… quin HORROR !

Les butxaques de la meva motxilla han sigut rosegades per totes bandes per visitors nocturns !

Ara una bona part de les meves reserves de menjar pot treure’s.

Mentre em queixo de aquest accident, acabo de preparar-me per la sortida.
## Choices
### Endavant

sc:eq:15

#####
# CaScene15
## Conditions

sc:eq:14
sac:neq:banc

## Image
neige.jpg
## Text
Al dia següent, el foc esta apagat, fan 4 graus a dintre i neva fora.

Encenc el foc de nou i hi poso l’ultim tros de fusta, mentre el esmorzar

Apago el foc amb neu, oferint l’ultim tros de fusta als propers inquilins, recullo les coses i em preparo per la sortida.
## Choices
### Endavant
sc:eq:15

#####
# CaScene16
## Conditions

sc:eq:15

## Image
presque-mantet.jpg
## Text
La neu deixa de caure i deixa pas a un cel blau.

Cap a baix s’endivinen unes cases.
## Choices
### Endavant

sc:eq:16

#####
# CaScene17
## Conditions

sc:eq:16

## Image
vue-mantet.jpg
## Text
Es el poble de Mentet, banyat per la llum del sol de tardor.
## Choices
### Endavant

sc:eq:17

#####
# CaScene18
## Conditions

sc:eq:17

## Image
panneau.jpg
## Text
Segueixo amb la baixada i arribo al poble.

Son les 12 i mitja.
## Choices
### Endavant

sc:eq:18

#####
# CaScene19
## Conditions

sc:eq:18

## Image
mantet.jpg
## Text
To be continued.
## Choices
### Tornar al inici

sc:eq:0

#####

# Test
## Conditions
@action:eq:"start"

## Text
Démarrer

## Choices
### Continuer.
imprevus:eq:91
@action:eq:"visite-antoine"
--------
# Introduction
## Conditions
@action:eq:"visite-antoine"

## Text
Antoine n’avait changé en rien même après toutes ces années. Seul deux verres de lunettes s’étaient ajoutés à son portrait.

Ce détail mis à part, c’était le même.

Il venait d’emménager au cours de l’année dans cet appartement au pied du Cap Martin, un peu vieillot mais fort agréable au demeurant, avec une petite vue mer et surtout sur les montagnes à l’est, qui baignaient alors dans la lumière orangée du couchant.

## Choices
### Au milieu de la conversation, mon regard fut attiré au loin...

@action:eq:"feu-plan-lion"
imprevus:-:10

@if

imprevus:gt:90

-------
# Incendie-plan-lion
## Conditions
@action:eq:"feu-plan-lion"
## Image
bg3.png
## Text

Dans le coin de mon oeil une imposante masse sombre attira soudain mon regard. Au loin la montagne était en proie aux flammes et je reconnus alors le Plan du Lion à travers un immense nuage de fumée noire.
Je m’interrompis aussitôt devant l’envergure du feu.

*- Comment s’est-il déclenché ?*
*- Des gens sont-ils en danger ?*
*- Sera-t-il maîtrisé avant de descendre jusqu’à la ville ?*

S’il venait à se propager, nous serions les premiers menacés. Autour de moi, je ne trouvais que les mêmes regards interrogatifs.

## Choices
### Continuer.
-------

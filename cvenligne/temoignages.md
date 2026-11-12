# Ajouter des témoignages (réels uniquement)

La section « Témoignages » est **masquée** tant qu'aucun témoignage n'est ajouté. Elle apparaît automatiquement dès qu'il y en a au moins un.

## Règles
- Uniquement des propos réellement tenus par des personnes qui ont travaillé avec Yannick : apprenants, professionnels accompagnés, collaborateurs, partenaires.
- **Accord écrit** de la personne (un message WhatsApp ou un e-mail suffit), qui précise :
  - le texte exact publié ;
  - la forme du nom (par exemple « Awa K. ») ;
  - la fonction affichée.
- Ne jamais publier de nom complet, de photo ou d'employeur sans accord explicite.
- Ne pas reformuler au point de changer le sens. Une traduction anglaise fidèle est acceptable.

## Où les ajouter
Dans `index.html`, en bas de page, modifier la ligne :

```js
const TESTIMONIALS=[];
```

Exemple de format (les valeurs sont à remplacer par un vrai témoignage) :

```js
const TESTIMONIALS=[
  {fr:"Texte exact du témoignage.", en:"Faithful English translation.", name:"Prénom N.", role_fr:"Fonction, ville", role_en:"Role, city"}
];
```

## Questions pour recueillir un témoignage
1. Quel était votre objectif en anglais avant de travailler avec Yannick ?
2. Qu'est-ce qui vous bloquait le plus (prise de parole, vocabulaire, confiance, examen…) ?
3. Qu'avez-vous travaillé ensemble, et sous quelle forme (individuel, groupe, en entreprise, en ligne) ?
4. Qu'est-ce qui a changé concrètement depuis (réunion, entretien, poste, examen, aisance) ?
5. Qu'avez-vous le plus apprécié dans sa façon d'accompagner ?
6. Recommanderiez-vous cet accompagnement, et à qui ?
7. Sous quelle forme acceptez-vous d'être cité (prénom et initiale, fonction, ville) ?

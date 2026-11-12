# Portfolio : ce qui a changé (26/10/2026)

## Conservé
- La structure : une page, statique, sans dépendance. Le déploiement Netlify reste identique (`publish = "."`).
- L'identité visuelle : ivoire, anthracite, bronze et vert sauge, avec des titres en serif.
- Le bilinguisme français / anglais, avec mémorisation du choix.
- Tous les contenus vérifiés :
  - Master à l'Université Félix Houphouët-Boigny ;
  - Adventiste Private School ;
  - ISTG Saint-Pierre-Marie, de 2021-2022 à 2024-2025 ;
  - mémoire de master ;
  - manuscrit non publié ;
  - les projets Remind Me et Yanova Store, avec le même texte et le même statut ;
  - les contacts.

## Amélioré
- **Contenu, repris de la page « Pourquoi nous ? / Derrière SpeakPro » et du profil de coach sur SpeakPro Academy**, sans rien ajouter :
  - le positionnement « coach en anglais professionnel, formateur et interprète » ;
  - les trois dimensions (English Coaching, Education & Training, Translation & Interpreting) ;
  - les publics formés ;
  - les environnements professionnels : Perseus Mining, Nourmony Holdings, Teamwise Group, Émergence et MIDEQ ;
  - les délégations accompagnées (Sierra Leone, Nigeria, Inde) ;
  - l'approche et les programmes encadrés.
- **Mention à compléter retirée** : la mention « [Nature exacte des interventions à préciser] » a été remplacée par la nature de chaque collaboration, telle qu'elle est décrite sur SpeakPro Academy.
- **Nom d'entreprise corrigé** : « Nourmony Holding » devient « Nourmony Holdings », comme sur SpeakPro Academy.
- **SpeakPro Academy** est présentée comme projet principal : description, rôle de fondateur, méthode en 6 étapes et deux captures d'écran du site (accueil et profil de coach).
- **Nouvelles sections** : À propos, Approche, Environnements professionnels, Parcours complet, galerie photo, et une section Témoignages (masquée pour l'instant).
- **Design** :
  - typographie Fraunces, la même que SpeakPro Academy ;
  - portrait en arche ;
  - hiérarchie plus nette ;
  - apparitions discrètes au défilement (désactivées si l'appareil demande moins d'animations) ;
  - mode sombre automatique ;
  - sur téléphone, le portrait s'affiche en premier.
- **Performance** : les images, auparavant intégrées dans le HTML (environ 800 Ko d'un seul bloc), sont maintenant des fichiers WebP séparés. Elles ne se chargent qu'au moment où elles apparaissent à l'écran.
- **Pratique pour la carte de visite** :
  - un bouton « Enregistrer le contact » (fiche .vcf) ;
  - une image d'aperçu pour le partage du lien ;
  - le paramètre `?lang=en` pour ouvrir directement la version anglaise.
- **Accessibilité et référencement** :
  - lien d'évitement vers le contenu ;
  - textes alternatifs sur les images ;
  - focus clavier visible ;
  - fermeture du menu avec la touche Échap ;
  - données structurées (Person) ;
  - page 404.

## Photos
- Seules les photos authentiques déjà présentes dans le portfolio ou sur SpeakPro Academy sont utilisées : portrait, séances, remises de certificats, soutenance.
- Les deux photos d'illustration génériques de la page « Pourquoi nous ? » de SpeakPro n'ont pas été reprises.

## Vérifications effectuées
Test automatisé dans un navigateur, à 1440, 820 et 390 px de large, en français et en anglais. Résultat : 45 contrôles réussis, 0 échec. Contrôles effectués :
- toutes les images se chargent ;
- pas de défilement horizontal ;
- les ancres internes sont valides ;
- aucun texte français ne reste en version anglaise ;
- le menu mobile s'ouvre et se referme ;
- le changement de langue fonctionne et apparaît dans l'adresse ;
- la section témoignages est masquée ;
- aucune erreur JavaScript ;
- la fiche contact et la page 404 sont accessibles.

## Ce qui n'a pas pu être vérifié
- Les liens externes (speakproacademy.net, remind-me-saas.vercel.app, la boutique Shopify, WhatsApp). Cet environnement n'a pas accès à ces sites ; les adresses ont été reprises telles quelles.
- Les polices Google Fonts, bloquées pendant les tests. Les captures ont été faites avec la police de secours (Georgia) ; en ligne, la police Fraunces s'affichera.
- Les captures de SpeakPro Academy ont été prises sur la version du site enregistrée sur GitHub, pas sur le site en ligne.
- Le déploiement Netlify n'a pas été fait.

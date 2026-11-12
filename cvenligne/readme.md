# Portfolio de Yannick Akesse

Site statique : une seule page, bilingue français / anglais, sans étape de construction et sans dépendance.

## Déployer sur Netlify
1. Ouvrir Netlify, puis Sites, puis le site du portfolio, puis Deploys.
2. Glisser-déposer **le dossier** `portfolio` (ou ce zip une fois décompressé).

Le fichier `netlify.toml` publie la racine (`publish = "."`) et ajoute :
- des en-têtes de sécurité ;
- la mise en cache des images ;
- le téléchargement correct de la fiche contact (`.vcf`).

## Langue
- Le site s'affiche en français par défaut.
- Le bouton EN bascule en anglais. Le choix est mémorisé dans le navigateur et ajouté à l'adresse (`?lang=en`).
- Pour un QR code en anglais, utiliser l'adresse du site suivie de `?lang=en`.

## Contenu
| Fichier | Rôle |
|---|---|
| `index.html` | Tout le contenu. Le texte français est dans le HTML, la traduction anglaise dans l'objet `T.en` en bas de page. |
| `media/` | Les photos en WebP. `og-yannick-akesse.jpg` est l'image d'aperçu affichée quand on partage le lien (WhatsApp, LinkedIn…). |
| `yannick-akesse.vcf` | La fiche contact à enregistrer dans le téléphone (bouton « Enregistrer le contact »). |
| `TEMOIGNAGES.md` | Comment ajouter des témoignages réels. La section reste masquée tant qu'il n'y en a aucun. |
| `404.html` | La page affichée pour une adresse inexistante. |

## Après le premier déploiement
Une fois l'adresse définitive connue (par exemple `https://yannick-akesse.netlify.app`), remplacer dans `index.html` l'adresse relative de l'image d'aperçu par l'adresse complète. Certains réseaux n'affichent l'aperçu qu'avec une adresse complète.

```html
<meta property="og:image" content="https://VOTRE-ADRESSE/media/og-yannick-akesse.jpg">
```

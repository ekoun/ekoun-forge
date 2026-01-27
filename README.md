# 🎨 EKOUN DIGITAL FORGE - Site Web

Site web moderne, responsive et élégant pour l'agence de design stratégique et digital **Ekoun Digital Forge**.

## ✨ Fonctionnalités

### 🌐 Interface Multilingue
- **Français (FR)** et **Anglais (EN)** 
- Changement de langue en un clic via le bouton dans le header

### 🎨 Mode Clair & Sombre
- Thème clair et sombre avec transition fluide
- Toggle via l'icône soleil/lune dans le header

### 📱 Responsive Design
- **Desktop** : ≥ 1200px
- **Tablet** : 768-1024px  
- **Mobile** : 320-767px
- Navigation adaptative avec menu hamburger sur mobile

### 🚀 Sections & Fonctionnalités

#### 1. **Écran de Chargement (Loading Screen)**
- Logo animé avec effet pulse et glow violet
- Barre de progression
- Transition fluide vers la page d'accueil

#### 2. **Header / Navigation**
- Sticky header avec effet blur
- Menu : Agence | Services | Projets | Contact
- Boutons : Thème, Langue, Menu mobile
- Scroll fluide vers les sections

#### 3. **Hero Section**
- Fond animé avec formes géométriques violettes
- Titre accrocheur en typographie Montserrat Alternates
- 2 boutons CTA : "Voir nos réalisations" et "Démarrer un projet"
- Indicateur de scroll animé

#### 4. **Section Agence**
- Présentation de l'agence (3 paragraphes)
- Statistiques animées : 5+ ans, 120+ projets, 98% clients satisfaits
- Image flottante avec effet parallaxe

#### 5. **Section Services (4 cartes)**
- 🎨 Design Graphique
- 💻 Développement Web
- 📈 Stratégie Digitale
- 📱 UI/UX Design
- Hover avec élévation et glow
- Liste de features avec checkmarks

#### 6. **Section Projets**
- **Slider horizontal** pour projets créatifs (auto-play optionnel)
- **Grid 4 cartes** pour projets web avec tags technologiques
- Navigation avec flèches et pagination
- Hover 3D sur les cartes

#### 7. **Section Contact**
- **Colonne Infos** : Email, WhatsApp, Localisation, Réseaux sociaux
- **Colonne Formulaire** : Nom, Email, Téléphone, Sujet, Message
- Labels flottants animés
- États : normal / focus / erreur / succès
- Responsive : colonnes empilées sur mobile

#### 8. **Footer**
- Logo et slogan
- Liens rapides, services, mentions légales
- Copyright avec icône cœur animée

### 🎭 Animations & Interactions
- ✅ Scroll fade-up sur toutes les sections
- ✅ Hover avec glow et translation sur les cartes
- ✅ Parallaxe léger dans le Hero
- ✅ Compteurs animés pour les statistiques
- ✅ Smooth scroll
- ✅ Slider avec navigation
- ✅ Boutons CTA avec animations
- ✅ Menu mobile avec overlay animé
- ✅ Logo avec pulse et glow dans le loading screen

## 🖼️ Remplacement des Images Placeholder

### Images Actuelles (Unsplash)
Les images suivantes peuvent être remplacées par vos propres visuels :

1. **Section Agence** (`AgencySection.tsx`, ligne ~90) :
```tsx
<ImageWithFallback
  src="VOTRE_URL_ICI"
  alt="Ekoun Digital Forge Agency"
  className="w-full h-[500px] object-cover"
/>
```

2. **Projets Créatifs** (`ProjectsSection.tsx`, ligne ~15-31) :
```tsx
const creativeProjects = [
  { title: t('projects.creative.1'), image: 'VOTRE_URL_ICI' },
  { title: t('projects.creative.2'), image: 'VOTRE_URL_ICI' },
  { title: t('projects.creative.3'), image: 'VOTRE_URL_ICI' },
  { title: t('projects.creative.4'), image: 'VOTRE_URL_ICI' },
];
```

3. **Projets Web** (`ProjectsSection.tsx`, ligne ~34-58) :
```tsx
const webProjects = [
  { title: t('projects.web.1'), image: 'VOTRE_URL_ICI', tags: [...] },
  { title: t('projects.web.2'), image: 'VOTRE_URL_ICI', tags: [...] },
  { title: t('projects.web.3'), image: 'VOTRE_URL_ICI', tags: [...] },
  { title: t('projects.web.4'), image: 'VOTRE_URL_ICI', tags: [...] },
];
```

4. **Logo dans LoadingScreen** (`LoadingScreen.tsx`, ligne ~30-39) :
Remplacez le logo placeholder par votre propre logo :
```tsx
<div className="relative w-32 h-32 bg-gradient-to-br from-violet-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-2xl">
  {/* Remplacez par : <img src="VOTRE_LOGO.png" alt="Logo" /> */}
  <span className="text-white text-4xl font-['Montserrat_Alternates'] font-bold">
    ED
  </span>
</div>
```

5. **Logo dans Header** (`Header.tsx`, ligne ~54-61) :
```tsx
<div className="w-10 h-10 bg-gradient-to-br from-violet-500 to-purple-600 rounded-lg flex items-center justify-center shadow-lg">
  {/* Remplacez par : <img src="VOTRE_LOGO.png" alt="Logo" /> */}
  <span className="text-white text-sm font-['Montserrat_Alternates'] font-bold">
    ED
  </span>
</div>
```

### 💡 Conseils pour les Images
- Utilisez des images de haute qualité (min. 1080px de largeur)
- Format recommandé : JPG pour photos, PNG pour logos avec transparence
- Optimisez les images pour le web (compression sans perte de qualité)
- Respectez les proportions recommandées pour chaque section

## 🎨 Personnalisation des Couleurs

La couleur principale est **Violet #8B5CF6** (Tailwind: `violet-500`).

Pour changer la couleur principale, recherchez et remplacez dans tous les composants :
- `violet-500` → votre couleur
- `purple-600` → nuance complémentaire
- `from-violet-500 to-purple-600` → votre dégradé

## 📝 Modification des Textes

Tous les textes sont centralisés dans `/src/app/context/AppContext.tsx` dans l'objet `translations`.

Structure :
```tsx
const translations = {
  fr: { /* Textes français */ },
  en: { /* Textes anglais */ }
};
```

## 🔧 Technologies Utilisées

- **React 18.3.1** - Framework UI
- **TypeScript** - Typage statique
- **Tailwind CSS v4** - Styles utilitaires
- **Motion (Framer Motion)** - Animations
- **Lucide React** - Icônes
- **Vite** - Build tool

## 📦 Structure du Projet

```
src/
├── app/
│   ├── components/
│   │   ├── LoadingScreen.tsx       # Écran de chargement
│   │   ├── Header.tsx               # Navigation
│   │   ├── Hero.tsx                 # Section héro
│   │   ├── AgencySection.tsx        # Section agence
│   │   ├── ServicesSection.tsx      # Services (4 cartes)
│   │   ├── ProjectsSection.tsx      # Projets (slider + grid)
│   │   ├── ContactSection.tsx       # Contact (formulaire)
│   │   └── Footer.tsx               # Pied de page
│   ├── context/
│   │   └── AppContext.tsx           # Context (langue, thème, traductions)
│   └── App.tsx                      # Composant principal
├── styles/
│   ├── fonts.css                    # Import Google Fonts
│   ├── theme.css                    # Variables CSS & thème
│   └── index.css                    # Import des styles
```

## 🚀 Démarrage Rapide

1. Le projet est déjà configuré et prêt à l'emploi
2. Remplacez les images placeholder par vos propres visuels
3. Modifiez les textes dans `AppContext.tsx` si nécessaire
4. Personnalisez les couleurs si souhaité

## 📧 Contact

Pour toute question ou assistance :
- 📧 Email : contact@ekoundigitalforge.com
- 💬 WhatsApp : +221 00 000 00 00
- 📍 Localisation : Dakar, Sénégal

---

© 2026 Ekoun Digital Forge – Conçu avec ❤️ pour la performance digitale

# TODO: Transformer le site web en application mobile Android et iOS

## Étape 1: Préparation du site web pour la conversion en PWA
- [ ] Vérifier la responsivité du site sur mobile (utiliser les outils de développement Chrome/Firefox)
- [ ] Optimiser les images pour le mobile (compression, formats WebP)
- [ ] Assurer que toutes les ressources externes (fonts, CDN) sont accessibles hors ligne si possible
- [ ] Tester la fonctionnalité sur différents navigateurs mobiles

## Étape 2: Implémentation des fonctionnalités PWA de base
- [ ] Créer un fichier `manifest.json` avec :
  - Nom de l'application
  - Icônes pour différentes tailles (192x192, 512x512)
  - Couleurs du thème
  - Mode d'affichage (standalone)
  - Orientation préférée
- [ ] Ajouter le lien vers le manifest dans le `<head>` de index.html
- [ ] Créer un service worker (`sw.js`) pour :
  - Mise en cache des ressources statiques (HTML, CSS, JS, images)
  - Stratégie de cache pour les requêtes réseau
  - Gestion du mode hors ligne
- [ ] Enregistrer le service worker dans script.js
- [ ] Ajouter les meta tags pour l'installation PWA :
  - `apple-mobile-web-app-capable`
  - `apple-mobile-web-app-status-bar-style`
  - `apple-mobile-web-app-title`

## Étape 3: Test de la PWA
- [ ] Tester l'installation sur Chrome Android
- [ ] Tester l'installation sur Safari iOS
- [ ] Vérifier le fonctionnement hors ligne
- [ ] Tester les notifications push (si implémentées)
- [ ] Valider avec Lighthouse (score > 90 pour PWA)

## Étape 4: Configuration de Capacitor pour le wrapping natif
- [ ] Installer Node.js et npm si pas déjà fait
- [ ] Installer Capacitor globalement : `npm install -g @capacitor/cli`
- [ ] Initialiser Capacitor dans le projet : `npx cap init`
  - Nom de l'app
  - Package ID (com.exemple.invitation)
  - Web directory (racine du projet)
- [ ] Ajouter les plateformes :
  - `npx cap add android`
  - `npx cap add ios`
- [ ] Configurer capacitor.config.json :
  - Plugins nécessaires
  - Permissions
  - Autres configurations

## Étape 5: Développement et configuration Android
- [ ] Ouvrir le projet Android : `npx cap open android`
- [ ] Configurer AndroidManifest.xml :
  - Permissions (INTERNET, ACCESS_NETWORK_STATE)
  - Orientation
  - Icônes et splash screens
- [ ] Personnaliser les ressources Android :
  - Icônes dans res/mipmap-*
  - Splash screen
  - Couleurs et thèmes
- [ ] Tester sur émulateur Android
- [ ] Générer l'APK de debug : `./gradlew assembleDebug`
- [ ] Générer l'APK de release signé

## Étape 6: Développement et configuration iOS
- [ ] Ouvrir le projet iOS : `npx cap open ios` (nécessite macOS)
- [ ] Configurer Info.plist :
  - Permissions
  - Orientation
  - Capacités (si nécessaire)
- [ ] Personnaliser les ressources iOS :
  - Icônes dans Assets.xcassets
  - Splash screen (LaunchScreen.storyboard)
  - Configuration des builds
- [ ] Tester sur simulateur iOS
- [ ] Archiver l'app pour distribution : Xcode > Product > Archive

## Étape 7: Fonctionnalités natives supplémentaires (optionnel)
- [ ] Ajouter des plugins Capacitor pour :
  - Partage (Social Sharing)
  - Notifications push (Push Notifications)
  - Géolocalisation (si nécessaire pour la carte)
  - Contacts (pour partager l'invitation)
- [ ] Implémenter la synchronisation des données (si nécessaire)
- [ ] Ajouter un système de mise à jour automatique

## Étape 8: Tests et optimisation
- [ ] Tests sur différents appareils physiques
- [ ] Tests de performance (taille de l'app, consommation mémoire)
- [ ] Tests de sécurité (certificats SSL, etc.)
- [ ] Optimisation de la taille de l'app :
  - Compression des ressources
  - Lazy loading des images
  - Minification du code

## Étape 9: Publication sur les stores
- [ ] Préparer les assets pour les stores :
  - Captures d'écran
  - Descriptions
  - Icônes haute résolution
- [ ] Publier sur Google Play Store :
  - Créer un compte développeur
  - Upload de l'APK/AAB
  - Configuration des détails de l'app
  - Tests internes/beta si nécessaire
- [ ] Publier sur Apple App Store :
  - Créer un compte développeur Apple
  - Upload via App Store Connect
  - Configuration des métadonnées
  - Soumission pour review

## Étape 10: Maintenance et mises à jour
- [ ] Mettre en place un système de monitoring (analytics)
- [ ] Planifier les mises à jour régulières
- [ ] Gérer les retours utilisateurs
- [ ] Maintenir la compatibilité avec les nouvelles versions d'OS

## Outils et ressources nécessaires
- Node.js et npm
- Android Studio (pour Android)
- Xcode (pour iOS, macOS requis)
- Capacitor CLI
- Compte développeur Google Play
- Compte développeur Apple
- Outils de compression d'images
- Éditeur de code (VS Code recommandé)

## Points d'attention particuliers
- La musique de fond peut poser des problèmes sur mobile (autoplay)
- Les animations CSS peuvent impacter les performances sur appareils bas de gamme
- La géolocalisation dans l'iframe Google Maps nécessite des permissions spéciales
- Assurer la conformité RGPD pour les données utilisateurs

# TODO: Convertir le site web en application mobile pour Android et iOS

## Méthode choisie: Application Hybride avec Apache Cordova
Cette approche permet de créer des applications natives pour Android et iOS en encapsulant le site web existant dans une coquille native, permettant la publication sur les stores d'applications.

## Étape 1: Préparation de l'environnement de développement
- [ ] Installer Node.js (version LTS) sur votre système
- [ ] Installer Apache Cordova CLI globalement: `npm install -g cordova`
- [ ] Installer les SDK nécessaires:
  - [ ] Android Studio pour le développement Android
  - [ ] Xcode pour le développement iOS (nécessite un Mac)
- [ ] Configurer les variables d'environnement pour Android (ANDROID_HOME, etc.)

## Étape 2: Analyse et optimisation du site web existant
- [ ] Vérifier la compatibilité mobile du site (responsive design)
- [ ] Optimiser les performances pour mobile:
  - [ ] Compresser les images
  - [ ] Minifier le CSS et JavaScript
  - [ ] Optimiser les polices web
- [ ] Tester le site sur différents navigateurs mobiles
- [ ] S'assurer que toutes les ressources externes sont accessibles (Google Fonts, Font Awesome, etc.)

## Étape 3: Création du projet Cordova
- [ ] Créer un nouveau projet Cordova: `cordova create bac-en-poche-app com.example.bacenpoche "Bac en Poche"`
- [ ] Naviguer dans le dossier du projet: `cd bac-en-poche-app`
- [ ] Copier tous les fichiers du site web (HTML, CSS, JS, images) dans le dossier `www/`
- [ ] Modifier les chemins relatifs si nécessaire pour correspondre à la structure Cordova

## Étape 4: Configuration des plateformes
- [ ] Ajouter la plateforme Android: `cordova platform add android`
- [ ] Ajouter la plateforme iOS: `cordova platform add ios`
- [ ] Vérifier les plateformes ajoutées: `cordova platform ls`

## Étape 5: Configuration de l'application
- [ ] Modifier le fichier `config.xml` pour configurer:
  - [ ] Nom de l'application
  - [ ] Identifiant de bundle
  - [ ] Version
  - [ ] Icônes et écrans de démarrage
  - [ ] Permissions nécessaires (internet, stockage, etc.)
- [ ] Créer des icônes adaptées aux différentes tailles (Android et iOS)
- [ ] Configurer les écrans de démarrage (splash screens)

## Étape 6: Gestion des plugins Cordova
- [ ] Installer les plugins nécessaires:
  - [ ] Plugin pour la musique: `cordova plugin add cordova-plugin-media`
  - [ ] Plugin pour les notifications locales si besoin
  - [ ] Plugin pour le partage si nécessaire
- [ ] Adapter le code JavaScript pour utiliser les APIs Cordova au lieu des APIs web standard

## Étape 7: Développement et tests
- [ ] Tester l'application sur émulateur Android: `cordova emulate android`
- [ ] Tester l'application sur émulateur iOS: `cordova emulate ios`
- [ ] Tester sur appareils physiques si possible
- [ ] Déboguer et corriger les problèmes spécifiques mobiles:
  - [ ] Gestion du bouton retour
  - [ ] Comportement hors ligne
  - [ ] Performances sur mobile

## Étape 8: Build des applications
- [ ] Build pour Android: `cordova build android --release`
- [ ] Générer l'APK signé pour Android
- [ ] Build pour iOS: `cordova build ios --release`
- [ ] Générer l'IPA pour iOS via Xcode

## Étape 9: Publication sur les stores
### Pour Android (Google Play Store):
- [ ] Créer un compte développeur Google Play
- [ ] Préparer les assets de publication (icônes, captures d'écran, description)
- [ ] Signer l'APK avec une clé de publication
- [ ] Téléverser l'APK sur Google Play Console
- [ ] Configurer les détails de l'application (prix, disponibilité, etc.)
- [ ] Publier l'application

### Pour iOS (App Store):
- [ ] Créer un compte développeur Apple
- [ ] Préparer les assets de publication
- [ ] Utiliser Xcode pour archiver et uploader l'application
- [ ] Configurer l'application dans App Store Connect
- [ ] Soumettre pour révision
- [ ] Publier une fois approuvée

## Étape 10: Maintenance et mises à jour
- [ ] Mettre en place un système de suivi des utilisateurs (analytics)
- [ ] Préparer un plan de mise à jour pour corriger les bugs
- [ ] Surveiller les retours utilisateurs et les notes sur les stores
- [ ] Planifier les futures mises à jour avec de nouveaux contenus

## Alternatives et options supplémentaires
### Option 1: Progressive Web App (PWA) - Plus simple
- [ ] Ajouter un fichier manifest.json pour l'installation
- [ ] Implémenter un service worker pour le cache hors ligne
- [ ] Tester l'installation sur mobile
- [ ] Avantages: Pas besoin de stores, mise à jour automatique

### Option 2: Framework hybride moderne (Capacitor)
- [ ] Utiliser Capacitor au lieu de Cordova pour une meilleure performance
- [ ] Migrer le projet vers Capacitor
- [ ] Avantages: Meilleure intégration avec les APIs natives modernes

## Ressources nécessaires
- Compte développeur Google Play (25$)
- Compte développeur Apple (99$/an)
- Mac avec Xcode pour iOS
- Connaissances en développement mobile de base

## Estimation du temps
- Préparation: 1-2 jours
- Développement: 3-5 jours
- Tests et débogage: 2-3 jours
- Publication: 1-2 jours par plateforme
- Total: 1-2 semaines pour une première version

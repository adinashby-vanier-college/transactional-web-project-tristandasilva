import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: 'en',
    debug: true,
    resources: {
      en: {
        translation: {
          newlyAdded: 'Newly Added',
          weeklyTrends: 'Weekly Trends',
          staffPicks: 'Staff Picks',
          navigation: {
            search: 'Search',
            trending: 'Trending',
            recent: 'Recent',
            lessThanTen: 'Less Than Ten',
            discover: 'Discover',
            auth: {
              email: 'Email',
              password: 'Password',
              forgotPass: 'Forgot Password?',
              registerHere: 'Register Here',
              login: 'Login',
              firstName: 'First name',
              lastName: 'Last name',
              confirmPass: 'Confirm password',
              register: 'Register',
            },
          },
          cart: {
            cart: 'Cart',
            cartEmpty: 'Cart is empty.',
            checkout: 'Checkout',
          },
        },
      },
      fr: {
        translation: {
          newlyAdded: 'Nouvellement ajouté',
          weeklyTrends: 'Populaires cette semaine',
          staffPicks: "Les choix de l'équipe",
          navigation: {
            search: 'Rechercher',
            trending: 'Populaire',
            recent: 'Récent',
            lessThanTen: 'Moins de 10',
            discover: 'Découvrir',
            auth: {
              email: 'Courriel',
              password: 'Mot de passe',
              forgotPass: 'Mot de passe oublié?',
              registerHere: 'Enregistrez',
              login: 'Connexion',
              firstName: 'Prénom',
              lastName: 'Nom de famille',
              confirmPass: 'Confirmez mot de passe',
              register: 'Enregistrer',
              iHaveAccount: "J'ai un compte",
            },
          },
          cart: {
            cart: 'Panier',
            cartEmpty: 'Votre panier est vide',
            checkout: 'Procédez',
          },
        },
      },
    },
  });

export default i18n;

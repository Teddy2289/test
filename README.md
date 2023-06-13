# Readme
Le projet est structurer de la manière suivante:
dans src j'ai mis les fichies:
                -assets
                - components :              
                    - Accordion
                    -Banner
                    -HowITWork
                    -Layouts
                    -NavBar
                    -OurService
                -styles : les styles sont ici pour chacun des components
                -utils : dans cette repertoire il y a le data.js et le variants de ma framer motion

dans ce projet j'ai utilise les packages React Icons, Framer Motion et Styled Components. elle ont chacun leurs avantages:

## React Icons

React Icons est une bibliothèque qui fournit une collection d'icônes populaires prêtes à l'emploi pour les projets React. Voici quelques avantages à utiliser React Icons :

- **Facilité d'utilisation** : React Icons simplifie l'intégration d'icônes dans votre application. Il suffit d'importer l'icône souhaitée et de l'utiliser directement dans votre code.
- **Vaste choix d'icônes** : React Icons propose une large sélection d'icônes provenant de différentes bibliothèques populaires telles que Font Awesome, Material Design Icons, et bien d'autres. Cela vous permet de choisir parmi une grande variété d'icônes sans avoir à les télécharger ou les gérer vous-même.
- **Personnalisation aisée** : Avec React Icons, vous pouvez facilement personnaliser les icônes en ajustant leur taille, leur couleur et d'autres propriétés grâce aux props React. Cela vous permet de les adapter à l'esthétique de votre application sans effort supplémentaire.

## Framer Motion

Framer Motion est une bibliothèque d'animation pour React. Elle offre les avantages suivantes :

- **Animations fluides et performantes** : Framer Motion utilise la puissance du GPU pour des animations fluides et réactives. Cela garantit une expérience utilisateur agréable, même avec des animations complexes.
- **Facilité d'intégration** : Framer Motion s'intègre parfaitement à React, ce qui rend son utilisation très simple. Vous pouvez animer facilement des composants React en utilisant des transitions, des variants et d'autres fonctionnalités fournies par Framer Motion.
- **Contrôle total sur les animations** : Framer Motion offre un contrôle complet sur vos animations. Vous pouvez définir des séquences d'animations, des délais, des rebonds, des ressorts, et bien plus encore. Cela vous permet de créer des animations personnalisées qui correspondent exactement à vos besoins.

J'ai mis un variable global dans le dossier utils/variants.js , qui regroupe l'ensemble des mes different comportement des mes annimation.

## Styled Components

Styled Components est une bibliothèque qui permet d'écrire des composants React avec des styles CSS directement intégrés. Voici pourquoi l'utilisation de Styled Components peut être bénéfique :

- **Encapsulation des styles** : Styled Components vous permet de définir des styles CSS directement à l'intérieur de vos composants. Cela permet une meilleure encapsulation des styles, évitant ainsi les conflits et les fuites de styles indésirables.
- **Composants réutilisables** : En utilisant Styled Components, vous pouvez créer des composants réutilisables avec des styles spécifiques. Cela facilite la maintenance et la création d'une interface utilisateur cohérente dans votre application.
- **Support des thèmes** : Styled Components prend en charge les thèmes, ce qui vous permet de définir des variables globales de style et de les utiliser dans toute votre application. Cela facilite la personnalisation de l'apparence de votre application et permet des changements de thème rapides et simples.

En utilisant ces packages, ce projet bénéficie de la simplicité d'intégration des icônes, de la puissance d'animation de Framer Motion, ainsi que de la facilité de gestion et

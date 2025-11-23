export type TrackId = 'data_science' | 'fullstack_dev';

export interface Question {
  id: string;
  tier: 1 | 2 | 3 | 4;
  text: string;
  options: string[];
  correctAnswer: number; // Index of the correct option
  explanation: string; // The "deep technical explanation"
}

export interface Track {
  id: TrackId;
  name: string;
  description: string;
  questions: Question[];
}

export const INSULTS = [
  "C'est une performance pathétique.",
  "Tu as codé ça avec tes pieds ?",
  "Si l'ignorance était une crypto, tu serais milliardaire.",
  "404: Compétence non trouvée.",
  "Tu es la raison pour laquelle l'IA va nous remplacer.",
  "On dirait du code généré par un grille-pain en surchauffe.",
  "J'ai vu des stagiaires faire mieux le premier jour.",
  "Arrête de deviner, ça se voit.",
  "Ton code sent le copier-coller StackOverflow mal compris.",
  "C'est gênant pour toute la profession.",
  "Même un plugin WordPress est mieux codé que ça.",
  "Tu devrais envisager une carrière dans le management.",
  "Exception non gérée : Ton manque de talent.",
  "Ton commit a été rejeté par le bon goût.",
  "Tu es le goulot d'étranglement de ton équipe.",
  "Change de métier. Vraiment. Je suis sérieux.",
  "C'est criminel de laisser quelqu'un comme toi toucher à un clavier.",
  "Tu es un danger public pour la production."
];

export const TIER_1_INSULTS = [
  "Sérieusement ? C'est le niveau 1. C'est la base absolue.",
  "Si tu rates ça, pose ta démission. Tout de suite.",
  "Ma grand-mère comprend mieux ce concept que toi.",
  "C'est une blague ? C'est niveau tutoriel YouTube.",
  "Tu n'as aucune excuse pour rater ça. Aucune.",
  "Retourne apprendre à lire la documentation.",
  "Même PHP 4 avait honte de cette erreur.",
  "C'est la première question d'un entretien junior, et tu l'as ratée."
];

export const PRAISE = [
  "Pas mal. Pour un humain.",
  "Acceptable. Ne prends pas la grosse tête.",
  "Tu as peut-être un avenir... peut-être.",
  "Enfin une lueur d'intelligence dans ce néant.",
  "Tu as survécu. Pour l'instant.",
  "Impressionnant. Très impressionnant.",
  "Code propre. Logique valide. Continue.",
  "Tu commences à ressembler à un vrai développeur.",
  "C'est... compétent. Je suis presque fier.",
  "Excellence détectée. Niveau système atteint."
];

export const RANKS = {
  0: "Abandonne. Ce n'est pas pour toi.",
  1: "Touriste Tech",
  2: "Stagiaire à vie",
  3: "Junior en sursis",
  4: "Développeur Junior",
  5: "Développeur Confirmé",
  6: "Développeur Senior",
  7: "Tech Lead",
  8: "Architecte Logiciel",
  9: "Principal Engineer / Dieu du Code"
};

export const TRACKS: Record<TrackId, Track> = {
  data_science: {
    id: 'data_science',
    name: 'Data Science',
    description: 'Algorithmes, Stats, Deep Learning. Pas pour les faibles.',
    questions: [
       {
        id: 'ds_t1_1',
        tier: 1,
        text: "Quelle est la différence fondamentale entre la régression linéaire et la régression logistique ?",
        options: ["Il n'y en a pas, c'est juste le nom.", "La linéaire prédit une valeur continue, la logistique une probabilité binaire (classification).", "La logistique est pour les données textuelles uniquement.", "La linéaire utilise des réseaux de neurones."],
        correctAnswer: 1,
        explanation: "La régression linéaire cherche à prédire une valeur continue (comme un prix ou une température) en ajustant une droite. La régression logistique est un algorithme de CLASSIFICATION qui utilise une fonction sigmoïde pour prédire une probabilité entre 0 et 1."
      },
       {
        id: 'ds_t1_2',
        tier: 1,
        text: "En Machine Learning, que signifie le terme 'Overfitting' (Surapprentissage) ?",
        options: ["Le modèle est trop lent à entraîner.", "Le modèle apprend le bruit et les détails spécifiques des données d'entraînement au lieu de la tendance générale.", "Le modèle est trop simple pour capturer la tendance.", "C'est quand on a trop de données."],
        correctAnswer: 1,
        explanation: "L'overfitting se produit quand un modèle est trop complexe. Il 'apprend par cœur' les données d'entraînement, ce qui donne d'excellents scores à l'entraînement mais des résultats catastrophiques sur de nouvelles données (mauvaise généralisation)."
      }
    ]
  },
  fullstack_dev: {
    id: 'fullstack_dev',
    name: 'Fullstack & Architecture',
    description: 'Vue, Java, Algo, Réseaux, DevOps, DDD. Le test ultime.',
    questions: [
      // =================================================================================
      // TIER 1: BASICS (Algo, Git, Web, Java, Vue)
      // =================================================================================
      {
        id: 'fs_t1_1',
        tier: 1,
        text: "Dans Vue.js, quelle est la différence technique principale entre les directives `v-if` et `v-show` ?",
        options: ["Aucune, c'est juste une préférence de style.", "v-if ajoute/supprime l'élément du DOM, tandis que v-show bascule simplement la propriété CSS `display`.", "v-show est déprécié dans Vue 3.", "v-if est optimisé pour les listes et les boucles."],
        correctAnswer: 1,
        explanation: "`v-if` est un rendu conditionnel 'réel' : si la condition est fausse, l'élément n'existe pas dans le DOM. `v-show` garde l'élément dans le DOM mais applique `display: none`. Utilise `v-show` si l'élément change souvent de visibilité pour éviter le coût de redessiner le DOM."
      },
      {
        id: 'fs_t1_2',
        tier: 1,
        text: "En algorithmique, quelle est la complexité temporelle de l'accès à un élément d'un tableau par son index ?",
        options: ["O(n) - Linéaire", "O(log n) - Logarithmique", "O(1) - Constante", "O(n^2) - Quadratique"],
        correctAnswer: 2,
        explanation: "C'est une opération instantanée. L'ordinateur calcule l'adresse mémoire exacte en utilisant l'index et la taille des éléments. Peu importe la taille du tableau, le temps d'accès est le même."
      },
      {
        id: 'fs_t1_3',
        tier: 1,
        text: "À quoi sert le système DNS (Domain Name System) sur Internet ?",
        options: ["À crypter les connexions.", "À traduire des noms de domaine lisibles (ex: google.com) en adresses IP numériques (ex: 142.250.x.x).", "À stocker les pages web.", "À accélérer le téléchargement des fichiers."],
        correctAnswer: 1,
        explanation: "C'est l'annuaire d'Internet. Sans DNS, vous devriez retenir par cœur les adresses IP de tous vos sites préférés."
      },
      {
        id: 'fs_t1_4',
        tier: 1,
        text: "Quelle commande Git permet de voir l'état actuel des fichiers (modifiés, stagés, non suivis) ?",
        options: ["git log", "git status", "git diff", "git check"],
        correctAnswer: 1,
        explanation: "`git status` est la commande essentielle pour savoir où vous en êtes avant de commiter. Elle montre ce qui est prêt à être validé et ce qui ne l'est pas."
      },
      {
        id: 'fs_t1_5',
        tier: 1,
        text: "En HTML5, quelle balise sémantique doit-on utiliser pour entourer le contenu principal unique d'une page ?",
        options: ["<div id='main'>", "<main>", "<section>", "<article>"],
        correctAnswer: 1,
        explanation: "La balise `<main>` indique aux moteurs de recherche et aux lecteurs d'écran où se trouve le cœur du contenu, ce qui améliore l'accessibilité et le SEO."
      },
      {
        id: 'fs_t1_6',
        tier: 1,
        text: "En Java, quelle est la différence fondamentale entre un `Array` ([]) et une `ArrayList` ?",
        options: ["Une ArrayList a une taille dynamique, tandis qu'un Array a une taille fixe définie à la création.", "Un Array est plus lent qu'une ArrayList.", "Une ArrayList ne peut contenir que des chaînes de caractères.", "Il n'y a aucune différence."],
        correctAnswer: 0,
        explanation: "Un tableau classique `new int[5]` ne peut pas grandir. Une `ArrayList` gère automatiquement le redimensionnement de son tableau interne quand vous ajoutez des éléments."
      },
      {
        id: 'fs_t1_7',
        tier: 1,
        text: "Qu'est-ce que Docker dans le contexte du DevOps ?",
        options: ["Un type de machine virtuelle.", "Une plateforme de conteneurisation qui permet d'empaqueter une application et ses dépendances dans un conteneur isolé.", "Un serveur web comme Apache.", "Un langage de programmation."],
        correctAnswer: 1,
        explanation: "Contrairement à une VM qui simule un OS entier, Docker partage le noyau de l'hôte mais isole les processus. Cela permet le principe 'Build once, run anywhere'."
      },
      {
        id: 'fs_t1_8',
        tier: 1,
        text: "Selon les standards REST, quelle méthode HTTP doit être utilisée pour supprimer une ressource ?",
        options: ["REMOVE", "DELETE", "Un POST avec un corps vide.", "CLEAR"],
        correctAnswer: 1,
        explanation: "La méthode `DELETE` est sémantiquement conçue pour demander la suppression d'une ressource identifiée par l'URL."
      },
      {
        id: 'fs_t1_9',
        tier: 1,
        text: "En CSS, quelle propriété définit l'espace intérieur entre le contenu d'un élément et sa bordure ?",
        options: ["margin", "border", "padding", "spacing"],
        correctAnswer: 2,
        explanation: "`padding` est l'espace interne. `margin` est l'espace externe (entre cet élément et les autres)."
      },
      {
        id: 'fs_t1_10',
        tier: 1,
        text: "Qu'est-ce qu'un booléen (Boolean) en programmation ?",
        options: ["Un nombre entier positif.", "Un type de donnée qui ne peut avoir que deux valeurs : Vrai (True) ou Faux (False).", "Une chaîne de caractères courte.", "Un tableau de nombres."],
        correctAnswer: 1,
        explanation: "C'est la base de la logique binaire. Tout en informatique finit par se réduire à des 0 et des 1, Vrai ou Faux."
      },
      {
        id: 'fs_t1_11',
        tier: 1,
        text: "Que fait la commande `git clone [url]` ?",
        options: ["Elle copie un fichier localement.", "Elle télécharge une copie complète d'un dépôt distant (avec tout son historique) sur votre machine.", "Elle crée une nouvelle branche.", "Elle fusionne deux versions de code."],
        correctAnswer: 1,
        explanation: "C'est généralement la première commande qu'on utilise pour récupérer un projet existant depuis GitHub ou GitLab."
      },
      {
        id: 'fs_t1_12',
        tier: 1,
        text: "En Java, quelle est la différence de visibilité entre `public` et `private` ?",
        options: ["Aucune, c'est pour la documentation.", "Public est accessible depuis n'importe où, Private n'est accessible que depuis l'intérieur de la classe elle-même.", "Private est pour les variables statiques uniquement.", "Public rend le code plus rapide."],
        correctAnswer: 1,
        explanation: "C'est le principe d'encapsulation. On cache les données internes avec `private` et on expose des méthodes sûres avec `public`."
      },
      {
        id: 'fs_t1_13',
        tier: 1,
        text: "Quelle commande Linux permet de lister les fichiers dans le répertoire courant ?",
        options: ["show", "ls", "list", "dir"],
        correctAnswer: 1,
        explanation: "`ls` (list) est la commande de base. Souvent utilisée avec `-la` pour voir les détails et les fichiers cachés."
      },
      {
        id: 'fs_t1_14',
        tier: 1,
        text: "Dans une architecture web, qu'est-ce que le 'Frontend' ?",
        options: ["La base de données qui stocke les informations.", "La partie de l'application qui s'exécute dans le navigateur de l'utilisateur (Interface).", "Le serveur qui traite les requêtes.", "L'API qui connecte les services."],
        correctAnswer: 1,
        explanation: "Le Frontend est ce que l'utilisateur voit et avec quoi il interagit. Il est généralement codé en HTML, CSS et JavaScript."
      },
      {
        id: 'fs_t1_15',
        tier: 1,
        text: "Quelle directive Vue.js permet de créer une liaison de données bidirectionnelle (Two-Way Binding) sur un champ de formulaire ?",
        options: ["v-bind", "v-model", "v-on", "v-text"],
        correctAnswer: 1,
        explanation: "`v-model` est du sucre syntaxique qui met à jour la variable quand l'input change, et met à jour l'input quand la variable change."
      },
      {
        id: 'fs_t1_16',
        tier: 1,
        text: "En JavaScript, que vérifie l'opérateur `NaN === NaN` ?",
        options: ["Il renvoie True.", "Il renvoie False. NaN est la seule valeur en JS qui n'est pas égale à elle-même.", "Il renvoie une erreur.", "Il renvoie Null."],
        correctAnswer: 1,
        explanation: "C'est une spécificité du standard IEEE 754 pour les nombres flottants. Pour vérifier si une valeur est NaN, il faut utiliser `Number.isNaN()`."
      },
      {
        id: 'fs_t1_17',
        tier: 1,
        text: "En CSS, pourquoi `z-index` semble-t-il parfois ne pas fonctionner ?",
        options: ["C'est un bug du navigateur.", "Parce que `z-index` ne s'applique qu'aux éléments positionnés (relative, absolute, fixed, sticky).", "Il faut obligatoirement un ID sur l'élément.", "Il faut mettre `display: block`."],
        correctAnswer: 1,
        explanation: "Si un élément est en `position: static` (la valeur par défaut), la propriété `z-index` est ignorée. C'est une erreur très fréquente."
      },
      {
        id: 'fs_t1_18',
        tier: 1,
        text: "Pourquoi est-il généralement déconseillé d'utiliser `SELECT *` dans une requête SQL en production ?",
        options: ["C'est très bien, ça gagne du temps.", "Cela récupère toutes les colonnes inutilement, gaspillant de la bande passante et empêchant l'utilisation optimale des index.", "C'est une faille de sécurité.", "La base de données refuse cette commande."],
        correctAnswer: 1,
        explanation: "Demander des données dont vous n'avez pas besoin ralentit le réseau et la base de données. Listez toujours explicitement les colonnes nécessaires (`SELECT id, nom`)."
      },
      {
        id: 'fs_t1_19',
        tier: 1,
        text: "En sécurité informatique, pourquoi ne faut-il jamais stocker les mots de passe en clair ?",
        options: ["Pour gagner de la place.", "Car en cas de fuite de la base de données, tous les comptes seraient compromis immédiatement. Il faut les hacher.", "Parce que les utilisateurs les oublient.", "C'est illégal."],
        correctAnswer: 1,
        explanation: "On doit stocker une empreinte cryptographique (hash) du mot de passe (ex: avec bcrypt ou Argon2), jamais le mot de passe lui-même."
      },
      {
        id: 'fs_t1_20',
        tier: 1,
        text: "Quel est le principe de base du 'KISS' en développement logiciel ?",
        options: ["Keep It Simple, Stupid. Privilégier la simplicité et éviter la sur-ingénierie.", "Keep It Solid Secure.", "Key Index Simple Storage.", "Kissing Is Super Sweet."],
        correctAnswer: 0,
        explanation: "La complexité est l'ennemie de la fiabilité. Si une solution simple fonctionne, elle est toujours préférable à une solution 'intelligente' mais complexe."
      },

      // =================================================================================
      // TIER 2: INTERMEDIATE (Network, DB, Java, DevOps)
      // =================================================================================
      {
        id: 'fs_t2_1',
        tier: 2,
        text: "Quelle est la différence principale entre les protocoles réseau TCP et UDP ?",
        options: ["UDP est plus sécurisé.", "TCP garantit l'ordre et la livraison des paquets (fiable mais plus lent). UDP envoie sans vérifier (rapide, pour le streaming/jeu).", "TCP est pour la vidéo uniquement.", "UDP est utilisé pour les emails."],
        correctAnswer: 1,
        explanation: "TCP établit une connexion et vérifie que tout est arrivé. UDP envoie les données 'à l'aveugle'. Pour la vidéo, perdre une image n'est pas grave (UDP), mais pour un fichier, c'est critique (TCP)."
      },
      {
        id: 'fs_t2_2',
        tier: 2,
        text: "À quoi sert un index dans une base de données SQL ?",
        options: ["C'est magique.", "C'est une structure de données (souvent un B-Tree) qui permet de retrouver des lignes rapidement sans avoir à scanner toute la table.", "À compresser les données pour gagner de la place.", "À faire des sauvegardes."],
        correctAnswer: 1,
        explanation: "C'est comme l'index à la fin d'un livre. Sans lui, pour trouver le mot 'Harry', tu devrais lire toutes les pages une par une (Full Table Scan)."
      },
      {
        id: 'fs_t2_3',
        tier: 2,
        text: "En structures de données, quelle est la différence entre une Pile (Stack) et une File (Queue) ?",
        options: ["C'est la même chose.", "Stack = LIFO (Dernier arrivé, Premier sorti). Queue = FIFO (Premier arrivé, Premier sorti).", "Stack = FIFO. Queue = LIFO.", "Une Queue sert au stockage long terme."],
        correctAnswer: 1,
        explanation: "Imagine une Pile d'assiettes : tu laves la dernière posée en premier (LIFO). Imagine une File d'attente au supermarché : le premier arrivé passe en premier (FIFO)."
      },
      {
        id: 'fs_t2_4',
        tier: 2,
        text: "Que signifie l'acronyme MVC dans le développement web ?",
        options: ["Model View Controller.", "Most Valuable Code.", "Model View Component.", "Main View Class."],
        correctAnswer: 0,
        explanation: "C'est un patron d'architecture qui sépare les données (Modèle), l'interface utilisateur (Vue) et la logique de contrôle (Contrôleur)."
      },
      {
        id: 'fs_t2_5',
        tier: 2,
        text: "Que signifie CI/CD dans le contexte DevOps ?",
        options: ["Code Intégral / Code Distribué.", "Continuous Integration / Continuous Delivery (Intégration et Livraison Continues).", "Certificat Informatique.", "Clean Code / Dirty Code."],
        correctAnswer: 1,
        explanation: "C'est la pratique d'automatiser les tests et le déploiement à chaque modification du code, pour livrer plus vite et plus souvent."
      },
      {
        id: 'fs_t2_6',
        tier: 2,
        text: "Que fait la commande `git stash` ?",
        options: ["Elle supprime tout le travail en cours.", "Elle met de côté temporairement les modifications non commitées pour nettoyer l'espace de travail.", "Elle crée une nouvelle branche.", "Elle fusionne le code."],
        correctAnswer: 1,
        explanation: "C'est très utile quand tu dois changer de branche en urgence pour fixer un bug, mais que tu ne veux pas commiter ton travail actuel inachevé."
      },
      {
        id: 'fs_t2_7',
        tier: 2,
        text: "Quelle est la complexité temporelle moyenne pour insérer ou lire une donnée dans une HashMap ?",
        options: ["O(n)", "O(log n)", "O(1) - Constante.", "O(n^2)"],
        correctAnswer: 2,
        explanation: "Grâce à la fonction de hachage, on sait directement dans quelle case mémoire aller. C'est extrêmement rapide."
      },
      {
        id: 'fs_t2_8',
        tier: 2,
        text: "Quelle est la différence de sécurité entre un Cookie et le LocalStorage ?",
        options: ["C'est pareil.", "Les Cookies peuvent être sécurisés (HttpOnly) pour être inaccessibles au JS (protection XSS). Le LocalStorage est toujours accessible par le JS.", "Le LocalStorage expire automatiquement.", "Les Cookies peuvent stocker plus de données."],
        correctAnswer: 1,
        explanation: "Pour stocker des tokens d'authentification sensibles, les Cookies HttpOnly sont plus sûrs car un script malveillant injecté (XSS) ne peut pas les lire."
      },
      {
        id: 'fs_t2_9',
        tier: 2,
        text: "Qu'est-ce qu'une faille XSS (Cross-Site Scripting) ?",
        options: ["Un piratage du serveur.", "L'injection d'un script JavaScript malveillant dans une page web vue par d'autres utilisateurs.", "Le vol d'un mot de passe par force brute.", "Une erreur de style CSS."],
        correctAnswer: 1,
        explanation: "Si un site affiche un commentaire utilisateur sans le nettoyer, un pirate peut poster `<script>volerCookies()</script>` et ce script s'exécutera chez tous les visiteurs."
      },
      {
        id: 'fs_t2_10',
        tier: 2,
        text: "Pourquoi est-il dangereux d'utiliser `chmod 777` sur un fichier ou dossier ?",
        options: ["C'est une bonne pratique.", "Cela donne TOUS les droits (Lecture, Écriture, Exécution) à TOUT LE MONDE, y compris les utilisateurs inconnus.", "Cela supprime le fichier.", "Cela rend le fichier invisible."],
        correctAnswer: 1,
        explanation: "C'est l'équivalent de laisser la porte de sa maison grande ouverte. N'utilisez jamais ça en production. Préférez 644 ou 755."
      },
      {
        id: 'fs_t2_11',
        tier: 2,
        text: "En Java, quel est l'intérêt d'utiliser `Optional<T>` ?",
        options: ["C'est juste esthétique.", "C'est un conteneur qui force le développeur à gérer explicitement le cas où une valeur est absente, évitant les `NullPointerException`.", "Ça remplace les Listes.", "C'est une variable globale."],
        correctAnswer: 1,
        explanation: "Au lieu de renvoyer `null` (qui cause des crashs si on oublie de vérifier), on renvoie un `Optional` qui oblige à dire quoi faire si la valeur n'est pas là (`.orElse()`)."
      },
      {
        id: 'fs_t2_12',
        tier: 2,
        text: "Dans Laravel, à quoi servent les Migrations ?",
        options: ["À changer de serveur.", "À versionner le schéma de la base de données, permettant de créer et modifier les tables via du code PHP.", "À importer des données.", "À copier le site."],
        correctAnswer: 1,
        explanation: "Les migrations permettent à toute l'équipe d'avoir la même structure de base de données en exécutant `php artisan migrate`, sans s'envoyer des fichiers SQL manuellement."
      },
      {
        id: 'fs_t2_13',
        tier: 2,
        text: "Quel est le port standard utilisé par le protocole HTTPS ?",
        options: ["80", "443", "8080", "22"],
        correctAnswer: 1,
        explanation: "Le port 80 est pour HTTP (non sécurisé). Le port 443 est pour HTTPS (sécurisé par TLS)."
      },
      {
        id: 'fs_t2_14',
        tier: 2,
        text: "Qu'est-ce qu'une fermeture (Closure) en JavaScript ?",
        options: ["Une fonction qui ferme le navigateur.", "Une fonction qui 'se souvient' des variables de son environnement parent, même après que la fonction parente a fini de s'exécuter.", "Une classe privée.", "Un objet scellé."],
        correctAnswer: 1,
        explanation: "C'est un concept fondamental en JS. Cela permet de créer des variables privées et est à la base de nombreux patterns comme les modules."
      },
      {
        id: 'fs_t2_15',
        tier: 2,
        text: "Dans Flexbox, quelle est la différence entre `justify-content` et `align-items` ?",
        options: ["C'est pareil.", "`justify-content` aligne sur l'axe principal (ex: horizontal), `align-items` aligne sur l'axe transversal (ex: vertical).", "`justify` est vertical.", "`align` est horizontal."],
        correctAnswer: 1,
        explanation: "Si vous êtes en `flex-direction: row` (défaut), `justify` gère l'espace horizontal et `align` la hauteur verticale."
      },
      {
        id: 'fs_t2_16',
        tier: 2,
        text: "Qu'est-ce que le 'Prop Drilling' en React/Vue et pourquoi est-ce un problème ?",
        options: ["C'est une technique d'optimisation.", "C'est le fait de passer des données de parent en enfant sur de nombreux niveaux inutiles, rendant le code difficile à maintenir.", "C'est une méthode de test.", "C'est l'utilisation excessive de props."],
        correctAnswer: 1,
        explanation: "Si le composant A doit donner une info au composant Z qui est 10 niveaux plus bas, tous les intermédiaires doivent relayer l'info. C'est sale. On utilise un Store (Pinia/Redux) ou le Context pour éviter ça."
      },
      {
        id: 'fs_t2_17',
        tier: 2,
        text: "Quel est le but du pattern 'Dependency Injection' (Injection de Dépendances) ?",
        options: ["Rendre le code plus complexe.", "Fournir à une classe les objets dont elle a besoin depuis l'extérieur, plutôt que de la laisser les créer elle-même avec `new`.", "Créer des singletons.", "Utiliser l'héritage."],
        correctAnswer: 1,
        explanation: "Cela réduit le couplage entre les classes et rend le code beaucoup plus facile à tester, car on peut injecter des versions factices (Mocks) des dépendances."
      },
      {
        id: 'fs_t2_18',
        tier: 2,
        text: "Quelle est la différence entre `git rebase` et `git merge` ?",
        options: ["Aucune.", "`Merge` crée un commit de fusion qui préserve l'historique réel. `Rebase` réécrit l'historique pour qu'il soit linéaire, comme si le travail avait été fait à la suite.", "`Rebase` est interdit.", "`Merge` supprime les commits."],
        correctAnswer: 1,
        explanation: "Le `rebase` rend l'historique plus propre et lisible, mais il est dangereux sur des branches partagées car il change les identifiants des commits."
      },
      {
        id: 'fs_t2_19',
        tier: 2,
        text: "Qu'est-ce qu'un 'Build Multi-stage' dans Docker ?",
        options: ["C'est compliqué.", "Une technique pour réduire la taille de l'image finale : on utilise une image pour compiler (lourde) et on copie juste le résultat dans une image d'exécution (légère).", "Utiliser plusieurs conteneurs.", "C'est plus lent."],
        correctAnswer: 1,
        explanation: "Cela permet d'avoir des outils de compilation (Maven, GCC) dans l'étape 1, mais de livrer une image de prod minuscule (Alpine Linux) ne contenant que le binaire compilé."
      },
      {
        id: 'fs_t2_20',
        tier: 2,
        text: "En SQL, que garantit l'Atomicité (le 'A' de ACID) ?",
        options: ["La vitesse.", "Le principe du 'Tout ou Rien'. Si une partie de la transaction échoue, toutes les opérations précédentes sont annulées (Rollback).", "L'authentification.", "L'association."],
        correctAnswer: 1,
        explanation: "Dans un virement bancaire, si le débit marche mais le crédit échoue, l'atomicité garantit que l'argent n'a pas disparu : le débit est annulé."
      },

      // =================================================================================
      // TIER 3: ADVANCED (Arch, DDD, Advanced Algo, Spring Deep Dive)
      // =================================================================================
      {
        id: 'fs_t3_1',
        tier: 3,
        text: "Dans le Domain Driven Design (DDD), qu'est-ce qu'un 'Aggregate Root' ?",
        options: ["Un total calculé.", "L'entité principale qui contrôle l'accès et garantit la cohérence d'un groupe d'objets liés. On ne modifie les enfants qu'en passant par la racine.", "Une table SQL principale.", "Un microservice."],
        correctAnswer: 1,
        explanation: "Par exemple, une 'Commande' est un Aggregate Root qui contient des 'Lignes de Commande'. On ne doit pas modifier une ligne directement, on demande à la Commande de le faire pour qu'elle puisse recalculer le total."
      },
      {
        id: 'fs_t3_2',
        tier: 3,
        text: "Expliquez le '3-way Handshake' du protocole TCP.",
        options: ["Bonjour, Salut, Au revoir.", "SYN (Je veux connecter), SYN-ACK (J'accepte), ACK (Bien reçu, on commence).", "Ping, Pong, Pang.", "Connect, Accept, Send."],
        correctAnswer: 1,
        explanation: "C'est la poignée de main formelle pour établir une connexion fiable. Le client envoie SYN, le serveur répond SYN-ACK, le client confirme ACK."
      },
      {
        id: 'fs_t3_3',
        tier: 3,
        text: "Dans Spring, quel est l'effet de `@Transactional(readOnly = true)` ?",
        options: ["C'est inutile.", "Cela optimise la performance en indiquant à l'ORM (Hibernate) qu'il n'a pas besoin de vérifier si les objets ont été modifiés (Dirty Checking).", "Cela bloque la lecture.", "C'est pour la sécurité."],
        correctAnswer: 1,
        explanation: "Cela permet de gagner du temps CPU et mémoire. Hibernate sait qu'il peut juste lire les données sans préparer leur sauvegarde potentielle."
      },
      {
        id: 'fs_t3_4',
        tier: 3,
        text: "Qu'est-ce qu'un Arbre Binaire de Recherche (BST) ?",
        options: ["Un arbre aléatoire.", "Un arbre où, pour chaque nœud, tous les éléments à gauche sont plus petits et tous les éléments à droite sont plus grands.", "Une liste chaînée.", "Un tableau trié."],
        correctAnswer: 1,
        explanation: "Cette structure permet de rechercher, d'insérer ou de supprimer des éléments très rapidement (en moyenne en O(log n))."
      },
      {
        id: 'fs_t3_5',
        tier: 3,
        text: "Quelle est la différence entre une Entité et un Value Object en DDD ?",
        options: ["C'est pareil.", "Une Entité est définie par son identité (ID) qui persiste dans le temps. Un Value Object est défini par ses attributs et est immuable.", "Un Value Object est pour la DB.", "Une Entité est en lecture seule."],
        correctAnswer: 1,
        explanation: "Si deux personnes ont le même nom, ce sont deux Entités différentes (ID différents). Si deux billets de 10€ sont échangés, c'est le même Value Object (ils valent tous les deux 10€)."
      },
      {
        id: 'fs_t3_6',
        tier: 3,
        text: "Quel est le principe de l'Architecture Hexagonale (Ports & Adapters) ?",
        options: ["Faire des jolis schémas.", "Isoler le cœur métier (domaine) de tous les détails techniques (Base de données, API, UI) via des interfaces.", "Utiliser des microservices.", "Utiliser MVC."],
        correctAnswer: 1,
        explanation: "L'objectif est que votre logique métier ne dépende pas du framework ou de la base de données. Vous pouvez changer de MySQL à MongoDB sans toucher au code métier."
      },
      {
        id: 'fs_t3_7',
        tier: 3,
        text: "Dans Kubernetes, qu'est-ce qu'un Pod ?",
        options: ["Un conteneur Docker.", "La plus petite unité déployable, qui peut contenir un ou plusieurs conteneurs partageant la même IP et le même stockage.", "Un serveur physique.", "Un cluster."],
        correctAnswer: 1,
        explanation: "Bien que souvent un Pod contienne un seul conteneur, il peut en contenir d'autres (Sidecars) qui aident le principal (ex: pour les logs ou le proxy)."
      },
      {
        id: 'fs_t3_8',
        tier: 3,
        text: "À quoi sert la commande `git cherry-pick` ?",
        options: ["À cueillir des cerises.", "À prendre un commit spécifique d'une autre branche et à l'appliquer sur la branche courante.", "À supprimer un commit.", "À tout fusionner."],
        correctAnswer: 1,
        explanation: "C'est une opération chirurgicale. Utile pour récupérer un correctif de bug précis sur la branche `dev` pour le mettre sur `prod` sans fusionner toute la branche `dev`."
      },
      {
        id: 'fs_t3_9',
        tier: 3,
        text: "Pourquoi utiliser l'API Stream de Java (`.map`, `.filter`) ?",
        options: ["C'est pour la vidéo.", "Pour écrire du code plus lisible, déclaratif et fonctionnel pour traiter des collections de données.", "Pour les boucles for.", "Pour gérer les entrées/sorties."],
        correctAnswer: 1,
        explanation: "Au lieu de dire COMMENT faire (boucle for, if, variable temporaire), on dit QUOI faire (filtrer les actifs, mapper vers les noms). C'est souvent plus clair."
      },
      {
        id: 'fs_t3_10',
        tier: 3,
        text: "Qu'est-ce qu'une requête CORS Preflight (OPTIONS) ?",
        options: ["C'est optionnel.", "Une requête de vérification envoyée automatiquement par le navigateur avant une vraie requête (comme PUT ou DELETE) pour demander au serveur s'il accepte l'origine.", "Une erreur réseau.", "Une authentification."],
        correctAnswer: 1,
        explanation: "C'est une mesure de sécurité du navigateur. Si le serveur ne répond pas correctement à la requête OPTIONS, la vraie requête n'est jamais envoyée."
      },
      {
        id: 'fs_t3_11',
        tier: 3,
        text: "Qu'est-ce que le problème de 'Dirty Read' dans les transactions de base de données ?",
        options: ["Une lecture sale.", "Le fait de lire une donnée qui a été modifiée par une autre transaction mais PAS ENCORE validée (commitée).", "Lire une vieille donnée.", "Une erreur disque."],
        correctAnswer: 1,
        explanation: "C'est dangereux car si l'autre transaction est annulée (Rollback), vous avez travaillé sur une donnée qui n'a jamais officiellement existé."
      },
      {
        id: 'fs_t3_12',
        tier: 3,
        text: "Quel est le rôle du pattern Proxy ?",
        options: ["C'est un VPN.", "C'est un intermédiaire qui contrôle l'accès à un objet pour ajouter des fonctionnalités comme le chargement différé (Lazy Loading), la sécurité ou le cache.", "C'est une copie d'objet.", "C'est une usine."],
        correctAnswer: 1,
        explanation: "Spring et Hibernate utilisent massivement des proxys pour injecter leur 'magie' (transactions, lazy loading) sans que vous le voyiez."
      },
      {
        id: 'fs_t3_13',
        tier: 3,
        text: "Que stipule le principe de Substitution de Liskov (le 'L' de SOLID) ?",
        options: ["C'est compliqué.", "Une sous-classe doit pouvoir remplacer sa classe parente partout sans que le programme ne plante ou ne change de comportement incorrectement.", "L'héritage est interdit.", "Il faut utiliser des interfaces."],
        correctAnswer: 1,
        explanation: "Si `Carre` hérite de `Rectangle`, mais que changer la largeur du rectangle change aussi sa hauteur (car c'est un carré), cela viole Liskov car le comportement attendu d'un rectangle est brisé."
      },
      {
        id: 'fs_t3_14',
        tier: 3,
        text: "À quoi sert un Store (Vuex ou Pinia) dans une application Vue.js ?",
        options: ["À faire des achats.", "À centraliser la gestion de l'état (données) de l'application dans une source unique de vérité, accessible par tous les composants.", "À gérer la base de données.", "À stocker dans le LocalStorage."],
        correctAnswer: 1,
        explanation: "Cela évite de passer les données manuellement à travers 15 composants. C'est un état global organisé et prévisible."
      },
      {
        id: 'fs_t3_15',
        tier: 3,
        text: "En Laravel, à quoi servent les Accesseurs (Accessors) Eloquent ?",
        options: ["À accéder à la base de données.", "À définir des attributs virtuels calculés sur un modèle (ex: `getFullNameAttribute`), qui n'existent pas forcément en base.", "À gérer les relations.", "À la sécurité."],
        correctAnswer: 1,
        explanation: "Cela permet de formater des données (ex: mettre en majuscule, combiner nom/prénom) automatiquement dès qu'on accède à la propriété."
      },
      {
        id: 'fs_t3_16',
        tier: 3,
        text: "Que fait la commande `git reset --hard` ?",
        options: ["Elle réinitialise doucement.", "Elle détruit TOUTES les modifications locales et force l'historique à revenir à un point précis. C'est irréversible (sauf reflog).", "Elle annule le dernier commit mais garde les fichiers.", "Elle nettoie les fichiers."],
        correctAnswer: 1,
        explanation: "C'est la commande nucléaire. À utiliser avec extrême précaution car vous perdez tout travail non sauvegardé."
      },
      {
        id: 'fs_t3_17',
        tier: 3,
        text: "Quelle est la différence majeure entre WebSockets et HTTP pour le temps réel ?",
        options: ["C'est pareil.", "HTTP est unidirectionnel (Client demande -> Serveur répond). WebSocket crée un tunnel bidirectionnel permanent où le serveur peut pousser des données.", "WebSocket est plus lent.", "HTTP est fait pour le chat."],
        correctAnswer: 1,
        explanation: "Pour un chat ou un jeu, le serveur doit pouvoir envoyer des messages sans que le client ne demande rien. HTTP n'est pas fait pour ça (sauf polling inefficace)."
      },
      {
        id: 'fs_t3_18',
        tier: 3,
        text: "Dans le contexte de Docker, comment fonctionne le cache des couches (Layers) ?",
        options: ["C'est le cache du navigateur.", "Docker réutilise les étapes de construction (RUN, COPY) qui n'ont pas changé pour accélérer le build.", "C'est le stockage.", "C'est une erreur."],
        correctAnswer: 1,
        explanation: "C'est pourquoi on copie le `package.json` et on fait `npm install` AVANT de copier le reste du code source. Ainsi, si le code change mais pas les dépendances, Docker réutilise le cache de l'installation."
      },
      {
        id: 'fs_t3_19',
        tier: 3,
        text: "Quelle est la différence entre `Factory Method` et `Abstract Factory` ?",
        options: ["C'est la même chose.", "Factory Method utilise l'héritage (une méthode à surcharger). Abstract Factory utilise la composition pour créer des familles d'objets liés.", "Factory Method crée des singletons.", "Abstract Factory est moins puissante."],
        correctAnswer: 1,
        explanation: "Factory Method : 'Ma sous-classe décidera quel Animal créer'. Abstract Factory : 'Voici une usine qui crée toute une gamme de meubles victoriens (chaise, table, sofa)'."
      },
      {
        id: 'fs_t3_20',
        tier: 3,
        text: "En architecture logicielle, pourquoi préfère-t-on souvent GraphQL à REST ?",
        options: ["Parce que c'est fait par Facebook.", "Pour éviter l'Over-fetching (trop de données) et l'Under-fetching (pas assez). Le client demande exactement les champs qu'il veut.", "C'est plus facile à cacher.", "Ça n'utilise pas HTTP."],
        correctAnswer: 1,
        explanation: "Avec REST, `/users/1` renvoie tout l'utilisateur. Avec GraphQL, on peut demander `user(id:1) { name }` et ne recevoir que le nom. C'est plus efficace pour le réseau mobile."
      },

      // =================================================================================
      // TIER 4: EXPERT (System Design, Deep Internals, Advanced Arch)
      // =================================================================================
      {
        id: 'fs_t4_1',
        tier: 4,
        text: "En DDD, qu'est-ce que le 'Langage Ubiquitaire' (Ubiquitous Language) ?",
        options: ["L'anglais.", "Un vocabulaire commun rigoureux partagé strictement entre les Développeurs et les Experts Métier, utilisé partout (Code, Specs, Discussions).", "Le jargon technique.", "Le SQL."],
        correctAnswer: 1,
        explanation: "Si l'expert parle de 'Client' et le développeur code 'User', le projet court à la catastrophe. Le code doit refléter le langage du métier."
      },
      {
        id: 'fs_t4_2',
        tier: 4,
        text: "Quelle est la particularité de la complexité spatiale (mémoire) de l'algorithme Merge Sort ?",
        options: ["O(1)", "O(n) - Il nécessite de la mémoire auxiliaire proportionnelle à la taille du tableau pour la fusion.", "O(log n)", "O(n^2)"],
        correctAnswer: 1,
        explanation: "Contrairement au QuickSort qui trie 'sur place' (in-place), le Merge Sort a besoin de créer des tableaux temporaires pour fusionner les morceaux, ce qui coûte de la mémoire."
      },
      {
        id: 'fs_t4_3',
        tier: 4,
        text: "Dans une base de données, quelle est la différence entre le Verrouillage Optimiste et Pessimiste ?",
        options: ["L'optimiste espère que ça marche.", "Pessimiste verrouille la donnée dès la lecture (bloquant). Optimiste vérifie une version au moment de l'écriture (non-bloquant mais risque d'échec).", "Pessimiste est plus rapide.", "Optimiste n'est pas sûr."],
        correctAnswer: 1,
        explanation: "Sur le web, on préfère souvent l'Optimiste (colonne `version`) car on ne veut pas garder une connexion DB ouverte pendant que l'utilisateur remplit son formulaire."
      },
      {
        id: 'fs_t4_4',
        tier: 4,
        text: "En conception système, quels algorithmes sont utilisés pour le Rate Limiting (limitation de débit) ?",
        options: ["Bloquer l'IP.", "Token Bucket, Leaky Bucket, Fixed Window.", "Firewall.", "Captcha."],
        correctAnswer: 1,
        explanation: "Le 'Token Bucket' permet d'autoriser des pics de trafic (bursts) tout en limitant la moyenne. Le 'Leaky Bucket' lisse le trafic à une vitesse constante."
      },
      {
        id: 'fs_t4_5',
        tier: 4,
        text: "Comment fonctionne la hiérarchie des Classloaders en Java ?",
        options: ["Bootstrap -> Platform -> App (System). Délégation parent-first.", "System -> App.", "C'est plat.", "C'est dynamique."],
        correctAnswer: 0,
        explanation: "Quand vous demandez une classe, Java demande d'abord au parent. Si le parent ne l'a pas, le Classloader enfant essaie de la trouver. Cela sécurise le cœur de Java."
      },
      {
        id: 'fs_t4_6',
        tier: 4,
        text: "Qu'est-ce qu'un CDN (Content Delivery Network) et pourquoi l'utilise-t-on ?",
        options: ["Un disque dur externe.", "Un réseau de serveurs distribués géographiquement pour servir le contenu statique (images, JS) depuis un point proche de l'utilisateur.", "Un VPN.", "Un serveur DNS."],
        correctAnswer: 1,
        explanation: "Cela réduit la latence (la distance physique) et décharge votre serveur principal du trafic statique."
      },
      {
        id: 'fs_t4_7',
        tier: 4,
        text: "À quoi sert la commande `git bisect` ?",
        options: ["À couper en deux.", "À effectuer une recherche binaire automatisée pour trouver quel commit exact a introduit un bug.", "À fusionner.", "À nettoyer l'historique."],
        correctAnswer: 1,
        explanation: "C'est une arme redoutable. Si vous savez que la version v1.0 marchait et la v2.0 plante, Git va tester le milieu, puis le quart, etc., pour trouver le coupable en quelques étapes."
      },
      {
        id: 'fs_t4_8',
        tier: 4,
        text: "Pourquoi l'Idempotence est-elle cruciale dans une architecture orientée événements (Event-Driven) ?",
        options: ["C'est inutile.", "Car les systèmes de queues garantissent souvent une livraison 'Au moins une fois' (At Least Once). Le consommateur peut recevoir le même message deux fois.", "Pour la performance.", "Pour la sécurité."],
        correctAnswer: 1,
        explanation: "Si votre code traite l'événement 'Paiement reçu' deux fois, vous ne devez pas créditer le compte deux fois. Votre logique doit gérer les doublons."
      },
      {
        id: 'fs_t4_9',
        tier: 4,
        text: "Comment fonctionne l'algorithme de comparaison du DOM Virtuel (Diffing) dans Vue/React ?",
        options: ["Il scanne tout.", "Il utilise des heuristiques : comparaison niveau par niveau, utilisation des clés (`key`) pour les listes, et ignorance des sous-arbres statiques.", "Il n'y a pas de DOM virtuel.", "C'est lent."],
        correctAnswer: 1,
        explanation: "Comparer deux arbres est théoriquement très coûteux (O(n^3)). Ces optimisations permettent de le faire en temps linéaire O(n) pour rendre l'UI fluide."
      },
      {
        id: 'fs_t4_10',
        tier: 4,
        text: "Quel flux OAuth 2.0 est recommandé pour les applications mobiles et SPA (Single Page Apps) ?",
        options: ["Login/Pass.", "Authorization Code avec PKCE (Proof Key for Code Exchange).", "Implicit Flow.", "Client Credentials."],
        correctAnswer: 1,
        explanation: "L'Implicit Flow est déprécié car peu sécurisé. PKCE ajoute une couche de sécurité pour empêcher l'interception du code d'autorisation."
      },
      {
        id: 'fs_t4_11',
        tier: 4,
        text: "Dans le modèle mémoire Java, que signifie la relation 'Happens-Before' ?",
        options: ["Avant.", "C'est la garantie qu'une écriture en mémoire par un thread sera visible par un autre thread ultérieurement. C'est la base de la synchronisation.", "Le temps.", "L'ordre aléatoire."],
        correctAnswer: 1,
        explanation: "Sans cette garantie (fournie par `volatile` ou `synchronized`), le compilateur ou le processeur pourrait réordonner les instructions et casser votre code multithread."
      },
      {
        id: 'fs_t4_12',
        tier: 4,
        text: "Quelle est la différence entre le Sharding et le Partitionnement de base de données ?",
        options: ["C'est pareil.", "Partitionnement = diviser une table en plusieurs morceaux sur la MÊME instance. Sharding = diviser les données sur PLUSIEURS serveurs physiques.", "Index.", "Backup."],
        correctAnswer: 1,
        explanation: "Le Sharding permet le 'Horizontal Scaling' (ajouter des serveurs), mais rend les jointures et les transactions complexes."
      },
      {
        id: 'fs_t4_13',
        tier: 4,
        text: "En Java, comment fonctionne le Garbage Collector ZGC par rapport au G1 ?",
        options: ["G1 est obsolète.", "ZGC vise une latence ultra-faible (<1ms) même sur des mémoires énormes (TB) grâce à des pointeurs colorés, au prix d'un peu de CPU.", "ZGC arrête l'application longtemps.", "G1 ne compacte pas."],
        correctAnswer: 1,
        explanation: "ZGC est révolutionnaire pour les applications Java modernes nécessitant une haute réactivité, car il élimine quasiment les pauses 'Stop-The-World'."
      },
      {
        id: 'fs_t4_14',
        tier: 4,
        text: "Dans Laravel, quelle est la différence entre utiliser une Facade et l'Injection de Dépendance ?",
        options: ["Les Facades sont mieux.", "Les Facades offrent un accès statique pratique ('magique') mais masquent les dépendances. L'Injection est explicite et facilite les tests.", "L'injection est lente.", "Les Facades sont dépréciées."],
        correctAnswer: 1,
        explanation: "`User::create()` est une Facade. C'est rapide à écrire mais couple votre code au framework. L'injection est plus propre architecturalement."
      },
      {
        id: 'fs_t4_15',
        tier: 4,
        text: "En DevOps, qu'est-ce que le déploiement 'Blue-Green' ?",
        options: ["Des couleurs.", "Avoir deux environnements de prod identiques. On déploie sur le 'Green' (inactif), on teste, puis on bascule le trafic instantanément du 'Blue' vers le 'Green'.", "Canary.", "Rolling."],
        correctAnswer: 1,
        explanation: "Cela permet un 'Zero Downtime' et un retour arrière (Rollback) instantané en cas de problème, juste en rebasculant le routeur."
      },
      {
        id: 'fs_t4_16',
        tier: 4,
        text: "Dans le pattern Circuit Breaker, quels sont les trois états possibles ?",
        options: ["On/Off.", "Closed (Tout va bien), Open (Erreur, on bloque tout), Half-Open (On laisse passer un peu pour tester si ça remarche).", "Haut/Bas.", "Vrai/Faux."],
        correctAnswer: 1,
        explanation: "Cela empêche votre système de s'effondrer en cascade si un service tiers est en panne. On arrête d'appeler le service mort le temps qu'il récupère."
      },
      {
        id: 'fs_t4_17',
        tier: 4,
        text: "Pourquoi le handshake TLS (SSL) a-t-il un coût sur la performance ?",
        options: ["C'est nul.", "Il ajoute 1 ou 2 allers-retours (RTT) supplémentaires au début de la connexion avant d'envoyer le moindre octet de données.", "C'est énorme.", "Ça utilise le CPU."],
        correctAnswer: 1,
        explanation: "C'est pourquoi on utilise des techniques comme le HTTP Keep-Alive, HTTP/2, ou le Session Resumption pour ne pas payer ce coût à chaque requête."
      },
      {
        id: 'fs_t4_18',
        tier: 4,
        text: "Que fait le compilateur JIT (Just-In-Time) de Java ?",
        options: ["Il compile avant.", "Il compile le Bytecode en code machine natif optimisé PENDANT l'exécution, en ciblant les parties du code les plus utilisées (Hotspots).", "C'est un interpréteur.", "Il est lent."],
        correctAnswer: 1,
        explanation: "C'est pour cela que les applications Java ont besoin d'un temps de chauffe (Warm-up) pour atteindre leur performance maximale."
      },
      {
        id: 'fs_t4_19',
        tier: 4,
        text: "Quel est le piège majeur du pattern CQRS combiné à l'Event Sourcing ?",
        options: ["C'est trop facile.", "La gestion du versioning des événements et la consistance éventuelle. Si le format d'un événement passé change, il faut migrer tout l'historique.", "L'espace disque.", "Le langage."],
        correctAnswer: 1,
        explanation: "Stocker tous les événements depuis le début est puissant, mais maintenir la compatibilité avec des événements vieux de 5 ans est un défi complexe."
      },
      {
        id: 'fs_t4_20',
        tier: 4,
        text: "Pourquoi ne peut-on pas révoquer facilement un JWT (JSON Web Token) stateless ?",
        options: ["Il est trop gros.", "Comme il est auto-suffisant et non stocké sur le serveur, le serveur ne sait pas qu'il doit le rejeter avant son expiration, sauf s'il implémente une liste noire (ce qui réintroduit un état).", "Il n'est pas crypté.", "C'est moins sûr."],
        correctAnswer: 1,
        explanation: "C'est le compromis majeur. Si vous volez un JWT valide 1h, vous avez accès pendant 1h, même si l'utilisateur a changé son mot de passe entre-temps (sauf mécanisme complexe)."
      },

      // =================================================================================
      // BATCH 9: CLOUD & SERVERLESS (New Injection)
      // =================================================================================
      {
        id: 'cloud_t1_1',
        tier: 1,
        text: "Qu'est-ce que le 'Serverless' (ex: AWS Lambda) ?",
        options: ["Il n'y a pas de serveur.", "Vous ne gérez pas les serveurs (OS, patchs). Vous déployez juste du code (fonctions) qui s'exécute à la demande et vous payez à la milliseconde.", "C'est un serveur gratuit.", "C'est pour le frontend."],
        correctAnswer: 1,
        explanation: "Il y a bien des serveurs physiques, mais ils sont abstraits par le fournisseur Cloud. Idéal pour les tâches événementielles."
      },
      {
        id: 'cloud_t1_2',
        tier: 1,
        text: "Que signifie 'IaaS' (Infrastructure as a Service) ?",
        options: ["Internet as a Service.", "Le cloud vous loue des machines virtuelles (VM), du réseau et du stockage. Vous gérez l'OS et les applications (ex: EC2).", "C'est comme Gmail.", "C'est pour les bases de données."],
        correctAnswer: 1,
        explanation: "C'est le niveau le plus bas du Cloud. Vous avez le contrôle total sur la machine, mais aussi la responsabilité de la mettre à jour."
      },
      {
        id: 'cloud_t1_3',
        tier: 1,
        text: "À quoi sert un 'Load Balancer' (Répartiteur de charge) ?",
        options: ["À peser les serveurs.", "À distribuer le trafic réseau entrant sur plusieurs serveurs pour améliorer la réactivité et la disponibilité.", "À sauvegarder les données.", "À crypter le trafic."],
        correctAnswer: 1,
        explanation: "Si un serveur tombe, le Load Balancer redirige le trafic vers les survivants. Essentiel pour la haute disponibilité."
      },
      {
        id: 'cloud_t2_1',
        tier: 2,
        text: "Quelle est la différence entre le stockage 'Block' (EBS) et 'Object' (S3) ?",
        options: ["C'est pareil.", "Block = Disque dur virtuel (performant, monté sur 1 VM). Object = Stockage de fichiers via API HTTP (illimité, moins rapide, métadonnées).", "Object est pour les DB.", "Block est pour les images."],
        correctAnswer: 1,
        explanation: "On installe une DB sur du Block (EBS). On stocke les avatars utilisateurs sur de l'Object (S3)."
      },
      {
        id: 'cloud_t2_2',
        tier: 2,
        text: "Qu'est-ce que l'Auto-Scaling ?",
        options: ["Un zoom automatique.", "L'ajout ou la suppression automatique d'instances (serveurs) en fonction de la charge (CPU, RAM) pour maintenir la performance au moindre coût.", "Redémarrer le serveur.", "Agrandir l'écran."],
        correctAnswer: 1,
        explanation: "C'est la promesse du Cloud : ne payer que ce qu'on consomme. Si le trafic explose la nuit, les serveurs s'allument tout seuls."
      },
      {
        id: 'cloud_t2_3',
        tier: 2,
        text: "En Cloud, qu'est-ce qu'une 'Zone de Disponibilité' (AZ) ?",
        options: ["Une région.", "Un ou plusieurs datacenters isolés physiquement (alimentation, réseau) au sein d'une même Région.", "Un pays.", "Un serveur."],
        correctAnswer: 1,
        explanation: "Une Région (ex: Paris) contient plusieurs AZ. Si une AZ brûle, l'autre continue de fonctionner. Déployez toujours sur plusieurs AZ."
      },
      {
        id: 'cloud_t3_1',
        tier: 3,
        text: "Quel est le problème du 'Cold Start' en Serverless ?",
        options: ["Le serveur a froid.", "Le délai de latence (quelques secondes) lors de la première exécution d'une fonction, le temps que le provider provisionne le conteneur.", "Le code gèle.", "Erreur 500."],
        correctAnswer: 1,
        explanation: "Java et .NET sont particulièrement touchés. On utilise des 'Keep Warm' pings ou SnapStart pour atténuer cela."
      },
      {
        id: 'cloud_t3_2',
        tier: 3,
        text: "Qu'est-ce que l'IaC (Infrastructure as Code) avec Terraform/CloudFormation ?",
        options: ["Coder en binaire.", "Décrire l'infrastructure (serveurs, réseaux) dans des fichiers de configuration versionnés, permettant des déploiements automatisés et reproductibles.", "Coder le backend.", "C'est un IDE."],
        correctAnswer: 1,
        explanation: "Fini le 'Clic-Clic' dans la console AWS. On peut détruire et recréer toute l'infra en une commande."
      },
      {
        id: 'cloud_t3_3',
        tier: 3,
        text: "Dans un VPC (Virtual Private Cloud), à quoi sert un 'NAT Gateway' ?",
        options: ["À rien.", "À permettre aux instances dans un sous-réseau PRIVÉ (pas d'IP publique) d'accéder à Internet (ex: `yum update`) sans être accessibles DEPUIS Internet.", "À bloquer tout.", "C'est un pare-feu."],
        correctAnswer: 1,
        explanation: "Vital pour la sécurité. Vos bases de données sont en privé mais doivent parfois télécharger des mises à jour."
      },
      {
        id: 'cloud_t4_1',
        tier: 4,
        text: "Quelle est la différence entre une architecture 'Multi-Region' Active-Active et Active-Passive ?",
        options: ["Aucune.", "Active-Active : Le trafic est servi par toutes les régions simultanément (complexe, sync données). Active-Passive : Une région sert, l'autre attend en backup (Disaster Recovery).", "Passive est mieux.", "Active est moins cher."],
        correctAnswer: 1,
        explanation: "Active-Active est le graal de la dispo mondiale mais un cauchemar pour la cohérence des données (conflits d'écriture)."
      },
      {
        id: 'cloud_t4_2',
        tier: 4,
        text: "En Serverless, qu'est-ce que la limite de 'Concurrency' ?",
        options: ["Temps d'exécution.", "Le nombre maximum d'instances de votre fonction qui peuvent s'exécuter simultanément. Au-delà, les requêtes sont rejetées (Throttling).", "Mémoire max.", "Coût max."],
        correctAnswer: 1,
        explanation: "Si vous ne gérez pas ça, une fonction Lambda peut absorber toutes les connexions DB disponibles et faire tomber votre base."
      },

      // =================================================================================
      // BATCH 10: LINUX & SYSADMIN (New Injection)
      // =================================================================================
      {
        id: 'lin_t1_1',
        tier: 1,
        text: "À quoi sert la commande `grep` ?",
        options: ["À télécharger.", "À rechercher une chaîne de caractères dans un fichier ou un flux de texte.", "À compresser.", "À copier."],
        correctAnswer: 1,
        explanation: "`cat log.txt | grep 'ERROR'` est la base du debugging."
      },
      {
        id: 'lin_t1_2',
        tier: 1,
        text: "Que signifie `sudo` ?",
        options: ["Super User Do. Exécuter une commande avec les privilèges d'administrateur (root).", "Sudoku.", "Supprimer Dossier.", "Suspendre."],
        correctAnswer: 0,
        explanation: "À utiliser avec précaution. `sudo rm -rf /` efface tout le système."
      },
      {
        id: 'lin_t1_3',
        tier: 1,
        text: "Quel est le rôle de `cron` sous Linux ?",
        options: ["Un jeu.", "Un démon qui planifie l'exécution de tâches (scripts) à des heures ou intervalles précis.", "Un éditeur de texte.", "Un navigateur."],
        correctAnswer: 1,
        explanation: "Le fichier `crontab` définit les règles : `0 0 * * *` = tous les jours à minuit."
      },
      {
        id: 'lin_t2_1',
        tier: 2,
        text: "Quelle est la différence entre `soft link` (lien symbolique) et `hard link` ?",
        options: ["Aucune.", "Soft link est un raccourci vers le chemin (casse si on déplace la cible). Hard link pointe vers le même inode (donnée physique) sur le disque.", "Hard link est pour Windows.", "Soft link est plus rapide."],
        correctAnswer: 1,
        explanation: "Si vous supprimez le fichier original, le soft link devient orphelin. Le hard link garde le contenu accessible tant qu'il reste un lien."
      },
      {
        id: 'lin_t2_2',
        tier: 2,
        text: "À quoi servent les permissions `755` (rwxr-xr-x) ?",
        options: ["Tout le monde peut tout faire.", "Propriétaire : Lire/Écrire/Exécuter. Groupe/Autres : Lire/Exécuter seulement.", "Personne ne peut écrire.", "C'est pour les images."],
        correctAnswer: 1,
        explanation: "Standard pour les scripts et exécutables. Le propriétaire contrôle, les autres utilisent."
      },
      {
        id: 'lin_t2_3',
        tier: 2,
        text: "Que fait la commande `tail -f fichier.log` ?",
        options: ["Affiche la fin.", "Affiche les dernières lignes et attend (follow) pour afficher les nouvelles lignes ajoutées en temps réel.", "Supprime la fin.", "Coupe le fichier."],
        correctAnswer: 1,
        explanation: "Indispensable pour surveiller les logs d'un serveur en production qui tourne."
      },
      {
        id: 'lin_t3_1',
        tier: 3,
        text: "Qu'est-ce qu'un 'File Descriptor' (Descripteur de fichier) ?",
        options: ["Un nom de fichier.", "Un entier positif identifiant un fichier ouvert (ou socket/pipe) par un processus. 0=Stdin, 1=Stdout, 2=Stderr.", "Une extension.", "Une icône."],
        correctAnswer: 1,
        explanation: "Tout est fichier sous Unix. Les sockets réseau consomment aussi des File Descriptors. Il y a une limite par process (`ulimit -n`)."
      },
      {
        id: 'lin_t3_2',
        tier: 3,
        text: "Quelle est la différence entre `Process` et `Daemon` ?",
        options: ["Le nom.", "Un Daemon est un processus qui tourne en arrière-plan (background), détaché du terminal, souvent lancé au démarrage.", "Un Daemon est malveillant.", "Un Process est graphique."],
        correctAnswer: 1,
        explanation: "Apache, Nginx, MySQL sont des daemons. Ils attendent des requêtes sans intervention humaine."
      },
      {
        id: 'lin_t3_3',
        tier: 3,
        text: "À quoi sert le dossier `/proc` ?",
        options: ["Fichiers temporaires.", "Système de fichiers virtuel qui donne accès aux informations du noyau (Kernel) et des processus en cours (ex: `/proc/cpuinfo`).", "Programmes.", "Utilisateurs."],
        correctAnswer: 1,
        explanation: "Ce ne sont pas de vrais fichiers sur le disque, c'est une interface vers la mémoire du noyau."
      },
      {
        id: 'lin_t4_1',
        tier: 4,
        text: "Que signifie 'Load Average' (ex: 0.5, 1.2, 5.0) ?",
        options: ["Utilisation RAM.", "Moyenne du nombre de processus en attente de CPU ou d'I/O sur 1, 5 et 15 minutes.", "Vitesse disque.", "Température."],
        correctAnswer: 1,
        explanation: "Si Load Average > Nombre de Coeurs CPU, votre serveur sature. Attention, l'attente I/O (disque lent) augmente aussi le Load."
      },
      {
        id: 'lin_t4_2',
        tier: 4,
        text: "Qu'est-ce qu'un 'Zombie Process' ?",
        options: ["Un virus.", "Un processus terminé (`exit()`) mais dont le parent n'a pas encore lu le code de retour (`wait()`). Il reste dans la table des processus mais ne consomme pas de ressources.", "Un processus planté.", "Un démon."],
        correctAnswer: 1,
        explanation: "Ils ne mangent pas de CPU, mais ils polluent la table des processus. Si le parent meurt, `init` (PID 1) les adopte et les nettoie."
      },

      // =================================================================================
      // BATCH 11: DEEP CYBERSECURITY & CRYPTOGRAPHY (New Injection)
      // =================================================================================
      {
        id: 'sec_t1_1',
        tier: 1,
        text: "Quelle est la différence entre HTTP et HTTPS ?",
        options: ["HTTPS est plus rapide.", "HTTPS est crypté (TLS), garantissant que personne ne peut lire ou modifier les données en transit.", "HTTP est pour le local.", "HTTPS est payant."],
        correctAnswer: 1,
        explanation: "Sans HTTPS, n'importe quel intermédiaire (WiFi public, FAI) peut lire vos mots de passe en clair."
      },
      {
        id: 'sec_t1_2',
        tier: 1,
        text: "Qu'est-ce que le Phishing (Hameçonnage) ?",
        options: ["Pêcher.", "Une technique d'ingénierie sociale pour tromper l'utilisateur et lui faire révéler des informations sensibles (via un faux email/site).", "Un virus.", "Une attaque DDoS."],
        correctAnswer: 1,
        explanation: "Le maillon faible est souvent l'humain, pas la machine."
      },
      {
        id: 'sec_t2_1',
        tier: 2,
        text: "En cryptographie, quelle est la différence entre Symétrique (AES) et Asymétrique (RSA) ?",
        options: ["C'est pareil.", "Symétrique utilise la MÊME clé pour chiffrer/déchiffrer (rapide). Asymétrique utilise une paire de clés Publique/Privée (lent, pour l'échange de clés).", "AES est obsolète.", "RSA est pour les fichiers."],
        correctAnswer: 1,
        explanation: "HTTPS utilise les deux : RSA pour échanger la clé AES, puis AES pour chiffrer la conversation."
      },
      {
        id: 'sec_t2_2',
        tier: 2,
        text: "Qu'est-ce que l'attaque SQL Injection (SQLi) ?",
        options: ["Une erreur de base de données.", "L'insertion de code SQL malveillant via un champ de formulaire non nettoyé, permettant de lire ou détruire la base.", "Un virus.", "Une surcharge serveur."],
        correctAnswer: 1,
        explanation: "Solution : Toujours utiliser des requêtes préparées (Prepared Statements)."
      },
      {
        id: 'sec_t2_3',
        tier: 2,
        text: "Que signifie 'Man-in-the-Middle' (MitM) ?",
        options: ["Un arbitre.", "Un attaquant s'interpose secrètement entre deux parties communiquant, interceptant et pouvant modifier les messages.", "Un proxy.", "Un routeur."],
        correctAnswer: 1,
        explanation: "C'est pourquoi on vérifie les certificats SSL. Si le certificat est invalide, c'est peut-être un MitM."
      },
      {
        id: 'sec_t3_1',
        tier: 3,
        text: "Qu'est-ce que le CSRF (Cross-Site Request Forgery) ?",
        options: ["Un vol de cookie.", "Forcer un utilisateur authentifié à exécuter une action indésirable sur un site où il est connecté (ex: virement) via un lien piégé.", "Une injection SQL.", "Un bug navigateur."],
        correctAnswer: 1,
        explanation: "Protection : Tokens CSRF synchronisés ou cookies `SameSite=Strict`."
      },
      {
        id: 'sec_t3_2',
        tier: 3,
        text: "Qu'est-ce que le SSRF (Server-Side Request Forgery) ?",
        options: ["Côté client.", "Tromper le serveur pour qu'il effectue une requête HTTP vers une destination interne (ex: AWS Metadata 169.254.169.254) inaccessible de l'extérieur.", "Une boucle infinie.", "Un cache."],
        correctAnswer: 1,
        explanation: "Très dangereux dans le Cloud. Permet de voler les clés d'accès IAM de l'instance EC2."
      },
      {
        id: 'sec_t3_3',
        tier: 3,
        text: "Quelle est la différence entre Hachage (Hashing) et Chiffrement (Encryption) ?",
        options: ["Aucune.", "Le chiffrement est réversible (avec une clé). Le hachage est irréversible (à sens unique).", "Le hachage est plus lent.", "Le chiffrement est pour les mots de passe."],
        correctAnswer: 1,
        explanation: "On hache les mots de passe (pour ne jamais pouvoir les lire). On chiffre les cartes bancaires (pour pouvoir les utiliser)."
      },
      {
        id: 'sec_t4_1',
        tier: 4,
        text: "Qu'est-ce qu'une attaque XXE (XML External Entity) ?",
        options: ["Un fichier texte.", "Exploiter un parseur XML mal configuré pour lire des fichiers locaux (/etc/passwd) ou faire des requêtes SSRF via des entités externes.", "Un fichier JSON.", "Un bug HTML."],
        correctAnswer: 1,
        explanation: "Si votre API accepte du XML, désactivez TOUJOURS le chargement des entités externes."
      },
      {
        id: 'sec_t4_2',
        tier: 4,
        text: "Dans TLS 1.3, qu'est-ce que le 'Perfect Forward Secrecy' (PFS) ?",
        options: ["Un secret parfait.", "Garantie que si la clé privée du serveur est volée aujourd'hui, les conversations passées enregistrées restent indéchiffrables (clés de session éphémères).", "Un cryptage militaire.", "Une sauvegarde."],
        correctAnswer: 1,
        explanation: "Chaque session a sa propre clé temporaire qui est jetée à la fin. Voler la clé maître ne sert qu'à usurper l'identité future, pas à lire le passé."
      },

      // =================================================================================
      // BATCH 12: MODERN WEB API (New Injection)
      // =================================================================================
      {
        id: 'web_t1_1',
        tier: 1,
        text: "Qu'est-ce que le `localStorage` ?",
        options: ["Le disque dur.", "Un espace de stockage clé-valeur dans le navigateur (5-10Mo) qui persiste après fermeture.", "La RAM.", "Le serveur."],
        correctAnswer: 1,
        explanation: "Utile pour les préférences utilisateur (Thème Dark/Light). Ne jamais y mettre de données sensibles."
      },
      {
        id: 'web_t2_1',
        tier: 2,
        text: "Qu'est-ce que WebAssembly (Wasm) ?",
        options: ["Du JavaScript.", "Un format d'instruction binaire pour exécuter du code (C++, Rust, Go) dans le navigateur à une vitesse proche du natif.", "Un framework.", "Une base de données."],
        correctAnswer: 1,
        explanation: "Permet de faire du montage vidéo, de la 3D ou de la crypto lourde directement dans le navigateur."
      },
      {
        id: 'web_t2_2',
        tier: 2,
        text: "À quoi sert l'API `fetch` ?",
        options: ["À aller chercher le chien.", "À faire des requêtes réseau HTTP asynchrones (remplaçant de XMLHttpRequest). Retourne une Promise.", "À lire un fichier local.", "À dessiner."],
        correctAnswer: 1,
        explanation: "`fetch('/api/data').then(res => res.json())` est le standard moderne."
      },
      {
        id: 'web_t3_1',
        tier: 3,
        text: "Qu'est-ce qu'un Service Worker ?",
        options: ["Un employé.", "Un script qui tourne en arrière-plan du navigateur, séparé de la page web. Permet le mode Offline, le Cache avancé et les Push Notifications.", "Un thread UI.", "Un serveur Node."],
        correctAnswer: 1,
        explanation: "La technologie clé des PWA (Progressive Web Apps). Il intercepte les requêtes réseau."
      },
      {
        id: 'web_t3_2',
        tier: 3,
        text: "Qu'est-ce que WebRTC ?",
        options: ["Une horloge.", "Web Real-Time Communication. Permet l'échange de données/audio/vidéo en Peer-to-Peer (P2P) direct entre navigateurs sans passer par le serveur.", "Un chat.", "Un protocole mail."],
        correctAnswer: 1,
        explanation: "Utilisé par Google Meet, Zoom, Discord. Le serveur ne sert qu'à la mise en relation (Signaling)."
      },
      {
        id: 'web_t4_1',
        tier: 4,
        text: "Qu'est-ce que le Shadow DOM (Web Components) ?",
        options: ["Un DOM sombre.", "Un sous-arbre DOM encapsulé et isolé du document principal. Le CSS et JS internes ne fuient pas vers l'extérieur (et vice-versa).", "Un DOM virtuel.", "Un hack."],
        correctAnswer: 1,
        explanation: "Permet de créer des composants réutilisables (Custom Elements) qui ont leur propre style sans conflit avec le reste de la page."
      },
      {
        id: 'web_t4_2',
        tier: 4,
        text: "Qu'est-ce que IndexedDB ?",
        options: ["Une liste.", "Une base de données transactionnelle NoSQL orientée objet intégrée au navigateur. Permet de stocker de gros volumes de données structurées.", "Un cookie.", "Un fichier."],
        correctAnswer: 1,
        explanation: "Beaucoup plus puissant et complexe que LocalStorage. Asynchrone par nature."
      },

      // =================================================================================
      // BATCH 13: PHP INTERNALS & ASYNC (New Injection)
      // =================================================================================
      {
        id: 'php_t1_1',
        tier: 1,
        text: "Que signifie PHP ?",
        options: ["Personal Home Page (historique) ou PHP: Hypertext Preprocessor (récursif).", "Programmation Haute Performance.", "Public Hosting Platform.", "Rien."],
        correctAnswer: 0,
        explanation: "Un langage de script côté serveur conçu pour le web."
      },
      {
        id: 'php_t2_1',
        tier: 2,
        text: "Qu'est-ce que Composer ?",
        options: ["Un musicien.", "Le gestionnaire de dépendances standard pour PHP. Il installe les bibliothèques (vendor) et gère l'autoloading.", "Un serveur.", "Un framework."],
        correctAnswer: 1,
        explanation: "Sans `composer.json` et `composer.lock`, le PHP moderne n'existe pas."
      },
      {
        id: 'php_t2_2',
        tier: 2,
        text: "Quelle est la différence entre `include` et `require` ?",
        options: ["Aucune.", "`require` provoque une erreur fatale (arrête le script) si le fichier manque. `include` émet juste un warning et continue.", "`include` est plus rapide.", "`require` est obsolète."],
        correctAnswer: 1,
        explanation: "Utilisez `require_once` pour les fichiers critiques (config, classes)."
      },
      {
        id: 'php_t3_1',
        tier: 3,
        text: "Qu'est-ce que PHP-FPM (FastCGI Process Manager) ?",
        options: ["Un module Apache.", "Un gestionnaire de processus qui maintient un pool de workers PHP en mémoire pour traiter les requêtes web rapidement.", "Une base de données.", "Un cache."],
        correctAnswer: 1,
        explanation: "Beaucoup plus performant que l'ancien `mod_php`. C'est le standard avec Nginx."
      },
      {
        id: 'php_t3_2',
        tier: 3,
        text: "Qu'est-ce qu'un Trait en PHP ?",
        options: ["Une interface.", "Un mécanisme de réutilisation de code (copier-coller horizontal) permettant d'ajouter des méthodes à plusieurs classes indépendantes sans héritage.", "Une classe abstraite.", "Une variable."],
        correctAnswer: 1,
        explanation: "PHP ne supporte pas l'héritage multiple. Les Traits contournent cette limitation."
      },
      {
        id: 'php_t3_3',
        tier: 3,
        text: "À quoi sert OPcache ?",
        options: ["À rien.", "À stocker le bytecode PHP précompilé en mémoire partagée pour éviter de parser/compiler les scripts à chaque requête.", "À cacher les requêtes SQL.", "À cacher le HTML."],
        correctAnswer: 1,
        explanation: "Activez-le TOUJOURS en production. C'est un gain de performance gratuit x2 ou x3."
      },
      {
        id: 'php_t4_1',
        tier: 4,
        text: "Qu'est-ce que Swoole ou Laravel Octane ?",
        options: ["Des jeux.", "Des extensions qui rendent PHP asynchrone et résident en mémoire (Stateful), évitant de redémarrer le framework à chaque requête.", "Des bases de données.", "Des thèmes."],
        correctAnswer: 1,
        explanation: "PHP change de paradigme : on passe du 'Die and Retry' (stateless) à un serveur d'application longue durée (comme Node.js ou Java)."
      },
      {
        id: 'php_t4_2',
        tier: 4,
        text: "Comment fonctionne le Garbage Collector de PHP (Reference Counting) ?",
        options: ["Il ne fait rien.", "Il compte le nombre de références vers chaque variable. Si le compteur tombe à 0, la mémoire est libérée. Il gère aussi les cycles (depuis 5.3).", "Il supprime tout à la fin.", "Il est manuel."],
        correctAnswer: 1,
        explanation: "Les cycles (A pointe vers B qui pointe vers A) étaient une source majeure de fuites de mémoire avant PHP 5.3."
      }
    ]
  }
};
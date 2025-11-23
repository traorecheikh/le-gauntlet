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
  "Arrête de deviner, ça se voit."
];

export const TIER_1_INSULTS = [
  "Sérieusement ? C'est le niveau 1. C'est la base absolue. C'est humiliant.",
  "Si tu rates ça, pose ta démission. Tout de suite.",
  "Ma grand-mère comprend mieux ce concept que toi.",
  "C'est une blague ? C'est niveau tutoriel YouTube.",
  "Tu n'as aucune excuse pour rater ça. Aucune.",
  "Retourne apprendre à lire la documentation."
];

export const PRAISE = [
  "Pas mal. Pour un humain.",
  "Acceptable. Ne prends pas la grosse tête.",
  "Tu as peut-être un avenir... peut-être.",
  "Enfin une lueur d'intelligence dans ce néant.",
  "Tu as survécu. Pour l'instant."
];

export const RANKS = {
  noob: "Noob Absolu",
  script_kiddie: "Bricoleur de Scripts",
  competent: "Dév Junior (Sur un malentendu)",
  elite: "Machine de Guerre",
};

export const TRACKS: Record<TrackId, Track> = {
  data_science: {
    id: 'data_science',
    name: 'Data Science',
    description: 'Algorithmes, Stats, Deep Learning. Pas pour les faibles.',
    questions: [
      // --- TIER 1 (Basic) ---
      {
        id: 'ds_t1_1',
        tier: 1,
        text: "Quelle est la différence fondamentale entre la régression linéaire et logistique ?",
        options: [
          "Il n'y en a pas, c'est juste le nom qui change.",
          "La linéaire prédit une valeur continue, la logistique une probabilité binaire.",
          "La logistique est pour les données textuelles uniquement.",
          "La linéaire utilise des réseaux de neurones."
        ],
        correctAnswer: 1,
        explanation: "Si tu as raté ça, c'est grave. La régression linéaire cherche à prédire une valeur continue (comme un prix ou une température) en ajustant une droite (ou hyperplan) qui minimise l'erreur quadratique. La régression logistique, malgré son nom trompeur, est un algorithme de CLASSIFICATION. Elle utilise une fonction logistique (sigmoïde) pour transformer une combinaison linéaire de variables en une probabilité comprise entre 0 et 1. C'est la base absolue de la modélisation prédictive."
      },
      {
        id: 'ds_t1_2',
        tier: 1,
        text: "Que signifie 'Overfitting' ?",
        options: [
          "Le modèle est trop lent à entraîner.",
          "Le modèle apprend le bruit des données d'entraînement au lieu du signal.",
          "Le modèle est trop simple pour capturer la tendance.",
          "C'est quand on a trop de données."
        ],
        correctAnswer: 1,
        explanation: "C'est l'erreur classique du débutant qui veut '100% de précision'. L'overfitting (surapprentissage) se produit quand ton modèle est trop complexe par rapport à la quantité de données. Il finit par mémoriser le bruit aléatoire et les spécificités de ton jeu d'entraînement au lieu de comprendre la structure sous-jacente (le signal). Résultat : il excelle en entraînement mais s'effondre totalement sur de nouvelles données (haute variance). On le combat avec de la régularisation (L1/L2, Dropout) ou plus de données."
      },
      {
        id: 'ds_t1_3',
        tier: 1,
        text: "En Pandas, à quoi sert 'inplace=True' ?",
        options: [
          "À optimiser la vitesse de calcul x10.",
          "À créer une copie du DataFrame.",
          "À modifier l'objet original sans renvoyer de copie.",
          "À supprimer les valeurs nulles."
        ],
        correctAnswer: 2,
        explanation: "C'est du Python de base. Par défaut, les méthodes Pandas renvoient une NOUVELLE copie de l'objet modifié pour éviter les effets de bord (principes de programmation fonctionnelle). `inplace=True` force la modification directe de l'objet en mémoire. ATTENTION : C'est souvent une mauvaise pratique aujourd'hui et la bibliothèque tend à déprécier ce pattern car il empêche le chaînage de méthodes (method chaining) et ne garantit pas toujours un gain de mémoire réel sous le capot."
      },
       {
        id: 'ds_t1_4',
        tier: 1,
        text: "Qu'est-ce qu'une valeur p (p-value) de 0.03 signifie généralement ?",
        options: [
          "Il y a 3% de chances que l'hypothèse nulle soit vraie.",
          "Le résultat est faux à 97%.",
          "Si l'hypothèse nulle est vraie, il y a 3% de chances d'observer ces données (ou plus extrêmes).",
          "L'expérience est statistiquement insignifiante."
        ],
        correctAnswer: 2,
        explanation: "C'est l'erreur d'interprétation la plus commune en stats, et elle est impardonnable. La p-value N'EST PAS la probabilité que ton hypothèse soit vraie ou fausse. C'est une probabilité conditionnelle : P(Données | Hypothèse Nulle). Elle te dit à quel point tes données sont 'surprenantes' si on suppose qu'il n'y a aucun effet réel. À 0.03, c'est rare (sous le seuil standard de 0.05), donc on rejette l'hypothèse nulle. Mais ça ne prouve rien en soi sur la vérité de l'hypothèse alternative."
      },

      // --- TIER 2 (Intermediate) ---
      {
        id: 'ds_t2_1',
        tier: 2,
        text: "Pourquoi utiliserait-on une forêt aléatoire (Random Forest) plutôt qu'un arbre de décision unique ?",
        options: [
          "Pour réduire le biais.",
          "Pour réduire la variance et éviter l'overfitting.",
          "Parce que c'est plus rapide à entraîner.",
          "Pour avoir une meilleure interprétabilité."
        ],
        correctAnswer: 1,
        explanation: "Un arbre de décision unique est très instable : change un peu les données, et l'arbre change complètement (Haute Variance). Il a tendance à overfitter massivement s'il est profond. La Random Forest utilise le principe du Bagging (Bootstrap Aggregating) : elle entraîne plein d'arbres sur des sous-ensembles aléatoires de données et de features, puis fait la moyenne de leurs prédictions. La 'Loi des Grands Nombres' fait que cette moyenne réduit drastiquement la variance (l'erreur due à la sensibilité aux données) sans trop augmenter le biais. C'est plus robuste."
      },
      {
        id: 'ds_t2_2',
        tier: 2,
        text: "Quel est le problème du 'Vanishing Gradient' dans les RNNs ?",
        options: [
          "Les poids deviennent infinis.",
          "Le modèle oublie les dépendances à long terme car le gradient tend vers 0.",
          "Le taux d'apprentissage est trop élevé.",
          "C'est un problème spécifique aux images."
        ],
        correctAnswer: 1,
        explanation: "Dans un réseau de neurones profond (ou récurrent sur une longue séquence), l'entraînement se fait par rétropropagation (Backpropagation). On utilise la règle de la chaîne pour calculer les dérivées. Si tu multiplies plein de petits nombres (dérivées de fonctions d'activation comme Sigmoïde < 0.25) entre eux, le résultat tend exponentiellement vers 0. Conséquence : les poids des premières couches (ou du début de la séquence) ne sont jamais mis à jour. Le réseau n'apprend pas les relations à long terme. C'est pour ça qu'on utilise des LSTMs/GRUs ou des fonctions ReLU."
      },
      {
        id: 'ds_t2_3',
        tier: 2,
        text: "Dans un problème de classification déséquilibré (99% classe A, 1% classe B), quelle métrique est la PIRE ?",
        options: [
          "F1-Score",
          "Précision (Precision)",
          "Exactitude (Accuracy)",
          "Rappel (Recall)"
        ],
        correctAnswer: 2,
        explanation: "L'Accuracy est un piège mortel ici. Si tu as 99 transactions légitimes et 1 fraude, un modèle stupide qui dit TOUJOURS 'Légitime' aura 99% d'Accuracy. Tu seras content, tu mettras en prod, et tu rateras 100% des fraudes. Dans ce cas, l'Accuracy ne mesure pas la compétence du modèle, mais la distribution des classes. Tu DOIS utiliser la Précision, le Rappel, le F1-Score ou l'AUC-ROC pour évaluer la capacité du modèle à distinguer la classe minoritaire."
      },

      // --- TIER 3 (Advanced) ---
      {
        id: 'ds_t3_1',
        tier: 3,
        text: "Explique le 'Kernel Trick' dans les SVM.",
        options: [
          "C'est une astuce pour réduire la dimensionnalité.",
          "Ça permet de séparer des données non-linéaires en les projetant implicitement dans un espace de dimension supérieure.",
          "Ça sert à régulariser les hyperparamètres.",
          "C'est un hack pour accélérer le GPU."
        ],
        correctAnswer: 1,
        explanation: "Les SVM (Support Vector Machines) sont des classifieurs linéaires. Ils cherchent un hyperplan pour séparer les données. Mais si tes données ne sont pas séparables linéairement (ex: un cercle au milieu d'un autre) ? L'idée est de projeter les données dans un espace 3D, 4D, ou infini où elles DEVIENNENT séparables linéairement. Le 'Trick' (Astuce), c'est qu'on n'a pas besoin de calculer les coordonnées réelles dans cet espace complexe (ce qui serait impossible). On a juste besoin du produit scalaire entre les points, que la 'Fonction Noyau' (Kernel) peut calculer directement et efficacement dans l'espace d'origine."
      },
      {
        id: 'ds_t3_2',
        tier: 3,
        text: "Quelle est la différence conceptuelle entre Bagging et Boosting ?",
        options: [
          "Bagging entraine en série, Boosting en parallèle.",
          "Bagging réduit la variance (parallèle), Boosting réduit le biais (séquentiel).",
          "Bagging entraîne en parallèle (indépendants), Boosting en série (corrige les erreurs précédentes).",
          "C'est la même chose."
        ],
        correctAnswer: 2,
        explanation: "C'est une question d'architecture d'ensemble. Le BAGGING (Bootstrap Aggregating, ex: Random Forest) entraîne des modèles forts et complexes en PARALLÈLE, de manière indépendante, pour lisser leurs erreurs (réduction de Variance). Le BOOSTING (ex: XGBoost, AdaBoost, Gradient Boosting) entraîne des modèles faibles en SÉRIE. Chaque nouveau modèle tente spécifiquement de corriger les erreurs commises par la combinaison des modèles précédents. Le Boosting est une méthode d'optimisation itérative qui réduit principalement le BIAIS. Il est souvent plus performant mais plus sensible au bruit et aux outliers."
      },

      // --- TIER 4 (Impossible) ---
      {
        id: 'ds_t4_1',
        tier: 4,
        text: "Dans l'architecture Transformer, pourquoi l'encodage positionnel est-il mathématiquement indispensable ?",
        options: [
          "Pour indiquer au modèle la langue du texte.",
          "Car l'attention est invariante par permutation; sans lui, le modèle voit un 'sac de mots'.",
          "Pour augmenter la taille du vocabulaire.",
          "Pour compresser les vecteurs d'entrée."
        ],
        correctAnswer: 1,
        explanation: "Les architectures précédentes (RNN/LSTM) traitaient les mots séquentiellement, donc l'ordre était implicite. Le Transformer traite tout le texte en parallèle grâce au mécanisme de 'Self-Attention'. Mathématiquement, l'opération d'attention (Softmax(QK^T)) est invariante par permutation : si tu mélanges les mots de la phrase en entrée, le calcul d'attention donne le même résultat pour chaque mot. Le modèle ne saurait pas si 'Paul' est le sujet ou l'objet. L'Encodage Positionnel ajoute un vecteur (basé sur des sinus/cosinus) à chaque embedding d'entrée pour injecter une signature unique liée à la position, brisant cette symétrie."
      },
      {
        id: 'ds_t4_2',
        tier: 4,
        text: "Théorème de l'Approximation Universelle : Que dit-il vraiment et quelle est sa limite pratique ?",
        options: [
          "Un réseau de neurones peut tout apprendre parfaitement.",
          "Un réseau avec une seule couche cachée peut approximer n'importe quelle fonction continue, mais la largeur requise peut être irréaliste.",
          "Le Deep Learning est la solution à tous les problèmes.",
          "Il faut une infinité de couches pour tout résoudre."
        ],
        correctAnswer: 1,
        explanation: "Le théorème affirme qu'un réseau de neurones feed-forward avec une seule couche cachée contenant un nombre fini de neurones peut approximer n'importe quelle fonction continue sur un compact de R^n avec une précision arbitraire. C'est puissant théoriquement car ça prouve que les NN sont des approximateurs universels. MAIS, le théorème ne dit pas qu'on peut APPRENDRE cette fonction (trouver les poids via gradient descent), ni que la taille de la couche cachée sera raisonnable. En pratique, pour des fonctions complexes, la largeur nécessaire peut être exponentielle. C'est pour ça qu'on préfère la Profondeur (Deep Learning) à la Largeur : c'est exponentiellement plus efficace en nombre de paramètres."
      }
    ]
  },
  fullstack_dev: {
    id: 'fullstack_dev',
    name: 'Fullstack & Patterns',
    description: 'Vue.js, Java/PHP, Design Patterns. Pour les architectes, pas les maçons.',
    questions: [
      // --- TIER 1 (Basic) ---
      {
        id: 'fs_t1_1',
        tier: 1,
        text: "Vue.js : Quelle est la différence principale entre `v-if` et `v-show` ?",
        options: [
          "Aucune, c'est du sucre syntaxique.",
          "v-if modifie le CSS (display:none), v-show supprime l'élément du DOM.",
          "v-if ajoute/supprime l'élément du DOM, v-show modifie juste le CSS (display:none).",
          "v-show est pour les boucles."
        ],
        correctAnswer: 2,
        explanation: "Base de Vue.js. `v-if` est un rendu conditionnel 'réel' : si la condition est fausse, le bloc n'existe pas dans le DOM (détruit/recréé). `v-show` rend TOUJOURS l'élément mais toggle la propriété CSS `display`. Si tu as un élément qui change d'état 10 fois par seconde, utilise `v-show` pour la performance. Si la condition change rarement, `v-if` est plus propre."
      },
      {
        id: 'fs_t1_2',
        tier: 1,
        text: "Spring Boot : À quoi sert l'annotation `@Autowired` (ou l'injection par constructeur) ?",
        options: [
          "À connecter la base de données.",
          "À permettre à Spring d'injecter automatiquement les dépendances (Beans) nécessaires.",
          "À rendre une classe publique.",
          "À démarrer le serveur Tomcat."
        ],
        correctAnswer: 1,
        explanation: "C'est le cœur de l'Inversion de Contrôle (IoC). Au lieu de faire `new Service()` dans ton contrôleur (couplage fort), tu demandes à Spring de te fournir une instance gérée (Bean). L'injection par constructeur est recommandée aujourd'hui pour garantir que le Bean est immuable et testable."
      },
      {
        id: 'fs_t1_3',
        tier: 1,
        text: "Design Patterns : Quel est le but principal du pattern 'Singleton' ?",
        options: [
          "S'assurer qu'une classe a des instances illimitées.",
          "Garantir qu'une classe n'a qu'une seule instance et fournir un point d'accès global à celle-ci.",
          "Créer des objets complexes étape par étape.",
          "Transformer l'interface d'une classe en une autre."
        ],
        correctAnswer: 1,
        explanation: "Le Singleton est l'un des patterns les plus connus (et abusés). Il garantit l'unicité (ex: connexion DB, Configuration). ATTENTION : C'est souvent considéré comme un anti-pattern aujourd'hui car il introduit un état global caché, rend les tests unitaires difficiles (mocking compliqué) et crée un couplage fort. En Spring, les Beans sont des Singletons par défaut, mais gérés par le conteneur (bien mieux)."
      },
      {
        id: 'fs_t1_4',
        tier: 1,
        text: "SQL : Quelle est la différence entre `INNER JOIN` et `LEFT JOIN` ?",
        options: [
          "INNER JOIN est plus rapide.",
          "INNER JOIN ne retourne que les correspondances exactes. LEFT JOIN retourne tout ce qu'il y a à gauche, même sans correspondance (NULL).",
          "LEFT JOIN est déprécié.",
          "INNER JOIN est pour les nombres uniquement."
        ],
        correctAnswer: 1,
        explanation: "Si tu ne sais pas faire une jointure, tu n'es pas fullstack, tu es stagiaire HTML. `INNER` = Intersection (A ∩ B). `LEFT` = Tout A + (B si existe sinon NULL). C'est fondamental pour ne pas perdre de données quand tu requêtes des relations optionnelles."
      },

      // --- TIER 2 (Intermediate) ---
      {
        id: 'fs_t2_1',
        tier: 2,
        text: "Design Patterns : Lequel de ces patterns est de type 'Comportemental' (Behavioral) ?",
        options: [
          "Factory Method",
          "Observer",
          "Adapter",
          "Builder"
        ],
        correctAnswer: 1,
        explanation: "Observer est comportemental : il définit une dépendance un-à-plusieurs entre objets pour que quand l'un change d'état, tous les autres soient notifiés (base de RxJS, des EventListeners, et de la réactivité Vue). Factory et Builder sont Créationnels. Adapter est Structurel. Connaître la catégorie t'aide à savoir QUAND l'utiliser."
      },
      {
        id: 'fs_t2_2',
        tier: 2,
        text: "Laravel / ORM : Qu'est-ce que le problème 'N+1' et comment le résoudre avec Eloquent ?",
        options: [
          "Un bug de mathématiques dans PHP.",
          "C'est quand tu fais une boucle qui exécute une requête SQL par itération (ex: récupérer l'auteur pour chaque livre). Solution : Eager Loading (`with()`).",
          "C'est quand tu as trop de tables.",
          "C'est une erreur de pagination."
        ],
        correctAnswer: 1,
        explanation: "Le tueur de performance #1 des apps Laravel/Hibernate. Code coupable : `foreach ($books as $book) { echo $book->author->name; }`. Si tu as 50 livres, tu fais 1 requête pour les livres + 50 requêtes pour les auteurs = 51 requêtes. Avec `$books = Book::with('author')->get()`, tu fais 2 requêtes. Point final."
      },
      {
        id: 'fs_t2_3',
        tier: 2,
        text: "Design Patterns : Dans quel cas utiliserais-tu le pattern 'Strategy' ?",
        options: [
          "Pour créer une seule instance d'une classe.",
          "Pour définir une famille d'algorithmes, les encapsuler chacun, et les rendre interchangeables à l'exécution.",
          "Pour adapter une interface incompatible.",
          "Pour notifier des abonnés d'un changement."
        ],
        correctAnswer: 1,
        explanation: "Indispensable pour éviter les `if/else` géants. Exemple : Paiement. Tu as une interface `PaymentStrategy`. Tu as des implémentations `PayPalStrategy`, `StripeStrategy`. Ton code client utilise l'interface. Tu peux changer de méthode de paiement à la volée sans toucher au code métier. C'est le 'O' de SOLID (Open/Closed Principle)."
      },

      // --- TIER 3 (Advanced) ---
      {
        id: 'fs_t3_1',
        tier: 3,
        text: "Design Patterns : Quelle est la différence entre 'Abstract Factory' et 'Factory Method' ?",
        options: [
          "Aucune, c'est pareil.",
          "Factory Method utilise l'héritage pour décider quel objet instancier. Abstract Factory utilise la composition pour créer des familles d'objets liés.",
          "Abstract Factory crée des classes abstraites.",
          "Factory Method est statique."
        ],
        correctAnswer: 1,
        explanation: "Subtile mais crucial. Factory Method : Une méthode abstraite `createAnimal()` dans une classe, que les sous-classes `DogFactory` implémentent. Abstract Factory : Une interface qui contient PLUSIEURS méthodes de création (`createChair()`, `createSofa()`) pour créer toute une famille de produits cohérents (ex: Meubles Victoriens vs Modernes) sans spécifier leurs classes concrètes."
      },
      {
        id: 'fs_t3_2',
        tier: 3,
        text: "Node.js : Comment détecter et débugger une fuite de mémoire (Memory Leak) ?",
        options: [
          "En redémarrant le serveur toutes les heures.",
          "En regardant les logs d'erreur.",
          "En utilisant l'inspecteur Chrome (Heap Snapshot) pour comparer l'allocation mémoire avant/après une charge.",
          "En augmentant la RAM du serveur."
        ],
        correctAnswer: 2,
        explanation: "Augmenter la RAM ne fait que repousser le crash. Une fuite, c'est des objets référencés qui ne sont pas Garbage Collected (ex: listeners globaux, closures infinies). Tu dois prendre un Snapshot du Heap, stresser l'app, en prendre un 2ème, et comparer les objets qui n'ont pas disparu. Si tu ne sais pas faire ça, ton app Node ne tiendra pas la prod."
      },
      {
        id: 'fs_t3_3',
        tier: 3,
        text: "Design Patterns : Le pattern 'Adapter' (Wrapper) est utile quand...",
        options: [
          "Tu veux limiter l'accès à une classe.",
          "Tu veux faire travailler ensemble des classes aux interfaces incompatibles.",
          "Tu veux ajouter des fonctionnalités dynamiquement.",
          "Tu veux cloner des objets."
        ],
        correctAnswer: 1,
        explanation: "Le sauveur des intégrations Legacy. Tu as une vieille classe `OldSystem` qui attend XML. Tu as un nouveau `ModernSystem` qui envoie JSON. Tu crées un Adapter qui implémente l'interface attendue par le vieux système, prend le JSON, le convertit en XML, et appelle le vieux système. Le code client ne voit rien."
      },

      // --- TIER 4 (Impossible) ---
      {
        id: 'fs_t4_1',
        tier: 4,
        text: "Architecture : CQRS (Command Query Responsibility Segregation). Quel est le principe et le coût ?",
        options: [
          "Séparer le code en backend/frontend. Coût : Latence.",
          "Séparer les modèles de lecture (Query) et d'écriture (Command). Coût : Complexité accrue et Consistance Éventuelle.",
          "Utiliser deux bases de données identiques. Coût : Stockage.",
          "C'est un pattern pour les API REST."
        ],
        correctAnswer: 1,
        explanation: "Dans une app complexe, le modèle pour ÉCRIRE (règles métiers validation, 3e forme normale) est souvent différent du modèle optimisé pour LIRE (DTO plats, jointures pré-calculées). CQRS les sépare physiquement. Tu peux scaler le Read indépendamment du Write. Le prix à payer ? La complexité de synchronisation. Si tu écris dans DB1, DB2 (lecture) n'est pas à jour instantanément (Eventual Consistency). À n'utiliser que si nécessaire."
      },
      {
        id: 'fs_t4_2',
        tier: 4,
        text: "Java/Spring : Comment fonctionne `@Transactional` sous le capot et quel est le piège de l'appel interne ?",
        options: [
          "Ça ouvre une connexion JDBC magique.",
          "Ça utilise AOP (Aspect Oriented Programming) via un Proxy. Si tu appelles `this.maMethodeTransactionnelle()` depuis la même classe, le Proxy est contourné et la transaction n'est JAMAIS créée.",
          "Ça locke toute la table.",
          "Ça marche toujours, peu importe d'où on l'appelle."
        ],
        correctAnswer: 1,
        explanation: "Le piège classique qui a fait perdre des millions. Spring enveloppe ta classe dans un Proxy qui gère le `begin/commit/rollback`. Quand tu appelles une méthode depuis l'extérieur, tu passes par le Proxy -> Transaction OK. Quand tu fais un appel interne (`this.method()`), tu appelles directement l'objet réel, en contournant le Proxy -> PAS de Transaction. Le code tourne, mais rien n'est rollback en cas d'erreur. Silencieux et mortel. C'est un exemple du pattern Proxy en action."
      }
    ]
  }
};
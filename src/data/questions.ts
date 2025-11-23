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
    name: 'Fullstack Dev',
    description: 'Architecture, System Design, JS, DB. Savoir centrer une div ne suffit pas.',
    questions: [
      // --- TIER 1 (Basic) ---
      {
        id: 'fs_t1_1',
        tier: 1,
        text: "Quelle est la complexité temporelle d'une recherche dans une Hash Map (cas moyen) ?",
        options: [
          "O(n)",
          "O(log n)",
          "O(1)",
          "O(n^2)"
        ],
        correctAnswer: 2,
        explanation: "O(1). Constant Time. C'est la base absolue de l'optimisation logicielle. Une Hash Map (ou Dictionnaire/Objet) utilise une fonction de hachage pour calculer directement l'adresse mémoire où la valeur est stockée. Contrairement à un tableau où tu dois parcourir les éléments un par un (O(n)), ou un arbre binaire (O(log n)), l'accès est quasi-instantané quelle que soit la taille des données. Si tu utilises un tableau pour faire des recherches par ID, tu commets un crime contre la performance."
      },
      {
        id: 'fs_t1_2',
        tier: 1,
        text: "Que fait exactement `useEffect(() => {}, [])` en React ?",
        options: [
          "Il s'exécute à chaque rendu.",
          "Il s'exécute uniquement après le premier rendu (Mount).",
          "Il s'exécute quand le composant est détruit.",
          "Il crée une boucle infinie."
        ],
        correctAnswer: 1,
        explanation: "Le tableau de dépendances `[]` (vide) indique à React que cet effet ne dépend d'aucune valeur (prop ou state). Par conséquent, React n'a jamais besoin de le ré-exécuter après la première fois. Il s'exécute donc UNE SEULE FOIS, juste après que le composant a été affiché dans le DOM (Mount). C'est l'endroit standard pour faire des appels API initiaux. Si tu oublies le tableau, l'effet tourne en boucle infinie ou à chaque rendu, et tu fais crasher le navigateur de ton utilisateur."
      },
      {
        id: 'fs_t1_3',
        tier: 1,
        text: "Quelle méthode HTTP est idempotente ?",
        options: [
          "POST",
          "PUT",
          "Toutes les méthodes.",
          "Aucune."
        ],
        correctAnswer: 1,
        explanation: "L'idempotence est un concept crucial pour la robustesse des API. Une opération est idempotente si l'appliquer plusieurs fois a le même effet que l'appliquer une seule fois. PUT est idempotent : si tu envoies `PUT /users/1 {name: 'Bob'}` dix fois, l'utilisateur s'appellera toujours Bob à la fin. POST n'est PAS idempotent : si tu envoies `POST /users {name: 'Bob'}` dix fois, tu crées 10 utilisateurs différents. Ne confonds jamais les deux."
      },
      {
        id: 'fs_t1_4',
        tier: 1,
        text: "En CSS, que fait `box-sizing: border-box` ?",
        options: [
          "Ajoute une bordure à la boîte.",
          "Inclut le padding et la bordure dans la largeur/hauteur totale.",
          "Force la boîte à être carrée.",
          "Rien, c'est la valeur par défaut."
        ],
        correctAnswer: 1,
        explanation: "C'est la première ligne de CSS que tu devrais écrire dans n'importe quel projet. Le modèle par défaut (`content-box`) est illogique : si tu mets `width: 100px` et `padding: 20px`, ton élément fait 140px de large. Ça casse tout. Avec `border-box`, `width: 100px` signifie que l'élément fait 100px au total, et le padding mange vers l'intérieur. C'est la seule façon saine de faire de la mise en page."
      },

      // --- TIER 2 (Intermediate) ---
      {
        id: 'fs_t2_1',
        tier: 2,
        text: "Qu'est-ce que le 'Prop Drilling' et comment l'éviter ?",
        options: [
          "C'est percer des trous dans le DOM.",
          "Passer des données de parent à enfant sur de multiples niveaux inutiles.",
          "C'est une technique d'optimisation.",
          "C'est utiliser trop de `props`."
        ],
        correctAnswer: 1,
        explanation: "Imagine que tu dois passer l'objet `User` du composant racine (`App`) jusqu'à un bouton dans le footer, en traversant 10 composants qui n'ont rien à faire de cet objet (`Layout`, `Sidebar`, `Menu`, etc.). C'est sale, verbeux et difficile à maintenir. Pour éviter ça, on utilise l'inversion de contrôle (Composition) ou des outils de gestion d'état global comme React Context, Redux, ou Zustand, qui permettent d'injecter la donnée directement là où elle est nécessaire."
      },
      {
        id: 'fs_t2_2',
        tier: 2,
        text: "Différence fondamentale entre 'Process' et 'Thread' ?",
        options: [
          "Aucune.",
          "Un Process partage la mémoire, un Thread est isolé.",
          "Un Process a son propre espace mémoire isolé; un Thread partage la mémoire du Process parent.",
          "Un Thread est plus lent."
        ],
        correctAnswer: 2,
        explanation: "C'est la base des Systèmes d'Exploitation. Un PROCESSUS est une instance lourde d'un programme : il a sa propre mémoire virtuelle protégée. Si un process plante, les autres survivent. Un THREAD (fil d'exécution) est une unité légère au sein d'un process. Tous les threads d'un même process partagent le même espace mémoire (le Tas/Heap). Avantage : communication ultra-rapide entre threads. Risque : si un thread fait une erreur mémoire (segfault), il fait crasher tout le processus."
      },
      {
        id: 'fs_t2_3',
        tier: 2,
        text: "Pourquoi un 'Full Table Scan' est-il à éviter sur une base de données SQL ?",
        options: [
          "C'est une faille de sécurité.",
          "La complexité est O(n), ce qui est inacceptable pour de grands volumes de données.",
          "La requête échoue.",
          "La base crée l'index automatiquement."
        ],
        correctAnswer: 1,
        explanation: "Quand tu fais une recherche `WHERE email = 'x'` sans index, la base de données doit lire physiquement CHAQUE ligne de la table, du début à la fin, pour voir si elle correspond. Sur 100 lignes, ça va. Sur 10 millions de lignes, ton serveur I/O sature, le CPU chauffe, et ta requête prend 30 secondes au lieu de 10 millisecondes. L'index (généralement un B-Tree) permet de trouver la donnée en O(log n) sauts, ce qui est des ordres de grandeur plus rapide."
      },

      // --- TIER 3 (Advanced) ---
      {
        id: 'fs_t3_1',
        tier: 3,
        text: "CORS : Ton frontend (localhost:3000) tape ton API (api.com). Erreur CORS. Qui bloque ?",
        options: [
          "Le serveur API refuse la connexion.",
          "Le navigateur bloque la réponse pour ta sécurité.",
          "Ton firewall.",
          "Le DNS."
        ],
        correctAnswer: 1,
        explanation: "C'est le concept le plus mal compris du web. Le serveur API a REÇU la requête, l'a traitée, et a renvoyé la réponse (souvent 200 OK). C'est ton NAVIGATEUR qui, en recevant la réponse, vérifie si le header `Access-Control-Allow-Origin` correspond à l'origine de ton site. Si non, le NAVIGATEUR refuse de donner les données à ton code JavaScript. C'est une sécurité côté client pour empêcher un site malveillant de lire les réponses de ton API au nom de l'utilisateur connecté."
      },
      {
        id: 'fs_t3_2',
        tier: 3,
        text: "Event Loop Node.js : Dans quel ordre précis s'exécutent : 1. setTimeout(..., 0), 2. process.nextTick(), 3. Promise.resolve().then() ?",
        options: [
          "1, 2, 3",
          "2, 3, 1",
          "3, 2, 1",
          "C'est aléatoire."
        ],
        correctAnswer: 1,
        explanation: "L'ordre est vital pour comprendre l'asynchronisme. `process.nextTick` n'est techniquement pas dans l'Event Loop, il s'exécute DÈS que l'opération courante finit, AVANT tout le reste. C'est la priorité absolue. Ensuite, les PROMISES (Microtasks queue) sont traitées. Enfin, `setTimeout` (Macrotasks queue) est traité au prochain tour de boucle (Timer phase). Donc : nextTick -> Promise -> setTimeout. Si tu te trompes là-dessus, tu auras des race conditions inexplicables."
      },

      // --- TIER 4 (Impossible) ---
      {
        id: 'fs_t4_1',
        tier: 4,
        text: "System Design : Comment garantis-tu l'idempotence sur une API de paiement (POST /charge) en cas de timeout réseau ?",
        options: [
          "Je prie pour que le réseau ne coupe pas.",
          "Le client génère et envoie une clé d'idempotence (UUID). Le serveur locke cette clé, traite, et stocke le résultat. En cas de retry avec la même clé, on renvoie le résultat stocké.",
          "Je vérifie si le montant est le même.",
          "J'utilise GET au lieu de POST."
        ],
        correctAnswer: 1,
        explanation: "C'est le standard de l'industrie (Stripe, PayPal). Le problème : le client envoie la requête, le serveur débite la carte, mais la réponse 'Succès' se perd à cause d'une coupure réseau. Le client, ne recevant rien, réessaie (Retry). Sans idempotence, le client est débité deux fois. Avec une clé d'idempotence (unique par transaction logique), le serveur reconnaît la deuxième requête comme étant une copie de la première et renvoie simplement la réponse précédente sans ré-exécuter le débit."
      },
      {
        id: 'fs_t4_2',
        tier: 4,
        text: "Problème 'Thundering Herd' (Troupeau qui charge) avec le cache. Que se passe-t-il et comment le résoudre ?",
        options: [
          "Trop d'utilisateurs se connectent. Solution : Load Balancer.",
          "Une entrée de cache très demandée expire. 1000 requêtes tapent la DB en même temps pour la recalculer. Solution : Locking ou Stale-while-revalidate.",
          "Une attaque DDoS. Solution : Firewall.",
          "Un bug de React. Solution : useMemo."
        ],
        correctAnswer: 1,
        explanation: "Imagine une donnée critique (ex: prix du Bitcoin) en cache pour 1 seconde. À T+1.01s, la donnée expire. Si tu as 10 000 req/sec, instantanément 10 000 requêtes ne trouvent pas le cache et tapent TA BASE DE DONNÉES simultanément pour calculer la même valeur. Ta DB explose. La solution est de ne laisser passer qu'UNE seule requête pour recalculer la valeur (Locking), ou mieux, de servir la 'vieille' donnée (Stale) pendant qu'une requête recalcule la nouvelle en arrière-plan (Stale-while-revalidate)."
      }
    ]
  }
};
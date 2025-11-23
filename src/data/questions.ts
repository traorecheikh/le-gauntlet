
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
  "Tu es le goulot d'étranglement de ton équipe."
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
  "Code propre. Logique valide. Continue."
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
       {
        id: 'ds_t1_1',
        tier: 1,
        text: "Quelle est la différence fondamentale entre la régression linéaire et logistique ?",
        options: ["Rien.", "Linéaire = Continue, Logistique = Classification (Probabilité).", "Logistique = Texte.", "Linéaire = Deep Learning."],
        correctAnswer: 1,
        explanation: "La régression linéaire prédit une valeur continue (prix). La logistique est un classifieur qui donne une probabilité (0-1) via une sigmoïde."
      },
       {
        id: 'ds_t1_2',
        tier: 1,
        text: "Que signifie 'Overfitting' ?",
        options: ["Le modèle est trop lent.", "Le modèle apprend le bruit au lieu du signal (par cœur).", "Pas assez de données.", "Trop de couches."],
        correctAnswer: 1,
        explanation: "Apprendre par cœur les données d'entraînement (Biais faible, Variance élevée) empêche de généraliser sur de nouvelles données."
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
        text: "Vue.js : v-if vs v-show ?",
        options: ["Aucune.", "v-if manipule le DOM, v-show manipule le CSS.", "v-show est déprécié.", "v-if pour les boucles."],
        correctAnswer: 1,
        explanation: "`v-if` est lazy (détruit/crée). `v-show` utilise `display: none`. Utilise v-show pour les toggles fréquents."
      },
      {
        id: 'fs_t1_2',
        tier: 1,
        text: "Algo : Complexité de l'accès à un tableau par index ?",
        options: ["O(n)", "O(log n)", "O(1)", "O(n^2)"],
        correctAnswer: 2,
        explanation: "C'est un accès mémoire direct. Adresse = Base + (Index * Taille). Instantané."
      },
      {
        id: 'fs_t1_3',
        tier: 1,
        text: "Réseau : Que signifie DNS ?",
        options: ["Data Network System.", "Domain Name System.", "Digital Name Service.", "Domain Network Server."],
        correctAnswer: 1,
        explanation: "L'annuaire d'Internet. Il traduit 'google.com' (humain) en '142.250.x.x' (machine)."
      },
      {
        id: 'fs_t1_4',
        tier: 1,
        text: "Git : Commande pour voir l'état des fichiers ?",
        options: ["git log", "git status", "git diff", "git check"],
        correctAnswer: 1,
        explanation: "`git status` te dit ce qui est stagé, modifié ou non suivi. La commande que tu tapes 50 fois par jour."
      },
      {
        id: 'fs_t1_5',
        tier: 1,
        text: "HTML : Balise sémantique pour le contenu principal ?",
        options: ["<div id='main'>", "<main>", "<section>", "<article>"],
        correctAnswer: 1,
        explanation: "Utilise `<main>` pour le contenu unique de la page. Aide l'accessibilité et le SEO. Arrête avec les `div` partout."
      },
      {
        id: 'fs_t1_6',
        tier: 1,
        text: "Java : ArrayList vs Array ?",
        options: ["ArrayList est redimensionnable dynamiquement, Array est fixe.", "Array est plus lent.", "ArrayList ne peut stocker que des String.", "Pareil."],
        correctAnswer: 0,
        explanation: "Un Array `new int[5]` a une taille fixe. `ArrayList` grandit automatiquement (recopie le tableau sous le capot quand il est plein)."
      },
      {
        id: 'fs_t1_7',
        tier: 1,
        text: "DevOps : Qu'est-ce que Docker ?",
        options: ["Une machine virtuelle.", "Une plateforme de conteneurisation pour packager une app et ses dépendances.", "Un serveur web.", "Un langage."],
        correctAnswer: 1,
        explanation: "Docker n'est PAS une VM. Il partage le kernel de l'OS hôte mais isole les processus. 'Build once, run anywhere'."
      },
      {
        id: 'fs_t1_8',
        tier: 1,
        text: "HTTP : Méthode pour supprimer une ressource ?",
        options: ["REMOVE", "DELETE", "Un POST avec body null.", "CLEAR"],
        correctAnswer: 1,
        explanation: "Respecte la sémantique REST. `DELETE /users/1`. N'utilise pas GET pour ça !"
      },
      {
        id: 'fs_t1_9',
        tier: 1,
        text: "CSS : Marge intérieure d'un élément ?",
        options: ["Margin", "Border", "Padding", "Spacing"],
        correctAnswer: 2,
        explanation: "Margin = extérieur. Padding = intérieur (entre le bord et le contenu)."
      },
      {
        id: 'fs_t1_10',
        tier: 1,
        text: "Algo : Qu'est-ce qu'un Booléen ?",
        options: ["Un nombre entier.", "Une valeur Vrai ou Faux.", "Une chaine de caractères.", "Un tableau."],
        correctAnswer: 1,
        explanation: "La base de la logique binaire. 0 ou 1. True ou False."
      },
      {
        id: 'fs_t1_11',
        tier: 1,
        text: "Git : `git clone` ?",
        options: ["Copie un fichier.", "Télécharge un dépôt distant entier sur ta machine.", "Crée une branche.", "Fusionne le code."],
        correctAnswer: 1,
        explanation: "La première commande pour récupérer un projet. Récupère tout l'historique."
      },
      {
        id: 'fs_t1_12',
        tier: 1,
        text: "Java : `public` vs `private` ?",
        options: ["Aucune.", "Public est accessible partout, Private uniquement dans la classe.", "Private est pour les variables statiques.", "Public est plus rapide."],
        correctAnswer: 1,
        explanation: "Encapsulation. Cache tes données (`private`), expose tes comportements (`public`)."
      },
      {
        id: 'fs_t1_13',
        tier: 1,
        text: "Linux : Commande pour lister les fichiers ?",
        options: ["show", "ls", "list", "dir"],
        correctAnswer: 1,
        explanation: "`ls -la` est ton meilleur ami."
      },
      {
        id: 'fs_t1_14',
        tier: 1,
        text: "Architecture : Qu'est-ce que le Frontend ?",
        options: ["La base de données.", "La partie visible par l'utilisateur (Navigateur/App).", "Le serveur.", "L'API."],
        correctAnswer: 1,
        explanation: "HTML/CSS/JS. Ce qui s'exécute sur la machine du client."
      },
      {
        id: 'fs_t1_15',
        tier: 1,
        text: "Vue.js : Data binding bidirectionnel ?",
        options: ["v-bind", "v-model", "v-on", "v-text"],
        correctAnswer: 1,
        explanation: "`v-model` synchronise l'input et la variable JS automatiquement. Magique."
      },
      
      // =================================================================================
      // TIER 2: INTERMEDIATE (Network, DB, Java, DevOps)
      // =================================================================================
      {
        id: 'fs_t2_1',
        tier: 2,
        text: "Réseau : TCP vs UDP ?",
        options: ["UDP est sécurisé.", "TCP garantit l'ordre et la livraison (Fiable, lent). UDP envoie sans vérifier (Rapide, Streaming/Jeux).", "TCP est pour la vidéo.", "UDP est pour les emails."],
        correctAnswer: 1,
        explanation: "TCP = 'Allo ? Tu m'entends ? Oui. OK j'envoie'. UDP = 'J'ENVOIE TOUT TANT PIS SI TU RATES'."
      },
      {
        id: 'fs_t2_2',
        tier: 2,
        text: "DB : Index SQL. Comment ça marche ?",
        options: ["Magie noire.", "Structure de données (B-Tree) qui trie les pointeurs vers les données pour éviter le Full Table Scan.", "Compresse les données.", "Copie la table."],
        correctAnswer: 1,
        explanation: "Comme l'index à la fin d'un livre. Sans lui, tu dois lire tout le livre pour trouver 'Harry Potter'."
      },
      {
        id: 'fs_t2_3',
        tier: 2,
        text: "Algo : Pile (Stack) vs File (Queue) ?",
        options: ["Pareil.", "Stack = LIFO (Last In First Out). Queue = FIFO (First In First Out).", "Stack = FIFO.", "Queue est pour le stockage."],
        correctAnswer: 1,
        explanation: "Stack = Assiettes sales (tu laves la dernière posée). Queue = File d'attente au supermarché."
      },
      {
        id: 'fs_t2_4',
        tier: 2,
        text: "Architecture : MVC ?",
        options: ["Model View Controller.", "Most Valuable Code.", "Model View Component.", "Main View Class."],
        correctAnswer: 0,
        explanation: "Séparation des soucis. Model (Données), View (UI), Controller (Logique/Chef d'orchestre)."
      },
      {
        id: 'fs_t2_5',
        tier: 2,
        text: "DevOps : CI/CD ?",
        options: ["Code Intégral.", "Continuous Integration / Continuous Delivery. Automatiser les tests et le déploiement.", "Certificat Informatique.", "Clean Code."],
        correctAnswer: 1,
        explanation: "Ne déploie jamais à la main (FTP). Le pipeline doit tester, builder et déployer automatiquement à chaque push."
      },
      {
        id: 'fs_t2_6',
        tier: 2,
        text: "Git : `git stash` ?",
        options: ["Supprime tout.", "Met de côté les modifications non committées temporairement pour nettoyer le workspace.", "Crée une branche.", "Fusionne."],
        correctAnswer: 1,
        explanation: "Utile quand tu dois changer de branche en urgence mais que ton travail n'est pas fini."
      },
      {
        id: 'fs_t2_7',
        tier: 2,
        text: "Java : `HashMap` complexité moyenne ?",
        options: ["O(n)", "O(log n)", "O(1) pour get/put.", "O(n^2)"],
        correctAnswer: 2,
        explanation: "Grâce au hachage, on trouve la case mémoire directement. Attention aux collisions (pire cas O(n))."
      },
      {
        id: 'fs_t2_8',
        tier: 2,
        text: "Web : Cookies vs LocalStorage ?",
        options: ["Pareil.", "Cookies sont envoyés au serveur à CHAQUE requête (petits). LocalStorage reste sur le client (gros).", "LocalStorage expire.", "Cookies sont plus gros."],
        correctAnswer: 1,
        explanation: "Utilise Cookies pour l'Auth (HttpOnly). LocalStorage pour les préférences UI."
      },
      {
        id: 'fs_t2_9',
        tier: 2,
        text: "Security : XSS (Cross Site Scripting) ?",
        options: ["Hack serveur.", "Injection de script JS malveillant dans la page vue par d'autres utilisateurs.", "Vol de mot de passe.", "Erreur CSS."],
        correctAnswer: 1,
        explanation: "Si tu affiches un commentaire utilisateur sans l'échapper, il peut exécuter `<script>stealCookies()</script>`."
      },
      {
        id: 'fs_t2_10',
        tier: 2,
        text: "Linux : `chmod 777` ?",
        options: ["Bonne idée.", "Donne TOUS les droits (Lecture/Écriture/Exécution) à TOUT LE MONDE. Danger de sécurité absolu.", "Supprime le fichier.", "Rend invisible."],
        correctAnswer: 1,
        explanation: "Ne fais jamais ça en prod. Utilise `644` ou `755`."
      },
      {
        id: 'fs_t2_11',
        tier: 2,
        text: "Java : `Optional<T>` ?",
        options: ["Optionnel.", "Conteneur pour éviter les `NullPointerException`. Force à gérer le cas 'vide'.", "Liste.", "Variable globale."],
        correctAnswer: 1,
        explanation: "Fini les `if (x != null)`. Utilise `.orElse()` ou `.map()`."
      },
      {
        id: 'fs_t2_12',
        tier: 2,
        text: "Laravel : Migration ?",
        options: ["Voyage.", "Versionning du schéma de base de données (Code -> Table).", "Import de données.", "Copie de site."],
        correctAnswer: 1,
        explanation: "Permet de partager la structure de la DB avec l'équipe. `php artisan migrate`."
      },
      {
        id: 'fs_t2_13',
        tier: 2,
        text: "Réseau : Port standard HTTPS ?",
        options: ["80", "443", "8080", "22"],
        correctAnswer: 1,
        explanation: "80 pour HTTP. 443 pour HTTPS (Sécurisé)."
      },
      {
        id: 'fs_t2_14',
        tier: 2,
        text: "Algo : Tri rapide (QuickSort) complexité moyenne ?",
        options: ["O(n)", "O(n log n)", "O(n^2)", "O(1)"],
        correctAnswer: 1,
        explanation: "Le standard des tris. Diviser pour régner. Pire cas O(n^2) si pivot mal choisi."
      },
      {
        id: 'fs_t2_15',
        tier: 2,
        text: "Vue.js : Props Drilling ?",
        options: ["Bricolage.", "Passer des données de Grand-Parent -> Parent -> Enfant inutilement.", "Architecture.", "Optimisation."],
        correctAnswer: 1,
        explanation: "Utilise Provide/Inject ou Pinia pour éviter ça."
      },
      {
        id: 'fs_t2_16',
        tier: 2,
        text: "Integration : JSON ?",
        options: ["Java Serialized Object.", "JavaScript Object Notation. Format d'échange de données textuel léger.", "Base de données.", "Protocole."],
        correctAnswer: 1,
        explanation: "Le standard du web moderne. Plus léger que XML."
      },
      {
        id: 'fs_t2_17',
        tier: 2,
        text: "Pattern : Dependency Injection ?",
        options: ["Virus.", "Fournir les objets dont une classe a besoin de l'extérieur plutôt que de les créer dedans.", "Singleton.", "Héritage."],
        correctAnswer: 1,
        explanation: "Rend le code testable (on peut injecter des Mocks)."
      },
      {
        id: 'fs_t2_18',
        tier: 2,
        text: "Git : `git branch` ?",
        options: ["Plante l'arbre.", "Liste, crée ou supprime des branches de développement parallèles.", "Fusionne.", "Envoie."],
        correctAnswer: 1,
        explanation: "Ne code jamais sur `main`. Crée une branche `feature/x`."
      },

      // =================================================================================
      // TIER 3: ADVANCED (Arch, DDD, Advanced Algo, Spring Deep Dive)
      // =================================================================================
      {
        id: 'fs_t3_1',
        tier: 3,
        text: "DDD : Qu'est-ce qu'un 'Aggregate Root' ?",
        options: ["Un total.", "L'entité principale qui contrôle l'accès et garantit la cohérence d'un groupe d'objets (Transaction Boundary).", "Une table SQL.", "Un service."],
        correctAnswer: 1,
        explanation: "Tu ne modifies pas une 'Ligne de Commande' directement. Tu passes par la 'Commande' (Aggregate Root) pour qu'elle recalcule le total."
      },
      {
        id: 'fs_t3_2',
        tier: 3,
        text: "Réseau : Handshake TCP 3-way ?",
        options: ["Hello, Hi, Bye.", "SYN, SYN-ACK, ACK.", "Ping, Pong, Pang.", "Connect, Accept, Send."],
        correctAnswer: 1,
        explanation: "Client: 'Je veux connecter (SYN)'. Serveur: 'OK, j'accepte (SYN-ACK)'. Client: 'Bien reçu, on commence (ACK)'."
      },
      {
        id: 'fs_t3_3',
        tier: 3,
        text: "Spring : `@Transactional(readOnly = true)` ?",
        options: ["Inutile.", "Optimisation de perf (pas de Dirty Checking par Hibernate) et clarté d'intention.", "Bloque la lecture.", "Sécurité."],
        correctAnswer: 1,
        explanation: "Dit à Hibernate : 'Je ne modifierai rien, ne perds pas de temps à vérifier les changements'."
      },
      {
        id: 'fs_t3_4',
        tier: 3,
        text: "Algo : Arbre Binaire de Recherche (BST) ?",
        options: ["Arbre aléatoire.", "Arbre où pour chaque nœud : gauche < nœud < droite. Recherche en O(log n).", "Liste chainée.", "Tableau."],
        correctAnswer: 1,
        explanation: "Structure efficace pour rechercher et trier. Si déséquilibré, devient une liste (O(n))."
      },
      {
        id: 'fs_t3_5',
        tier: 3,
        text: "DDD : Value Object vs Entity ?",
        options: ["Pareil.", "Entity a une Identité (ID) qui persiste. Value Object est défini par ses attributs (immuable, interchangeable).", "VO est pour la DB.", "Entity est en lecture seule."],
        correctAnswer: 1,
        explanation: "Un User est une Entity (si il change de nom, c'est le même User). Une Couleur (Rouge) est un Value Object (on ne modifie pas Rouge, on le remplace)."
      },
      {
        id: 'fs_t3_6',
        tier: 3,
        text: "Architecture : Hexagonale (Ports & Adapters) ?",
        options: ["Forme géométrique.", "Isoler le domaine métier (Cœur) des détails techniques (DB, UI, API) via des interfaces (Ports).", "Microservices.", "MVC."],
        correctAnswer: 1,
        explanation: "Ton métier ne doit pas dépendre de Laravel ou Spring. Il doit être pur. L'infrastructure dépend du métier."
      },
      {
        id: 'fs_t3_7',
        tier: 3,
        text: "DevOps : Kubernetes Pod ?",
        options: ["Un conteneur.", "La plus petite unité déployable. Peut contenir un ou plusieurs conteneurs qui partagent IP et stockage.", "Un serveur.", "Un cluster."],
        correctAnswer: 1,
        explanation: "Souvent 1 Pod = 1 Conteneur, mais parfois on ajoute un 'Sidecar' (ex: logging) dans le même Pod."
      },
      {
        id: 'fs_t3_8',
        tier: 3,
        text: "Git : `git cherry-pick` ?",
        options: ["Cueillir des cerises.", "Appliquer un commit spécifique d'une autre branche sur la branche courante.", "Supprimer un commit.", "Fusionner tout."],
        correctAnswer: 1,
        explanation: "Chirurgical. 'Je veux juste CE fix de la branche dev, pas tout le reste'."
      },
      {
        id: 'fs_t3_9',
        tier: 3,
        text: "Java : Stream API (`.map`, `.filter`) ?",
        options: ["Pour les vidéos.", "Traitement fonctionnel des collections. Lazy evaluation.", "Boucles for.", "I/O."],
        correctAnswer: 1,
        explanation: "Code déclaratif plus lisible. `users.stream().filter(u -> u.active).map(u -> u.name)`."
      },
      {
        id: 'fs_t3_10',
        tier: 3,
        text: "Web : CORS Preflight (OPTIONS) ?",
        options: ["Optionnel.", "Requête envoyée par le navigateur avant la vraie requête (PUT/DELETE) pour vérifier si le serveur accepte l'origine.", "Erreur.", "Login."],
        correctAnswer: 1,
        explanation: "Sécurité navigateur. Si tu vois une requête OPTIONS échouer, c'est tes headers CORS qui sont mauvais."
      },
      {
        id: 'fs_t3_11',
        tier: 3,
        text: "DB : Transaction Isolation Levels - Dirty Read ?",
        options: ["Lecture sale.", "Lire une donnée modifiée par une autre transaction NON committée. Dangereux.", "Lire une donnée ancienne.", "Erreur disque."],
        correctAnswer: 1,
        explanation: "Si la transaction A rollback, la transaction B a travaillé sur une donnée fantôme."
      },
      {
        id: 'fs_t3_12',
        tier: 3,
        text: "Pattern : Proxy ?",
        options: ["VPN.", "Intermédiaire qui contrôle l'accès à un objet (Lazy loading, Sécurité, Cache).", "Copie.", "Factory."],
        correctAnswer: 1,
        explanation: "Spring/Hibernate l'utilisent partout. C'est comme ça que le Lazy Loading DB fonctionne."
      },
      {
        id: 'fs_t3_13',
        tier: 3,
        text: "General : SOLID - Liskov Substitution ?",
        options: ["Compliqué.", "Une sous-classe doit pouvoir remplacer sa classe parente sans casser le programme.", "Héritage interdit.", "Interfaces."],
        correctAnswer: 1,
        explanation: "Si `Carre extends Rectangle`, et que modifier la hauteur du rectangle modifie sa largeur (car c'est un carré), tu violes Liskov car tu changes le comportement attendu."
      },
      {
        id: 'fs_t3_14',
        tier: 3,
        text: "Vue.js : Vuex/Pinia Store ?",
        options: ["Magasin.", "Gestion d'état global centralisé (Single Source of Truth).", "Base de données.", "LocalStorage."],
        correctAnswer: 1,
        explanation: "Évite le prop drilling. Tout l'état partagé vit au même endroit."
      },
      {
        id: 'fs_t3_15',
        tier: 3,
        text: "Laravel : Eloquent Accessors ?",
        options: ["Accès DB.", "Attributs virtuels calculés (`getFirstNameAttribute`).", "Relations.", "Sécurité."],
        correctAnswer: 1,
        explanation: "Permet de formater une donnée à la sortie du modèle sans toucher la DB."
      },
      {
        id: 'fs_t3_16',
        tier: 3,
        text: "Git : `git reset --hard` ?",
        options: ["Reset doux.", "Détruit TOUTES les modifications locales et remet l'état au commit visé. Irréversible (ou presque).", "Annule le dernier commit mais garde les fichiers.", "Nettoie."],
        correctAnswer: 1,
        explanation: "La commande 'Je veux tout oublier'. Danger : tu perds ton travail non committé."
      },
      {
        id: 'fs_t3_17',
        tier: 3,
        text: "Réseau : Websockets vs HTTP ?",
        options: ["Pareil.", "HTTP est requête/réponse (Unidirectionnel). Websocket est un tunnel persistant bidirectionnel temps réel.", "Websocket est plus lent.", "HTTP est pour le chat."],
        correctAnswer: 1,
        explanation: "Pour un chat ou un jeu, HTTP (Polling) est inefficace. Websocket garde la ligne ouverte."
      },
      {
        id: 'fs_t3_18',
        tier: 3,
        text: "DevOps : Docker Layer Caching ?",
        options: ["Cache navigateur.", "Docker réutilise les couches (lignes du Dockerfile) inchangées pour accélérer le build.", "Stockage.", "Erreur."],
        correctAnswer: 1,
        explanation: "Mets `COPY . .` à la FIN du Dockerfile, après `npm install`. Sinon tu casses le cache à chaque modif de code."
      },

      // =================================================================================
      // TIER 4: EXPERT (System Design, Deep Internals, Advanced Arch)
      // =================================================================================
      {
        id: 'fs_t4_1',
        tier: 4,
        text: "DDD : Ubiquitous Language ?",
        options: ["Anglais.", "Langage commun rigoureux partagé entre Devs et Experts Métier, utilisé dans le Code et les Specs.", "Jargon technique.", "SQL."],
        correctAnswer: 1,
        explanation: "Si l'expert dit 'Client' et tu codes 'User', le projet échouera. Le code doit refléter le métier."
      },
      {
        id: 'fs_t4_2',
        tier: 4,
        text: "Algo : Complexité spatiale de MergeSort ?",
        options: ["O(1)", "O(n) - Besoin de mémoire auxiliaire pour la fusion.", "O(log n)", "O(n^2)"],
        correctAnswer: 1,
        explanation: "Contrairement à QuickSort (in-place), MergeSort crée des tableaux temporaires. À savoir pour l'embarqué."
      },
      {
        id: 'fs_t4_3',
        tier: 4,
        text: "DB : Optimistic Locking vs Pessimistic ?",
        options: ["Optimiste espère.", "Pessimiste verrouille la ligne (SELECT FOR UPDATE). Optimiste vérifie une version à l'écriture.", "Pessimiste est plus rapide.", "Optimiste n'est pas sûr."],
        correctAnswer: 1,
        explanation: "Optimiste (colonne `version`) est mieux pour le web (pas de lock DB long). Si version a changé entre lecture et écriture -> Exception."
      },
      {
        id: 'fs_t4_4',
        tier: 4,
        text: "System Design : Rate Limiting algorithms ?",
        options: ["Block IP.", "Token Bucket, Leaky Bucket, Fixed Window.", "Firewall.", "Captcha."],
        correctAnswer: 1,
        explanation: "Token Bucket permet des bursts (rafales). Leaky Bucket lisse le trafic. Indispensable pour protéger ton API."
      },
      {
        id: 'fs_t4_5',
        tier: 4,
        text: "Java : Classloader Hierarchy ?",
        options: ["Bootstrap -> Platform -> App (System).", "System -> App.", "Flat.", "Dynamic."],
        correctAnswer: 0,
        explanation: "Bootstrap charge le cœur Java (rt.jar). App charge ton classpath. Délégation parent-first."
      },
      {
        id: 'fs_t4_6',
        tier: 4,
        text: "Réseau : CDN (Content Delivery Network) ?",
        options: ["Disque dur.", "Réseau de serveurs géographiquement distribués pour servir le contenu statique au plus près de l'utilisateur (Latence).", "VPN.", "DNS."],
        correctAnswer: 1,
        explanation: "Réduit le TTFB (Time To First Byte) et décharge ton serveur d'origine."
      },
      {
        id: 'fs_t4_7',
        tier: 4,
        text: "Git : `git bisect` ?",
        options: ["Couper en deux.", "Recherche binaire automatisée pour trouver quel commit a introduit un bug.", "Fusionner.", "Nettoyer."],
        correctAnswer: 1,
        explanation: "L'arme ultime du débogage. 'Ce bug n'était pas là hier'. Git trouve le coupable en 5 étapes sur 100 commits."
      },
      {
        id: 'fs_t4_8',
        tier: 4,
        text: "Architecture : Event-Driven - Idempotence ?",
        options: ["Inutile.", "Capacité à traiter le même événement N fois sans changer le résultat final. Crucial car les Queues garantissent 'At Least Once'.", "Performance.", "Sécurité."],
        correctAnswer: 1,
        explanation: "Ton consumer DOIT gérer les doublons. Sinon tu envoies 2 mails de confirmation."
      },
      {
        id: 'fs_t4_9',
        tier: 4,
        text: "Vue 3 : Virtual DOM diffing algorithm ?",
        options: ["Scan tout.", "Heuristiques : compare même niveau, utilise les clés (`key`) pour réordonner, ignore les sous-arbres statiques (Static Hoisting).", "Pas de VDOM.", "Lent."],
        correctAnswer: 1,
        explanation: "Vue 3 optimise massivement en sortant les parties statiques du template de la boucle de rendu."
      },
      {
        id: 'fs_t4_10',
        tier: 4,
        text: "Security : OAuth 2.0 flows ?",
        options: ["Login/Pass.", "Authorization Code (Serveur), Implicit (Déprécié), Client Credentials (Machine-to-Machine).", "JWT.", "Cookie."],
        correctAnswer: 1,
        explanation: "Authorization Code + PKCE est le standard pour les SPA/Mobiles."
      },
      {
        id: 'fs_t4_11',
        tier: 4,
        text: "Java : Memory Model - `Happens-Before` ?",
        options: ["Avant.", "Garantie qu'une écriture mémoire par un thread est visible par un autre thread. Base de la synchro.", "Temps.", "Ordre aléatoire."],
        correctAnswer: 1,
        explanation: "Sans ça, le compilateur ou le CPU peut réordonner tes instructions et casser ton code multithread."
      },
      {
        id: 'fs_t4_12',
        tier: 4,
        text: "DB : Sharding vs Partitioning ?",
        options: ["Pareil.", "Partitioning = diviser une table dans la MÊME instance. Sharding = diviser les données sur PLUSIEURS serveurs physiques.", "Index.", "Backup."],
        correctAnswer: 1,
        explanation: "Sharding permet le 'Horizontal Scaling' infini, mais complexifie les jointures et transactions."
      },
      {
        id: 'fs_t4_13',
        tier: 4,
        text: "General : Qu'est-ce que le Teapot (418) ?",
        options: ["Erreur.", "I'm a teapot. Poisson d'avril IETF (HTCPCP).", "Bug serveur.", "Café."],
        correctAnswer: 1,
        explanation: "Culture G. HTTP 418. Si tu ne le connais pas, tu manques d'humour geek."
      },
      {
        id: 'fs_t4_14',
        tier: 4,
        text: "Laravel : Facades vs Dependency Injection ?",
        options: ["Facades sont mieux.", "Facades = Accès statique (Service Locator) pratique mais cache les dépendances. DI = Explicite et testable.", "DI est lent.", "Facades sont dépréciées."],
        correctAnswer: 1,
        explanation: "`User::create()` est une Facade. C'est 'magique'. L'injection `__construct(UserRepository $repo)` est architecturale."
      },
      {
        id: 'fs_t4_15',
        tier: 4,
        text: "DevOps : Blue-Green Deployment ?",
        options: ["Couleurs.", "Deux environnements prod identiques. On déploie sur Green (inactif), on teste, puis on bascule le routeur de Blue vers Green instantanément.", "Canary.", "Rolling."],
        correctAnswer: 1,
        explanation: "Zero downtime. Rollback instantané (on rebascule sur Blue)."
      },
      {
        id: 'fs_t4_16',
        tier: 4,
        text: "Pattern : Circuit Breaker States ?",
        options: ["On/Off.", "Closed (Tout va bien), Open (Erreur, on bloque), Half-Open (On teste si ça revient).", "Up/Down.", "True/False."],
        correctAnswer: 1,
        explanation: "La machine à états qui protège ton système des pannes en cascade."
      },
      {
        id: 'fs_t4_17',
        tier: 4,
        text: "Réseau : TLS Handshake performance cost ?",
        options: ["Nul.", "1 ou 2 RTT (Round Trip Time) supplémentaires avant d'envoyer des données. Impacte la latence initiale.", "Énorme.", "CPU."],
        correctAnswer: 1,
        explanation: "C'est pourquoi on utilise HTTP/2 ou 3 (QUIC) et le Session Resumption pour éviter de refaire le handshake complet."
      },
      {
        id: 'fs_t4_18',
        tier: 4,
        text: "Java : JIT (Just-In-Time) Compiler ?",
        options: ["Compile avant.", "Compile le Bytecode en code machine natif AU RUNTIME pour les parties chaudes (Hotspots) du code.", "Interpréteur.", "Lent."],
        correctAnswer: 1,
        explanation: "C'est pourquoi Java 'chauffe' et devient plus rapide après quelques minutes."
      },

      // =================================================================================
      // BATCH 1: ALGORITHMS & DATA STRUCTURES (New Injection)
      // =================================================================================
      {
        id: 'algo_t1_1',
        tier: 1,
        text: "Algo : Recherche Binaire (Binary Search) condition ?",
        options: ["Aucune.", "Le tableau doit être TRIÉ.", "Le tableau doit être d'entiers.", "Tableau infini."],
        correctAnswer: 1,
        explanation: "Impossible de diviser pour régner si les données sont en désordre. Complexité O(log n)."
      },
      {
        id: 'algo_t1_2',
        tier: 1,
        text: "DS : HashTable (HashMap) principe ?",
        options: ["Liste chaînée.", "Associe une Clé à une Valeur via une fonction de hachage pour un accès direct.", "Arbre.", "Pile."],
        correctAnswer: 1,
        explanation: "L'outil le plus puissant du développeur. Accès O(1) en moyenne."
      },
      {
        id: 'algo_t1_3',
        tier: 1,
        text: "Algo : Récursion ?",
        options: ["Boucle for.", "Une fonction qui s'appelle elle-même avec une condition d'arrêt (Base Case).", "Erreur.", "Parallélisme."],
        correctAnswer: 1,
        explanation: "Attention au Stack Overflow si tu oublies la condition d'arrêt !"
      },
      {
        id: 'algo_t2_1',
        tier: 2,
        text: "DS : Linked List vs Array (Insertion) ?",
        options: ["Pareil.", "Array est O(n) (décalage des éléments). Linked List est O(1) (changer les pointeurs) si on a la position.", "Array est O(1).", "Linked List est lent."],
        correctAnswer: 1,
        explanation: "Insérer au milieu d'un tableau oblige à déplacer tous les éléments suivants. Une liste chaînée change juste un lien."
      },
      {
        id: 'algo_t2_2',
        tier: 2,
        text: "Algo : DFS (Depth First Search) structure ?",
        options: ["Queue (FIFO).", "Stack (LIFO) ou Récursion.", "Array.", "Map."],
        correctAnswer: 1,
        explanation: "On plonge au fond du graphe avant de remonter. Utilise une Pile (Stack)."
      },
      {
        id: 'algo_t2_3',
        tier: 2,
        text: "Algo : BFS (Breadth First Search) usage ?",
        options: ["Trier.", "Trouver le chemin le plus court dans un graphe non pondéré.", "Calculer.", "Stack."],
        correctAnswer: 1,
        explanation: "Explore couche par couche (les voisins, puis les voisins des voisins). Idéal pour le GPS (simplifié)."
      },
      {
        id: 'algo_t3_1',
        tier: 3,
        text: "Algo : Tri Fusion (Merge Sort) stabilité ?",
        options: ["Instable.", "Stable (préserve l'ordre relatif des éléments égaux).", "Aléatoire.", "Lent."],
        correctAnswer: 1,
        explanation: "Crucial si tu tries par Nom puis par Date. QuickSort n'est généralement pas stable."
      },
      {
        id: 'algo_t3_2',
        tier: 3,
        text: "DS : Tas (Heap) / Priority Queue ?",
        options: ["Stockage.", "Arbre binaire complet où le parent est toujours plus grand (Max-Heap) ou petit (Min-Heap) que ses enfants.", "Liste.", "Lent."],
        correctAnswer: 1,
        explanation: "Accès au Min/Max en O(1). Insertion/Suppression en O(log n). Utilisé pour les tâches planifiées."
      },
      {
        id: 'algo_t3_3',
        tier: 3,
        text: "Algo : Dynamic Programming (Memoization) ?",
        options: ["Magie.", "Optimiser la récursion en stockant les résultats des sous-problèmes déjà calculés (Cache).", "Boucle.", "Hasard."],
        correctAnswer: 1,
        explanation: "Transforme O(2^n) (Fibonacci naïf) en O(n). On échange de la mémoire contre du temps CPU."
      },
      {
        id: 'algo_t4_1',
        tier: 4,
        text: "Algo : Dijkstra vs A* (A-Star) ?",
        options: ["Pareil.", "Dijkstra explore uniformément. A* utilise une heuristique (estimation distance restante) pour guider la recherche vers la cible plus vite.", "A* est moins précis.", "Dijkstra est pour les jeux."],
        correctAnswer: 1,
        explanation: "A* est l'algo de Pathfinding standard dans les jeux vidéo car il est dirigé."
      },
      {
        id: 'algo_t4_2',
        tier: 4,
        text: "DS : Bloom Filter ?",
        options: ["Filtre photo.", "Structure probabiliste efficace en espace qui dit soit 'NON sûr', soit 'PEUT-ÊTRE oui'. Jamais de faux négatifs.", "Cache.", "Liste."],
        correctAnswer: 1,
        explanation: "Utilisé par les DB pour savoir si une ligne existe sur disque sans lire le disque. Économise énormément d'I/O."
      },
      {
        id: 'algo_t4_3',
        tier: 4,
        text: "Algo : P vs NP ?",
        options: ["Politique.", "P = Résoluble rapidement. NP = Vérifiable rapidement. P = NP est le grand problème non résolu de l'informatique.", "Maths.", "Physique."],
        correctAnswer: 1,
        explanation: "Si P=NP, la cryptographie moderne s'effondre."
      },
      {
        id: 'algo_t4_4',
        tier: 4,
        text: "DS : Trie (Prefix Tree) usage ?",
        options: ["Trier.", "Autocomplétion et recherche de préfixes. Stocke les chaînes caractère par caractère.", "Arbre binaire.", "Liste."],
        correctAnswer: 1,
        explanation: "Ultra rapide pour 'Trouver tous les mots commençant par A-V-I...'."
      },
      {
        id: 'algo_t4_5',
        tier: 4,
        text: "Algo : Floyd's Cycle Detection (Tortoise & Hare) ?",
        options: ["Biologie.", "Détecter un cycle dans une liste chaînée avec deux pointeurs (lent et rapide) et O(1) mémoire.", "Tri.", "Graph."],
        correctAnswer: 1,
        explanation: "Si le lièvre (rapide) rattrape la tortue (lent), il y a une boucle. Sinon il atteint la fin."
      },

      // =================================================================================
      // BATCH 2: NETWORKING & PROTOCOLS (New Injection)
      // =================================================================================
      {
        id: 'net_t1_1',
        tier: 1,
        text: "Réseau : IP Address ?",
        options: ["Adresse postale.", "Identifiant unique numérique d'une machine sur un réseau (Internet Protocol).", "Nom de domaine.", "Adresse MAC."],
        correctAnswer: 1,
        explanation: "IPv4 (192.168.1.1) ou IPv6. C'est l'adresse de livraison des paquets."
      },
      {
        id: 'net_t1_2',
        tier: 1,
        text: "HTTP : Status 200 ?",
        options: ["Erreur.", "OK. La requête a réussi.", "Redirection.", "Non trouvé."],
        correctAnswer: 1,
        explanation: "Le code que tout le monde veut voir."
      },
      {
        id: 'net_t1_3',
        tier: 1,
        text: "HTTP : Status 404 ?",
        options: ["Erreur serveur.", "Not Found. La ressource demandée n'existe pas.", "Interdit.", "Succès."],
        correctAnswer: 1,
        explanation: "URL invalide ou ressource supprimée."
      },
      {
        id: 'net_t1_4',
        tier: 1,
        text: "HTTP : Status 500 ?",
        options: ["Client error.", "Internal Server Error. Le serveur a planté.", "OK.", "Redirection."],
        correctAnswer: 1,
        explanation: "C'est ta faute (développeur backend). Regarde les logs."
      },
      {
        id: 'net_t1_5',
        tier: 1,
        text: "Réseau : localhost IP ?",
        options: ["192.168.0.1", "127.0.0.1", "0.0.0.0", "8.8.8.8"],
        correctAnswer: 1,
        explanation: "La maison. La boucle locale."
      },
      {
        id: 'net_t2_1',
        tier: 2,
        text: "HTTP : Idempotence de GET ?",
        options: ["Non.", "Oui. Appeler GET 100 fois ne doit rien changer sur le serveur (Lecture seule).", "Parfois.", "Seulement avec cache."],
        correctAnswer: 1,
        explanation: "GET doit être 'Safe'. Ne jamais modifier de données avec un GET."
      },
      {
        id: 'net_t2_2',
        tier: 2,
        text: "Réseau : Ping commande ?",
        options: ["Jeu.", "Envoie des paquets ICMP Echo Request pour tester la connectivité avec une machine.", "Scan de port.", "Télécharge."],
        correctAnswer: 1,
        explanation: "Le stéthoscope du réseau. 'Es-tu vivant ?'."
      },
      {
        id: 'net_t2_3',
        tier: 2,
        text: "Web : Cookie HttpOnly ?",
        options: ["Uniquement HTTP.", "Cookie inaccessible via JavaScript (`document.cookie`). Protège contre le vol de session via XSS.", "Crypté.", "Visible."],
        correctAnswer: 1,
        explanation: "Si tu stockes un JWT dans un cookie, mets-le en HttpOnly. Toujours."
      },
      {
        id: 'net_t2_4',
        tier: 2,
        text: "Réseau : OSI Layer 4 ?",
        options: ["Physique.", "Transport (TCP/UDP).", "Application.", "Réseau."],
        correctAnswer: 1,
        explanation: "Gère la transmission de bout en bout, la segmentation et le contrôle de flux."
      },
      {
        id: 'net_t2_5',
        tier: 2,
        text: "Web : SSL/TLS ?",
        options: ["Virus.", "Protocole de sécurité qui crypte la connexion entre client et serveur (HTTPS).", "Langage.", "Base de données."],
        correctAnswer: 1,
        explanation: "Assure la confidentialité et l'intégrité des données. Utilise des certificats X.509."
      },
      {
        id: 'net_t3_1',
        tier: 3,
        text: "HTTP : Header `Cache-Control: no-cache` ?",
        options: ["Pas de cache.", "Le navigateur PEUT mettre en cache, mais DOIT revalider avec le serveur (ETag) avant de l'utiliser.", "Cache infini.", "Erreur."],
        correctAnswer: 1,
        explanation: "Contre-intuitif. `no-store` interdit le cache. `no-cache` force la revalidation (304 Not Modified)."
      },
      {
        id: 'net_t3_2',
        tier: 3,
        text: "Réseau : Subnet Mask /24 ?",
        options: ["24 adresses.", "255.255.255.0. Signifie que les 24 premiers bits définissent le réseau, les 8 derniers les hôtes (254 machines).", "Grand réseau.", "Petit réseau."],
        correctAnswer: 1,
        explanation: "Standard des réseaux domestiques. 192.168.1.X."
      },
      {
        id: 'net_t3_3',
        tier: 3,
        text: "Web : Content Security Policy (CSP) ?",
        options: ["Police.", "Header HTTP qui liste les sources autorisées (domaines) pour charger des scripts, images, styles. Contre le XSS.", "CSS.", "Cache."],
        correctAnswer: 1,
        explanation: "Empêche ton site de charger `malicious.js` depuis un site tiers inconnu."
      },
      {
        id: 'net_t3_4',
        tier: 3,
        text: "Réseau : Reverse Proxy (Nginx) vs Forward Proxy ?",
        options: ["Pareil.", "Reverse protège le SERVEUR (Load balancing, SSL). Forward protège le CLIENT (Anonymat, Filtrage entrprise).", "Inverse.", "Routeur."],
        correctAnswer: 1,
        explanation: "Nginx devant ton app Node.js est un Reverse Proxy."
      },
      {
        id: 'net_t3_5',
        tier: 3,
        text: "HTTP : ETag ?",
        options: ["Tag HTML.", "Identifiant unique (Hash) d'une version de ressource. Permet le cache conditionnel (If-None-Match).", "Prix.", "Erreur."],
        correctAnswer: 1,
        explanation: "Si le hash envoyé par le client correspond au hash serveur -> 304 Not Modified (0 octet téléchargé)."
      },
      {
        id: 'net_t4_1',
        tier: 4,
        text: "HTTP/2 vs HTTP/1.1 : Multiplexing ?",
        options: ["Plus rapide.", "HTTP/1.1 = 1 requête par connexion TCP (Head-of-Line Blocking). HTTP/2 = Plusieurs requêtes parallèles dans la MÊME connexion TCP.", "Compression.", "Secure."],
        correctAnswer: 1,
        explanation: "Révolutionnaire. Fini le besoin de concaténer les JS/CSS ou d'utiliser des sprites d'images."
      },
      {
        id: 'net_t4_2',
        tier: 4,
        text: "Réseau : QUIC (HTTP/3) ?",
        options: ["Rapide.", "Remplace TCP par UDP pour éviter le Head-of-Line Blocking au niveau paquet et réduire la latence de handshake.", "TCP amélioré.", "VPN."],
        correctAnswer: 1,
        explanation: "TCP est trop lent à démarrer. Google a inventé QUIC (sur UDP) pour aller plus vite. C'est le futur."
      },
      {
        id: 'net_t4_3',
        tier: 4,
        text: "Web : Server-Sent Events (SSE) vs WebSockets ?",
        options: ["Pareil.", "SSE = Unidirectionnel (Serveur -> Client) sur HTTP standard. WebSocket = Bidirectionnel, protocole custom.", "SSE est vieux.", "WebSocket est lent."],
        correctAnswer: 1,
        explanation: "Pour un fil d'actu ou des notifs, SSE est plus simple et passe mieux les pare-feux que les WebSockets."
      },
      {
        id: 'net_t4_4',
        tier: 4,
        text: "Réseau : Load Balancing L4 vs L7 ?",
        options: ["Niveau.", "L4 (Transport) route basé sur IP/Port (rapide, aveugle). L7 (Application) route basé sur URL/Headers/Cookies (intelligent, décrypte HTTPS).", "L7 est vieux.", "L4 est lent."],
        correctAnswer: 1,
        explanation: "AWS NLB (L4) vs ALB (L7). Si tu veux router `/api` vers Service A et `/img` vers Service B, il te faut du L7."
      },
      {
        id: 'net_t4_5',
        tier: 4,
        text: "Réseau : Anycast DNS ?",
        options: ["Broadcast.", "Plusieurs serveurs partagent la MÊME adresse IP. Le réseau route ta requête vers le serveur le plus proche topologiquement.", "Multicast.", "Unicast."],
        correctAnswer: 1,
        explanation: "Comment Google DNS (8.8.8.8) répond en 10ms partout dans le monde ? Il y a des centaines de serveurs '8.8.8.8'."
      },

      // =================================================================================
      // BATCH 3: ADVANCED DATABASES (New Injection)
      // =================================================================================
      {
        id: 'db_t1_1',
        tier: 1,
        text: "DB : SELECT * ?",
        options: ["Bien.", "Mauvaise pratique. Récupère TOUTES les colonnes, gaspille la bande passante et empêche les index 'Covering'.", "Obligatoire.", "Rapide."],
        correctAnswer: 1,
        explanation: "Ne demande que les colonnes dont tu as besoin (`SELECT id, name`). Ton réseau te remerciera."
      },
      {
        id: 'db_t1_2',
        tier: 1,
        text: "DB : NULL en SQL ?",
        options: ["Zéro.", "L'absence de valeur (Inconnu). Attention : `NULL != NULL` est Vrai (Unknown).", "Vide.", "Faux."],
        correctAnswer: 1,
        explanation: "`SELECT * FROM users WHERE age = NULL` ne marche pas. Il faut utiliser `IS NULL`."
      },
      {
        id: 'db_t1_3',
        tier: 1,
        text: "DB : Foreign Key (Clé étrangère) ?",
        options: ["Clé d'un autre pays.", "Contrainte qui garantit que la valeur d'une colonne correspond à une Clé Primaire existante dans une autre table.", "Index.", "Optionnel."],
        correctAnswer: 1,
        explanation: "Garantit l'intégrité référentielle. Empêche d'avoir une commande liée à un utilisateur qui n'existe pas."
      },
      {
        id: 'db_t2_1',
        tier: 2,
        text: "DB : HAVING vs WHERE ?",
        options: ["Pareil.", "WHERE filtre AVANT le regroupement (GROUP BY). HAVING filtre APRÈS (sur les agrégats).", "HAVING est plus rapide.", "WHERE est déprécié."],
        correctAnswer: 1,
        explanation: "`WHERE salary > 1000` marche. `WHERE COUNT(*) > 5` plante (il faut `HAVING`)."
      },
      {
        id: 'db_t2_2',
        tier: 2,
        text: "DB : SQL Injection '1 OR 1=1' ?",
        options: ["Maths.", "Tautologie qui rend la condition toujours Vraie. Permet de contourner l'authentification.", "Erreur.", "Optimisation."],
        correctAnswer: 1,
        explanation: "`SELECT * FROM users WHERE user = '$u' AND pass = '$p'`. Si $p est `' OR '1'='1`, ça loggue n'importe qui."
      },
      {
        id: 'db_t2_3',
        tier: 2,
        text: "DB : Redis cas d'usage ?",
        options: ["Stockage long terme.", "Cache, Session Store, Files d'attente, Leaderboard (In-Memory Key-Value store).", "Relationnel.", "Fichiers."],
        correctAnswer: 1,
        explanation: "Ultra rapide (RAM). Si le serveur reboote, tu perds les données (sauf si persistance configurée)."
      },
      {
        id: 'db_t2_4',
        tier: 2,
        text: "DB : MongoDB (Document) avantage ?",
        options: ["SQL.", "Schéma flexible (JSON/BSON). Idéal pour les données non structurées ou le prototypage rapide.", "Transaction.", "Jointure."],
        correctAnswer: 1,
        explanation: "Pas de migration de schéma (ALTER TABLE) bloquante. Mais attention à la dette technique."
      },
      {
        id: 'db_t3_1',
        tier: 3,
        text: "DB : Index Composite (Multi-colonnes) ?",
        options: ["Plusieurs index.", "Un seul index sur (A, B). L'ordre compte ! Optimise `WHERE A=1 AND B=2` et `WHERE A=1`, mais PAS `WHERE B=2`.", "Lent.", "Inutile."],
        correctAnswer: 1,
        explanation: "Règle du préfixe de gauche. Comme un annuaire (Nom, Prénom). Tu ne peux pas chercher par Prénom seul."
      },
      {
        id: 'db_t3_2',
        tier: 3,
        text: "DB : N+1 Query Problem (ORM) ?",
        options: ["Algèbre.", "Faire 1 requête pour la liste parente + N requêtes pour les enfants (une par ligne). Tueur de perf.", "Bonne pratique.", "Erreur SQL."],
        correctAnswer: 1,
        explanation: "Utilise `JOIN` en SQL pur ou `Eager Loading` (.include/.with) dans ton ORM."
      },
      {
        id: 'db_t3_3',
        tier: 3,
        text: "DB : Connection Pooling ?",
        options: ["Piscine.", "Réutiliser un ensemble de connexions ouvertes au lieu d'en ouvrir/fermer une à chaque requête HTTP (coûteux).", "Sécurité.", "Partage."],
        correctAnswer: 1,
        explanation: "Ouvrir une connexion TCP/SSL vers MySQL prend 100ms. Le pool la rend instantanée."
      },
      {
        id: 'db_t3_4',
        tier: 3,
        text: "DB : Soft Delete ?",
        options: ["Suppression douce.", "Marquer une ligne comme supprimée (`deleted_at IS NOT NULL`) sans l'effacer physiquement. Permet la restauration.", "Erreur.", "Lent."],
        correctAnswer: 1,
        explanation: "Attention : toutes tes requêtes doivent inclure `WHERE deleted_at IS NULL` sinon les fantômes réapparaissent."
      },
      {
        id: 'db_t3_5',
        tier: 3,
        text: "DB : UNION vs UNION ALL ?",
        options: ["Pareil.", "UNION supprime les doublons (coûteux : tri). UNION ALL garde tout (rapide).", "UNION ALL trie.", "UNION est déprécié."],
        correctAnswer: 1,
        explanation: "Si tu sais que tes deux tables n'ont pas de chevauchement, utilise toujours UNION ALL."
      },
      {
        id: 'db_t4_1',
        tier: 4,
        text: "DB : Window Functions (ROW_NUMBER) ?",
        options: ["Fenêtre.", "Permet des calculs sur un jeu de lignes (partition) sans les grouper (contrairement à GROUP BY). Ex: Top 3 ventes par vendeur.", "Vue.", "Index."],
        correctAnswer: 1,
        explanation: "`RANK() OVER (PARTITION BY dept ORDER BY salary DESC)`. Puissant pour l'analytique."
      },
      {
        id: 'db_t4_2',
        tier: 4,
        text: "DB : Isolation Level Serializable ?",
        options: ["Moyen.", "Le plus strict. Garantit que le résultat des transactions concurrentes est le même que si elles étaient exécutées l'une après l'autre. Bloquant.", "Rapide.", "Défaut."],
        correctAnswer: 1,
        explanation: "Empêche les Phantom Reads. Le prix à payer est le verrouillage massif et les Deadlocks fréquents."
      },
      {
        id: 'db_t4_3',
        tier: 4,
        text: "DB : CTE (Common Table Expression) - WITH ?",
        options: ["Avec.", "Créer une table temporaire nommée pour simplifier une requête complexe (lisibilité). Peut être récursif.", "Vue.", "Variable."],
        correctAnswer: 1,
        explanation: "Remplace les sous-requêtes imbriquées illisibles. `WITH Sales AS (...) SELECT * FROM Sales`."
      },
      {
        id: 'db_t4_4',
        tier: 4,
        text: "DB : Cassandra (Column-family store) usage ?",
        options: ["Petit site.", "Écriture massive (Write heavy), Big Data, Haute Disponibilité (AP). Pas de jointures, modélisation basée sur les requêtes.", "Transactionnel.", "Cache."],
        correctAnswer: 1,
        explanation: "Tu ne modélises pas les entités, tu modélises tes requêtes (`Table UsersByCity`)."
      },
      {
        id: 'db_t4_5',
        tier: 4,
        text: "DB : Database Migration - Blue/Green ?",
        options: ["Couleur.", "Découpler la migration de schéma (ajout colonne nullable) du déploiement de code pour éviter le downtime.", "Backup.", "Copie."],
        correctAnswer: 1,
        explanation: "Ne jamais renlmnommer une colonne en prod. 1. Ajouter new_col. 2. Code écrit dans les deux. 3. Migrer data. 4. Code lit new_col. 5. Supprimer old_col."
      },
      {
        id: 'db_t4_6',
        tier: 4,
        text: "DB : Deadlock (Interblocage) ?",
        options: ["Mort.", "Transaction A locke Table 1 et veut Table 2. Transaction B locke Table 2 et veut Table 1. Les deux attendent l'autre indéfiniment.", "Erreur syntaxe.", "Crash disque."],
        correctAnswer: 1,
        explanation: "Le SGBD finit par tuer une des deux transactions. Pour éviter : toujours acquérir les verrous dans le même ordre."
      },
      {
        id: 'db_t4_7',
        tier: 4,
        text: "DB : WAL (Write Ahead Log) ?",
        options: ["Mur.", "Journal des modifications écrit sur disque AVANT d'appliquer les changements aux fichiers de données. Garantit la durabilité (ACID) en cas de crash.", "Log erreur.", "Cache."],
        correctAnswer: 1,
        explanation: "Si la prise est débranchée, la DB rejoue le WAL au redémarrage pour restaurer l'état cohérent."
      },

      // =================================================================================
      // BATCH 4: DEVOPS & GIT MASTERY (New Injection)
      // =================================================================================
      {
        id: 'dev_t1_1',
        tier: 1,
        text: "Git : `git pull` ?",
        options: ["Tirer.", "C'est `git fetch` suivi de `git merge`. Télécharge et fusionne les changements distants.", "Envoie le code.", "Annule."],
        correctAnswer: 1,
        explanation: "Attention aux conflits si tu as modifié les mêmes fichiers que tes collègues."
      },
      {
        id: 'dev_t1_2',
        tier: 1,
        text: "DevOps : Environnement de Staging ?",
        options: ["Scène.", "Réplique exacte de la Production pour tester avant le déploiement final (Pre-Prod).", "Développement.", "Local."],
        correctAnswer: 1,
        explanation: "Si ça marche en Staging, ça DEVRAIT marcher en Prod (sauf loi de Murphy)."
      },
      {
        id: 'dev_t1_3',
        tier: 1,
        text: "Linux : `ssh` ?",
        options: ["Silence.", "Secure Shell. Protocole pour se connecter à distance à un serveur de manière sécurisée.", "Copie.", "Web."],
        correctAnswer: 1,
        explanation: "La clé de ta maison numérique. `ssh user@ip`."
      },
      {
        id: 'dev_t2_1',
        tier: 2,
        text: "Docker : Multi-stage Build ?",
        options: ["Complexe.", "Technique pour réduire la taille de l'image finale en utilisant une image temporaire pour le build (avec compilateurs) et une image légère pour le runtime.", "Plusieurs conteneurs.", "Lent."],
        correctAnswer: 1,
        explanation: "Tu compiles ton Go/Java dans une image 'Builder' de 1Go, tu copies juste le binaire dans une image 'Alpine' de 10Mo."
      },
      {
        id: 'dev_t2_2',
        tier: 2,
        text: "Git : `git rebase -i` (Interactive) ?",
        options: ["Dangereux.", "Permet de réécrire l'historique local : fusionner (squash) des commits, changer les messages, supprimer des commits.", "Fusionner.", "Supprimer."],
        correctAnswer: 1,
        explanation: "Pour nettoyer ton historique 'WIP' sale avant de merger ta PR. Ne jamais faire sur une branche publique !"
      },
      {
        id: 'dev_t2_3',
        tier: 2,
        text: "K8s : ConfigMap vs Secret ?",
        options: ["Pareil.", "ConfigMap pour les configurations non-sensibles (URL, ports). Secret pour les mots de passe/clés (encodé base64).", "Secret est crypté.", "ConfigMap est statique."],
        correctAnswer: 1,
        explanation: "Ne committe jamais tes secrets dans le repo Git. Injecte-les via K8s Secrets."
      },
      {
        id: 'dev_t2_4',
        tier: 2,
        text: "DevOps : Semantic Versioning (SemVer) ?",
        options: ["1.0.", "MAJOR.MINOR.PATCH (ex: 2.1.4). Major = Breaking Change. Minor = Feature. Patch = Bugfix.", "Date.", "Aléatoire."],
        correctAnswer: 1,
        explanation: "Si tu passes de 1.0.0 à 2.0.0, tu dis à tes utilisateurs : 'Attention, j'ai cassé la compatibilité'."
      },
      {
        id: 'dev_t3_1',
        tier: 3,
        text: "Terraform : State File ?",
        options: ["État.", "Fichier JSON qui mappe ta configuration IaC aux ressources réelles du cloud. Source de vérité unique.", "Config.", "Log."],
        correctAnswer: 1,
        explanation: "Si tu perds le state file, Terraform ne sait plus ce qu'il a créé et risque de tout recréer (ou rien détruire)."
      },
      {
        id: 'dev_t3_2',
        tier: 3,
        text: "Git : `git reflog` ?",
        options: ["Log référence.", "Journal de toutes les actions locales (même les resets/rebases). Permet de retrouver un commit 'perdu' qui n'est plus dans l'historique.", "Log serveur.", "Erreur."],
        correctAnswer: 1,
        explanation: "Le filet de sécurité ultime. 'J'ai supprimé ma branche par erreur !' -> `git reflog` -> `git checkout SHA`."
      },
      {
        id: 'dev_t3_3',
        tier: 3,
        text: "K8s : Ingress Controller ?",
        options: ["Entrée.", "Point d'entrée HTTP/S du cluster. Gère le routing (L7) vers les services internes (ex: Nginx Ingress).", "Firewall.", "Service."],
        correctAnswer: 1,
        explanation: "Remplace le LoadBalancer classique pour exposer 50 microservices sur une seule IP publique."
      },
      {
        id: 'dev_t3_4',
        tier: 3,
        text: "Monitoring : Prometheus vs Grafana ?",
        options: ["Pareil.", "Prometheus collecte les métriques (Time Series DB). Grafana les visualise (Dashboards).", "Grafana collecte.", "Prometheus affiche."],
        correctAnswer: 1,
        explanation: "Le couple inséparable du monitoring Cloud Native."
      },
      {
        id: 'dev_t3_5',
        tier: 3,
        text: "DevOps : Immutable Infrastructure ?",
        options: ["Solide.", "On ne modifie jamais un serveur en place (SSH update). On le détruit et on en déploie un nouveau avec la nouvelle image.", "Stable.", "Statique."],
        correctAnswer: 1,
        explanation: "Évite le 'Configuration Drift' (serveurs flocon de neige qui diffèrent tous un peu)."
      },
      {
        id: 'dev_t4_1',
        tier: 4,
        text: "K8s : Sidecar Pattern ?",
        options: ["Moto.", "Ajouter un conteneur auxiliaire dans le MÊME Pod pour étendre le conteneur principal (ex: Logging agent, Proxy Service Mesh).", "Sécurité.", "Backup."],
        correctAnswer: 1,
        explanation: "Partage le même disque et réseau (localhost) que l'app principale. Utilisé par Istio/Envoy."
      },
      {
        id: 'dev_t4_2',
        tier: 4,
        text: "Git : Submodules vs Subtree ?",
        options: ["Sous-dossier.", "Submodule pointe vers un commit précis d'un autre repo (lien rigide). Subtree copie le code (plus facile à gérer).", "Pareil.", "Subtree est déprécié."],
        correctAnswer: 1,
        explanation: "Les submodules sont l'enfer des devs ('detached head state'). Subtree est souvent préféré pour les monorepos."
      },
      {
        id: 'dev_t4_3',
        tier: 4,
        text: "DevOps : Trunk Based Development vs Gitflow ?",
        options: ["Arbre.", "Trunk: Tout le monde commit sur `main` (avec Feature Flags). Gitflow: Branches complexes (develop, release, feature).", "Gitflow est moderne.", "Trunk est dangereux."],
        correctAnswer: 1,
        explanation: "Les géants (Google, Meta) utilisent Trunk Based pour livrer vite. Gitflow est trop lent pour le CI/CD continu."
      },
      {
        id: 'dev_t4_4',
        tier: 4,
        text: "Observability : Tracing (OpenTelemetry) ?",
        options: ["Traceur.", "Suivre le parcours d'une requête à travers TOUS les microservices (Distributed Tracing) pour trouver les goulots d'étranglement.", "Logging.", "Metriques."],
        correctAnswer: 1,
        explanation: "Sans Trace ID propagé via les headers, impossible de débugger 'Pourquoi ma requête est lente ?' dans 50 services."
      },
      {
        id: 'dev_t4_5',
        tier: 4,
        text: "Linux : `kill -9` vs `kill -15` ?",
        options: ["Chiffres.", "15 (SIGTERM) demande gentiment de s'arrêter (cleanup). 9 (SIGKILL) tue le processus brutalement (perte de données possible).", "9 est mieux.", "Pareil."],
        correctAnswer: 1,
        explanation: "Toujours essayer 15 d'abord. 9 ne laisse aucune chance au process de fermer ses fichiers/connexions."
      },

      // =================================================================================
      // BATCH 5: ARCHITECTURE & DESIGN PATTERNS (New Injection)
      // =================================================================================
      {
        id: 'arch_t1_1',
        tier: 1,
        text: "Principes : KISS ?",
        options: ["Bisou.", "Keep It Simple, Stupid. Ne complique pas le code inutilement.", "Keep It Solid Secure.", "Key Index Simple Storage."],
        correctAnswer: 1,
        explanation: "La complexité est l'ennemie. Si tu peux le faire simplement, fais-le simplement."
      },
      {
        id: 'arch_t1_2',
        tier: 1,
        text: "Principes : DRY ?",
        options: ["Sec.", "Don't Repeat Yourself. Évite la duplication de code/logique.", "Do Repeat Yourself.", "Database Relation Yield."],
        correctAnswer: 1,
        explanation: "Si tu changes une logique, tu ne devrais avoir à modifier qu'un seul endroit."
      },
      {
        id: 'arch_t1_3',
        tier: 1,
        text: "Pattern : Factory simple ?",
        options: ["Usine.", "Une fonction/méthode statique qui crée et retourne des objets.", "Singleton.", "Constructeur."],
        correctAnswer: 1,
        explanation: "Encapsule le `new` pour centraliser la logique de création."
      },
      {
        id: 'arch_t2_1',
        tier: 2,
        text: "SOLID : 'S' (Single Responsibility) ?",
        options: ["Simple.", "Une classe ne doit avoir qu'une seule raison de changer (une seule responsabilité).", "Singleton.", "Security."],
        correctAnswer: 1,
        explanation: "Ton `User` ne doit pas gérer la sauvegarde en DB ET l'envoi d'email. Sépare."
      },
      {
        id: 'arch_t2_2',
        tier: 2,
        text: "SOLID : 'O' (Open/Closed) ?",
        options: ["Ouvert.", "Ouvert à l'extension, fermé à la modification. On ajoute du comportement sans toucher au code existant.", "Open Source.", "Optimisé."],
        correctAnswer: 1,
        explanation: "Utilise le polymorphisme (Interfaces) pour ajouter des features sans casser le vieux code."
      },
      {
        id: 'arch_t2_3',
        tier: 2,
        text: "Pattern : Template Method ?",
        options: ["HTML.", "Définit le squelette d'un algorithme dans une méthode, en déléguant certaines étapes aux sous-classes.", "Factory.", "Strategy."],
        correctAnswer: 1,
        explanation: "`AbstractClass` définit l'ordre des étapes, `ConcreteClass` implémente les détails de chaque étape."
      },
      {
        id: 'arch_t2_4',
        tier: 2,
        text: "Arch : Monolith vs Microservices ?",
        options: ["Taille.", "Monolith = Tout dans un seul processus/déploiement. Microservices = Découpé en services indépendants communiquant via réseau.", "Microservices toujours mieux.", "Monolith est mort."],
        correctAnswer: 1,
        explanation: "Le monolithe est plus simple à développer/déployer au début. Les microservices scalent mieux humainement et techniquement, mais ajoutent une complexité monstre."
      },
      {
        id: 'arch_t3_1',
        tier: 3,
        text: "Pattern : Chain of Responsibility ?",
        options: ["Chaîne.", "Passe une requête le long d'une chaîne de handlers. Chacun décide de traiter ou de passer au suivant.", "Liste.", "Boucle."],
        correctAnswer: 1,
        explanation: "Les Middlewares Laravel/Express sont basés là-dessus."
      },
      {
        id: 'arch_t3_2',
        tier: 3,
        text: "Pattern : State ?",
        options: ["État.", "Permet à un objet de changer de comportement quand son état interne change. (Machine à états).", "Strategy.", "Observer."],
        correctAnswer: 1,
        explanation: "Remplace les `switch (state) { case 'DRAFT': ... case 'PUBLISHED': ... }` par des classes d'état."
      },
      {
        id: 'arch_t3_3',
        tier: 3,
        text: "Arch : BFF (Backend For Frontend) ?",
        options: ["Best Friend.", "Une couche API spécifique pour chaque type de client (Web, Mobile) qui agrège et formate les données pour lui.", "Base de données.", "Proxy."],
        correctAnswer: 1,
        explanation: "Le Mobile veut moins de données que le Desktop. Le BFF adapte la réponse."
      },
      {
        id: 'arch_t3_4',
        tier: 3,
        text: "SOLID : 'D' (Dependency Inversion) ?",
        options: ["Dépendance.", "Les modules de haut niveau ne doivent pas dépendre des détails de bas niveau. Les deux doivent dépendre d'abstractions (Interfaces).", "Injection.", "Docker."],
        correctAnswer: 1,
        explanation: "Ne dépend pas de `MySQLDatabase`, dépend de `DatabaseInterface`."
      },
      {
        id: 'arch_t3_5',
        tier: 3,
        text: "Arch : Strangler Fig Pattern ?",
        options: ["Plante.", "Remplacer progressivement un système Legacy par un nouveau, module par module, jusqu'à ce que l'ancien disparaisse.", "Big Bang.", "Réécriture."],
        correctAnswer: 1,
        explanation: "La seule façon sûre de migrer un monolithe géant. On ne réécrit jamais tout d'un coup (Big Bang)."
      },
      {
        id: 'arch_t4_1',
        tier: 4,
        text: "Pattern : Visitor ?",
        options: ["Visite.", "Sépare un algorithme de la structure de données sur laquelle il opère. Permet d'ajouter de nouvelles opérations sans modifier les classes.", "Iterator.", "Composite."],
        correctAnswer: 1,
        explanation: "Complexe mais puissant. Utilisé dans les compilateurs pour traverser l'AST (Abstract Syntax Tree)."
      },
      {
        id: 'arch_t4_2',
        tier: 4,
        text: "Pattern : Memento ?",
        options: ["Souvenir.", "Capture et externalise l'état interne d'un objet pour permettre de le restaurer plus tard (Undo/Redo) sans violer l'encapsulation.", "Serialize.", "Cache."],
        correctAnswer: 1,
        explanation: "Comment fonctionne le Ctrl+Z dans ton éditeur."
      },
      {
        id: 'arch_t4_3',
        tier: 4,
        text: "SOLID : 'L' (Liskov) - Covariance ?",
        options: ["Variable.", "Une méthode surchargée dans une sous-classe peut retourner un sous-type du type de retour original (plus précis), mais pas un super-type.", "Invariance.", "Erreur."],
        correctAnswer: 1,
        explanation: "Si `Animal.getEnfant()` rend `Animal`, `Chat.getEnfant()` peut rendre `Chat` (Covariant), mais pas `Object`."
      },
      {
        id: 'arch_t4_4',
        tier: 4,
        text: "SOLID : 'I' (Interface Segregation) ?",
        options: ["Ségrégation.", "Mieux vaut plusieurs petites interfaces spécifiques qu'une seule interface généraliste géante que le client n'utilise pas entièrement.", "Isolement.", "Héritage."],
        correctAnswer: 1,
        explanation: "Ne force pas une classe à implémenter `voler()` si c'est un `Pingouin`. Fais une interface `Volant`."
      },
      {
        id: 'arch_t4_5',
        tier: 4,
        text: "Arch : Outbox Pattern ?",
        options: ["Email.", "Pour garantir la transaction duale (DB + Event Bus) : on écrit l'événement dans une table 'Outbox' DANS la même transaction DB, puis un process le publie.", "Inbox.", "Log."],
        correctAnswer: 1,
        explanation: "Résout le problème 'J'ai sauvegardé en DB mais le message RabbitMQ a échoué'."
      },
      {
        id: 'arch_t4_6',
        tier: 4,
        text: "Law of Demeter (LoD) ?",
        options: ["Loi.", "Principe de moindre connaissance. Un objet ne doit parler qu'à ses amis proches. Évite `a.getB().getC().doSomething()`.", "Déméter.", "Chaînage."],
        correctAnswer: 1,
        explanation: " 'Ne parle pas aux inconnus'. Réduit le couplage. Si la structure de B change, A ne doit pas casser."
      },
      {
        id: 'arch_t4_7',
        tier: 4,
        text: "Pattern : Composite ?",
        options: ["Composition.", "Traiter un groupe d'objets (Arbre) de la même façon qu'un objet unique. (ex: Dossier contient Fichiers et Dossiers).", "Liste.", "Mix."],
        correctAnswer: 1,
        explanation: "Permet de faire `dossier.taille()` qui somme récursivement tout le contenu, comme `fichier.taille()`."
      },

      // =================================================================================
      // BATCH 6: FRONTEND MASTERY (New Injection)
      // =================================================================================
      {
        id: 'front_t1_1',
        tier: 1,
        text: "JS : `NaN` === `NaN` ?",
        options: ["Vrai.", "Faux. NaN est la seule valeur en JS qui n'est pas égale à elle-même.", "Erreur.", "Null."],
        correctAnswer: 1,
        explanation: "Utilise `Number.isNaN()` pour vérifier. Spécificité IEEE 754."
      },
      {
        id: 'front_t1_2',
        tier: 1,
        text: "CSS : `z-index` ne marche pas ?",
        options: ["Bug navigateur.", "Il faut définir `position` (relative, absolute, fixed, sticky) autre que `static`.", "Il faut un ID.", "Il faut `display: block`."],
        correctAnswer: 1,
        explanation: "Le z-index ne s'applique qu'aux éléments positionnés."
      },
      {
        id: 'front_t1_3',
        tier: 1,
        text: "HTML : `aria-label` ?",
        options: ["Label visuel.", "Attribut d'accessibilité pour fournir un nom textuel aux lecteurs d'écran (ex: icône bouton).", "Style.", "Script."],
        correctAnswer: 1,
        explanation: "Vital pour l'accessibilité (a11y). Un bouton avec juste une icône 'X' doit avoir `aria-label='Fermer'`."
      },
      {
        id: 'front_t2_1',
        tier: 2,
        text: "JS : Closure (Fermeture) ?",
        options: ["Fermer la fenêtre.", "Une fonction qui 'se souvient' de son environnement lexical (variables) même après que la fonction parente ait terminé.", "Une classe.", "Un objet privé."],
        correctAnswer: 1,
        explanation: "Base du module pattern et des hooks React. Permet d'avoir des variables privées."
      },
      {
        id: 'front_t2_2',
        tier: 2,
        text: "CSS : Flexbox `justify-content` vs `align-items` ?",
        options: ["Pareil.", "Justify = Axe Principal (Main Axis). Align = Axe Transversal (Cross Axis).", "Justify = Vertical.", "Align = Horizontal."],
        correctAnswer: 1,
        explanation: "Si `flex-direction: row` (défaut), Justify gère l'horizontal. Si `column`, Justify gère le vertical."
      },
      {
        id: 'front_t2_3',
        tier: 2,
        text: "JS : Event Bubbling ?",
        options: ["Bulles.", "L'événement se propage de l'élément cible vers ses parents (vers le haut du DOM).", "Vers le bas.", "N'existe pas."],
        correctAnswer: 1,
        explanation: "Tu cliques sur un `span`, l'événement monte au `div`, puis au `body`. `stopPropagation()` empêche ça."
      },
      {
        id: 'front_t2_4',
        tier: 2,
        text: "Vue : Modifiers d'événement `.prevent` ?",
        options: ["Empêche le clic.", "Appelle `event.preventDefault()` automatiquement (ex: empêche le rechargement d'un formulaire).", "Arrête la propagation.", "Rien."],
        correctAnswer: 1,
        explanation: "`@submit.prevent='save'` est le standard pour les formulaires SPA."
      },
      {
        id: 'front_t3_1',
        tier: 3,
        text: "JS : Prototype Chain ?",
        options: ["Héritage classique.", "Chaque objet a un lien interne vers un autre objet (son prototype). Si une propriété n'est pas trouvée, JS cherche dans le prototype, etc.", "Classes Java.", "Clonage."],
        correctAnswer: 1,
        explanation: "Tout est objet en JS. `Array` hérite de `Object`. C'est de l'héritage prototypal, pas de classe."
      },
      {
        id: 'front_t3_2',
        tier: 3,
        text: "CSS : Stacking Context (Piège z-index) ?",
        options: ["Empilement simple.", "Un z-index:999 dans un parent avec `opacity:0.9` peut passer DERRIÈRE un z-index:1 extérieur.", "Bug.", "Calque."],
        correctAnswer: 1,
        explanation: "Certaines propriétés CSS (`opacity`, `transform`, `filter`) créent un NOUVEAU contexte d'empilement, isolant les z-index enfants."
      },
      {
        id: 'front_t3_3',
        tier: 3,
        text: "JS : `this` dans une Arrow Function ?",
        options: ["Comme une fonction normale.", "Lexical `this`. Il capture la valeur de `this` du contexte englobant au moment de la définition. Ne peut pas être changé par `.bind()`.", "Global.", "Undefined."],
        correctAnswer: 1,
        explanation: "Fini le `var self = this`. L'arrow function garde le `this` de la classe ou du scope parent."
      },
      {
        id: 'front_t3_4',
        tier: 3,
        text: "Browser : Repaint vs Reflow ?",
        options: ["Peinture.", "Reflow (Layout) recalcule la position/taille (coûteux). Repaint redessine les pixels (couleur).", "Reflow est rapide.", "Pareil."],
        correctAnswer: 1,
        explanation: "Changer `width` cause un Reflow. Changer `color` cause un Repaint. Évite les Reflows dans les animations (utilise `transform`)."
      },
      {
        id: 'front_t3_5',
        tier: 3,
        text: "Web API : Intersection Observer ?",
        options: ["Observer le trafic.", "API performante pour détecter quand un élément entre dans le viewport (Lazy loading images, Infinite scroll).", "Scroll listener.", "Mouse tracker."],
        correctAnswer: 1,
        explanation: "Remplace les écouteurs de scroll lourds qui bloquent le thread principal."
      },
      {
        id: 'front_t4_1',
        tier: 4,
        text: "JS : Microtasks vs Macrotasks ?",
        options: ["Tâches.", "Microtasks (Promises, MutationObserver) s'exécutent AVANT le rendu et AVANT la prochaine Macrotask (setTimeout).", "Inverse.", "Pareil."],
        correctAnswer: 1,
        explanation: "Une boucle infinie de Microtasks bloque le navigateur. `setTimeout` laisse le navigateur respirer."
      },
      {
        id: 'front_t4_2',
        tier: 4,
        text: "JS : WeakMap usage ?",
        options: ["Carte faible.", "Map où les clés sont des objets et sont 'faiblement tenues' (Garbage Collectable). Évite les fuites de mémoire pour stocker des métadonnées sur des objets DOM.", "Cache.", "Session."],
        correctAnswer: 1,
        explanation: "Si la clé (objet DOM) est supprimée, la valeur dans la WeakMap est automatiquement nettoyée par le GC."
      },
      {
        id: 'front_t4_3',
        tier: 4,
        text: "Web : Service Worker Lifecycle ?",
        options: ["Simple.", "Install -> Activate -> Fetch/Message. Il agit comme un proxy réseau programmable (Offline, Cache).", "Background.", "Thread."],
        correctAnswer: 1,
        explanation: "C'est le cœur des PWA. Attention : la mise à jour du SW est complexe (waiting phase)."
      },
      {
        id: 'front_t4_4',
        tier: 4,
        text: "CSS : `will-change` property ?",
        options: ["Futur.", "Indique au navigateur qu'un élément va changer (ex: transform), lui permettant de créer une couche GPU (Compositing Layer) à l'avance.", "Animation.", "Variable."],
        correctAnswer: 1,
        explanation: "Optimisation ultime pour le 60fps. À utiliser avec parcimonie sinon la VRAM explose."
      },
      {
        id: 'front_t4_5',
        tier: 4,
        text: "Vue 3 : Teleport ?",
        options: ["Science-fiction.", "Permet de rendre un composant enfant dans un autre endroit du DOM (ex: `<body>`), hors de la hiérarchie du composant parent (utile pour Modales/Tooltips).", "Portal.", "Routeur."],
        correctAnswer: 1,
        explanation: "Évite les problèmes de `overflow: hidden` ou `z-index` du parent qui coupent ta modale."
      },
      {
        id: 'front_t4_6',
        tier: 4,
        text: "JS : Generateurs (`function*`) ?",
        options: ["Usines.", "Fonctions qui peuvent être mises en pause (`yield`) et reprises. Base de `async/await`.", "Thread.", "Boucle."],
        correctAnswer: 1,
        explanation: "Permet de créer des itérateurs custom ou de gérer des flux de contrôle asynchrones complexes."
      },

      // =================================================================================
      // BATCH 7: BACKEND, SECURITY & INTEGRATION (New Injection)
      // =================================================================================
      {
        id: 'back_t1_1',
        tier: 1,
        text: "API : Pagination Offset ?",
        options: ["Cursor.", "`LIMIT 10 OFFSET 20`. Simple mais lent sur les grandes tables (la DB scanne et jette les lignes).", "Rapide.", "Complexe."],
        correctAnswer: 1,
        explanation: "Plus tu vas loin (`OFFSET 1000000`), plus c'est lent. Préfère la pagination par Curseur (`WHERE id > last_id`)."
      },
      {
        id: 'back_t1_2',
        tier: 1,
        text: "Security : Hachage de mot de passe ?",
        options: ["MD5.", "Utiliser un algo lent et salé (Argon2, bcrypt, PBKDF2). Jamais MD5 ou SHA1 (trop rapides).", "SHA-256.", "Texte clair."],
        correctAnswer: 1,
        explanation: "Un hash rapide aide les hackers (Brute-force). Un hash lent (100ms) rend l'attaque impossible."
      },
      {
        id: 'back_t1_3',
        tier: 1,
        text: "Backend : Cron Job ?",
        options: ["Temps.", "Tâche planifiée qui s'exécute automatiquement à intervalles réguliers (ex: cleanup logs minuit).", "Serveur web.", "Base de données."],
        correctAnswer: 1,
        explanation: "Le réveil-matin de ton serveur."
      },
      {
        id: 'back_t2_1',
        tier: 2,
        text: "API : Versioning URI vs Header ?",
        options: ["Pareil.", "URI (`/v1/users`) est explicite et cacheable. Header (`Accept: v1`) est plus RESTful (Content Negotiation) mais dur à tester.", "Header est mieux.", "URI est déprécié."],
        correctAnswer: 1,
        explanation: "L'URI est le choix pragmatique standard. Le Header est le choix puriste."
      },
      {
        id: 'back_t2_2',
        tier: 2,
        text: "Integration : Webhooks ?",
        options: ["Hameçon.", "Le serveur appelle TON url (HTTP POST) quand un événement survient (Push). Évite le Polling (Pull).", "Polling.", "Socket."],
        correctAnswer: 1,
        explanation: "Au lieu de demander 'C'est prêt ?' toutes les secondes, Stripe t'appelle pour dire 'Paiement reçu'."
      },
      {
        id: 'back_t2_3',
        tier: 2,
        text: "Security : Salt (Sel) ?",
        options: ["Cuisine.", "Donnée aléatoire ajoutée au mot de passe avant hachage pour empêcher les attaques par Rainbow Tables.", "Poivre.", "Sucre."],
        correctAnswer: 1,
        explanation: "Sans sel, deux utilisateurs avec le mot de passe '123456' auraient le même hash."
      },
      {
        id: 'back_t2_4',
        tier: 2,
        text: "Performance : Gzip/Brotli ?",
        options: ["Images.", "Algorithmes de compression pour réduire la taille des réponses HTTP (HTML/CSS/JS/JSON) avant envoi.", "Cryptage.", "Base de données."],
        correctAnswer: 1,
        explanation: "Réduit la bande passante de 70%. Indispensable."
      },
      {
        id: 'back_t3_1',
        tier: 3,
        text: "API : HATEOAS ?",
        options: ["Haine.", "Hypermedia As The Engine Of Application State. L'API renvoie des liens (`_links`) pour guider le client vers les actions possibles.", "JSON.", "XML."],
        correctAnswer: 1,
        explanation: "Le niveau 3 de REST. Le client n'a pas besoin de connaître les URL à l'avance, il suit les liens."
      },
      {
        id: 'back_t3_2',
        tier: 3,
        text: "Security : RBAC vs ABAC ?",
        options: ["Pareil.", "RBAC (Role Based) : Accès selon le Rôle (Admin). ABAC (Attribute Based) : Accès selon des attributs complexes (Heure, Dept, Propriétaire).", "ABAC est plus simple.", "RBAC est obsolète."],
        correctAnswer: 1,
        explanation: "RBAC : 'Les managers peuvent valider'. ABAC : 'Les managers peuvent valider SI montant < 1000€ ET heure < 18h'."
      },
      {
        id: 'back_t3_3',
        tier: 3,
        text: "Integration : RabbitMQ vs Kafka ?",
        options: ["Pareil.", "RabbitMQ = Smart Broker, Dumb Consumer (Queue classique). Kafka = Dumb Broker, Smart Consumer (Log stream, replayable).", "Kafka est une queue.", "RabbitMQ est un log."],
        correctAnswer: 1,
        explanation: "RabbitMQ : Le message disparaît après lecture. Kafka : Le message reste (rétention), on peut le relire."
      },
      {
        id: 'back_t3_4',
        tier: 3,
        text: "gRPC vs REST ?",
        options: ["Google.", "gRPC utilise Protobuf (binaire, typé, contrat strict) sur HTTP/2. Plus performant que REST (JSON/Texte).", "REST est binaire.", "gRPC est JSON."],
        correctAnswer: 1,
        explanation: "Idéal pour la communication inter-microservices (Backend-to-Backend) à haute performance."
      },
      {
        id: 'back_t3_5',
        tier: 3,
        text: "Performance : Cache 'Write-Through' ?",
        options: ["Écrire à travers.", "On écrit en Cache ET en DB simultanément. Lecture rapide, écriture un peu plus lente, cohérence forte.", "Write-Back.", "Cache Aside."],
        correctAnswer: 1,
        explanation: "Garantit que le cache n'est jamais périmé par rapport à la DB."
      },
      {
        id: 'back_t4_1',
        tier: 4,
        text: "Security : OpenID Connect (OIDC) vs OAuth2 ?",
        options: ["Pareil.", "OAuth2 est pour l'AUTORISATION (Accès API). OIDC est une couche sur OAuth2 pour l'AUTHENTIFICATION (Identité User).", "OIDC est vieux.", "OAuth2 identifie."],
        correctAnswer: 1,
        explanation: "OAuth2 te donne une clé pour ouvrir la porte. OIDC te donne un badge avec ton nom et ta photo (`id_token`)."
      },
      {
        id: 'back_t4_2',
        tier: 4,
        text: "Security : JWT 'None' Algorithm Attack ?",
        options: ["Rien.", "Si le serveur ne vérifie pas l'algo, un hacker peut envoyer un token avec `alg: none` et une fausse signature, et être accepté.", "Pas grave.", "Feature."],
        correctAnswer: 1,
        explanation: "Faille historique critique. Toujours whitelister les algos acceptés (HS256, RS256)."
      },
      {
        id: 'back_t4_3',
        tier: 4,
        text: "Integration : Protobuf (Protocol Buffers) ?",
        options: ["Buffer.", "Format de sérialisation binaire de Google. Schéma strict (.proto), plus compact et rapide que JSON.", "Texte.", "Obsolète."],
        correctAnswer: 1,
        explanation: "Pas de noms de champs dans le payload ('name': 'Bob'), juste des IDs (1: 'Bob'). Gain de taille énorme."
      },
      {
        id: 'back_t4_4',
        tier: 4,
        text: "API : Idempotency Key implementation ?",
        options: ["Clé.", "Stocker la clé (UUID) envoyée par le client avec la réponse. Si la clé revient, renvoyer la réponse stockée SANS retraiter.", "Cookie.", "Header."],
        correctAnswer: 1,
        explanation: "Assure que 'Payer' n'est exécuté qu'une seule fois même si le réseau coupe."
      },
      {
        id: 'back_t4_5',
        tier: 4,
        text: "Performance : HTTP Keep-Alive ?",
        options: ["Vivant.", "Garder la connexion TCP ouverte pour envoyer plusieurs requêtes HTTP successives, évitant le coût du handshake à chaque fois.", "Timeout.", "Ping."],
        correctAnswer: 1,
        explanation: "Défaut en HTTP/1.1. Vital pour la perf."
      },

      // =================================================================================
      // BATCH 8: GENERAL KNOWLEDGE, TESTING & METHODOLOGIES (New Injection)
      // =================================================================================
      {
        id: 'gen_t1_1',
        tier: 1,
        text: "Testing : Unit Test (Test Unitaire) ?",
        options: ["Test tout.", "Tester une petite unité de code (fonction/classe) de manière isolée, sans dépendances externes (DB/Réseau).", "Test manuel.", "Test UI."],
        correctAnswer: 1,
        explanation: "Rapide, fiable, précis. La base de la pyramide de tests."
      },
      {
        id: 'gen_t1_2',
        tier: 1,
        text: "Methodology : Agile Manifesto valeur clé ?",
        options: ["Documentation > Code.", "Individus et interactions > Processus et outils.", "Plans > Changement.", "Contrats > Collaboration."],
        correctAnswer: 1,
        explanation: "L'humain d'abord. Les outils sont là pour aider, pas pour contraindre."
      },
      {
        id: 'gen_t1_3',
        tier: 1,
        text: "General : UTF-8 ?",
        options: ["8 bits.", "Encodage de caractères à longueur variable (1 à 4 octets) capable de représenter tous les caractères Unicode (Emojis inclus).", "ASCII.", "Compression."],
        correctAnswer: 1,
        explanation: "Le standard du web. ASCII ne gère que l'anglais."
      },
      {
        id: 'gen_t1_4',
        tier: 1,
        text: "Testing : Assert ?",
        options: ["Certifier.", "Instruction qui vérifie qu'une condition est vraie. Si faux, le test échoue.", "Insérer.", "Commentaire."],
        correctAnswer: 1,
        explanation: "`assertEquals(2, 1+1)`."
      },
      {
        id: 'gen_t2_1',
        tier: 2,
        text: "Testing : Mock vs Stub ?",
        options: ["Pareil.", "Stub : Objet bouchon qui renvoie des données pré-définies. Mock : Objet qui vérifie COMMENT il a été appelé (interaction).", "Mock est réel.", "Stub vérifie."],
        correctAnswer: 1,
        explanation: "Stub : 'Si on t'appelle, réponds X'. Mock : 'Vérifie qu'on t'a appelé avec l'argument Y'."
      },
      {
        id: 'gen_t2_2',
        tier: 2,
        text: "Methodology : TDD (Test Driven Development) cycle ?",
        options: ["Code -> Test -> Refactor.", "Red (Fail) -> Green (Pass) -> Refactor.", "Refactor -> Test -> Code.", "Test -> Deploy."],
        correctAnswer: 1,
        explanation: "Tu écris le test AVANT le code. Ça force à concevoir l'API avant l'implémentation."
      },
      {
        id: 'gen_t2_3',
        tier: 2,
        text: "CS : Stack vs Heap memory ?",
        options: ["Pareil.", "Stack : Mémoire statique rapide (variables locales, appels fonctions). Heap : Mémoire dynamique (objets `new`) gérée par le GC.", "Heap est rapide.", "Stack est gros."],
        correctAnswer: 1,
        explanation: "Stack Overflow arrive quand la pile d'appels est pleine. OutOfMemoryError arrive quand le Heap est plein."
      },
      {
        id: 'gen_t2_4',
        tier: 2,
        text: "General : Rubber Duck Debugging ?",
        options: ["Jouet.", "Expliquer son code ligne par ligne à un objet inanimé (canard) pour trouver le bug soi-même.", "Outil.", "Insulte."],
        correctAnswer: 1,
        explanation: "Le simple fait de verbaliser le problème active des zones différentes du cerveau."
      },
      {
        id: 'gen_t2_5',
        tier: 2,
        text: "Methodology : Code Review but principal ?",
        options: ["Trouver des bugs.", "Partager la connaissance, assurer la qualité/maintenabilité et trouver des bugs. (Dans cet ordre).", "Critiquer.", "Ralentir."],
        correctAnswer: 1,
        explanation: "Si seul l'auteur comprend le code, c'est un échec (Bus Factor = 1)."
      },
      {
        id: 'gen_t3_1',
        tier: 3,
        text: "Testing : E2E (End-to-End) ?",
        options: ["Test fin.", "Tester le parcours utilisateur complet sur l'application déployée (Cypress/Playwright), comme un vrai user.", "Test unitaire.", "Test API."],
        correctAnswer: 1,
        explanation: "Lent et fragile (Flaky), mais c'est le seul qui garantit que 'ça marche vraiment'."
      },
      {
        id: 'gen_t3_2',
        tier: 3,
        text: "Methodology : Technical Debt (Dette Technique) ?",
        options: ["Argent.", "Coût implicite d'une solution rapide/sale maintenant vs une solution propre. Les 'intérêts' se paient en maintenance plus difficile.", "Crédit.", "Bug."],
        correctAnswer: 1,
        explanation: "Parfois nécessaire pour aller vite, mais doit être remboursée (refactoring) sinon le projet gèle."
      },
      {
        id: 'gen_t3_3',
        tier: 3,
        text: "CS : Floating Point Math (0.1 + 0.2) ?",
        options: ["0.3", "0.30000000000000004", "Erreur.", "0.33"],
        correctAnswer: 1,
        explanation: "IEEE 754. Les ordinateurs comptent en base 2, et 0.1 est périodique en binaire (comme 1/3 en décimal). Ne jamais utiliser float pour l'argent !"
      },
      {
        id: 'gen_t3_4',
        tier: 3,
        text: "Testing : Integration Test ?",
        options: ["Intégrale.", "Vérifier que plusieurs modules (ou Services/DB) fonctionnent correctement ENSEMBLE.", "Test unitaire.", "Test manuel."],
        correctAnswer: 1,
        explanation: "Les unitaires passent, mais la connexion DB échoue ? C'est l'intégration qui le détecte."
      },
      {
        id: 'gen_t3_5',
        tier: 3,
        text: "General : Bus Factor ?",
        options: ["Transport.", "Nombre de membres de l'équipe qui doivent se faire écraser par un bus pour que le projet s'arrête (Connaissance unique).", "Vitesse.", "Budget."],
        correctAnswer: 1,
        explanation: "Vise un Bus Factor élevé. Tout le monde doit pouvoir reprendre le travail de tout le monde."
      },
      {
        id: 'gen_t4_1',
        tier: 4,
        text: "Testing : Property Based Testing (QuickCheck) ?",
        options: ["Immobilier.", "Au lieu d'exemples (1+1=2), définir des PROPRIÉTÉS (x+y = y+x) et laisser le framework générer 1000 cas de tests aléatoires (dont edge cases).", "Mock.", "Unit."],
        correctAnswer: 1,
        explanation: "Trouve des bugs impossibles à imaginer humainement."
      },
      {
        id: 'gen_t4_2',
        tier: 4,
        text: "Testing : Mutation Testing ?",
        options: ["X-Men.", "Modifier (muter) le code source (ex: `a > b` devient `a >= b`) et vérifier si les tests échouent (tuent le mutant).", "Test ADN.", "Performance."],
        correctAnswer: 1,
        explanation: "Vérifie la QUALITÉ de tes tests. Si tes tests passent quand on inverse une condition dans le code, tes tests sont inutiles."
      },
      {
        id: 'gen_t4_3',
        tier: 4,
        text: "CS : Compile vs Interpret ?",
        options: ["Pareil.", "Compilé : Code -> Machine Code (binaire) avant exécution (C++). Interprété : Code -> Exécuté ligne par ligne par une VM/Moteur (Python/JS).", "Java est pur interprété.", "C++ est interprété."],
        correctAnswer: 1,
        explanation: "Note : Java/JS utilisent le JIT (Just-In-Time) qui est un hybride."
      },
      {
        id: 'gen_t4_4',
        tier: 4,
        text: "Methodology : Broken Windows Theory ?",
        options: ["OS.", "Si on laisse du mauvais code (vitre cassée) sans le réparer, cela encourage le laisser-aller et la qualité globale s'effondre rapidement.", "Microsoft.", "Linux."],
        correctAnswer: 1,
        explanation: "Répare les petites erreurs tout de suite. Boy Scout Rule : 'Laisse le camp plus propre que tu ne l'as trouvé'."
      },
      {
        id: 'gen_t4_5',
        tier: 4,
        text: "CS : Little Endian vs Big Endian ?",
        options: ["Taille.", "Ordre des octets en mémoire. Big : Octet de poids fort en premier (comme nous). Little : Poids faible en premier (Intel x86).", "Fin.", "Début."],
        correctAnswer: 1,
        explanation: "Crucial quand on lit du binaire ou fait du réseau."
      }
    ]
  }
};

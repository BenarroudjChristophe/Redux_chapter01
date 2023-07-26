# React Context

## Un solution de Gestion de State Global / Global State Management 


(il en existe d'autres comme Redux, ou VueX pour Vue)

-> 1 state global partagé (data store) au sein de toute l'application et accessible par tous les composants

!! Data store = Global state

## Eléments du context

- context = createContext

- state disponible pour TOUS composants SANS props

### Provider

- entourer les composants ou l'App entière, pour leur donner accès au context = l'App devient un "children" qui sera retourné par le provider, donc le provider devient le parent de l'APP

- diffuser le state et le dispatch => on enregistre ce que notre Provider peut fournir à nos composants via la prop "value" qui prend comme valeur un objet qui contient le state et le dispatch/les méthodes de mutation du state

- tout ce que je met dans la prop "value" sera disponible dans mes composants

### useContext

- hook

- pour avoir accès à la value de mon provider dans les composants => la value contiendra le state et les méthodes mutatrices

### Reducer

- définit les méthodes mutatrices du state et contient la logique de mutation pour chaque méthode (via un switch)

- choisi l'action à éxécuter selon son type (action.type) => le type de l'action est défini dans l'objet "action" que va recevoir comme paramètre le reducer

- reçoit 2 paramètres =>  (state : l'état actuel, action : object action {type, payload?})

### Object action

- {type, payload} => type = le nom de l'action à effectuer, payload => optionnel, donnée transmise via l'action

### Dispatch(action)

- communiquer mes intentions au Context => intentions = object "action"

- appeler le reducer en lui passant le state actuel ET l'objet "action"

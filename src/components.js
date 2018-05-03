export default (editor, config = {}) => {
  const domc = editor.DomComponents;
  const defaultType = domc.getType('default');
  const defaultModel = defaultType.model;
  const defaultView = defaultType.view;



  // The `input` will be the Component type ID
domc.addType('canvas', {
  // Define the Model
  model: defaultModel.extend({
    // Extend default properties
    defaults: Object.assign({}, defaultModel.prototype.defaults, {
      // Can be dropped only inside `form` elements
      // draggable: 'div, div*',
      // // Can't drop other elements inside it
      // droppable: false,
      // Traits (Settings)
      // traits: ['name', 'placeholder', {
      //     // Change the type of the input (text, password, email, etc.)
      //     type: 'select',
      //     label: 'Type',
      //     name: 'type',
      //     options: inputTypes,
      //   },{
      //     // Can make it required for the form
      //     type: 'checkbox',
      //     label: 'Required',
      //     name: 'required',
      // }],
    }),
  },
  // The second argument of .extend are static methods and we'll put inside our
  // isComponent() method. As you're putting a new Component type on top of the stack,
  // not declaring isComponent() might probably break stuff, especially if you extend
  // the default one.
  {
    isComponent: function(el) {
      if(el.tagName == 'CANVAS'){
        return {type: 'canvas'};
      }
    },
  }),

  // Define the View
  view: defaultType.view.extend({
    init() {
         this.listenTo(this.model, 'active', this.doStuff); // listen for active event
       },
       doStuff() {alert(2);}


  }),
});
  // ...
}

// Components can be defined as simple Classes. We'll cover methods later on.
// Right now, I'm just going to keep it empty.
class HelloWorld {}

// `name` helps us reference the component in our template. With this name, we
// can do in our HTML:
//
// <view is="hello-world"/>
//
// And this component will show up!
HelloWorld.prototype.name = 'hello-world'

// `view` tells Derby where the template for this component lives
HelloWorld.prototype.view = __dirname

module.exports = HelloWorld
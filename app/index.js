import {addToDom} from './helpers';
import add from './add';
import SuperPerson from './person';

addToDom('<hr>');

const frank = new SuperPerson('frank-sinatra', 'Frank');
const bobby = new SuperPerson('bobbyfrank', 'Bobby');

addToDom(frank.speak('Hello'));

addToDom(bobby.speak('Sup Frank?!'));

addToDom(bobby.sayHeroName());
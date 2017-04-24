/**
 * Address list component.
 * Created on 04/23/2017 by Andrew Wilson
 *-- sets values for props for index.js
 * These props are then used on Address.js for initial State and setState function
 */

const unknown = 'unknown';
const addresses = [
    {
        firstName: unknown,
        lastName: unknown,
        streetAdr: unknown,
        city: unknown,
        usState:unknown,
        zip: unknown,
        phone: unknown
    },

    {
        firstName: "Suzan",
        lastName: "DelBene",
        streetAdr: "22121 17th Ave SE #220",
        city: "Bothell",
        usState: "WA",
        zip: "98021",
        phone: "(425)485-0085"
    }
];


export default addresses;

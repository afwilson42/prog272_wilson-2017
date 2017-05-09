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
        phone: unknown,
        web: unknown
    },

    {
        firstName: "Suzan",
        lastName: "DelBene",
        streetAdr: "22121 17th Ave SE #220",
        city: "Bothell",
        usState: "WA",
        zip: "98021",
        phone: "(425)485-0085",
        web: "https://delbene.house.gov/"
    },
    {
        firstName: 'Lamar',
        lastName: 'Alexander',
        streetAdr: '455 Dirksen Senate Office Building',
        city: 'Washington',
        usState:'TN',
        zip: '20510',
        phone: '202-224-4944',
        web: 'https://www.govtrack.us/congress/members/lamar_alexander/300002'
    },

    {
        firstName: 'Roger',
        lastName: 'Wicker',
        streetAdr: '555 Dirksen Senate Office Building',
        city: 'Washington',
        usState:'MS',
        zip: '20510',
        phone: '202-224-6253',
        web: 'https://www.govtrack.us/congress/members/roger_wicker/400432'
    },

    {
        firstName: 'Timothy',
        lastName: 'Kaine',
        streetAdr: '231 Russell Senate Office Building',
        city: 'Washington',
        usState:'VA',
        zip: '20510',
        phone: '202-224-4024',
        web: 'https://www.govtrack.us/congress/members/timothy_kaine/412582'
    }
];

export default addresses;

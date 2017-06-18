# Final

Review of the Final Projects.

## General Comments

You had a great quarter and performed near the top of the class. You demonstrated knowledge of:

- Linux basics
- Git and branches
- Parsing and working with JSON data stored in arrays and objects.
- React
- React Native
- Heroku
- Test Driven Development
- Rest calls to a server (**CongressAddress** and/or **CongressNative** talks to **CongressServer**)
- Database connectivity with Mongo DB

You are a good student who had a successful quarter.


## Core Programs

- CongressAddress runs and works
- CongressServer runs and works
- CongressNative loads and gets data from the database: Lamar.
- Heroku runs and works as expected.

## Data

- CongressAddress does talk to CongressServer
- CongressServer does talk correctly to MongoDb  
- Congress Address looks good on the phone. If we had more time we could tweak it some, but this is a good start.
- LocalStorage does work and can be refreshed
- Edit Data
  - Does work.

Overall, this is great work.

## Heroku

This loaded smoothly and works properly.

## React Native

This works beautifully

## Testing

This isn't fair to you, as you have done great work with testing earlier in the quarter. But this is what I see.

```
Test Suites: 5 failed, 1 passed, 6 total
Tests:       35 failed, 3 skipped, 8 passed, 46 total
```

## Other

You don't need this, but I include it for others.

My **OnNameChange**, for handling edits, ended up looking like this:

```javascript
onNameChange(event) {
    logger.log('on name change');
    const address = getByIndex(this.state.addressIndex);
    switch (event.target.id) {
        case 'elfFN':
            address.firstName = event.target.value;
            break;
        case 'elfLN':
            address.lastName = event.target.value;
            break;
        default:
            address.zip = 'OH NO BAD CASE';
    }
    saveByIndex(address, this.state.addressIndex);
    this.setState({
        address: address
    });
};
```

The code shown above is incomplete in that it only handles first and last names, but it does handle the first and last names correctly.

This code from **DataMaven** is the client side code that allowed me to save the changes to the server:

```javascript
dbAddressSave() {
    const address = getByIndex(this.state.addressIndex);
    const url = '/update' +
        '?id=' + address._id +
        '&address=' + JSON.stringify(address);
    fetch(url)
        .then((data) => data.json())
        .then(function(data) {
            logger.log(JSON.stringify(data, null, 4));
        }).catch(function(err) {
            const message = 'Either could not insert ' +
                'data or could not display ' +
                'results after inserting data\n';
            alert(message + err);
            logger.log(err);
        });
}
```

## Summary

Assignments 98.41
Midterm: 102
Final: 99
Participation: 100
Total: 99.8112

That's an A for the quarter.

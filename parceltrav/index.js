//const jokes = require('./jokes')
import { jokes } from './jokes';
import $ from 'jQuery';
import fs from 'fs';

jokes.getOne()
.then(joke => {
    //document.getElementById('joke').innerHTML = joke;
    $('#joke').text(joke);
});

const copy = fs.readFileSync(__dirname + '/copyright.txt', 'utf8');

$('#copy').text(copy);
let songs =['Alive','Dead','Blackbird','Friday','On the Rocks'];

let paragraph;
for(let i = 0; i< songs.length; i++){
    paragraph = document.createElement('p');
    paragraph.setAttribute('id',`song${i}`);
    paragraphText = document.createTextNode(songs[i]);
    paragraph.appendChild(paragraphText);
    document.getElementById('container').appendChild(paragraph);
}

// let songs =['Alive','Dead','Blackbird','Friday','On the Rocks'];

let ul = document.createElement('ul');
for(let i = 0; i< songs.length; i++){
    li = document.createElement('li');
    li.setAttribute('id',`song${i}`);
    liText = document.createTextNode(songs[i]);
    li.appendChild(liText);
    ul.appendChild(li);
}
document.getElementById('container').appendChild(ul);
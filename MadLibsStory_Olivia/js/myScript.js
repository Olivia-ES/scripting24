console.log("test");

function write(){
    console.log("write function testing");

    var adj1 = document.getElementById('adjective1').value;
    var adj2 = document.getElementById('adjective2').value;
    var adj3 = document.getElementById('adjective3').value;
    var adj4 = document.getElementById('adjective4').value;

    var name1 = document.getElementById('name1').value;
    var name2 = document.getElementById('name2').value;
    var name3 = document.getElementById('name3').value;

    var verb1 = document.getElementById('verb1').value;
    var verb2 = document.getElementById('verb2').value;

    var colour = document.getElementById('colour').value;
     
    var job = document.querySelector('input[name="job"]:checked').value;

    console.log(adj1);
    console.log(adj2);
    console.log(adj3);
    console.log(adj4);

    console.log(name1);
    console.log(name2);
    console.log(name3);

    console.log(verb1);
    console.log(verb2);


    console.log(colour);
     
    console.log(jobMessage);

    var jobMessage;

    if(job=="baker"){
        jobMessage = "a baker."
    }else if(job=="merchant"){
        jobMessage = "a merchant."
    }else if(job=="alchemist"){
        jobMessage = "a alchemist."
    }else if(job=="bard"){
        jobMessage = "a bard."
    }
    
   

    document.getElementById('output').innerHTML = "One "+adj1+" morning in the "+adj2+" village of "+name1+" a new day has started. "+name2+" awoke to commence with their daily morning routine, they "+verb1+" to the bathroom. After they are done freshening up they put on a "+colour+" set of overalls. "+name2+" heads outside to the village square, it is a very "+adj3+" day. "+name2+" feels a sense of security in this peaceful repetition of the previous days. After taking in a breath of fresh air "+name2+" walks to the nearest food stand. The smell of "+name3+" fills their nose as they purchase the usual. Glancing over the "+adj4+" buildings of "+name1+" they "+verb2+" to work.They work as "+jobMessage;

}
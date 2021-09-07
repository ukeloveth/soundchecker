//alert('hello');
//Given a word
let givenWord = [
    Bastion
]
function soundcheck(givenWord){
    const givenarr = givenWord.split("");
    obj ={

        vowel: [],
        consonant :[]
    }
    for(let j=0;j<givenarr.length;i++){
        let sound = givenarr[j].toLowerCase()
        if(sound =="a" || sound == "e" || sound == "i" || sound =="o" || sound == "u"){
            obj.vowel.push(sound)
        }
        else{
            obj.consonant.push(lower)
        }
    }
    return obj
}
word=[Bastion]
console.log(soundcheck("word"))
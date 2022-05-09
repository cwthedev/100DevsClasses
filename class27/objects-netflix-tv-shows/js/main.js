//Create a Netflix TV Show class with a constructor that makes Netflix TV Shows with 4 properties and 3 methods


class MakeNetflixShow{
    constructor(name, cast, intro, numEpisodes){
        this.name = name;
        this.cast = cast;
        this.intro = intro;
        this.numEpisodes =numEpisodes;
    }
    record(){
        console.log('ready on set!')
    }
    renew(){
        console.log('on to the next season')
    }
    cancel(){
        console.log('you jumped the shark')
    }
}
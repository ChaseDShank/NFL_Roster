function PlayersController(){
    var loading = true; //Start the spinner
    var apiUrl = "http://api.cbssports.com/fantasy/players/list?version=3.0&SPORT=football&response_format=json";
    var playerService = new PlayersService(ready);
    
    function ready(playersData){
        loading = false; //stop the spinner
        // updateRoster(playersData)
        // console.log(updateRoster)
        
        //Now that all of our player data is back we can safely setup our bindings for the rest of the view.
        
        $('some-button').on('click',function(){
                var teamSF = playerService.getPlayersByTeam("SF");
            })
        }
        
        
        function drawPlayers(){

        }
}
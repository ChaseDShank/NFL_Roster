function PlayersController(){
    var apiUrl = "http://api.cbssports.com/fantasy/players/list?version=3.0&SPORT=football&response_format=json";
    var playerService = new PlayersService(ready);
    
    function ready(playersData){
    

        $('some-button').on('click',function(){
                var teamSF = playerService.getPlayersByTeam("SF");
            })
        }
        
        
        function drawPlayers(){
            var template = ''
            var players = 
            for(var i = 0; i < playersData.length; i++){
            var player = playersData[i];
                var template += 
                `
            <div class="col-md-3 col-xs-6 col-sm-4">
            <div class="panel panel-info">
                <div class="panel-head"${player.name}</h2>
                    <h3 name='position'>${player.postition}</h3>
                    <h4 name='team'>${player.team}</h4>
                </div>
                <div class="panel-body thumbnail">
                    <img src="${player.img}" class="img-responsive">
                </div>
                <div class="panel-footer text-center">
                    <button class="btn-primary" type="button">Add to Roster</button>
                </div>
            </div>
        </div>
            
            `
            }
        }


}
const templates = { 
        about: `<div id= "about" 
        class="collapse">
        
        <div class = "section">
        <h2>Mission</h2>
        <P>To support young athletes living in Chicago's northside neighborhoods, 
        who have an interest in learning and playing soccer, with opportunities to learn and practice skills related 
        to the game of soccer, specifically those skills around team cooperation and good sportsmanship.</p>
        <h2>Vision</h2>
        <p>The Northside Youth Soccer League aspires to develop strong, well-rounded, and mindful athletes through the building of character, 
        self-discipline, and leadership.</p>
        
        <h2>General Information</h2>
        <p>The Northside Youth Soccer League was established in 1996 to provide athletes residing in Chicago's 
        northside neighborhoods an environment in which to learn and play soccer. To be a member of NYSL, you must be between 
        the ages of 4 - 12 and reside in a Chicago northside neighborhood. NYSL is run by a small full-time staff, 
        and relies on the generous volunteer time of parents and previous league members.</p>
        </div>
        </div>`,

        home: ` <div id="home">

        <!-- Navigation -->
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
          <div class="container">
          <img src="images/nysl_logo_1.png" alt="logo-header" id="logoHeader">
            <a class="navbar-brand" href="#">Northside Young Soccer Ligue</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarResponsive">
              <ul class="navbar-nav ml-auto">
              </template>
                                <template v-else>
                <li class="nav-item active">
                <a class="nav-link" @click="view = 'home'">Home
                    <span class="sr-only">(current)</span>
                  </a>
                </li>
                <li class="nav-item">
                <a class="nav-link" @click="view = 'schedule'">Schedule</a>
                </li>
                <li class="nav-item">
                <a class="nav-link" @click="view = 'contact'">Contact</a>
                </li>
                <li class="nav-item">
                <a class="nav-link" @click="view = 'forum'">Forum</a></li>
                </li>
              </ul>
              <component :is="view" :user = "guest"></component>
                            </template>
                            </main>
            </div>
          </div>
        </nav>
        
        <h3>Upcoming Events<span class="title-background1"></span></h3>
        <header>
                    <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
                      <ol class="carousel-indicators">
                        <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                      </ol>
                      <div class="carousel-inner" role="listbox">
                        <!-- Slide One - Set the background image for this slide in the line below -->
                        <div class="carousel-item active"> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2969.654060426155!2d-87.63123908514262!3d41.90029637200488!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880fd34e07f6bac3%3A0x68a82e5d59952c86!2s24%20W%20Walton%20St%2C%20Chicago%2C%20IL%2060610%2C%20EE.%20UU.!5e0!3m2!1ses!2sar!4v1576451238433!5m2!1ses!2sar" width="600" height="450" frameborder="0" style="border:0;" allowfullscreen=""></iframe>
                          <div class="carousel-caption d-none d-md-block">
                            <h3 class="display-4">Marjorie P Hart</h3>
                            <p class="lead">2625 N. Orchard St., Chicago, IL 60614</p>
                          </div>
                        </div>
                        <!-- Slide Two - Set the background image for this slide in the line below -->
                        <div class="carousel-item" style="background-image: url('https://i0.wp.com/images-prod.healthline.com/hlcmsresource/images/News/childrens-health/082616_childsports_THUMB_LARGE.jpg?w=1155')">
                          <div class="carousel-caption d-none d-md-block">
                            <h3 class="display-4">NYSL</h3>
                            <p class="lead"></p>
                          </div>
                        </div>
                        <!-- Slide Three - Set the background image for this slide in the line below -->
                        <div class="carousel-item" style="background-image: url('https://activeforlife.com/content/uploads/2013/04/young-soccer-players.jpg')">
                          <div class="carousel-caption d-none d-md-block">
                            <h3 class="display-4">Training</h3>
                            <p class="lead">.</p>
                          </div>
                        </div>
                      </div>
                      <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev" >
                            <span class="carousel-control-prev-icon" aria-hidden="true" style= "background-color: black"></span>
                            <span class="sr-only" >Previous</span>
                          </a>
                      <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                            <span class="carousel-control-next-icon" aria-hidden="true" style= "background-color: black"></span>
                            <span class="sr-only">Next</span>
                          </a>
                    </div>
                  </header>
                  
                  <!-- Page Content -->
                  <section class="py-5">
                    <div class="container">
                      <h1 class="font-weight-light">NYSL</h1>
                      <p class="lead"><a href=""></a>!</p>
                    </div>
                  </section>
                <div class="card-deck mb-5">
                <div class="card bg-white rounded shadow">
                <img class="card-img-top" src="images/Soccer for kids.jpg" alt="Card image cap">
                <div class="card-body">
                <h5 class="card-title">December 14</h5>
                <p class="card-text">NYSL</p>
                <p class="card-text">
                </p>
                </div>
                </div>
                <div class="card bg-white rounded shadow">
                <img class="card-img-top" src="images/White and Black Soccer Ball on Side of Green Grass….jpg" alt="Card image cap">
                <div class="card-body">
                <h5 class="card-title">December 08</h5>
                <p class="card-text">Season Kick-off: Meet the Teams</p>
                </div>
                </div>
                <div class="card bg-white rounded shadow">
                <img class="card-img-top" src="images/genMid.09400371_1.jpg" alt="Card image cap">
                <div class="card-body">
                <h5 class="card-title">December 10</h5>
                <p class="card-text">First Game of the Season (Check Game Schedule for details)</p>
                </div>
                </div>

                </div>
                </div>`,
                
    schedule:`<div id="schedule">
            <template v-if="showInfo">
                <button type="button" class="btn btn-danger" @click="showInfo">Back</button>
                <match-info :match="match" :user="user"></match-info>
                </template>
                <template v-else>
                <ul>
                <li v-for="match in matches">
                <div class="card">
                <div class="card-title">{{match.title}}</div>
                <div class="card-body">
                <h5 class="card-title">{{match.date}}          {{match.hour}} </h5>
                <p class="card-text">{{match.location}}</p>
                <button class="btn btn-warning" type="button" data-toggle="collapse" data-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">{{match.location}}
                </button>
                <div class="collapse" id="collapseExample">
                <div class="card card-body">
                <table id="tabla-partidos" class="table table-hover">
                <tr>
                <td colspan= "3" class="p-3">
                <a href="https://fireflychat-c31f1.firebaseapp.com/" class="btn btn-primary">Go forum</a> 
                </td> 
                </tr>
                <tr>
                <td colspan= "9" class="p-9">
                <iframe width="100%" src= {{match.map}} class="border-0 rounded shadow"></iframe>
                </td>
                </tr>
                </div>
                </div>
                </li>
                    </ul>
                    </template>
                    
                    </div>`,
matchInfo: `<div>
	            			<div class="card">
	            				<p>{{match.team1}} vs {{match.team2}}</p>
	            				<p>{{match.date}} at {{match.hour}}</p>
	            				<p>{{match.location}}</p>	
	            			</div>
	            			<div class="forum">
	            				<div v-for="(value,key) in comments" class="commentBubble">
	            					<p>{{value.username}}:</p>
	            					<p>{{value.post}}</p>
	            				</div>
	            				<div>
	            					<input type="text" id="comment">
	            					<button @click="comment(match.id)">Comment</button>
	            				</div>
	            			</div>

            			</div>`,
    contact: `<div id ="contact">
            <div class="section">
            <h2><span>Contact Me</span></h2>
            <form action="mailto:jesusrosas2508@gmail.com" method="post" enctype="text/plain">
            <input name="name" placeholder="Name" type="text" required /><br/>
            <input name="email" placeholder="Email" type="email" required /><br/>
            <label for="jesusrosas2508@gmail.com"</label>
            <textarea name="message" placeholder="Message" required ></textarea>
            <input type="submit" value="SEND" class="submit" />
            </form>
            <div class= "container"
            <p>Additional Information: If deemed necessary by NYSL, games may be shortened or cancelled due to extreme weather conditions.</p>
            <p>Please direct all questions to: Michael Randall, League Coordinator</p>
            <p>Phone:(630) 690-8132</p>	
            <p>Email:michael.randall@chisoccer.org</p>
            </div>
            </div>
            </div>`,

    forum: `<div id = "forum">
            <div id="user-container">
            <div hidden id="user-pic"></div>
            <div hidden id="user-name"></div>
            <button hidden id="sign-out" class="mdl-button mdl-js-button mdl-js-ripple-effect mdl-color-text--white">
            Sign-out
            </button>
            <button hidden id="sign-in" class="mdl-button mdl-js-button mdl-js-ripple-effect mdl-color-text--white">
            <i class="material-icons">account_circle</i>Sign-in with Google
            </button>
            </div>
            <div class="mdl-layout__header mdl-color-text--white mdl-color">
            <div class="mdl-cell mdl-cell--12-col mdl-cell--12-col-tablet mdl-grid">
            <div class="mdl-layout__header-row mdl-cell mdl-cell--12-col mdl-cell--12-col-tablet mdl-cell--12-col-desktop">
            <h3><i class="material-icons">chat_bubble_outline</i> NYSL Chat</h3>
            </div>
            <div id="user-container">
            <div hidden id="user-pic"></div>
            <div hidden id="user-name"></div>
            <button hidden id="sign-out" class="mdl-button mdl-js-button mdl-js-ripple-effect mdl-color-text--white">
            Sign-out
            </button>
            <button hidden id="sign-in" class="mdl-button mdl-js-button mdl-js-ripple-effect mdl-color-text--white">
            <i class="material-icons">account_circle</i>Sign-in with Google
            </button>
            </div>
            </div>
            </div>
            <main class="mdl-layout__content mdl-color--grey-100">
            <div id="messages-card-container" class="mdl-cell mdl-cell--12-col mdl-grid">

            Messages container
            <div id="messages-card" class="mdl-card mdl-shadow--2dp mdl-cell mdl-cell--12-col mdl-cell--6-col-tablet mdl-cell--6-col-desktop">
            <div class="mdl-card__supporting-text mdl-color-text--grey-600">
            <div id="messages">
            </div>
            <form id="message-form" action="#">
              <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
              <input class="mdl-textfield__input" type="text" id="message" autocomplete="off">
              <label class="mdl-textfield__label" for="message">Message...</label>
              </div>
              <button id="submit" disabled type="submit" class="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect">
              Send
              </button>
            </form>
            <form id="image-form" action="#">
                <input id="mediaCapture" type="file" accept="image/*" capture="camera">
                <button id="submitImage" title="Add an image" class="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-color--amber-400 mdl-color-text--white">
                <i class="material-icons">image</i>
                </button>
            </form>
            </div>
            </div>
            <div id="must-signin-snackbar" class="mdl-js-snackbar mdl-snackbar">
            <div class="mdl-snackbar__text"></div>
            <button class="mdl-snackbar__action" type="button"></button>
            </div>
            </div>
            </div>
            </main>
            </div>
</div>`}
    
    let app = new Vue({
        el: '#app',
        data: {
            view: 'home',
            games: {},
            user: 'guest',
           
            
        },
        
        methods: {
            login(){
                let providerGoogle = new firebase.auth.GoogleAuthProvider();
                firebase.auth().signInWithPopup(providerGoogle)
                .then(function(result){
                    
                    firebase.database().ref('/').once('value')
                    .then(function(snapshot){
                        app.games = snapshot.val()
                        app.user = result.user  
                    })
                })
                .catch(function(error){
                    console.log(error)
                })
            },
            logout(){
                firebase.auth().signOut()
                .then(function(){
                    app.user = 'guest'
                    app.games = {}
                })
            },
            logInEmail(){
                let email= document.querySelector('#inputEmail').value
                let pass= document.querySelector('#inputPassword').value
                
                firebase.auth().signInWithEmailAndPassword(email, pass).then(function(result){
                   
                              
                    app.games = snapshot.val()
                        app.user = result.user
                    
                }).catch(function(error){
                    let errorMsg= error.message;
                    console.log(errorMsg);
                   
                })
                
            },
            
            },
            components: {
                home: {
                    props: ['user'],
                data: function(){
                    return {
                        date: new Date()
                    }
                },
                methods: {
                    nextMatches(month, day){
                        let nextMatches = []
                        for(let i = 0; i < 7; i++){
                            let temp = 0
                            if(day + i > 31){
                                day = 0
                                month++
                                temp = i - 1
                            }
                            if(app.games[month][day + i - temp]){
                                for(match in app.games[month][day + i]){
                                    nextMatches.push(app.games[month][day + i][match])
                                }
                            }
                        }
                        return nextMatches
                    }
                },

                template: templates.home
            },
            
            schedule: {
                props: ['user'],
                data: function(){
                    return{
                        showInfo: false,
                        match: {}
                    }
                },
                methods:{
                    matchInfo(match){
                        this.showInfo = true
                        this.match = match
                    }
                },
                computed:{
                    matches(){
                         
                        let matches = []
                        for(month in app.games){
                            for(date in app.games[month]){
                                for(match in app.games[month][date]){
                                    matches.push(app.games[month][date][match])
                                }
                            }
                        }
                        return matches
                    }
                },
                template: templates.schedule,

                components: {
                    'match-info': {
                        props: ['user','match'],
                        data:function(){
                            return {
                                comments: []
                            }
                        },
                        created(){
                            this.getComments(this.match.id)
                        },
                        methods: {
                        getComments(matchId){
                            let self = this

                            firebase.database().ref(`forum/${matchId}`)
                            .on('child_added', function(snapshot){
                                self.comments.push(snapshot.val())
                                
                            })
                            },
                            comment(matchId){
                                let input = document.getElementById('comment')
                                let newKey = firebase.database().ref(`forum/${matchId}`).push().key
                                let update = {}
                                update[`forum/${matchId}/${newKey}`] = {
                                    uid: this.user.uid,
                                    username: this.user.displayName,
                                    email: this.user.email,
                                    post: input.value,
                                    match: this.match.id
                                }
                                firebase.database().ref().update(update)
                                input.value = ""
                                
                            }
                        },
                        template: templates.matchIhnfo
                    }
                }
            },
            /*about: {
                props: ['guest'],
                template: templates.about
            },*/
            /*forum: {
                props: ['user'],
                template: templates.forum
            },*/
            contact: {
                props: ['user'],
                template: templates.contact
            }
            }
        })

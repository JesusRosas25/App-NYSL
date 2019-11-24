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
                        <div class="carousel-item active" style="background-image: url('https://source.unsplash.com/RCAhiGJsUUE/1920x1080')">
                          <div class="carousel-caption d-none d-md-block">
                            <h3 class="display-4">First Slide</h3>
                            <p class="lead">This is a description for the first slide.</p>
                          </div>
                        </div>
                        <!-- Slide Two - Set the background image for this slide in the line below -->
                        <div class="carousel-item" style="background-image: url('https://source.unsplash.com/wfh8dDlNFOk/1920x1080')">
                          <div class="carousel-caption d-none d-md-block">
                            <h3 class="display-4">Second Slide</h3>
                            <p class="lead">This is a description for the second slide.</p>
                          </div>
                        </div>
                        <!-- Slide Three - Set the background image for this slide in the line below -->
                        <div class="carousel-item" style="background-image: url('https://source.unsplash.com/O7fzqFEfLlo/1920x1080')">
                          <div class="carousel-caption d-none d-md-block">
                            <h3 class="display-4">Third Slide</h3>
                            <p class="lead">This is a description for the third slide.</p>
                          </div>
                        </div>
                      </div>
                      <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span class="sr-only">Previous</span>
                          </a>
                      <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                            <span class="carousel-control-next-icon" aria-hidden="true"></span>
                            <span class="sr-only">Next</span>
                          </a>
                    </div>
                  </header>
                  
                  <!-- Page Content -->
                  <section class="py-5">
                    <div class="container">
                      <h1 class="font-weight-light">Half Page Image Slider</h1>
                      <p class="lead">The background images for the slider are set directly in the HTML using inline CSS. The images in this snippet are from <a href="https://unsplash.com">Unsplash</a>!</p>
                    </div>
                  </section>
        <div class="card-deck mb-5">
        <div class="card bg-white rounded shadow">
        <img class="card-img-top" src="images/Soccer for kids.jpg" alt="Card image cap">
        <div class="card-body">
        <h5 class="card-title">August 14</h5>
        <p class="card-text">NYSL Webapp presentation</p>
        <p class="card-text">
        </p>
        </div>
        </div>
        <div class="card bg-white rounded shadow">
        <img class="card-img-top" src="images/White and Black Soccer Ball on Side of Green Grass….jpg" alt="Card image cap">
        <div class="card-body">
        <h5 class="card-title">August 16</h5>
        <p class="card-text">Season Kick-off: Meet the Teams</p>
        </div>
        </div>
        <div class="card bg-white rounded shadow">
        <img class="card-img-top" src="images/genMid.09400371_1.jpg" alt="Card image cap">
        <div class="card-body">
        <h5 class="card-title">September 1</h5>
        <p class="card-text">First Game of the Season (Check Game Schedule for details)</p>
        </div>
        </div>
        </div>
        </div>`,
        
    schedule:`<div id="schedule">
        <template v-if="showInfo">
        <button @click="showInfo = false">Back</button>
        <chat :match="match" :user="user"></chat>
        </template>
        <template v-else>
        <ul>
        <li v-for="match in matches">
        <span>{{match.date}}</span> <span>{{match.team1}} vs {{match.team2}}</span>
        <button class="btn" @click="matchInfo(match)">+</button>
        </li>
        </ul>
        </template>
            
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
            view: 'contact',
            schedule: {},
            user: 'guest',
            chat: {},
            
        },
        
        methods: {
            login(){
                let provider = new firebase.auth.GoogleAuthProvider();
                firebase.auth().signInWithPopup(provider)
                .then(function(result){
                    
                    firebase.database().ref('schedule/').once('value')
                    .then(function(snapshot){
                        app.schedule = snapshot.val()
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
                    app.schedule = {}
                })
            }
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
                            if(app.schedule[month][day + i - temp]){
                                for(match in app.schedule[month][day + i]){
                                    nextMatches.push(app.schedule[month][day + i][match])
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
                        for(month in app.schedule){
                            for(date in app.schedule[month]){
                                for(match in app.schedule[month][date]){
                                    matches.push(app.schedule[month][date][match])
                                }
                            }
                        }
                        return matches
                    }
                },
                template: templates.schedule,

                components: {
                    'chat': {
                        props: ['user','match'],
                        data:function(){
                            return {
                                comments: {}
                            }
                        },
                        created(){
                            this.getComments(this.match.id)
                        },
                        methods: {
                            async getComments(matchId){
                                let comments
                                await firebase.database().ref(`chat/${matchId}`)
                                .once('value')
                                .then(function(snapshot){
                                    comments = snapshot.val()
                                })
                                this.comments = comments
                            },
                            async comment(matchId){
                                let input = document.getElementById('comment')
                                let newKey = firebase.database().ref(`chat/${matchId}/`).push().key
                                let update = {}
                                update[`chat/${matchId}/${newKey}`] = {
                                    uid: this.user.uid,
                                    username: this.user.displayName,
                                    email: this.user.email,
                                    post: input.value,
                                    match: this.match.id
                                }
                                await firebase.database().ref().update(update)
                                input.value = ""
                                this.getComments(this.match.id)
                            }
                        },
                        template: templates.chat
                    }
                }
            },
            about: {
                props: ['guest'],
                template: templates.about
            },
            forum: {
                props: ['user'],
                template: templates.forum
            },
            contact: {
                props: ['user'],
                template: templates.contact
            }
            }
        })

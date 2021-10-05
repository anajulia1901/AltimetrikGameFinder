const apiKey= `a6b177c4bf7e429c91a64c0f6d30398c`;
const url=`https://api.rawg.io/api/games`;

var results = document.getElementById("results");

fetch("https://api.rawg.io/api/games?key=a6b177c4bf7e429c91a64c0f6d30398c")
    .then(response => response.json())
    .then((data) => {
        console.log(data)
        cardMultiplication(data)});

function cardMultiplication(cardInformation){
    for(let i= 0 ; i<20 ; i++){  
        function showGenres(gamesInfo){
            let genre = gamesInfo.genres;
            let genreActual = "";
            for (let j=0; j<genre.length; j++) {
                genreActual += genre[j].name;
                if(j != genre.length-1 ){
                    genreActual += ',';
                }
            }
            return genreActual;
        }
        let allInfo = cardInformation.results[i]
        let card = 
    `<div class= "videogames">
        <div class="videogameCards">
            <div class="one" onclick=functionModal(${allInfo.id})>
                <div class="photo1">
                    <img class="photo1" id="photo" src= '${allInfo.background_image}' >
                    <div class="bottom-info-card">
                        <div class="titlePlataformContainer">
                            <p class="gameTitle" >${allInfo.name}</p>
                            <div class="plataformsIcons"><svg width="60" height="13" viewBox="0 0 60 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M60 5.95833H52.9583V0.998704L60 0V5.95833ZM52.4167 1.08333V5.95833H47V1.80612L52.4167 1.08333ZM52.4167 6.5H47V11.1145L52.4167 11.9167V6.5ZM52.9583 11.912V6.5H60V13L52.9583 11.912Z" fill="white"/>
                                <path d="M6.5 0.149439L6.5 12.0297L9.07955 12.882L9.07955 2.9205C9.07955 2.4511 9.28024 2.13944 9.60212 2.24662C10.023 2.36835 10.1048 2.80075 10.1048 3.26493L10.1048 7.24338C11.7104 8.05381 12.9745 7.24296 12.9745 5.10468C12.9745 2.91966 12.2334 1.94626 10.0527 1.16365C9.19249 0.864976 7.59836 0.360979 6.5 0.149439Z" fill="white"/>
                                <path d="M9.75 11.1429L13.6492 9.45771C14.0903 9.25915 14.1578 8.9894 13.8008 8.84764C13.4382 8.70325 12.791 8.74457 12.3452 8.93895L9.75 10.0506V8.27688L9.89861 8.21729C9.89861 8.21729 10.6498 7.89415 11.7064 7.75502C12.7609 7.61465 14.0541 7.77328 15.0706 8.2385C16.2156 8.68019 16.3439 9.32446 16.0542 9.77281C15.7603 10.2165 15.0478 10.5375 15.0478 10.5375L9.75 12.8484" fill="white"/>
                                <path d="M1.18907 11.3388C-0.0278308 10.9682 -0.230758 10.185 0.324385 9.7326C0.836458 9.31949 1.70854 9.0085 1.70854 9.0085L5.31353 7.6032L5.31353 9.20264L2.72172 10.2184C2.26263 10.3979 2.1938 10.6505 2.56358 10.7827C2.93997 10.9202 3.60794 10.8832 4.0673 10.6979L5.31353 10.2067V11.6345C5.23321 11.6492 5.1439 11.6641 5.06238 11.6793C3.81985 11.9048 2.49607 11.8122 1.18907 11.3388Z" fill="white"/>
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M16.1271 12.7978C16.0247 12.8989 15.8903 12.9561 15.7455 12.9561C15.6008 12.9561 15.462 12.8989 15.3594 12.7978C15.2582 12.6948 15.2021 12.5603 15.2021 12.4154C15.2021 12.1153 15.4451 11.8727 15.7455 11.8727C15.8903 11.8727 16.0247 11.928 16.1271 12.0314C16.2284 12.1324 16.2855 12.2692 16.2855 12.4154C16.2855 12.5603 16.2284 12.6948 16.1271 12.7978ZM15.2934 12.4154C15.2934 12.292 15.3396 12.1788 15.4239 12.095C15.5104 12.0092 15.6257 11.963 15.7455 11.963C15.8655 11.963 15.9779 12.0092 16.0622 12.095C16.1473 12.1788 16.1932 12.292 16.1932 12.4154C16.1932 12.6627 15.9922 12.8634 15.7455 12.8634C15.6257 12.8634 15.5104 12.8177 15.4239 12.7331C15.3396 12.6477 15.2934 12.5358 15.2934 12.4154ZM15.9927 12.6405C15.9976 12.6544 16.0034 12.6627 16.0118 12.6651L16.0193 12.6694V12.7038H15.9018L15.8996 12.6969L15.8916 12.6761C15.8903 12.6651 15.8887 12.6508 15.8871 12.6267L15.8819 12.5325C15.8805 12.4991 15.8696 12.4796 15.8494 12.4667C15.8345 12.4617 15.8141 12.4579 15.7837 12.4579H15.6205V12.7038H15.5134V12.0997H15.7941C15.8399 12.0997 15.8785 12.1078 15.908 12.1204C15.9672 12.1482 15.9976 12.1984 15.9976 12.269C15.9976 12.3037 15.9889 12.3362 15.9741 12.3601C15.9612 12.377 15.946 12.3924 15.9295 12.4075L15.9339 12.4106C15.9451 12.4185 15.9563 12.4263 15.9628 12.4378C15.9778 12.4543 15.9846 12.482 15.9858 12.5177L15.9885 12.5946C15.9889 12.6143 15.9905 12.6296 15.9927 12.6405ZM15.8661 12.3435C15.8835 12.3323 15.8916 12.31 15.8916 12.276C15.8916 12.2401 15.8792 12.2162 15.8549 12.2042C15.8399 12.1984 15.8214 12.1942 15.7964 12.1942H15.6205V12.3639H15.7867C15.8198 12.3639 15.846 12.3571 15.8661 12.3435Z" fill="white"/>
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M32.5 0C33.7536 0 34.7905 0.40056 35.7345 1.07423C35.75 1.07423 35.75 1.09244 35.75 1.11064C35.75 1.12885 35.7345 1.12885 35.719 1.12885C34.5119 0.819328 32.6857 2.03922 32.5155 2.16667H32.5H32.4845C32.3143 2.03922 30.4881 0.819328 29.281 1.12885C29.2655 1.12885 29.25 1.12885 29.25 1.11064C29.25 1.09244 29.25 1.07423 29.2655 1.07423C30.2095 0.40056 31.2464 0 32.5 0ZM36.6537 11.4392C37.6287 10.4302 34.405 6.86712 32.5023 5.41667C32.5023 5.41667 32.4866 5.41667 32.4866 5.43243C30.5996 6.86712 27.3602 10.4302 28.3509 11.4392C29.4516 12.4167 30.9141 13 32.5023 13C34.0905 13 35.5372 12.4167 36.6537 11.4392ZM27.7808 2.19751C27.7734 2.19751 27.7697 2.20158 27.766 2.20566C27.7623 2.20973 27.7586 2.2138 27.7511 2.2138C26.6678 3.40327 26 5.04896 26 6.8576C26 8.34035 26.46 9.72534 27.2169 10.817C27.2169 10.8333 27.2317 10.8333 27.2466 10.8333C27.2614 10.8333 27.2614 10.817 27.2466 10.8007C26.7865 9.25282 29.1164 5.52149 30.3185 3.95726L30.3333 3.94097C30.3333 3.93257 30.3333 3.9285 30.3313 3.92653C30.3294 3.92467 30.3257 3.92467 30.3185 3.92467C28.4932 1.93681 27.8847 2.14863 27.7808 2.19751ZM34.6667 3.93424L34.6815 3.91793C36.5068 1.94443 37.1153 2.15646 37.2043 2.18908C37.2105 2.18908 37.2141 2.18908 37.2173 2.19025C37.2217 2.1919 37.2253 2.19586 37.234 2.20539C38.3322 3.39602 39 5.04332 39 6.85372C39 8.33792 38.54 9.72426 37.7831 10.817C37.7831 10.8333 37.7683 10.8333 37.7534 10.8333V10.8007C38.1986 9.25127 35.8836 5.5163 34.6815 3.95055C34.6667 3.95055 34.6667 3.93424 34.6667 3.93424Z" fill="white"/>
                                </svg>
                            </div> 
                         </div>
                        <div class="date-gif">
                        <div class="infoContainer">
                            <div class="textContainer">
                                <p class="release text-grid">Release date</p>
                                <p class="date text-grid">${allInfo.released}</p>
                            </div>
                            <div class="line"></div>
                                <div class="textContainer">
                                    <p class="text-grid">Genres</p>
                                    <p class="genre text-grid">${showGenres(allInfo)}</p>
                                </div>
                            <div class="line"></div>
                            </div>
                            <div class="number-gif">
                                <p class="gameNumber">#${i+1}</p>
                                <button class='card-interact-button' id="main-card">
                                <div class="gift"><span class="plus">+</span><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M3 2.5C3 1.11929 4.11929 0 5.5 0C6.88071 0 8 1.11929 8 2.5C8 1.11929 9.11929 0 10.5 0C11.8807 0 13 1.11929 13 2.5V2.506C13 2.576 13 2.776 12.962 3H15C15.5523 3 16 3.44772 16 4V5C16 5.55228 15.5523 6 15 6H1C0.447715 6 0 5.55228 0 5V4C0 3.44772 0.447715 3 1 3H3.038C3.01159 2.83668 2.99888 2.67144 3 2.506V2.5ZM4.068 3H7V2.5C7 1.9641 6.7141 1.46891 6.25 1.20096C5.7859 0.933013 5.2141 0.933013 4.75 1.20096C4.2859 1.46891 4 1.9641 4 2.5C4 2.585 4.002 2.774 4.045 2.93C4.05101 2.95385 4.05869 2.97724 4.068 3ZM11.932 3H9V2.5C9 1.67157 9.67157 1 10.5 1C11.3284 1 12 1.67157 12 2.5C12 2.585 11.998 2.774 11.955 2.93C11.9489 2.95381 11.9412 2.9772 11.932 3ZM15 7V14.5C15 15.3284 14.3284 16 13.5 16H9V7H15ZM1 14.5C1 15.3284 1.67157 16 2.5 16H7V7H1V14.5Z" fill="white"/>
                                    </svg>
                                </div>
                                    </button>
                            </div> 
                        </div>
                    </div>
                </div>
            </div>
        </div>
     </div> `
    document.querySelector(".videogameCards").innerHTML+=card;
    }
}

///ONCLICKModal
async function functionModal(id){
    console.log(id)
    let modal = document.querySelector(`.modalSelected`)
    modal.style.display="flex"
    // modal.classList.toggle(`modalSelectedOK`)
    let allInfoGamesModal = document.querySelectorAll(`.one`);

    let modalReleaseDates;
    let modalGenres;
    let modalImage;
    let modalTitle;
    for (let j=0; j<allInfoGamesModal.length; j++){
        if (allInfoGamesModal[j].getAttribute(`onclick`) === `functionModal(${id})`){
            console.log (allInfoGamesModal)
            
            modalImage = allInfoGamesModal[j].querySelector("#photo").currentSrc;
        
            modalTitle = allInfoGamesModal[j].querySelector(".gameTitle").textContent;

            modalReleaseDates = allInfoGamesModal[j].querySelector(".date").textContent;

            modalGenres = allInfoGamesModal[j].querySelector(".genre").textContent;
        }
    }
    // console.log(modalImage);
    // console.log(modalTitle);
    // console.log(modalReleaseDates);
    document.querySelector(".modalImg").setAttribute("src",`${modalImage}`);
    document.querySelector(".modal-title").textContent = modalTitle;
    document.querySelector("#modal-date").textContent = modalReleaseDates;
    document.querySelector("#modal-genre").textContent = modalGenres;
    
    const newInfoApi = await getInformationApi(id)
    document.querySelector(".modal-description-text").innerHTML = newInfoApi.description;
    // console.log(newInfoApi.description)
}
async function getInformationApi(id){
    const fetchData = await fetch(`https://api.rawg.io/api/games/${id}?key=a6b177c4bf7e429c91a64c0f6d30398c`)
    const modalDescription = fetchData.json() 
    return modalDescription;
}

function functionModalOff(){
    console.log("hola")
    let modal = document.querySelector(`.modalSelected`)
    // modal.classList.toggle(`modalSelected`)
    modal.style.display="none"
}
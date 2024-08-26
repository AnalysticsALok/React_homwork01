
function Image(){
    return(
        <div className="imgcontainer">
        <img src="./profilephoto.avif"/>
        </div>
    )
}

function Infos(){
    return(
    <div className="Infoscontainer">
    <h2>Julienne Moore</h2>
    <p>julianne.moore@company.com</p>
    </div>
    )
}


function Details(){
    return(
    <div className="detailscontainer">
        <div>
            <h1>25</h1>
            <h3>Posts</h3>
        </div>
        <div>
            <h1>350</h1>
            <h3>Following</h3>
        </div>
        <div>    
            <h1>1.5k</h1>
            <h3>Followers</h3>
        </div>
    </div>
    )
}  
function App(){
    return(
        <div className="ctn">
        <Image/>
        <Infos/>
        <Details/>
        </div>
    )
}

ReactDOM.createRoot(document.querySelector('#root')).render(<App/>)
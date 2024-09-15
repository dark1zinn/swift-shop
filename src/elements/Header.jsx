import './Header.css'

function Header() {
    return(
        <header>
            <div id="title">
                <h1>Swift Shop</h1>
            </div>
            <div id="categories">
                <p id="categ-todos">todos</p>
                <p id="categ-dryfit">dry-fit</p>
                <p id="categ-moletom">moletom</p>
            </div>
        </header>
    )
}

export default Header
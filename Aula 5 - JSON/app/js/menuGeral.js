window.onload = function () {

    let menuGeral = `<nav class="navbar navbar-expand-md bg-dark navbar-dark">
                        <a class="navbar-brand" href="../../index.html">
                            <img src="../img/logo.png" alt="Logo" width="70px" height="70px">
                        </a>
                        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse" id="collapsibleNavbar">
                            <ul class="navbar-nav">
                                <li class="nav-item">
                                    <a class="nav-link" href="poesias.html">Poesias</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="frases.html">Frases</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="letras.html">Letras</a>
                                </li>
                            </ul>
                        </div>
                    </nav>`;

    document.getElementById("menuGeral").innerHTML = menuGeral;
}
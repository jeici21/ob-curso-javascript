//$(selector).acción()
//$("h1").hide() - Escondiendo al elemento especificado
$(() => {//lo de adentro se ejecuta solo después de que se cargue la página
    //Selectores:
    //id="el-1 => "#el-1"
    //class="el-1" => ".el-1"
    //$("#el-1").hide()
    $(".hide-btn").click(() => {
        //$("h1").hide()
        $("h1").fadeOut()//desapareciendo lentamente
    })
    $(".show-btn").click(() => {
        //$("h1").show()
        $("h1").fadeIn()//apareciendo lentamente
    })
    $("li").dblclick(() => {
        $("h1").css({ color: "red" })//css en js
    })
    $(".new-element").click(() => {
        //$("ul").append("<li>New Element</li>")elemento nuevo al final
        $("ul").prepend("<li>New Element</li>")//elemento nuevo al inicio
    })
    $("li").mouseenter(elem => {//al hacer hover
        elem.target.style.color = "blue"
    })
    $("li").mouseleave(elem => {
        elem.target.style.color = "black"
    })
})
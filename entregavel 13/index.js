let filtroFiat = {
    nome: " filtro oleo",
    ref: " psl55",
    marca: " tecfil",
    aplic:" Aplicação:Uno Mille/way, Palio, Siena"
}
let filtroGm = {
    nome: " filtro oleo",
    ref: " wo130",
    marca: " wega",
    aplic:" Aplicação:Celta, Classic, Prisma, onix"
} 

var form = document.getElementById('formulario');
var campo = document.getElementById('campo');

form.addEventListener('submit', function(e) {  
    const value = campo.value;
e.preventDefault()

   switch (value) {
       case "psl55":
        Swal.fire({
            title: 'psl55',
            text: 'Filtro oleo do Uno mille, palio, siena e todos os carros motor fire',
            imageUrl: 'https://www.google.com/imgres?imgurl=https%3A%2F%2Fimages-americanas.b2w.io%2Fprodutos%2F26879464%2Fimagens%2Ffiltro-de-oleo-psl55-tecfil%2F26879463_1_large.jpg&tbnid=s5uR0bOieSnpwM&vet=12ahUKEwjI1sK9gpeAAxVZALkGHVmWBv8Q94IIKAF6BQgBEMcB..i&imgrefurl=https%3A%2F%2Fwww.americanas.com.br%2Fproduto%2F26879464%2Ffiltro-de-oleo-psl55-tecfil&docid=1poHyUzgnCgAmM&w=500&h=500&q=psl55&ved=2ahUKEwjI1sK9gpeAAxVZALkGHVmWBv8Q94IIKAF6BQgBEMcB',
            imageWidth: 400,
            imageHeight: 200,
            imageAlt: 'Custom image',
        });
            break;
        case "wo130":
    Swal.fire({
        title: 'WO130',
        text: 'Filto oleo do celta, prisma, classic carros com motor vhc',
        imageUrl: 'https://www.google.com/imgres?imgurl=https%3A%2F%2Fpecasnovaskadena.com.br%2Fwp-content%2Fuploads%2F2021%2F10%2Fwo-130wegafiltrolubrificantegmagi-04483-1.jpg&tbnid=WWPvm37ah65OjM&vet=12ahUKEwji_t7Og5eAAxWxNTUKHZm0BSIQMygBegUIARCrAQ..i&imgrefurl=https%3A%2F%2Fpecasnovaskadena.com.br%2Fproduto%2F4483-filtro-de-oleo-wo130%2F&docid=1ovE08vlsaxpEM&w=1016&h=629&q=wo130&ved=2ahUKEwji_t7Og5eAAxWxNTUKHZm0BSIQMygBegUIARCrAQ',
        imageWidth: 400,
        imageHeight: 200,
        imageAlt: 'Custom image',
});
            break;
       default:
        Swal.fire({
            icon: 'Erro',
            title: 'Produto não encontrado',
            text: 'Este produto existe entre em contato com nosso pessoal',
            footer: '<a href="">suporte: 4002-8922</a>'
          })
           break;
   }
   
}

);
 


function result(){
    let nhap = document.getElementById("import").value;
    let vnd = document.getElementById("vietnam").value;
    let dola = document.getElementById("usd").value;
    let doi = nhap/23000;
    if (vnd === "dong" && dola === "do"){
         document.getElementById("bang").value = doi;
    }
}








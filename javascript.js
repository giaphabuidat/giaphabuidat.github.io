//JavaScript
var options = getOptions();

var chart = new FamilyTree(document.getElementById("tree"), {
    mouseScrool: FamilyTree.none,
    scaleInitial: options.scaleInitial,
    siblingSeparation: 120,
    template: 'john',
    roots: [1],
    nodeBinding: {
        field_0: "name",
        field_1: "title",
        img_0: "img",
    }
});


chart.load([
    // ===== TỔ TIÊN =====
    { id: 1, name: "TỔ ÔNG", title: "BÙI ĐẠT LIÊN (18....-19....)", gender: "male" },
    { id: 2, name: "TỔ BÀ",  title: "BÙI THỊ LIÊN (18.....-18....)", gender: "female" },

    // ===== ĐỜI CON CỦA TỔ ÔNG – TỔ BÀ =====
    // Ô 1: BÙI ĐẠT BỒI – BÙI THỊ BỒI
    { id: 3, pids: [4], fid: 1, mid: 2, name: "BÙI ĐẠT BỒI",  title: "(1900-1900)", gender: "male" },
    { id: 4, pids: [3],            name: "BÙI THỊ BỒI",      title: "",          gender: "female" },

    // Ô 2: BÙI ĐẠT NHUẬN – ĐẶNG THỊ NHUẬN – BÙI THỊ SẤC
    { id: 5, pids: [6,7], fid: 1, mid: 2, name: "BÙI ĐẠT NHUẬN", title: "(1800-1800)", gender: "male" },
    { id: 6, pids: [5],            name: "ĐẶNG THỊ NHUẬN",     title: "(1800-1800)",  gender: "female" },
    { id: 7, pids: [5],            name: "BÙI THỊ SẤC",        title: "(1800-1800)",  gender: "female" },

    // Ô 3: BÙI ĐẠT LIÊN (con) – BÙI THỊ LIÊN (vợ)
    { id: 8, pids: [9], fid: 1, mid: 2, name: "BÙI ĐẠT LIÊN", title: "",  gender: "male" },
    { id: 9, pids: [8],            name: "BÙI THỊ LIÊN",  title: "",      gender: "female" },

  
]);


function getOptions(){
    const searchParams = new URLSearchParams(window.location.search);
    var fit = searchParams.get('fit');
    var enableSearch = true;
    var scaleInitial = 1;
    if (fit == 'yes'){
        enableSearch = false;
        scaleInitial = FamilyTree.match.boundary;
    }
    return {enableSearch, scaleInitial};
}

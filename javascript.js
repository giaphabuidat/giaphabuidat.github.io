//JavaScript
var options = getOptions();

var chart = new FamilyTree(document.getElementById("tree"), {
    mouseScrool: FamilyTree.none,
    scaleInitial: options.scaleInitial,
    siblingSeparation: 120,
    template: 'john',
    nodeBinding: {
        field_0: "name",
        field_1: "title",
        img_0: "img",
    }
});


chart.load([
    // ===== TỔ TIÊN =====
    { id: 1, name: "TỔ ÔNG", title: "BÙI ĐẠT LIÊN (18....-19....)", gender: "male" },
    { id: 1, name: "TỔ BÀ",  title: "BÙI THỊ LIÊN (18.....-18....)", gender: "female" },

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

    // ===== ĐỜI CHÁU =====
    // Con của BÙI ĐẠT BỒI – BÙI THỊ BỒI
    // Ô QUYỀN: BÙI ĐẠT QUYỀN – BÙI THỊ QUYỀN
    { id: 10, pids: [19], fid: 3, mid: 4, name: "BÙI ĐẠT QUYỀN", title: "", gender: "male" },
    { id: 19, pids: [10],            name: "BÙI THỊ QUYỀN",      title: "", gender: "female" },

    // Ô DIỆM: BÙI THỊ DIỆM – BÙI VĂN TƯ
    { id: 11, fid: 3, mid: 4, pids: [31], name: "BÙI THỊ DIỆM",  title: "", gender: "female" },
    { id: 31, pids: [11],                 name: "BÙI VĂN TƯ",    title: "", gender: "male" },

    // Ô TÙY: BÙI THỊ TÙY – BÙI VĂN LAI
    { id: 12, fid: 3, mid: 4, pids: [32], name: "BÙI THỊ TÙY",   title: "", gender: "female" },
    { id: 32, pids: [12],                 name: "BÙI VĂN LAI",   title: "", gender: "male" },

    // Con của BÙI ĐẠT NHUẬN – ĐẶNG THỊ NHUẬN
    // Ô DIÊN: BÙI THỊ DIÊN – NGUYỄN VĂN PHƠNG
    { id: 13, fid: 5, mid: 6, pids: [33], name: "BÙI THỊ DIÊN",  title: "",            gender: "female" },
    { id: 33, pids: [13],                 name: "NGUYỄN VĂN PHƠNG", title: "",         gender: "male" },

    // Ô SẤC: BÙI ĐẠT SẤC – TRẦN THỊ XUÂN
    { id: 14, pids: [20], fid: 5, mid: 6, name: "BÙI ĐẠT SẤC",   title: "(1898-1950)", gender: "male" },
    { id: 20, pids: [14],                 name: "TRẦN THỊ XUÂN",  title: "(1904-1994)", gender: "female" },

    // Con của BÙI ĐẠT NHUẬN – BÙI THỊ SẤC
    // Ô CỪ: BÙI THỊ CỪ – CHỒNG BÀ BÙI THỊ CỪ
    { id: 15, fid: 5, mid: 7, pids: [35], name: "BÙI THỊ CỪ",   title: "", gender: "female" },
    { id: 35, pids: [15],                 name: "CHỒNG BÀ BÙI THỊ CỪ", title: "", gender: "male" },

    // Ô LỊNH: BÙI ĐẠT LỊNH – NGUYỄN THỊ TIU
    { id: 16, pids: [21], fid: 5, mid: 7, name: "BÙI ĐẠT LỊNH", title: "(1884-1900)", gender: "male" },
    { id: 21, pids: [16],                 name: "NGUYỄN THỊ TIU", title: "",          gender: "female" },

    // Con của BÙI ĐẠT LIÊN (con) – BÙI THỊ LIÊN
    { id: 17, fid: 8, mid: 9, name: "BÙI ĐẠT TIẾN", title: "(1884-1900)", gender: "male" },
    { id: 18, fid: 8, mid: 9, pids: [34], name: "BÙI THỊ TÍN",  title: "(1884-1900)", gender: "female" },
    { id: 34, pids: [18],                 name: "BÙI VĂN TÍN",   title: "",          gender: "male" },

    // ===== ĐỜI CHẮT =====
    // Con của BÙI ĐẠT QUYỀN – BÙI THỊ QUYỀN
    // Ô HINH: BÙI ĐẠT HINH – BÙI THỊ CHÍN
    { id: 22, pids: [36], fid: 10, mid: 19, name: "BÙI ĐẠT HINH", title: "", gender: "male" },
    { id: 36, pids: [22],                 name: "BÙI THỊ CHÍN",   title: "", gender: "female" },

    { id: 23, fid: 10, mid: 19, name: "BÙI THỊ EM",   title: "", gender: "female" },

    // Con của BÙI ĐẠT SẤC – TRẦN THỊ XUÂN
    // NHÂN, NGHĨA, LỢI, MINH LỘC
    { id: 24, fid: 14, mid: 20, pids: [37], name: "BÙI THỊ NHÂN",      title: "", gender: "female" },
    { id: 37, pids: [24],                  name: "NGUYỄN ĐÌNH NGÂN",   title: "", gender: "male" },

    { id: 25, fid: 14, mid: 20, pids: [38], name: "BÙI ĐẠT NGHĨA",     title: "", gender: "male" },
    { id: 38, pids: [25],                  name: "NGUYỄN THỊ SÁU",     title: "", gender: "female" },

    { id: 26, fid: 14, mid: 20, pids: [39], name: "BÙI THỊ LỢI",       title: "", gender: "female" },
    { id: 39, pids: [26],                  name: "BÙI XUÂN KỲ",        title: "", gender: "male" },

    { id: 27, fid: 14, mid: 20, pids: [40], name: "BÙI THỊ MINH LỘC",  title: "", gender: "female" },
    { id: 40, pids: [27],                  name: "ĐINH ĐĂNG TRINH",    title: "", gender: "male" },

    // Con của BÙI ĐẠT LỊNH – NGUYỄN THỊ TIU
    // Ô QUỲ: BÙI ĐẠT QUỲ – ĐÀO THỊ NHUẦN
    { id: 28, pids: [41], fid: 16, mid: 21, name: "BÙI ĐẠT QUỲ",   title: "(1947-1981)", gender: "male" },
    { id: 41, pids: [28],                 name: "ĐÀO THỊ NHUẦN",   title: "",           gender: "female" },

    { id: 29, fid: 16, mid: 21, name: "BÙI THỊ QUÝ",   title: "(1949)",      gender: "female" },

    // Ô NHUNG: BÙI THỊ NHUNG – NGUYỄN TRƯỜNG DUNG
    { id: 30, fid: 16, mid: 21, pids: [42], name: "BÙI THỊ NHUNG", title: "(1958)",      gender: "female" },
    { id: 42, pids: [30],                  name: "NGUYỄN TRƯỜNG DUNG", title: "",       gender: "male" },

    // ===== ĐỜI SAU NỮA =====
    // Con của BÙI ĐẠT HINH – BÙI THỊ CHÍN
    { id: 43, fid: 22, mid: 36, pids: [53], name: "BÙI ĐẠT SOA",  title: "(1945-1968)", gender: "male" },
    { id: 53, pids: [43],                  name: "BÙI THỊ QUÝ",   title: "",           gender: "female" },
    { id: 44, fid: 22, mid: 36, pids: [54], name: "BÙI ĐẠT TRÂM", title: "(1947)",      gender: "male" },
    { id: 54, pids: [44],                  name: "BÙI THỊ XIÊM",  title: "",           gender: "female" },
    { id: 45, fid: 22, mid: 36, name: "BÙI ĐẠT CẦM",  title: "(1950-1972)", gender: "male" },
    { id: 46, fid: 22, mid: 36, pids: [55], name: "BÙI ĐẠT TÚ",   title: "(1952-19...)",gender: "male" },
    { id: 55, pids: [46],                  name: "NGUYỄN THỊ LAN", title: "",          gender: "female" },

    // Con của BÙI ĐẠT NGHĨA – NGUYỄN THỊ SÁU
    { id: 47, fid: 25, mid: 38, name: "BÙI THỊ HẢO",   title: "(1962)", gender: "female" },
    { id: 48, fid: 25, mid: 38, pids: [56], name: "BÙI ĐẠT THẢO",  title: "(1964)", gender: "male" },
    { id: 56, pids: [48],                  name: "NGUYỄN THỊ HIỀN", title: "",       gender: "female" },
    { id: 49, fid: 25, mid: 38, pids: [57], name: "BÙI ĐẠT NGUYÊN",title: "(1967)", gender: "male" },
    { id: 57, pids: [49],                  name: "LÊ THỊ NHUNG",  title: "",        gender: "female" },
    { id: 50, fid: 25, mid: 38, pids: [58,59,60], name: "BÙI ĐẠT QUANG", title: "(1969)", gender: "male" },
    { id: 58, pids: [50],                  name: "TRẦN THỊ MAI",  title: "",        gender: "female" },
    { id: 59, pids: [50],                  name: "TRẦN THỊ THÙY", title: "",        gender: "female" },
    { id: 60, pids: [50],                  name: "BIỆN THỊ NGUYỆT", title: "",      gender: "female" },

    // Con của BÙI ĐẠT QUỲ – ĐÀO THỊ NHUẦN
    { id: 51, fid: 28, mid: 41, pids: [61], name: "BÙI ĐẠT HUY",   title: "(1972)",  gender: "male" },
    { id: 61, pids: [51],                  name: "NGUYỄN THỊ VINH", title: "",      gender: "female" },
    { id: 52, fid: 28, mid: 41, pids: [62], name: "BÙI ĐẠT HOÀNG", title: "(1976)",  gender: "male" },
    { id: 62, pids: [52],                  name: "NGUYỄN THỊ THƯƠNG", title: "",    gender: "female" },

    // Con của BÙI ĐẠT SOA – BÙI THỊ QUÝ
    { id: 63, fid: 43, mid: 53, pids: [86], name: "BÙI THỊ CHÂU", title: "(1964)", gender: "female" },
    { id: 86, pids: [63],                  name: "BÙI XUÂN HỢP",  title: "",       gender: "male" },
    { id: 64, fid: 43, mid: 53, pids: [87], name: "BÙI ĐẠT MINH", title: "(1967)", gender: "male" },
    { id: 87, pids: [64],                  name: "CẦM THANH THỦY", title: "",      gender: "female" },

    // Con của BÙI ĐẠT TRÂM – BÙI THỊ XIÊM
    { id: 65, fid: 44, mid: 54, pids: [88], name: "BÙI THỊ KIM OANH", title: "(1974)", gender: "female" },
    { id: 88, pids: [65],                  name: "ALECK STOJANOVIC",  title: "",     gender: "male" },
    { id: 66, fid: 44, mid: 54, pids: [89], name: "BÙI THỊ XUÂN AN",  title: "(1979)", gender: "female" },
    { id: 89, pids: [66],                  name: "NGUYỄN THỤY LƯU",   title: "",     gender: "male" },

    // Con của BÙI ĐẠT TÚ – NGUYỄN THỊ LAN
    { id: 67, fid: 46, mid: 55, pids: [90], name: "BÙI THỊ TUYẾT", title: "(1979)", gender: "female" },
    { id: 90, pids: [67],                  name: "NGUYỄN KHẮC HẢI", title: "",      gender: "male" },
    { id: 68, fid: 46, mid: 55, pids: [91], name: "BÙI THỊ NGUYỆT", title: "(1982)", gender: "female" },
    { id: 91, pids: [68],                  name: "NGUYỄN PHI CƯỜNG", title: "",     gender: "male" },
    { id: 69, fid: 46, mid: 55, pids: [92], name: "BÙI ĐẠT TUẤN",  title: "(1984)", gender: "male" },
    { id: 92, pids: [69],                  name: "HOÀNG THỊ VÂN ANH", title: "",    gender: "female" },
    { id: 70, fid: 46, mid: 55, name: "BÙI ĐẠT THOÁT", title: "(1984)", gender: "male" },

    // Con của BÙI ĐẠT THẢO – NGUYỄN THỊ HIỀN
    { id: 71, fid: 48, mid: 56, name: "BÙI ĐẠT TRUNG", title: "(1988-1988)", gender: "male" },
    { id: 72, fid: 48, mid: 56, pids: [93], name: "BÙI ĐẠT HIẾU",  title: "(1989)",       gender: "male" },
    { id: 93, pids: [72],                  name: "ĐINH THỊ NGỌC HÂN", title: "",        gender: "female" },
    { id: 73, fid: 48, mid: 56, pids: [94], name: "BÙI ĐẠT TÀI",   title: "(1991)",       gender: "male" },
    { id: 94, pids: [73],                  name: "ĐINH HÀ NỘI",    title: "",            gender: "female" },

    // Con của BÙI ĐẠT NGUYÊN – LÊ THỊ NHUNG
    { id: 74, fid: 49, mid: 57, pids: [95], name: "BÙI THỊ MỸ HẠNH", title: "(1992)", gender: "female" },
    { id: 95, pids: [74],                  name: "MAI TRỌNG THÀNH",  title: "",       gender: "male" },
    { id: 75, fid: 49, mid: 57, pids: [96], name: "BÙI THỊ BÌNH",    title: "(1994)", gender: "female" },
    { id: 96, pids: [75],                  name: "NGUYỄN QUANG VŨ",  title: "",       gender: "male" },
    { id: 76, fid: 49, mid: 57, name: "BÙI THỊ THÚY AN", title: "(2004)", gender: "female" },

    // Con của BÙI ĐẠT QUANG – TRẦN THỊ MAI
    { id: 77, fid: 50, mid: 58, pids: [97], name: "BÙI THỊ THANH HUYỀN", title: "(1993)", gender: "female" },
    { id: 97, pids: [77],                  name: "HỒ VĂN ĐÔNG",         title: "",      gender: "male" },
    { id: 78, fid: 50, mid: 58, name: "BÙI ĐẠT XYZ",          title: "",      gender: "male" },
    { id: 79, fid: 50, mid: 58, name: "BÙI THỊ THU TRANG",    title: "(2004)",gender: "female" },

    // Con của BÙI ĐẠT QUANG – TRẦN THỊ THÙY
    { id: 80, fid: 50, mid: 59, name: "BÙI ĐẠT ĐỨC",          title: "(2012)", gender: "male" },
    { id: 81, fid: 50, mid: 59, name: "BÙI THỊ PHƯƠNG TÂM",   title: "(2019)", gender: "female" },

    // Con của BÙI ĐẠT HUY – NGUYỄN THỊ VINH
    { id: 82, fid: 51, mid: 61, name: "BÙI THỊ HƯỜNG", title: "(1993)", gender: "female" },
    { id: 83, fid: 51, mid: 61, pids: [98], name: "BÙI ĐẠT HÙNG",  title: "(1996)", gender: "male" },
    { id: 98, pids: [83],                  name: "NGUYỄN THỊ QUẾ", title: "",       gender: "female" },

    // Con của BÙI ĐẠT HOÀNG – NGUYỄN THỊ THƯƠNG
    { id: 84, fid: 52, mid: 62, name: "BÙI ĐẠT QUỐC VIỆT",  title: "(2011)", gender: "male" },
    { id: 85, fid: 52, mid: 62, name: "BÙI ĐẠT QUỐC CƯỜNG", title: "(2015)", gender: "male" },

    // Con của BÙI ĐẠT MINH – CẦM THANH THỦY
    { id: 99, fid: 64, mid: 87, name: "BÙI THANH NGA", title: "(1990)", gender: "female" },
    { id: 100, fid: 64, mid: 87, name: "BÙI VIỆT ANH",  title: "(2000)", gender: "male" },

    // Con của BÙI ĐẠT TUẤN – HOÀNG THỊ VÂN ANH
    { id: 101, fid: 69, mid: 92, name: "BÙI HOÀNG UYÊN NHI", title: "(2013)", gender: "female" },
    { id: 102, fid: 69, mid: 92, name: "BÙI HOÀNG NHÃ THY",  title: "(2017)", gender: "female" },

    // Con của BÙI ĐẠT HIẾU – ĐINH THỊ NGỌC HÂN
    { id: 103, fid: 72, mid: 93, name: "BÙI NGỌC BẢO CHÂU", title: "(2020)", gender: "female" },

    // Con của BÙI ĐẠT TÀI – ĐINH HÀ NỘI
    { id: 104, fid: 73, mid: 94, name: "BÙI TUỆ NHI", title: "(2018)", gender: "female" },

    // Con của BÙI ĐẠT HÙNG – NGUYỄN THỊ QUẾ
    { id: 105, fid: 83, mid: 98, name: "BÙI TUỆ LÂM",      title: "(2022)", gender: "female" },
    { id: 106, fid: 83, mid: 98, name: "BÙI ĐẠT MINH ĐỨC", title: "(2024)", gender: "male" }
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
